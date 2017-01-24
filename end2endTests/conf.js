//main config for protractor

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    getPageTimeout: 10000,
    chromeOnly: true,
    directConnect: true,
    specs: ['applicationEndUserTest.js']
};