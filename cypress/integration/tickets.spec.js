describe("Tickets", () => {
    beforeEach(() => cy.visit("https://bit.ly/2XSuwCW")); /*Abre a url do site*/

    it.only("preencha todos os campos de entrada de texto", () =>{
        const primeiroNome = "Thiago";
        const segundoNome = "Herculano";

        cy.get("#first-name").type(primeiroNome);
        cy.get("#last-name").type(segundoNome);
        cy.get("#email").type("thiagoherculan@gmail.com");
        cy.get("#requests").type("Vegetarian");
        cy.get("#signature").type(`${primeiroNome} ${segundoNome}`);
    })

    it("has 'TICKETBOX' header's heading", () =>{});
});