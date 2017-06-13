import { WhitebeardsPage } from './app.po';

describe('whitebeards App', () => {
  let page: WhitebeardsPage;

  beforeEach(() => {
    page = new WhitebeardsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
