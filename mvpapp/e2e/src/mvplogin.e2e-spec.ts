import { browser, element, by, ExpectedConditions, protractor } from 'protractor'
import { Alert, WebElement } from 'selenium-webdriver';
import { Workbook, Row, Cell, Worksheet } from 'exceljs';
import { LoginPage } from './login.po';
describe('Protractor Typescript Demo', function () {
  let page: LoginPage;
  beforeEach(() => {
    page = new LoginPage();
  });
  browser.ignoreSynchronization = true; // for non-angular websites
  it('Read users from Excel for Login ', function () {
    // set implicit time to 30 seconds
    browser.waitForAngular();
    // create object for workbook
    var wb: Workbook = new Workbook();
    // read xlsx file type
    wb.xlsx.readFile("D:\\unit_testing_training\rps_angulartesting_2020-master\mvpapp\e2e\src\\user.xlsx").then(function () {
      //sheet object
      let sheet: Worksheet = wb.getWorksheet("Sheet1");
      //row objct
      let rowObject: Row;
      // cell object
      let cellObject: Cell;
      //print
      for (let i = 1; i < 5; i++) {

        rowObject = sheet.getRow(i);
        cellObject = rowObject.getCell(1);
        console.log(cellObject.value);
        let name = cellObject.value;
        cellObject = rowObject.getCell(2);
        let password = cellObject.value
        //use the cell value as url for navigation
        //browser.get(cellObject.toString())
        let userObj = {
          "userName": name,
          "password": password

        }
        page.navigateTo();
        expect(page.getMenuPageInfo(userObj)).toEqual('Products')



      }


    });
  });
});
