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

        //Práctica 7
        this.inputFirstName71 = Selector('#first-name');
        this.inputLastName72 = Selector('#last-name');
        this.inputJob73 = Selector('#job-title');
        this.radioBtn74 = Selector('#radio-button-1');
        this.radioBtn75 = Selector('#radio-button-2');
        this.radioBt76 = Selector('#radio-button-3');
        this.checkBox77 = Selector('#checkbox-1');
        this.checkBox78 = Selector('#checkbox-2');
        this.checkBox79 = Selector('#checkbox-3');
        this.selectExp80 = Selector('#select-menu');
        this.optSelect = Selector('#select-menu > option:nth-child(2)');
        this.dateSelect = Selector('#datepicker');
        this.submitBtn = Selector('a').withText('Submit');
        this.thanksTitle = Selector('h1').withText('Thanks for submitting your form');
        this.successTitle = Selector('body > div > div');

        //Práctica 8
        this.linkKeyPress = Selector('a').withText('Key Presses');
        this.text81 = Selector('#result');

        //Práctica 9 Tarea Login
        this.userName_input = Selector('#username')
        this.pwd_input = Selector('#password')
        this.login_btn = Selector('#login > button')
        this.success_page = Selector('h4').withText('Welcome to the Secure Area. When you are done click logout below.')
        this.invalidLogin_alert = Selector('#flash')


        //Práctica 10
        this.linkContext = Selector('a').withText('Context Menu');
        this.hotSpot101 = Selector('#hot-spot')

        //Práctica 11
        this.sliderLink = Selector('a').withText('Horizontal Slider')
        this.range = Selector('#content > div > div > input[type=range]')
    }
}

export default new Page();