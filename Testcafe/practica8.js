import page from  './pageModel'

fixture("Práctica 4")
    .page("https://the-internet.herokuapp.com/");

    test('Probar key presses', async t =>{
        await t
        .click(page.linkKeyPress)


        await t
        .pressKey('backspace')
        .wait(2000)

        await t
        .pressKey('c')
        .wait(2000)
        .expect(page.text81.innerText).contains('You entered: C')
        .expect(page.text81.innerText).notContains('24383487')
        
        .pressKey('tab')
        .wait(2000)
        .expect(page.text81.innerText).contains('You entered: TAB')
        .expect(page.text81.innerText).notContains('24383487')

        .pressKey('ENTER')
        .wait(2000)
        .expect(page.text81.innerText).contains('You entered: ENTER')
        .expect(page.text81.innerText).notContains('24383487')

        .pressKey('esc')
        .wait(2000)
        .expect(page.text81.innerText).contains('You entered: ESC')
        .expect(page.text81.innerText).notContains('24383487')

        .pressKey('capslock')
        .wait(2000)
        .expect(page.text81.innerText).contains('You entered: CAPS_LOCK')
        .expect(page.text81.innerText).notContains('24383487')

        .pressKey('shift')
        .wait(2000)
        .expect(page.text81.innerText).contains('You entered: SHIFT')
        .expect(page.text81.innerText).notContains('24383487')

        .pressKey('space')
        .wait(2000)
        .expect(page.text81.innerText).contains('You entered: SPACE')
        .expect(page.text81.innerText).notContains('24383487')

        .pressKey('up')
        .wait(2000)
        .expect(page.text81.innerText).contains('You entered: UP')
        .expect(page.text81.innerText).notContains('24383487')
    
    });
    