import { Selector } from 'testcafe'

class Page{
    constructor() {
        this.signIn_link = Selector('a').withText('Sign in')
        this.email_input = Selector('#email_create')
        this.createAccount_btn = Selector('#SubmitCreate')
        this.firstName_input = Selector('#customer_firstname')
        this.lastName_input = Selector('#customer_lastname')
        this.email_form = Selector('#email')
        this.password_input = Selector('#passwd')

        //Addresss Form
        this.firstName_Address = Selector('#firstname')
        this.lastName_Address = Selector('#lastname')
        this.address = Selector('#address1')
        this.city = Selector('#city')
        this.stateClick = Selector('#id_state')
        this.stateOption = Selector('option').withText('Alabama')
        this.postalCode = Selector('#postcode')
        this.countryClick = Selector('#id_country')
        this.country = Selector('option').withText('United States')
        this.mobilePhone = Selector('#phone_mobile')
        this.registerAccount = Selector('#submitAccount')
        this.welcomeMessage = Selector('#center_column > p')

        //Sign In with a new acount
        this.signInBtn = Selector('#SubmitLogin')

        //Sign out
        this.signOut_Link = Selector('a').withText('Sign out')

        //Account Error
        this.errorAccountDialog = Selector('#create_account_error')

        //Forgot password
        this.forgotPwd_link = Selector('a').withText('Forgot your password?')
        this.retrievePwdBtn = Selector('button').withText('Retrieve Password')
        this.alertSuccess = Selector('#center_column > div > p')
        this.alertDanger = Selector('#center_column > div > div > p')

        //Cambiar Información de Cuenta
        this.myAccount = Selector('a').withText('Luis Aquino')
        this.MyInformation = Selector('#center_column > div > div:nth-child(1) > ul > li:nth-child(4) > a > span')
        this.currentPwd = Selector('#old_passwd')
        this.submitInfo = Selector('button').withText('Save')
        this.alertPersonalSuccess = Selector('#center_column > div > p')

    }
}

export default new Page();