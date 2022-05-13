describe('User Onboarding App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    })

    const nameInput = () => cy.get('input[name=username]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const tosInput = () => cy.get('input[name=tos]');
    const createAFriend = () => cy.get('input[type=submit]');
    const michael = () => cy.get('input[name=tom]')

    it('sanity check', () => {
        expect(1 + 1).to.equal(2);
    })

    it('make sure elements are showing', () => {
        nameInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        tosInput().should('exist');
        createAFriend().should('exist');
        michael().should('not.exist');
    })

    it('can get and type field inputs', () => {
        nameInput()
            .should('have.value', '')
            .type('Enslein, Michael')
            .should('have.value', 'Enslein, Michael');

        emailInput()
            .should('have.value', '')
            .type('michael@enslein.com')
            .should('have.value', 'michael@enslein.com');

        passwordInput()
            .should('have.value', '')
            .type('Password123')
            .should('have.value', 'Password123');
    })
    
    it('checkbox can be checked', () => {
        createAFriend()
            .should('be.disabled')
    })

    describe('adding a new friend', () => {
        it('can use create a friend submit button to make new friend', () => {
            nameInput().type('John');
            emailInput().type('John@apple.com');
            passwordInput().type('Password123');
            tosInput().check();
            createAFriend().click();
        })
    })
    describe('adding a new friend', () => {
        it('can use create a friend submit button to make new friend', () => {
            nameInput().type('John');
            emailInput().type('John@apple.com');
            tosInput().check();
            createAFriend().should('be.disabled');
        })
    })


})