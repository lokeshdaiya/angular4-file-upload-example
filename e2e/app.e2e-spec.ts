import { NgtestappPage } from './app.po';

describe('ngtestapp App', () => {
  let page: NgtestappPage;

  beforeEach(() => {
    page = new NgtestappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
