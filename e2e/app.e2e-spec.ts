import { AngularfsPage } from './app.po';

describe('angularfs App', () => {
  let page: AngularfsPage;

  beforeEach(() => {
    page = new AngularfsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
