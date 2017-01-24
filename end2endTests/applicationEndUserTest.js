//main testing logic for application

describe('Contact Application User testing', function() {

    beforeEach(function () {
        browser.driver.get('http://127.0.0.1:8080/'); //calls the live server
    });

    it('Menu title is displayed and equals Contacts', function() {
        browser.sleep(2000);
        $('h1#menuTitle').isDisplayed();
        expect($('h1#menuTitle').getText()).toEqual('Contacts');
    });

    it('Add User sub-title is displayed and equals Contacts', function() {
        $('h1#addUser').isDisplayed();
        expect($('h1#addUser').getText()).toEqual('Add User');
    });

    it('input field name is visable and placeholder equals name ', function() {
        $('input#name').isDisplayed();
        expect($('input#name').getAttribute('placeholder')).toEqual('name');
    });

    it('input field email is visable and placeholder equals email ', function() {
        $('input#email').isDisplayed();
        expect($('input#email').getAttribute('placeholder')).toEqual('email');
    });

    it('input field job is visable and placeholder equals job ', function() {
        $('input#job').isDisplayed();
        expect($('input#job').getAttribute('placeholder')).toEqual('job');
    });

    it('input field location is visable and placeholder equals location', function() {
        $('input#location').isDisplayed();
        expect($('input#location').getAttribute('placeholder')).toEqual('location');
    });

      it('input field tag is visable and placeholder equals tag', function() {
        $('input#tag').isDisplayed();
        expect($('input#tag').getAttribute('placeholder')).toEqual('tag');
    });

    it('input field avatar is visable and placeholder equals avatar', function() {
        $('input#avatar').isDisplayed();
        expect($('input#avatar').getAttribute('placeholder')).toEqual('avatar');
    });

    it('add button is visable and is named add', function() {
        $('button#save').isDisplayed();
        expect($('button#save').getText()).toEqual('add');
    });

    it('Click on first item in the contacts list should display contact details of leanne graham', function() {
        element.all(by.repeater('i in contacts')).get(0).$('a').click();
        browser.sleep(1000);
        expect($('h1#personName').getText()).toEqual('leanne graham');
        expect($('h4#personEmail').getText()).toEqual('leanne@gmail.com');
        expect($('button#BtnMoreInfo').getText()).toEqual('More Info');
    });

    it('add button is visable and is named add', function() {
        $('button#save').isDisplayed();
        expect($('button#save').getText()).toEqual('add');
    });

    it('Click on first item in the contacts list should display contact details of leanne graham', function() {
        element.all(by.repeater('i in contacts')).get(0).$('a').click();
        browser.sleep(1000);
        expect($('h1#personName').getText()).toEqual('leanne graham');
        expect($('h4#personEmail').getText()).toEqual('leanne@gmail.com');
        expect($('button#BtnMoreInfo').getText()).toEqual('More Info');
        browser.sleep(1000);
        element(by.css('[ng-click="toggle()"]')).click();
        browser.sleep(1000);
        expect($('h3#job').getText()).toEqual('Job: web developer');
        expect($('h3#location').getText()).toEqual('Location: london');
        expect($('h3#tag').getText()).toEqual('Tag: friends');

    });

    it('Click on more info item in the contacts list should display then hide details of leanne graham ', function() {
        element.all(by.repeater('i in contacts')).get(0).$('a').click();
        browser.sleep(1000);
        element(by.css('[ng-click="toggle()"]')).click();
        browser.sleep(1000);
        expect($('h3#job').isDisplayed());
        expect($('h3#location').isDisplayed());
        expect($('h3#tag').isDisplayed());
        element(by.css('[ng-click="toggle()"]')).click();
        expect($('h3#job').isDisplayed(false));
        expect($('h3#location').isDisplayed(false));
        expect($('h3#tag').isDisplayed(false));
    });

    it('add new user to list and verify new user can be clicked ', function() {
        browser.sleep(1000);
        $('input#name').sendKeys("Drake");
        $('input#email').sendKeys("drake@one.com");
        $('input#job').sendKeys("Hip/Hop Artist");
        $('input#location').sendKeys("Canada");
        $('input#tag').sendKeys("Music");
        $('input#avatar').sendKeys("https://iscale.iheart.com/v3/url/aHR0cDovL2ltYWdlLmloZWFydC5jb20vaW1hZ2VzL3JvdmkvMTA4MC8wMDAzLzcyMy9NSTAwMDM3MjM4NDguanBn");
        browser.sleep(1000);
        element(by.css('[ng-click="submitted=true;"]')).click();
        browser.sleep(1000);
        element.all(by.repeater('i in contacts')).get(5).$('a').click();
        browser.sleep(1000);
        expect($('h1#personName').getText()).toEqual('Drake');
        expect($('h4#personEmail').getText()).toEqual('drake@one.com');
        element(by.css('[ng-click="toggle()"]')).click();
        browser.sleep(1000);
        expect($('h3#job').getText()).toEqual('Job: Hip/Hop Artist');
        expect($('h3#location').getText()).toEqual('Location: Canada');
        expect($('h3#tag').getText()).toEqual('Tag: Music');
    });

});