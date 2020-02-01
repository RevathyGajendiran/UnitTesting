import { browser, by, element } from 'protractor';
import * as data from '../siemen-config.json';

export class LoginPage
{
    navigateTo() {
        //console.log('New Url:' +data.baseUrl);
        return browser.get(browser.baseUrl) as Promise<any>;
      }

    // getMenuPageInfo = async () => {
    //     await element(by.xpath('//*[@id="mat-input-1"]')).clear()
    //     await element(by.xpath('//*[@id="mat-input-1"]')).sendKeys("admin");
    //     await element(by.xpath('//*[@id="mat-input-2"]')).clear()
    //     await element(by.xpath('//*[@id="mat-input-2"]')).sendKeys("admin");
    //     await element(by.css('span.mat-button-wrapper')).click;
    //     // browser.sleep(20000);
    //     browser.waitForAngular();
    //     return await element(by.xpath('(//span[@class="ui-menuitem-text"])[4]')).getText();
    //   }
      getMenuPageInfo(item) {
        element(by.xpath('username')).clear()
         element(by.xpath('username')).sendKeys(item.userName);
         element(by.xpath('password')).clear()
         element(by.xpath('password')).sendKeys(item.password);
         element(by.css('span.mat-button-wrapper')).click;
        // browser.sleep(20000);
        browser.waitForAngular();
        return  element(by.xpath('(//span[@class="ui-menuitem-text"])[4]')).getText();
      }
}
