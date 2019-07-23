
Feature('test login ');

Scenario('test wrong password', (I) => {
    I.amOnPage('https://facebook.com');
    I.see('Email or Phone');
    I.see('Password');
});
