import { Selector } from 'testcafe'


const selectBasedOnText = Selector('label').withText('I have tried TestCafe');

class Page {
    constructor () {
        //Práctica 2
        this.link2 = Selector('a').withText('A/B Testing');
        this.text21 = Selector('h3').withText('A/B Test Variation 1');

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
        this.internalError = Selector('h1').withText('Internal Server Error')
    
    }
}

export default new Page();