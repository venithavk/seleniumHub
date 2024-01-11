const Web = require('../Pages/webSelector')
const property = require('../Config/property.json').suites;
const { expect } = require('@wdio/globals')

describe('Automation Suite for Web using Jio Cinema', () => {
    
    it('Verify Search Functionality is Working or Not', async () => {

        await Web.open('');
        
        await Web.search.click();
        
        await Web.search.setValue(property.isSearch);
        
       // await Web.text.click();
        
        //await expect(Web.isPlayed).toBeDisplayed();
        
        await driver.pause(6000);   

    })

})

