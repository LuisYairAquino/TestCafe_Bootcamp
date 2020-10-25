import page from  './pageModel'

fixture("Práctica 6")
    .page("https://the-internet.herokuapp.com/");

test('Probar agregar y remover un botón', async t =>{
    await t
        .click(page.link6)

    await t
        .expect(page.removeBtn62.visible).notOk()
        .click(page.addBtn61)
        
        .expect(page.removeBtn62.visible).ok()

        .click(page.removeBtn62)
        .expect(page.removeBtn62.visible).notOk()
    
});

test('Probar agregar y remover 3 botones', async t =>{
    await t
        .click(page.link6)

    await t
        .expect(page.removeBtn62.visible).notOk()
        .click(page.addBtn61)
        .wait(2000)
        .click(page.addBtn61)
        .wait(2000)
        .click(page.addBtn61)
        
        .expect(page.removeBtn62.visible).ok()

        .click(page.removeBtn62)
        .click(page.removeBtn62)
        .click(page.removeBtn62)
        .expect(page.removeBtn62.visible).notOk()
    
});


let button = [page.addBtn61];
let i;

test('Verificar que no se remuevan todos los botones.', async t =>{
    await t
        .click(page.link6)

    await t
        .click(page.addBtn61)
        .click(page.addBtn61)
        .click(page.addBtn61)
        .click(page.addBtn61)
        .click(page.addBtn61)
        .click(page.addBtn61)
        .click(page.addBtn61)
        .click(page.addBtn61)
        .click(page.addBtn61)
        .click(page.addBtn61)
        
        .expect(page.removeBtn62.visible).ok()

        .click(page.removeBtn62)
        .click(page.removeBtn62)
        .click(page.removeBtn62)
        .click(page.removeBtn62)
        .click(page.removeBtn62)
        .click(page.removeBtn62)
        .click(page.removeBtn62)
        .click(page.removeBtn62)
        .expect(page.removeBtn62.visible).notOk()
    
});