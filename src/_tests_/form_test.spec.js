describe('Form App', () => {
    beforeEach(() => {
        cy.visit('localhost:3000')
    })

    const nameInput = () => cy.get('input[name=name]');
    const pepperoni = () => cy.get('input[name=pepperoni]');
    const sausage = () => cy.get('input[name=sausage]');
    const bacon = () => cy.get('input[name=bacon]');
    const chicken = () => cy.get('input[name=chicken]');
    const orderButton = () => cy.get('button[id=order-button]')

    it('Test Check', () => {
        expect(1+2).to.equal(3);
        expect(2+2).not.to.equal(5);
        expect({}).not.to.equal({});
        expect({}).to.eql({});
    })

    it('Proper Elements'), () => {
        nameInput().should('exist');
        pepperoni().should('exist');
        sausage().should('exist');
        bacon().should('exist');
        chicken().should('exist');
        orderButton().should('exist');
    }


        it('Navigate', () => {
            cy.url().should('include', 'localhost');
        })
        it('Name, Checking all boxes', () => {
            nameInput()
                .should('have.value', '')
                .type('Adam')
                .should('have.value', 'Adam')
            pepperoni()
                .should('not.be.checked')
                .check()
                .should('be.checked')
            sausage()
                .should('not.be.checked')
                .check()
                .should('be.checked')
            bacon()
                .should('not.be.checked')
                .check()
                .should('be.checked')
            chicken()
                .should('not.be.checked')
                .check()
                .should('be.checked')
        })

        it('Order Button', () => {
            orderButton()
                .should('be.disabled')
                nameInput().type('Adam')
                orderButton().should('not.be.disabled')
        })

})
