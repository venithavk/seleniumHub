const Android  = require('../Pages/androidFireSelector');
const { expect } = require('@wdio/globals')

describe('Automation Suite for Android/Fire TV using Jio Cinema', () => {

    it('Verify Live News is Displaying or Not', async () => {

        await Android.news.click();

        await driver.pause(3000);

        await expect(Android.islive).toBeDisplayed();
    })
   
})