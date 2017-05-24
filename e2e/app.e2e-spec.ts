import { CtestPage } from './app.po';

describe('ctest App', () => {
  let page: CtestPage;

  beforeEach(() => {
    page = new CtestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
