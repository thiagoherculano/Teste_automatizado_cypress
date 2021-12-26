
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

    it("seleciona o ticket 'Vip' do ticket type", () =>{
        cy.get("#vip").check();                                   /*Interagindo com radio buttons*/
    });

    it("Seleciona o 'social media' no checkbox", () => {
        cy.get("#social-media").check();
    });

    it("Seleciona 'friend', e 'publication', depois desmarca o 'friend'", () =>{
        cy.get("#friend").check();                               
        cy.get("#publication").check();                           /*Interagindo com checkboxes*/
        cy.get("#friend").uncheck();
    });

    it("verifica se tem escrito 'TICKETBOX' no header", () =>{
        cy.get("header h1").should("contain", "TICKETBOX");        /*Realizando vericaçãoes*/
    });

    it.only("verifica se o email é invalido", () => {
        cy.get("#email")
        .as("email")
        .type("Thiagoherculan-gmail.com");        

        cy.get("#email.invalid").should("exist");     /* verifica se existe uma classe que avisa que tem email invalido*/

        cy.get("@email")
        .clear()
        .type("thiagoherculan@gmail.com");

        cy.get("#email.invalid").should("not.exist");
    });

});