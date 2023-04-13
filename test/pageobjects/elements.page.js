import Page from './page.js';


class elements extends Page {
    



    get addButton () {
        return $('//*[@id="content"]/div/button');
    }

    get dlteButton () {
        return $('//*[@id="elements"]/button[1]')
    }

    


    open () {
        return super.open('add_remove_elements/');
    }
}

export default new elements();
