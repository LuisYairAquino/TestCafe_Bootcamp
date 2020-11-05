import page from  './PageObjectModel'
import { data } from './data'

fixture("Práctica 11")
    .page("http://automationpractice.com/index.php");

test('Validar el crear una cuenta', async t =>{
    await t 
        .click(page.signIn_link)
        console.log('Correo: ', data.email)
        console.log('First Name: ', data.firstName)
        console.log('Last Name: ', data.lastname)

    await t
        .typeText(page.email_input, data.email)
        .click(page.createAccount_btn)
        //.takeScreenshot("Home Page")
        //.takeElementScreenshot(page.email_input, data.email)
        //.debug

    await t
        .expect(page.email_form.value).contains(data.email)
        .expect(page.email_form.hasAttribute('readonly')).notOk()

        .typeText(page.firstName_input, data.firstName)
        .typeText(page.lastName_input, data.lastname)

        .expect(page.firstName_Address.value).contains(data.firstName)

        .typeText(page.password_input, data.password)
        
        .typeText(page.address, data.pbox)
        .expect(page.address.value).contains(data.pbox)

        .typeText(page.city, data.city)
        .expect(page.city.value).contains(data.city)

        .click(page.stateClick)
        .wait(2000)
        .click(page.stateOption)
        
        .typeText(page.postalCode, data.postalCode)
        .expect(page.postalCode.value).contains(data.postalCode)

        .click(page.countryClick)
        .wait(2000)
        .click(page.country)

        .typeText(page.mobilePhone, data.mobilePhone)
        .expect(page.mobilePhone.value).contains(data.mobilePhone)

        .click(page.registerAccount)
        .expect(page.welcomeMessage.exists).ok()
});

test('Validar loggearse con una cuenta nueva', async t =>{
    await t 

    .click(page.signIn_link)

    await t
    .typeText(page.email_form, '12345@12345.com')
    .expect(page.email_form.value).contains('12345@12345.com')

    .typeText(page.password_input, '12345')
    .expect(page.password_input.value).contains('12345')

    .click(page.signInBtn)
        
});

test('Validar que se haga logout', async t =>{
    await t 

    .click(page.signIn_link)

    await t
    .typeText(page.email_form, '12345@12345.com')
    .expect(page.email_form.value).contains('12345@12345.com')

    .typeText(page.password_input, '12345')
    .expect(page.password_input.value).contains('12345')

    .click(page.signInBtn)

    await t
    .click(page.signOut_Link)
        
});

test('Crear una cuenta con un correo ya existente', async t =>{
    await t 
        .click(page.signIn_link)
        console.log('Correo: ', data.email)
        console.log('First Name: ', data.firstName)
        console.log('Last Name: ', data.lastname)

    await t
        .typeText(page.email_input, data.email)
        .click(page.createAccount_btn)
        //.takeScreenshot("Home Page")
        //.takeElementScreenshot(page.email_input, data.email)
        //.debug

    await t
        .expect(page.email_form.value).contains(data.email)
        .expect(page.email_form.hasAttribute('readonly')).notOk()

        .typeText(page.firstName_input, data.firstName)
        .typeText(page.lastName_input, data.lastname)

        .expect(page.firstName_Address.value).contains(data.firstName)

        .typeText(page.password_input, data.password)
        
        .typeText(page.address, data.pbox)
        .expect(page.address.value).contains(data.pbox)

        .typeText(page.city, data.city)
        .expect(page.city.value).contains(data.city)

        .click(page.stateClick)
        .wait(2000)
        .click(page.stateOption)
        
        .typeText(page.postalCode, data.postalCode)
        .expect(page.postalCode.value).contains(data.postalCode)

        .click(page.countryClick)
        .wait(2000)
        .click(page.country)

        .typeText(page.mobilePhone, data.mobilePhone)
        .expect(page.mobilePhone.value).contains(data.mobilePhone)

        .click(page.registerAccount)
        .expect(page.welcomeMessage.exists).ok()

    await t
    .click(page.signOut_Link)

    await t 

    .click(page.signIn_link)

    await t 

    .typeText(page.email_input, data.email)
    .expect(page.email_input.value).contains(data.email)

    .click(page.createAccount_btn)

    .expect(page.errorAccountDialog.exists).ok()
        
});


