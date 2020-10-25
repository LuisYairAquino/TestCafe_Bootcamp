import page from  './pageModel'

fixture("Práctica 9 Login de Tarea")
    .page("https://the-internet.herokuapp.com/login");

test('Probar hacer login exitosamente', async t =>{
    await t
    .typeText(page.userName_input, 'tomsmith')
    .expect(page.userName_input.value).eql('tomsmith')

    .typeText(page.pwd_input, 'SuperSecretPassword!')
    .expect(page.pwd_input.value).eql('SuperSecretPassword!')

    .click(page.login_btn)

    await t
    .expect(page.success_page.exists).ok()
});

test('Probar que no se pueda hacer login sin user y password', async t =>{
    await t
    .click(page.login_btn)

    await t
    .expect(page.invalidLogin_alert.exists).ok()
    console.log("El login ha falladao exitosamente")
});

test('Probar que no pase con un usuario incorrecto', async t =>{
    await t
    .typeText(page.userName_input, 'luis')
    .expect(page.userName_input.value).eql('luis')

    .click(page.login_btn)

    await t
    .expect(page.invalidLogin_alert.exists).ok()
    console.log("El login ha falladao exitosamente")
});