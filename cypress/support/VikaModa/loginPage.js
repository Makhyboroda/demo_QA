export class mainPage{

    openVikaModa(){
        cy.visit('https://vikamoda.com.ua/')
    }

    clickOnLanguage (){
        const LanguageButton = cy.contains('Мова')
        LanguageButton.click()
    }
}

export const OnMainPage = new mainPage()