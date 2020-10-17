import { Selector } from 'testcafe'


const selectBasedOnText = Selector('label').withText('I have tried TestCafe');

class Page {
    constructor () {
        this
    }
}

export default new Page();