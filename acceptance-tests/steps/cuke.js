let path = require('path');
let {Given, When, Then, And, After, Before, setDefaultTimeout} = require('cucumber');
const requester = require('./requester');
let config = require('config');
process.env["NODE_CONFIG_DIR"] = path.join(__dirname, '../config');

let endPoint;

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

When(/^I do GET (.*) service$/, function (service) {
    endPoint = config.get('baseUrl') + service;
    console.log('URL is : ' + endPoint);
    return requester.getResource(endPoint);
})

Then(/^I get a HTTP Status as (.*)$/, function (statusCode) {
  return requester.assertHttpStatusCode(statusCode);
});

/**
Before function executes prior executing any other scenario and will be executed
for each individual scenario for a feature file.
*/
Before(function () {
    setDefaultTimeout(60 * 1000);
});
