
describe("Tickets", () => {
    beforeEach(() => cy.visit("https://bit.ly/2XSuwCW")); /*Abre a url do site*/

    it("preencha todos os campos de entrada de texto", () =>{
        const primeiroNome = "Thiago";
        const segundoNome = "Herculano";

        cy.get("#first-name").type(primeiroNome);        
        cy.get("#last-name").type(segundoNome);
        cy.get("#email").type("thiagoherculan@gmail.com");    /*interagindo com elemento do tipo texto*/
        cy.get("#requests").type("Vegetarian");
        cy.get("#signature").type(`${primeiroNome} ${segundoNome}`);
    })

    it("seleciona 2 tickets do ticket quantity", () =>{
        cy.get("#ticket-quantity").select("2");   /* Interagindo com elemento do tipo select*/
    });

    it.only("seleciona o ticket 'Vip' do ticket type", () =>{
        cy.get("#vip").check();                                   /*Interagindo com radio buttons*/
    })

    it("has 'TICKETBOX' header's heading", () =>{});
});