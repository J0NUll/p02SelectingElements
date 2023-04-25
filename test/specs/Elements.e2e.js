import elements from '../pageobjects/elements.page.js'

describe('Heroku Checkbox Page', () => {
    xit('To check if Option 1 is selected', async () => {
        await elements.open()

        await browser.pause (3000)
        await (elements).addButton.click()
        await (elements).addButton.click()
        await (elements).addButton.click()
        await (elements).addButton.click()
        await (elements).addButton.click()
        await browser.pause (2000)
        await (elements).dlteButton.click()
        await (elements).dlteButton.click()


        for (let i=0;i<5;i++){
            await elements.addButton.click()
        }
        await browser.pause(5000)
        for (let i=0; i<3;i++){
            await elements.dlteButton.click()
        }
        
    })

    //it('To check if Option 1 is selected', async () => {
     //   await Dropdownlist.open()
   //     await (Dropdownlist).Option1.click()
    //    await browser.pause(3000)
    //    expect (Dropdownlist.Option1).toBeSelected()
   //     await expect(Dropdownlist.Option1).toHaveValueContaining("2")
    //});



})

