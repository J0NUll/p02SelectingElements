import Page from './page.js';


class chalDom extends Page {

    get link() {
        return $('=Elemental Selenium')

    }

    get link2() {
        return $('*=Elemental')

    }
    

    get link3() {
        return $('//*[@id="content"]/div/div/div/div[2]/table/tbody/tr[1]/td[2]')

    }

    open () {
        return super.open('challenging_dom');
    }
}

export default new chalDom();
