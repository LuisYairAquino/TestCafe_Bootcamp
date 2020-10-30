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
        .takeScreenshot("Home Page")
        .takeElementScreenshot(page.email_input, data.email)
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
        .expect(page.address.value).contains(data.city)
});

test('Validar loggearse con una cuenta nueva', async t =>{
    await t 
        
});

test('Validar que se haga logout', async t =>{
    await t 
        
});

test('Crear una cuenta con un correo ya existente', async t =>{
    await t 
        
});


test('Validar recuperar el password con un correo válido', async t =>{
    await t 
        
});

test('Validar recuperar password con un correo no válido', async t =>{
    await t 
        
});

test('Validar el cambiar la información de mi cuenta', async t =>{
    await t 
        
});