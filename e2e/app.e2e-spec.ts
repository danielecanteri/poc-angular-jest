import { PocAngularJestPage } from './app.po';

describe('poc-angular-jest App', () => {
  let page: PocAngularJestPage;

  beforeEach(() => {
    page = new PocAngularJestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
