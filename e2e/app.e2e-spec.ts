import { ThagaiPage } from './app.po';

describe('thagai App', function() {
  let page: ThagaiPage;

  beforeEach(() => {
    page = new ThagaiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
