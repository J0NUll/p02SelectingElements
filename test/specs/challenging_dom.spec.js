import chalDom from '../pageobjects/challenging_dom.page.js'


describe('Challenge dom page test', () => {
    xit('Should find the text in the link', async () => {
        await chalDom.open()
        await browser.pause(3000)
        const link = await $('=Elemental Selenium')
        await expect (link).toHaveText('Elemental Selenium')
        


    });

    it('Method 2', async () => {
        await chalDom.open()
        await browser.pause(3000)
        await expect(chalDom.link).toHaveTextContaining('Elemental Selenium')



    });

    xit('Different Method for selector link2', async () => {
        await chalDom.open()
        await browser.pause(3000)
        await expect(chalDom.link2).toHaveTextContaining('Elemental Selenium')



    });


    xit('To find Apeirian0 on the webpage', async () => {
        await chalDom.open()
        await browser.pause(3000)
        await expect(chalDom.variable).toHaveTextContaining('Apeirian0')



    });


});    
        