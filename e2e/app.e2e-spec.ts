import { RoadnetAppPage } from './app.po';

describe('roadnet-app App', () => {
  let page: RoadnetAppPage;

  beforeEach(() => {
    page = new RoadnetAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
