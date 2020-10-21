import page from  './pageModel'

fixture("Práctica 6")
    .page("https://the-internet.herokuapp.com/");

test('Probar agregar y remover botones', async t =>{
    await t
        .click(page.link6)

    await t
        .expect(page.removeBtn62.visible).notOk()
        .click(page.addBtn61)
        
        .expect(page.removeBtn62.visible).ok()

        .click(page.removeBtn62)
        .expect(page.removeBtn62.visible).notOk()
    
});