test('Validar recuperar el password con un correo válido', async t =>{
    await t 
        .click(page.signIn_link)
        console.log('Correo: ', data.email)
        console.log('First Name: ', data.firstName)
        console.log('Last Name: ', data.lastname)

    await t
        .typeText(page.email_input, data.email)
        .click(page.createAccount_btn)
        //.takeScreenshot("Home Page")
        //.takeElementScreenshot(page.email_input, data.email)
        //.debug

    await t
        .expect(page.email_form.value).contains(data.email)
        .expect(page.email_form.hasAttribute('readonly')).notOk()

        .typeText(page.firstName_input, data.firstName)
        .typeText(page.lastName_input, data.lastname)

        .expect(page.firstName_Address.value).contains(data.firstName)

        .typeText(page.password_input, data.password)
        
        .typeText(page.address, data.pbox)
        .expect(page.address.value).contains(data.pbox)

        .typeText(page.city, data.city)
        .expect(page.city.value).contains(data.city)

        .click(page.stateClick)
        .wait(2000)
        .click(page.stateOption)
        
        .typeText(page.postalCode, data.postalCode)
        .expect(page.postalCode.value).contains(data.postalCode)

        .click(page.countryClick)
        .wait(2000)
        .click(page.country)

        .typeText(page.mobilePhone, data.mobilePhone)
        .expect(page.mobilePhone.value).contains(data.mobilePhone)

        .click(page.registerAccount)
        .expect(page.welcomeMessage.exists).ok()

    await t
        .click(page.signOut_Link)

    await t 

        .click(page.signIn_link)
        .click(page.forgotPwd_link)

    await t

        .typeText(page.email_form, data.email)
        .expect(page.email_form.value).contains(data.email)

        .click(page.retrievePwdBtn)

    await t

        .expect(page.alertSuccess.exists).ok()

        
});

test('Validar recuperar password con un correo no válido', async t =>{
    await t 
        .click(page.signIn_link)
        console.log('Correo: ', data.email)
        console.log('First Name: ', data.firstName)
        console.log('Last Name: ', data.lastname)

    await t
        .typeText(page.email_input, data.email)
        .click(page.createAccount_btn)
        //.takeScreenshot("Home Page")
        //.takeElementScreenshot(page.email_input, data.email)
        //.debug

    await t
        .expect(page.email_form.value).contains(data.email)
        .expect(page.email_form.hasAttribute('readonly')).notOk()

        .typeText(page.firstName_input, data.firstName)
        .typeText(page.lastName_input, data.lastname)

        .expect(page.firstName_Address.value).contains(data.firstName)

        .typeText(page.password_input, data.password)
        
        .typeText(page.address, data.pbox)
        .expect(page.address.value).contains(data.pbox)

        .typeText(page.city, data.city)
        .expect(page.city.value).contains(data.city)

        .click(page.stateClick)
        .wait(2000)
        .click(page.stateOption)
        
        .typeText(page.postalCode, data.postalCode)
        .expect(page.postalCode.value).contains(data.postalCode)

        .click(page.countryClick)
        .wait(2000)
        .click(page.country)

        .typeText(page.mobilePhone, data.mobilePhone)
        .expect(page.mobilePhone.value).contains(data.mobilePhone)

        .click(page.registerAccount)
        .expect(page.welcomeMessage.exists).ok()

    await t
        .click(page.signOut_Link)

    await t 

        .click(page.signIn_link)
        .click(page.forgotPwd_link)

    await t

        .typeText(page.email_form, '45345@34534.com')
        .expect(page.email_form.value).contains('45345@34534.com')

        .click(page.retrievePwdBtn)
        .expect(page.alertDanger.exists).ok()
        
});

test('Validar el cambiar la información de mi cuenta', async t =>{
    await t 

        .click(page.signIn_link)

    await t
        .typeText(page.email_form, '12345@12345.com')
        .expect(page.email_form.value).contains('12345@12345.com')

        .typeText(page.password_input, '12345')
        .expect(page.password_input.value).contains('12345')

        .click(page.signInBtn)
    
    await t

        .click(page.myAccount)

    await t

        .click(page.MyInformation)

    await t

        .typeText(page.currentPwd, '12345')
        .click(page.submitInfo)

    await t

        .expect(page.alertPersonalSuccess.exists).ok()

        
});