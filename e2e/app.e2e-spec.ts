import { LittlekitePage } from './app.po';

describe('littlekite App', function() {
  let page: LittlekitePage;

  beforeEach(() => {
    page = new LittlekitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
