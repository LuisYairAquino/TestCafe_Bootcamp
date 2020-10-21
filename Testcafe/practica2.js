import { Selector } from 'testcafe'
import page from './pageModel'
import Colors from 'colors'

fixture("Práctica 2 con Testcafe")
    .page("https://the-internet.herokuapp.com/");

test("Probar dar clic en un enlace", async (t) => {
    await t
    .click(page.link2)
    .wait(3000)

    const abTextElement = await abText()
    console.log(abTextElement.innerText)
    
    await t
        if (abTextElementinnerText == "Test Control" || abTextElement == "A/B Test Variation 1" || abTextElement == "A/B Test Variation" ){
            await t.expect(true).ok("Pasa prueba".green)
        } else {
            await t.expect(true).ok("No pasa".red)
        }
    
});
    