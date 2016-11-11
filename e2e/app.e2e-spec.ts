import { Angular2AppLAB2Page } from './app.po';

describe('angular2-app-lab2 App', function() {
  let page: Angular2AppLAB2Page;

  beforeEach(() => {
    page = new Angular2AppLAB2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
