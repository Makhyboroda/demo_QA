import { OnMainPage } from "../support/VikaModa/loginPage"

describe('Vika Moda suit', () => {
  it('Click on Language Button', () => {
    OnMainPage.openVikaModa()
    OnMainPage.clickOnLanguage()
  
  })
})