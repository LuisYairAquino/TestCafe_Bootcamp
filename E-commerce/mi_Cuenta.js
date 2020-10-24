import page from  './PageObjectModel'

let rdmNumber = Math.random().toString(36).substring(1,4);
const email = 'dummy' + rdmNumber + '@mailinator.com'
const firstName = 'Luis'
const lastname = 'Aquino'
const password = '88888'

fixture("Práctica 11")
    .page("http://automationpractice.com/index.php");

test('Validar el crear una cuenta', async t =>{
    await t 
        .click(page.signIn_link)
        console.log('Correo: ', email)

    await t
        .typeText(page.email_input, email)
        .click(page.createAccount_btn)

    await t
        .expect(page.email_form.value).contains(email)
        .expect(page.email_form.hasAttribute('readonly')).notOk()

        .typeText(page.firstName_input, firstName)
        .typeText(page.lastName_input, lastname)

        .expect(page.firstName_Address.value).contains(firstName)

        .typeText(page.password_input, password)
        .typeText(page.address, 'PO Box 7687')
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