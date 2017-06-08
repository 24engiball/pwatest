import { PwatestPage } from './app.po';

describe('pwatest App', () => {
  let page: PwatestPage;

  beforeEach(() => {
    page = new PwatestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
