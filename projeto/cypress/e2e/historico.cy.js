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
            cy.wait(500);
            cy.visit(historico);
            cy.wait(500);
        });
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
        cy.get('.btn').click()
        cy.get('#name').type('Samantha Lins')
        cy.get('#email').type('saaaamlins12@gmail.com')
        cy.get('#username').type('smantha_lins')
        cy.get('#password').type('sam123')
        cy.get('#confirm_password').type('sam123')
        cy.get('#is_business').click()
        cy.get('.criar-conta').click()
        cy.wait(500);
        

        cy.get('.dropdown > button').trigger('mouseover');
        cy.get('.dropdown > button').then(($button) => {

            cy.wrap($button).trigger('mouseover');
            cy.get('.dropdown-menu').invoke('css', 'display', 'block');
            cy.get('.dropdown-menu').should('be.visible');
            cy.get('.dropdown-menu a[href="/cadastro_cafeteria/"]').then(($link) => {
            const caf = $link.attr('href');
            cy.visit(caf);
            });
        });

        cy.get('#nome_cafeteria').type('Cantinho')
        cy.get('#responsavel').type('Samantha Lins')
        cy.get('#endereco').type('Rua da Felicidade, número 808, Boa Viagem')
        cy.get('#descricao').type('Este é um ambiente muito legal no Recife Antigo.')
        cy.get('#email').type('tcudhav@teste.com')
        cy.get('#horas_funcionamento').type('12:00 - 23:00')
        cy.get('#link_redesocial').type('https://www.instagram.com/cantinhodoamor')
        cy.get('#site_cafeteria').type('https://www.cantinhodoamor.com')
        cy.get('#cnpj').type('97224961000146')
        cy.get('#whatsapp').type('5511998613003')
        cy.get('.cadastrar').click()
        cy.get('h1').invoke('text').then((text) => {
            expect(text).to.include('Cadastro concluído com sucesso!');
          });
        cy.wait(3000)

        cy.get('.dropdown > button').trigger('mouseover');
        cy.get('.dropdown > button').then(($button) => {
            cy.wrap($button).trigger('mouseover');
            cy.get('.dropdown-menu').invoke('css', 'display', 'block');
            cy.get('.dropdown-menu').should('be.visible');
            cy.get('.button-sair').click()
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
        cy.get('.btn').click()
        cy.get('#name').type('Samantha Lins')
        cy.get('#email').type('mlins12@gmail.com')
        cy.get('#username').type('antha_lins')
        cy.get('#password').type('sam123')
        cy.get('#confirm_password').type('sam123')
        cy.get('.criar-conta').click()
        cy.wait(500);
      });
      cy.get('.botao-pag-inicial').click()
        
        cy.get(':nth-child(6) > .card-body > .btn-group > .btn').click();
        cy.wait(500);
        cy.get('.div-logo > a > img').click();
        cy.wait(500);
        cy.get(':nth-child(6) > .card-body > .btn-group > .btn').click();
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
  });
});
