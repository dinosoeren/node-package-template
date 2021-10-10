import App from './index';

describe('@SWalls/node-package-template', () => {
  describe('App', () => {
    it('returns placeholder name', () => {
      expect(App()).toBe('@SWalls/node-package-template');
    });
  });
});