import { Selector } from 'testcafe'
import page from './pageModel'

fixture("Práctica 2 con Testcafe")
    .page("https://the-internet.herokuapp.com/");

test("Probar dar clic en un enlace", async (t) => {
    await t
    .click(page.link2)
    .wait(3000)
    
    await t
        if (page.text21.innerText == "A/B Test Control" || "A/B Test Variation 1" || "A/B Test Variation" ){
            console.log ("Pasa prueba")
        } else {
            console.log ("No pasa")
        }
    
});
    