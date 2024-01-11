const { browser } = require('@wdio/globals')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Web {
    
    get watch () {
        return $('aria/Watch');
    }
   
    get isLive () {
        return $('//*[@id="__next"]/div/div[3]/div/div[2]/div[4]/div/div[3]/button/div')
    }

    get search(){
        return $('#twotabsearchtextbox')
    }
    
    get text(){
        return $('//*[@id="__next"]/div/div[2]/div/div[1]/div[2]/div/div/div[2]/div/a/div/button')
    }
  
    get title()
    {
        return $('//*[@id="__next"]/div/div[3]/div/div[1]/a/button')
    }

    get isPlayed () {
   
       return $('/html/body/div[1]/div/div[3]/div/div[2]')
    }
    
    open (path) {
        browser.maximizeWindow();
        return browser.url(`https://www.amazon.in/${path}`);
    }
}

module.exports = new Web();
