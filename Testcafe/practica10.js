import page from  './pageModel'

fixture("Práctica 6")
    .page("https://the-internet.herokuapp.com/");

test('Probar agregar y remover botones', async t =>{
    await t
        .click(page.linkContext)

    await t
        .rightClick(page.hotSpot101)
    
});