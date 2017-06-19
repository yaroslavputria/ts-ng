import { MyAppCliPage } from './app.po';

describe('my-app-cli App', () => {
    let page: MyAppCliPage;

    beforeEach(() => {
        page = new MyAppCliPage();
    });

    it('should display welcome message', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Welcome to app!!');
    });
});
