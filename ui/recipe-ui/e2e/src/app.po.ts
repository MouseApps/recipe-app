import { browser, by, element } from 'protractor';

/**
 * app page
 */
export class AppPage {
  /**
   * navigates
   */
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  /**
   * gets the title
   */
  getTitleText() {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
}
