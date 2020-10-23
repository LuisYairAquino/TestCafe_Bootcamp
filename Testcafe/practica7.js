import page from  './pageModel'

fixture("Práctica 6")
    .page("https://formy-project.herokuapp.com/form");

test('Probar llenar el formulario web', async t =>{
    await t
    .typeText(page.inputFirstName71, 'Luis')
    .expect(page.inputFirstName71.value).eql('Luis')

    .typeText(page.inputLastName72, 'Aquino')
    .expect(page.inputLastName72.value).eql('Aquino')

    .typeText(page.inputJob73, 'Automation Tester')
    .expect(page.inputJob73.value).eql('Automation Tester')

    .click(page.radioBtn74)
    .expect(page.radioBtn74.checked).ok()
    
    .click(page.checkBox77)
    .expect(page.checkBox77.checked).ok()

    .click(page.checkBox78)
    .expect(page.checkBox78.checked).ok()

    .click(page.checkBox79)
    .expect(page.checkBox79.checked).ok()

    .click(page.selectExp80)
    .click(page.optSelect)
    .expect(page.optSelect.value).eql('1')

    .typeText(page.dateSelect, '10222020')
    .click(page.submitBtn)
    
    await t
    .expect(page.thanksTitle.visible).ok()
    .expect(page.successTitle.exists).ok()

    
    
});