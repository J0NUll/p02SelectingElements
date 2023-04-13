import Dropdownlist from '../pageobjects/Dropdownlist.page.js'

describe('Heroku Checkbox Page', () => {
    xit('To check if Option 1 is selected', async () => {
        await Dropdownlist.open()
        await browser.pause(3000)
        await (Dropdownlist.Option).Option.click()
        await browser.pause(3000)
        expect (Dropdownlist.Option).toBeSelected()
        await expect(Dropdownlist.Option).toHaveValueContaining("1")
        await browser.pause(3000)
    })

    xit('To check if Option 1 is selected', async () => {
        await Dropdownlist.open()
        await (Dropdownlist).Option1.click()
        await browser.pause(3000)
        expect (Dropdownlist.Option1).toBeSelected()
        await expect(Dropdownlist.Option1).toHaveValueContaining("2")
    });



})
