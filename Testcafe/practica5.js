import page from  './pageModel'

fixture("Práctica 5")
    .page("https://the-internet.herokuapp.com/");

test('Probar escribir números en un input', async t =>{
    await t
        .click(page.link5)

    await t
        .maximizeWindow()
        .typeText(page.input51, "letras", {speed: 0.1})
        .wait(2000)
        .expect(page.input51.value).eql('')

        .typeText(page.input51, "123456789", {speed: 0.1})
        .expect(page.input51.value).notEql('222')
        .expect(page.input51.value).eql("123456789")


    
});

test('Probar escribir números en un input', async t =>{
    await t
        .click(page.link5)

    await t
        .maximizeWindow()
        .typeText(page.input51, "-123456789", {speed: 0.1})
        .wait(2000)
        .expect(page.input51.value).eql('-123456789')
    
});

test('Probar escribir números en un input', async t =>{
    await t
        .click(page.link5)

    await t
        .typeText(page.input51, "%&/%%&", {speed: 0.1})
        .expect(page.input51.value).notEql('222')
        .expect(page.input51.value).eql("%&/%%&")
});