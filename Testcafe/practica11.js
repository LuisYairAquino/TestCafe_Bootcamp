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