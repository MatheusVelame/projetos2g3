describe('test Detalhes', () => {
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
        cy.get('#name').type('Maria Joaquina Pimenta');
        cy.get('#email').type('mjpimenta@gmail.com');
        cy.get('#username').type('mariajpimenta');
        cy.get('#password').type('mjp12345');
        cy.get('#confirm_password').type('mjp12345');
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
        cy.get('#nome_cafeteria').type('Café Delta');
        cy.get('#responsavel').type('Maria Joaquina Pimenta');
        cy.get('#endereco').type('R. do Nobre, 19 - Nobre, Paulista - PE, 53401-445');
        cy.get('#descricao').type('cafeteria bondosa com os clientes');
        cy.get('#email').type('cafedelta@gmail.com');
        cy.get('#horas_funcionamento').type('08:00 - 20:00');
        cy.get('#link_redesocial').type('https://www.instagram.com/cafebondoso');
        cy.get('#site_cafeteria').type('https://www.cafebondoso.com');
        cy.get('#cnpj').type('32483521223111');
        cy.get('#whatsapp').type('5581097710174');
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
        
        cy.wait(2000);
        cy.get(':nth-child(1) > .card-body > .btn-group > .btn').click();
        cy.wait(2000);
        cy.get('.dropdown-menu a[href="/historico/"]').then(($link) => {
            const loginUrl = $link.attr('href');
            cy.wait(2000);
            cy.visit(loginUrl);
    });
    cy.wait(1000);
    cy.get('h1').invoke('text').should('have.string', "Entrar no Aponte Cafés");
    cy.wait(2000);
    cy.visit('/admin');
    cy.wait(2000);
    cy.get('#id_username').type('admin');
    cy.get('#id_password').type('123');
    cy.wait(2000);
    cy.get('.submit-row > input').click();
    cy.wait(2000);
    cy.get('.model-user > th > a').click();
    cy.wait(2000);
    cy.get(':nth-child(2) > .field-username > a').click();
    cy.wait(2000);
    cy.get('.deletelink').click();
    cy.wait(2000);
    cy.get('div > [type="submit"]').click();
    cy.wait(2000);
    cy.get('#logout-form > button').click();
    cy.visit('/');
});

    it('cenario_2', () => {
        
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
        cy.get('#name').type('Maria Joaquina Pimenta');
        cy.get('#email').type('mjpimenta@gmail.com');
        cy.get('#username').type('mariajpimenta');
        cy.get('#password').type('mjp12345');
        cy.get('#confirm_password').type('mjp12345');
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
        cy.get('#nome_cafeteria').type('Café Delta');
        cy.get('#responsavel').type('Maria Joaquina Pimenta');
        cy.get('#endereco').type('R. do Nobre, 19 - Nobre, Paulista - PE, 53401-445');
        cy.get('#descricao').type('cafeteria bondosa com os clientes');
        cy.get('#email').type('cafedelta@gmail.com');
        cy.get('#horas_funcionamento').type('08:00 - 20:00');
        cy.get('#link_redesocial').type('https://www.instagram.com/cafebondoso');
        cy.get('#site_cafeteria').type('https://www.cafebondoso.com');
        cy.get('#cnpj').type('32483521223111');
        cy.get('#whatsapp').type('5581097710174');
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
        
        cy.wait(2000);
        cy.get('.dropdown-menu a[href="/login/"]').then(($link) => {
            const loginUrl = $link.attr('href');
            cy.wait(2000);
            cy.visit(loginUrl);
            });
        cy.wait(1000);
        cy.get('.btn').click();
        cy.wait(2000);
        cy.get('#name').type('Adriano Souza Pimenta');
        cy.get('#email').type('aspimenta@gmail.com');
        cy.get('#username').type('adrianospimenta');
        cy.get('#password').type('asp12345');
        cy.get('#confirm_password').type('asp12345');
        cy.wait(3000);
        cy.get('.criar-conta').click();
        cy.wait(2000);
        cy.get('.botao-pag-inicial').click();
        cy.wait(2000);
        cy.get(':nth-child(1) > .card-body > .btn-group > .btn').click();
        cy.wait(3000);
        cy.get('.div-logo > a > img')
        cy.get('.dropdown > button').trigger('mouseover');
        cy.get('.dropdown > button').then(($button) => {

            cy.wrap($button).trigger('mouseover');
            cy.get('.dropdown-menu').invoke('css', 'display', 'block');
            cy.get('.dropdown-menu').should('be.visible');
            cy.get('.dropdown-menu a[href="/historico/"]').then(($link) => {
            const loginUrl = $link.attr('href');
            cy.wait(2000);
            cy.visit(loginUrl);
            });
        }); 
        cy.wait(2000);
        cy.get('.card-title').should('contain.text', 'Café Delta');
        cy.wait(2000);

        cy.visit('/admin');
        cy.wait(2000);
        cy.get('#id_username').type('admin');
        cy.get('#id_password').type('123');
        cy.wait(2000);
        cy.get('.submit-row > input').click();
        cy.wait(2000);
        cy.get('.model-user > th > a').click();
        cy.wait(2000);
        cy.get(':nth-child(2) > .field-username > a').click();
        cy.wait(2000);
        cy.get('.deletelink').click();
        cy.wait(2000);
        cy.get('div > [type="submit"]').click();
        cy.wait(2000);
        cy.get(':nth-child(2) > .field-username > a').click();
        cy.wait(2000);
        cy.get('.deletelink').click();
        cy.wait(2000);
        cy.get('div > [type="submit"]').click();
        cy.wait(2000);
        cy.get('#logout-form > button').click();
        cy.visit('/');
       


    });
});