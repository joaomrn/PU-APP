import { PuAppPage } from './app.po';

describe('pu-app App', () => {
  let page: PuAppPage;

  beforeEach(() => {
    page = new PuAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to xyz!!'))
      .then(done, done.fail);
  });
});
