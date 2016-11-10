import { KendoUiAngular2Page } from './app.po';

describe('kendo-ui-angular-2 App', function() {
  let page: KendoUiAngular2Page;

  beforeEach(() => {
    page = new KendoUiAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
