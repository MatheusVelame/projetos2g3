describe('test Consultar Favoritos', () => {
    it('cenario_1', () => {
        cy.visit('/admin');
        cy.wait(2000);
        cy.get('#id_username').type('admin');
        cy.get('#id_password').type('123');
        cy.wait(2000);
        cy.get('.submit-row > input').click();
        cy.wait(2000);
        cy.get('.model-group > :nth-child(2) > .addlink').click();
        cy.get('#id_name').type('Empresários');
        cy.get('.default').click();

        cy.visit('/');
        cy.get('.dropdown > button').trigger('mouseover');
        cy.get('.dropdown > button').then(($button) => {
            cy.wrap($button).trigger('mouseover');
            cy.get('.dropdown-menu').invoke('css', 'display', 'block');
            cy.get('.dropdown-menu').should('be.visible');
            cy.get('.button-sair').click();
            cy.get('.dropdown-menu a[href="/favoritos/"]').then(($link) => {
                const loginUrl = $link.attr('href');
                cy.wait(2000);
                cy.visit(loginUrl);
            });
        });
        cy.wait(1000);
        cy.get('h1').invoke('text').should('have.string', "Fazer login");
        cy.wait(2000);

        cy.visit('/admin');
        cy.wait(2000);
        cy.get('#id_username').type('admin');
        cy.get('#id_password').type('123');
        cy.wait(2000);
        cy.get('.submit-row > input').click();
        cy.wait(2000);
        
        // Apagar grupo Empresários
        cy.visit('/admin/auth/group/');
        cy.wait(2000);
        cy.get('input[name="_selected_action"]').check();
        cy.get('select[name="action"]').select('delete_selected');
        cy.get('button[name="index"]').click();
        cy.wait(2000);
        cy.get('input[type="submit"]').contains('Sim, eu tenho certeza').click();
        cy.wait(2000);

        // Logout do admin
        cy.get('form#logout-form button[type="submit"]').click();
    });

    it('cenario_2', () => {
        cy.visit('/admin');
        cy.wait(2000);
        cy.get('#id_username').type('admin');
        cy.get('#id_password').type('123');
        cy.wait(2000);
        cy.get('.submit-row > input').click();
        cy.wait(2000);
        cy.get('.model-group > :nth-child(2) > .addlink').click();
        cy.get('#id_name').type('Empresários');
        cy.get('.default').click();

        cy.visit('/');
        cy.get('.dropdown > button').trigger('mouseover');
        cy.get('.dropdown > button').then(($button) => {
            cy.wrap($button).trigger('mouseover');
            cy.get('.dropdown-menu').invoke('css', 'display', 'block');
            cy.get('.dropdown-menu').should('be.visible');
            cy.get('.button-sair').click();
            cy.get('.dropdown-menu a[href="/login/"]').then(($link) => {
                const loginUrl = $link.attr('href');
                cy.wait(2000);
                cy.visit(loginUrl);
            });
        });
        cy.wait(1000);
        cy.get('.btn').click();
        cy.wait(2000);
        cy.get('#name').type('Pedro Antônio Gonçalves');
        cy.get('#email').type('pag@gmail.com');
        cy.get('#username').type('pagoncalves');
        cy.get('#password').type('pag12345');
        cy.get('#confirm_password').type('pag12345');
        cy.wait(3000);
        cy.get('.criar-conta').click();
        cy.wait(2000);
        cy.get('.botao-pag-inicial').click();
        cy.get('.dropdown > button').trigger('mouseover');
        cy.get('.dropdown > button').then(($button) => {

            cy.wrap($button).trigger('mouseover');
            cy.get('.dropdown-menu').invoke('css', 'display', 'block');
            cy.get('.dropdown-menu').should('be.visible');
            cy.get('.dropdown-menu a[href="/favoritos/"]').then(($link) => {
                const loginUrl = $link.attr('href');
                cy.wait(2000);
                cy.visit(loginUrl);
            });
        });
        cy.wait(2000);
        cy.get('p').should('contain.text', 'Você ainda não favoritou nenhuma cafeteria');
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
        
        // Apagar grupo Empresários
        cy.visit('/admin/auth/group/');
        cy.wait(2000);
        cy.get('input[name="_selected_action"]').check();
        cy.get('select[name="action"]').select('delete_selected');
        cy.get('button[name="index"]').click();
        cy.wait(2000);
        cy.get('input[type="submit"]').contains('Sim, eu tenho certeza').click();
        cy.wait(2000);

        // Logout do admin
        cy.get('form#logout-form button[type="submit"]').click();
    });

    it('cenario_3', () => {
        cy.visit('/admin');
        cy.wait(2000);
        cy.get('#id_username').type('admin');
        cy.get('#id_password').type('123');
        cy.wait(2000);
        cy.get('.submit-row > input').click();
        cy.wait(2000);
        cy.get('.model-group > :nth-child(2) > .addlink').click();
        cy.get('#id_name').type('Empresários');
        cy.get('.default').click();

        cy.visit('/');
        cy.get('.dropdown > button').trigger('mouseover');
        cy.get('.dropdown > button').then(($button) => {
            cy.wrap($button).trigger('mouseover');
            cy.get('.dropdown-menu').invoke('css', 'display', 'block');
            cy.get('.dropdown-menu').should('be.visible');
            cy.get('.button-sair').click();
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
        cy.get('#name').type('João Da Silva Santos');
        cy.get('#email').type('joaosantos@gmail.com');
        cy.get('#username').type('joaossantos');
        cy.get('#password').type('jss12345');
        cy.get('#confirm_password').type('jss12345');
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
        cy.get('#nome_cafeteria').type('Café Bondoso');
        cy.get('#responsavel').type('João Da Silva Santos');
        cy.get('#endereco').type('R. do Nobre, 19 - Nobre, Paulista - PE, 53401-445');
        cy.get('#descricao').type('cafeteria bondosa com os clientes');
        cy.get('#email').type('cafebondoso@gmail.com');
        cy.get('#horas_funcionamento').type('08:00 - 20:00');
        cy.get('#link_redesocial').type('https://www.instagram.com/cafebondoso');
        cy.get('#site_cafeteria').type('https://www.cafebondoso.com');
        cy.get('#cnpj').type('32483525000111');
        cy.get('#whatsapp').type('5581997728174');
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
        cy.get(':nth-child(1) > .card-body > .btn-group > .btn').click();
        cy.wait(2000);
        cy.get('.right-content2 > .btn-group > .btn > a').click();
        cy.wait(2000);
        cy.get('.btn').click();
        cy.wait(2000);
        cy.get('#name').type('Lucas Santos Mendes');
        cy.get('#email').type('lsm@gmail.com');
        cy.get('#username').type('lsmendes');
        cy.get('#password').type('lsm123456');
        cy.get('#confirm_password').type('lsm123456');
        cy.wait(3000);
        cy.get('.criar-conta').click();
        cy.wait(2000);
        cy.get('.botao-pag-inicial').click();
        cy.wait(2000);
        cy.get(':nth-child(1) > .card-body > .btn-group > .btn').click();
        cy.wait(3000);
        cy.get('.right-content2 > .btn-group > .btn').click();
        cy.wait(2000);
        cy.get('.card-title').should('contain.text', 'Café Bondoso');
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
        
        // Apagar grupo Empresários
        cy.visit('/admin/auth/group/');
        cy.wait(2000);
        cy.get('input[name="_selected_action"]').check();
        cy.get('select[name="action"]').select('delete_selected');
        cy.get('button[name="index"]').click();
        cy.wait(2000);
        cy.get('input[type="submit"]').contains('Sim, eu tenho certeza').click();
        cy.wait(2000);

        // Logout do admin
        cy.get('form#logout-form button[type="submit"]').click();


    })
});