import page from  './pageModel'

fixture("Práctica 6")
    .page("https://the-internet.herokuapp.com/");

test('Probar un click derecho', async t =>{
    await t
        .click(page.linkContext)

    await t
        .setNativeDialogHandler(() => true)
        .rightClick(page.hotSpot101)

        const history = await t.getNativeDialogHistory();

        console.log(history)


        await t
        .wait(2000)
        .expect(history[0].type).eql('alert')
        .expect(history[0].text).eql('You selected a context menu')
        .expect(history[0].url).eql('https://the-internet.herokuapp.com/context_menu')
    
});