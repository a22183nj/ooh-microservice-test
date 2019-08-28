const expected = require('unexpected');
const httpStatusCodes = require('http-status-codes');
const headers = {};
const requestPromise = require('request-promise');
let lastResponse;
console.log('Environment Varaibles Of Node is : ' + process.env.NODE_ENV);
process.env["NODE_CONFIG_DIR"] = __dirname + '/../config/';
console.log('Node Config Directory is : ' + process.env["NODE_CONFIG_DIR"]);

async function getResource(url) {

  const options = {
    uri: url,
    method: 'GET',
    headers: headers,
    json: true,
    resolveWithFullResponse: true
  };
  options.simple = false;
  lastResponse = await requestPromise(options);
  console.log('Response Object from Get Resource is : ' + JSON.stringify(lastResponse));
  return lastResponse;
}

function getLastResponse() {
  return lastResponse;
}

function assertHttpStatusCode(statusCode) {
  expected(this.getLastResponse().statusCode, 'to equal', parseInt(statusCode, 10));
}

module.exports = {
  getResource: getResource,
  getLastResponse: getLastResponse,
  assertHttpStatusCode: assertHttpStatusCode
};
