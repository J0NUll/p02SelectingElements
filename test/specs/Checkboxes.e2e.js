import CheckBoxesPage from '../pageobjects/checkboxes.page.js'






describe('My Login application', () => {
    xit('should login with valid credentials', async () => {
        await CheckBoxesPage.open()
        
        await browser.pause (3000)
        await (CheckBoxesPage).btnCheck.click()
        await browser.pause (3000)
        expect (CheckBoxesPage).btnCheck.click()


    });

});    
        
