describe('test Favoritar Cafeteria', () => {
    it('cenario_1', () => {
        cy.visit('/');
        cy.get('.dropdown > button').trigger('mouseover');
        cy.get('.dropdown > button').then(($button) => {
            cy.wrap($button).trigger('mouseover');
            cy.get('.dropdown-menu').invoke('css', 'display', 'block');
            cy.get('.dropdown-menu').should('be.visible');
            cy.get('.dropdown-menu a[href="/login/"]').then(($link) => {
            const loginUrl = $link.attr('href');
            cy.wait(2000);
            cy.visit(loginUrl);
            });
        });
        cy.wait(1000);
        cy.get('.btn').click();
        cy.wait(2000);
        cy.get('#is_business').click();
        cy.get('#name').type('Mario Lucas Fernandes');
        cy.get('#email').type('marlf@gmail.com');
        cy.get('#username').type('Mariolf');
        cy.get('#password').type('mar12345');
        cy.get('#confirm_password').type('mar12345');
        cy.wait(3000);
        cy.get('.criar-conta').click();
        cy.wait(2000);
        cy.get('.botao-pag-inicial').click();
        cy.get('.dropdown > button').trigger('mouseover');
        cy.get('.dropdown > button').then(($button) => {

            cy.wrap($button).trigger('mouseover');
            cy.get('.dropdown-menu').invoke('css', 'display', 'block');
            cy.get('.dropdown-menu').should('be.visible');
            cy.get('.dropdown-menu a[href="/cadastro_cafeteria/"]').then(($link) => {
            const loginUrl = $link.attr('href');
            cy.wait(2000);
            cy.visit(loginUrl);
            });
        });
        cy.get('#nome_cafeteria').type('Tres Cafes');
        cy.get('#responsavel').type('Mario Lucas Fernandes');
        cy.get('#endereco').type('Armazém Porto Recife - Marco Zero (Centro do Recife), Recife, PE, 50030-150');
        cy.get('#descricao').type('cafeteria recomendada por especialistas');
        cy.get('#email').type('trescafes123@gmail.com');
        cy.get('#horas_funcionamento').type('14:00 - 20:00');
        cy.get('#link_redesocial').type('https://www.instagram.com/trescafes');
        cy.get('#site_cafeteria').type('https://www.trescafes.com');
        cy.get('#cnpj').type('52271539000189');
        cy.get('#whatsapp').type('5581997765627');
        cy.wait(3000);
        cy.get('.cadastrar').click();
        cy.wait(2000);
        cy.get('.botao-pag-inicial').click();
        cy.wait(1000);
        cy.get('.dropdown > button').then(($button) => {
            cy.wait(2000);
            cy.wrap($button).trigger('mouseover');
            
    
            cy.get('.dropdown-menu').invoke('css', 'display', 'block');
    
            cy.get('.dropdown-menu').should('be.visible');
    
            cy.get('.dropdown-menu button[type="submit"]').click(); 
        });

        cy.wait(3000);
        cy.get(':nth-child(16) > .card-body > .btn-group > .btn').click();
        cy.wait(3000);
        cy.get('.right-content2 > .btn-group > .btn > a').click();
        cy.wait(3000);
        cy.get('h1').invoke('text').should('have.string', "Entrar no Aponte Cafés")
        cy.wait(2000);
    });
  });