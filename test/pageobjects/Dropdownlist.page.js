import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class Dropdownlist extends Page {
    /**
     * define selectors using getter methods
     */
    //get checkBoxes () {
    //    return $('input');
    //}
    

   // get list () {
   //     return $('#dropdown');
    //} 


    get Option () {
        return $('//select/option[2]');
    }

    get Option1 () {
        return $('//select/option[3]')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    //async login (username, password) {
       /// await this.inputUsername.setValue(username);
       // await this.inputPassword.setValue(password);
       // await this.btnSubmit.click();
   // }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('dropdown');
    }
}

export default new Dropdownlist();
