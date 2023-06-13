describe('appointment', () => {
  context("Managing appointments", () => {
      beforeEach(() => {
        cy.visit('https://katalon-demo-cura.herokuapp.com')
      });
      
      it("createA() - creates an appointment", () => {
        cy.get("#btn-make-appointment").click();

        cy.get("#txt-username").type("John Doe");
        cy.get("#txt-password").type("ThisIsNotAPassword");
        cy.get("#btn-login").click();

        cy.get("#combo_facility").select("Seoul CURA Healthcare Center");
        cy.get("#chk_hospotal_readmission").click();
        cy.get("#radio_program_medicaid").click();
        cy.get(".input-group-addon").click();
        cy.contains('td', '30').click();
        cy.get('#txt_visit_date').type('{esc}')
        cy.get("#txt_comment").type("CURA Healthcare Service");
        cy.get("#btn-book-appointment").click();

        cy.get("#facility").should("have.text","Seoul CURA Healthcare Center");
        cy.get("#hospital_readmission").should("have.text","Yes");
        cy.get("#program").should("have.text","Medicaid");
        cy.get("#visit_date").should("have.text","30/05/2023");
        cy.get("#comment").should("have.text","CURA Healthcare Service");
      });

      it("deleteA() - deletes an appointment", () => {
        cy.get("#btn-make-appointment").click();

        cy.get("#txt-username").type("John Doe");
        cy.get("#txt-password").type("ThisIsNotAPassword");
        cy.get("#btn-login").click();
        
        cy.get("#menu-toggle").click();
        cy.get("#sidebar-wrapper").should("have.class","active");
        cy.contains('li','History').click();
        cy.get("p").should("contain.text","No appointment");
      });
    });
})