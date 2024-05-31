describe('Teste Histórico', () => {
    it('cenario_1', () => { //testa se o login é requerido para visualizar o histórico
        cy.visit('/');
        cy.get('.dropdown > button').trigger('mouseover');
        cy.get('.dropdown > button').then(($button) => {
            cy.wrap($button).trigger('mouseover');
            cy.get('.dropdown-menu').invoke('css', 'display', 'block');
            cy.get('.dropdown-menu').should('be.visible');
            cy.get('.dropdown-menu a[href="/historico/"]').then(($link) => {
            const historico = $link.attr('href');
            cy.wait(2000);
            cy.visit(historico);
        });
        cy.get(':nth-child(4) > input').type('caze@gmail.com');
        cy.get(':nth-child(5) > input').type('123');
        cy.get('.btn-submit').click();
      });
    });

    it('cenario_2', () => { //teste pra ver se a cafeteria após ser visitada duas vezes ela aparece no histórico uma ou duas vezes
        cy.visit('/');
        cy.get('.dropdown > button').trigger('mouseover');
        cy.get('.dropdown > button').then(($button) => {
            cy.wrap($button).trigger('mouseover');
            cy.get('.dropdown-menu').invoke('css', 'display','block');
            cy.get('.dropdown-menu').should('be.visible');
            cy.get('.dropdown-menu a[href="/historico/"]').then(($link) => {
            const historico = $link.attr('href');
            cy.wait(2000);
            cy.visit(historico);
        });
        cy.get(':nth-child(4) > input').type('rosa@gmail.com');
        cy.get(':nth-child(5) > input').type('123');
        cy.get('.btn-submit').click();
        cy.wait(500);
        cy.get(':nth-child(1) > .card-body > .btn-group > .btn').click();
        cy.wait(500);
        cy.get('.div-logo > a > img').click();
        cy.wait(500);
        cy.get(':nth-child(1) > .card-body > .btn-group > .btn').click();
        cy.wait(500);
        cy.get('.div-logo > a > img').click();
        cy.get('.dropdown > button').trigger('mouseover');
        cy.get('.dropdown > button').then(($button) => {
            cy.wrap($button).trigger('mouseover');
            cy.get('.dropdown-menu').invoke('css', 'display', 'block');
            cy.get('.dropdown-menu').should('be.visible');
            cy.get('.dropdown-menu a[href="/historico/"]').then(($link) => {
            const historico = $link.attr('href');
            cy.wait(2000);
            cy.visit(historico);
        });
      });
    });
  });

    it('cenario_3', () => { //teste pra ver se eu visitar a mesma cafeteria só que em datas diferentes ela aparece mais de uma vez mostrando a data correta
        cy.visit('/');
        cy.get('.dropdown > button').trigger('mouseover');
        cy.get('.dropdown > button').then(($button) => {
            cy.wrap($button).trigger('mouseover');
            cy.get('.dropdown-menu').invoke('css', 'display', 'block');
            cy.get('.dropdown-menu').should('be.visible');
            cy.get('.dropdown-menu a[href="/historico/"]').then(($link) => {
            const historico = $link.attr('href');
            cy.wait(2000);
            cy.visit(historico);
            cy.get(':nth-child(4) > input').type('caze@gmail.com');
            cy.get(':nth-child(5) > input').type('123');
            cy.get('.btn-submit').click();
            cy.get('.dropdown > button').trigger('mouseover');
            cy.get('.dropdown > button').then(($button) => {
            cy.wrap($button).trigger('mouseover');
            cy.get('.dropdown-menu').invoke('css', 'display', 'block');
            cy.get('.dropdown-menu').should('be.visible');
            cy.get('.dropdown-menu a[href="/historico/"]').then(($link) => {
            const historico = $link.attr('href');
            cy.wait(2000);
            cy.visit(historico);
        });
      });  
    });
  });
});
});