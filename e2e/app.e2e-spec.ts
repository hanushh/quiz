import { PostitPage } from './app.po';

describe('postit App', () => {
  let page: PostitPage;

  beforeEach(() => {
    page = new PostitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
