
  /*navigation*/
  Given(/^I navigate to "(.*)" page$/, async function (page) {});
  Given(/^I access in the "(.*)" page$/, async function (page) {});
  Given(/^I switch to "(.*)" "(.*)" between "(.*)" page$/, async function (name, type, page) {});
  
  /*find elements*/
  Given(/^I see the "(.*)"."(.*)" label$/, async function (page, element) {});
  
  /*clicks*/
  Given(/^I "(.*)" on the "(.*)"."(.*)" button$/, async function (action, page, element) {});
  
  /*data*/
  Given(/^I am a "(.*)"."(.*)" user$/, async function (type, user) {});
  Given(/^I write "(.*)" in the "(.*)"."(.*)" field$/, async function (dataName, page, element) {});
  Given(/^I see "(.*)" text in the "(.*)"."(.*)" field$/, async function (expectedText, page, element) {});
  Given(/^I write all fields in "(.*)" page$/, async function (page, datatable) {});