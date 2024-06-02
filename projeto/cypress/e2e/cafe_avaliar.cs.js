describe('test suit avaliar cafe', () => {
    it('cenario1', () => { // Vou tentar deixar uma avaliação para a Cafeteria Testando estando cadastrado e logado no sistema como João Mendes (e-mail “jsm@gmail.com”, senha “jms123456”). Avaliarei a Cafeteria Testando com uma nota de “4 estrelas”, deixarei o comentário “Muito bom, pena que é caro” e definirei o gasto por pessoa como “R$100-120” e funcionará;
        cy.visit('/')
        cy.get('.dropdown > button').trigger('mouseover');

    // Esperar que o dropdown esteja visível
        cy.get('.dropdown > button').then(($button) => {
        // Passar o mouse sobre o botão dropdown
            cy.wrap($button).trigger('mouseover');
    
            // Forçar a visibilidade do menu dropdown
            cy.get('.dropdown-menu').invoke('css', 'display', 'block');
    
            // Esperar que o dropdown esteja visível
            cy.get('.dropdown-menu').should('be.visible');
    
            // Selecionar o link de login no dropdown
            cy.get('.dropdown-menu a[href="/login/"]').then(($link) => {
            const loginUrl = $link.attr('href');
            cy.visit(loginUrl);
            });
        });
        
        // Primeiro cria empresário
        cy.get('.btn').click()
        cy.get('#name').type('Alice Martins')
        cy.get('#email').type('alicem@gmail.com')
        cy.get('#username').type('alice_martins')
        cy.get('#password').type('alice123')
        cy.get('#confirm_password').type('alice123')
        cy.get('#is_business').click()
        cy.get('.criar-conta').click()

        cy.get('.dropdown > button').trigger('mouseover');
        cy.get('.dropdown > button').then(($button) => {

            cy.wrap($button).trigger('mouseover');
            cy.get('.dropdown-menu').invoke('css', 'display', 'block');
            cy.get('.dropdown-menu').should('be.visible');
            cy.get('.dropdown-menu a[href="/cadastro_cafeteria/"]').then(($link) => {
            const loginUrl = $link.attr('href');
            cy.visit(loginUrl);
            });
        });

        cy.get('#nome_cafeteria').type('Cafeteria Testando')
        cy.get('#responsavel').type('Alice Martins')
        cy.get('#endereco').type('Rua das Maravilhas, número 123, Bairro do Recife')
        cy.get('#descricao').type('Cafeteria good vibes.')
        cy.get('#email').type('teste@teste.com')
        cy.get('#horas_funcionamento').type('12:00 - 23:00')
        cy.get('#link_redesocial').type('https://www.instagram.com/cafeteriatestando')
        cy.get('#site_cafeteria').type('https://www.cafeteriatestando.com')
        cy.get('#cnpj').type('50695189000152')
        cy.get('#whatsapp').type('5581991523645')
        cy.get('.cadastrar').click()
        cy.get('h1').invoke('text').then((text) => {
            expect(text).to.include('Cadastro concluído com sucesso!');
          });
        cy.wait(3000)

        cy.visit('/')
        cy.get('.dropdown > button').trigger('mouseover');

    // Esperar que o dropdown esteja visível
        cy.get('.dropdown > button').then(($button) => {
        // Passar o mouse sobre o botão dropdown
            cy.wrap($button).trigger('mouseover');
    
            // Forçar a visibilidade do menu dropdown
            cy.get('.dropdown-menu').invoke('css', 'display', 'block');
    
            // Esperar que o dropdown esteja visível
            cy.get('.dropdown-menu').should('be.visible');
    
            // Selecionar o link de login no dropdown
            cy.get('.dropdown-menu a[href="/login/"]').then(($link) => {
            const loginUrl = $link.attr('href');
            cy.visit(loginUrl);
            });
        });
        
        // Primeiro cria usuário
        cy.get('.btn').click()
        cy.get('#name').type('João Mendes')
        cy.get('#email').type('jsm@gmail.com')
        cy.get('#username').type('joao_mendes')
        cy.get('#password').type('jsm123456')
        cy.get('#confirm_password').type('jsm123456')
        cy.get('.criar-conta').click()

        cy.get('.botao-pag-inicial').click();
        cy.wait(2000);
        cy.get('.btn-group > .btn').click();
        cy.wait(2000);
        cy.get('.rounded-button2').click();
        cy.wait(3000)

        // Fazendo a avaliação
        cy.get('#star4').click();
        cy.get('#comentario').type('Muito bom, pena que é caro');
        cy.wait(3000)
        cy.get('input[id="gasto6"]').should('be.checked');
        cy.get('button.submit-btn').click()
        cy.wait(3000)
        cy.get('h1').invoke('text').then((text) => {
            expect(text).to.include('Avaliação enviada com sucesso!');
          });

        cy.visit('/admin');
        cy.wait(2000);
        cy.get('#id_username').type('admin');
        cy.get('#id_password').type('123');
        cy.wait(2000);
        cy.get('.submit-row > input').click();
        cy.wait(2000);
        cy.get('.model-user > th > a').click()
        cy.wait(2000);
        cy.get(':nth-child(2) > .field-username > a').click()
        cy.wait(2000);
        cy.get('.deletelink').click();
        cy.wait(2000);
        cy.get('div > [type="submit"]').click();
        cy.wait(2000);
    })

})
