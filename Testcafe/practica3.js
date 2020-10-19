import page from './pageModel'

fixture("Práctica 3")
    .page("https://the-internet.herokuapp.com/");

test("Probar que aparecen correctamente el input y el botón", async (t) => {
    await t
    .click(page.link3)

    await t
        .expect(page.input31.exists).ok()
        .expect(page.button32.exists).ok()
});

test("Probar que podemos escribir un email", async (t) => {
    await t
    .click(page.link3)

    await t
    .typeText(page.input31, 'noemail@noemail.com')
    .expect(page.input31.value).eql('noemail@noemail.com')
});

   
test("Probar que se envía el email correctamente", async (t) => {
    await t
    .click(page.link3)

    await t
    .typeText(page.input31, 'noemail@noemail.com')
    .expect(page.input31.value).eql('noemail@noemail.com')
    .click(page.button32)

    await t
    .expect(page.text33.innerText).contains('sent')

});

test("Probar que manda un Internal Server Error", async (t) => {
    await t
    .click(page.link3)

    await t
    .click(page.button32)

    await t
    .expect(page.internalError.exists).ok()
    .expect(page.internalError.innerText).contains('Error')

});