
Feature('test login ');

Scenario('test wrong password', (I) => {
    I.amOnPage('https://facebook.com');
    I.see('email');
    I.see('pass');
});
