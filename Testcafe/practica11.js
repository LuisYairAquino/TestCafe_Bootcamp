import page from  './pageModel'

fixture("Práctica 11")
    .page("https://the-internet.herokuapp.com/");

test('Probar un slider horizontal', async t =>{
    await t
        .click(page.sliderLink)

    await t
        .click(page.range)
        .typeText(page.range, '3.5', {speed: 0.1})
        .expect(page.range.value).eql('3.5')
        
    
});

test('Probar un slider horizontal con teclado', async t =>{
    await t 
        .maximizeWindow()
        .click(page.sliderLink)
    await t
        console.log(page.range)
    await t
        .pressKey('tab', {speed:0.01})
        .pressKey('tab')
        .pressKey('up', {speed:0.01})
        .wait(1000)
        .pressKey('up', {speed:0.01})
        .wait(1000)
        .pressKey('up', {speed:0.01})
        .expect(page.range.value).eql('1.5')
});