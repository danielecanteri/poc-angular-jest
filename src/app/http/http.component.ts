import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  film: any;

  constructor(
    private http: Http
  ) { }

  ngOnInit() {
    this.http.get('http://swapi.co/api/films/1/').subscribe(
      (response) => { this.film = response.json() }
    );
  }

}
