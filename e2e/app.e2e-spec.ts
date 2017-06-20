import { PlgAppPage } from './app.po';

describe('plg-app App', () => {
  let page: PlgAppPage;

  beforeEach(() => {
    page = new PlgAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
