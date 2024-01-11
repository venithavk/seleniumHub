const Mobile = require('../Pages/mobileSelector');
const { expect } = require('@wdio/globals')

describe('Automation Suite for Mobile using Jio Cinema' , () => {

    it('Verify Movie Title is Displaying  or Not', async () => {
        
        await Mobile.movie.click();

        await Mobile.watch.click();
        
        await driver.pause(3000)
        
        await expect(Mobile.isTitle).toBeDisplayed();
    
    })

})