import { NEWPLAYGROUNDPage } from './app.po';

describe('newplayground App', () => {
  let page: NEWPLAYGROUNDPage;

  beforeEach(() => {
    page = new NEWPLAYGROUNDPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
