

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

    it("verifica se o email é invalido", () => {
        cy.get("#email")
        .as("email")
        .type("Thiagoherculan-gmail.com");        

        cy.get("#email.invalid").should("exist");     /* verifica se existe uma classe que avisa que tem email invalido*/

        cy.get("@email")
        .clear()
        .type("thiagoherculan@gmail.com");

        cy.get("#email.invalid").should("not.exist");
    });

    it("Preenche o formulario depois reseta", () => {
        const primeiroNome = "Thiago";
        const segundoNome = "Herculano";
        const fullName = `${primeiroNome} ${segundoNome}`;

        cy.get("#first-name").type(primeiroNome);        
        cy.get("#last-name").type(segundoNome);
        cy.get("#email").type("thiagoherculan@gmail.com"); 
        cy.get("#ticket-quantity").select("2");
        cy.get("#vip").check();
        cy.get("#friend").check();
        cy.get("#requests").type("IPA beer");

        cy.get(".agreement p").should(
            "contain",
            `I, ${fullName}, wish to buy 2 VIP tickets.`
        );

        cy.get("#agree").click();
        cy.get("#signature").type(fullName);

        cy.get("button[type='submit']")
        .as("submitButton")
        .should("not.be.disabled");

        cy.get("button[type='reset']").click();

        cy.get("@submitButton").should("be.disabled");
    });

    it.only("Preenche os campos obrigatorios e ver se o butão estar habilitado", () =>{
        const customer = {
            primeiroNome : "Thiago",
            segundoNome: "Herculano",
            email :"thiagoherculan@gmail.com"
        };

        cy.fillMandatoryFields(customer);

        cy.get("button[type='submit']")
        .as("submitButton")
        .should("not.be.disabled");

        cy.get("#agree").uncheck();

        cy.get("@submitButton").should("be.disabled");
    });
});