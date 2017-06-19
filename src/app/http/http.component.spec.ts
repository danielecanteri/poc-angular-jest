import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpComponent } from './http.component';
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import { Subject } from "rxjs/Subject";

describe('HttpComponent', () => {
  let component: HttpComponent;
  let fixture: ComponentFixture<HttpComponent>;

  let response = new Subject();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HttpComponent],
      providers: [
        {
          provide: Http,
          useValue: {
            get: function () { return response; }
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show when still loading', () => {
    expect(fixture).toMatchSnapshot();
  });

  it('shows result', () => {
    response.next({
      json: function () {
        return {
          title: 'A new Hope'
        }
      }
    })
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });

});
