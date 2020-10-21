import { Selector } from 'testcafe'


const selectBasedOnText = Selector('label').withText('I have tried TestCafe');

class Page {
    constructor () {
        //Práctica 2
        this.link2 = Selector('a').withText('A/B Testing');
        this.text21 = Selector('h3');

        //Práctica 3
        this.link3 = Selector('a').withText('Forgot Password')
        this.input31 = Selector('#email')
        this.button32 = Selector('#form_submit')
        this.text33 = Selector('#content')

        //Práctica 4
        this.link4 = Selector('a').withText('Checkboxes');
        //Checkbox Padre
        this.baseCheckbox = Selector('#checkboxes > input[type=checkbox]')
    
        //Checboxs Hijos
        //this.checkbox41 = Selector('#checkboxes > input[type=checkbox]:nth-child(1)');
        this.checkbox42 = Selector('#checkboxes > input[type=checkbox]:nth-child(3)');

        //Homework
        this.internalError = Selector('h1').withText('Internal Server Error');
        const abText = Selector('h3');

        //Práctica 5

        this.link5 = Selector('a').withText('Inputs');
        this.input51 = Selector('#content > div > div > div > input[type=number]');

        //Práctica 6
        this.link6 = Selector('a').withText('Add/Remove Elements');
        this.addBtn61 = Selector('#content > div > button');
        this.removeBtn62 = Selector('#elements > button');
        this.removeBtn63 = Selector('#elements > button:nth-child(2)');
        this.removeBtn64 = Selector('#elements > button:nth-child(3)');
    
    }
}

export default new Page();