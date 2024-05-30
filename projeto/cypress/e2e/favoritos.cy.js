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
        cy.get(':nth-child(1) > .card-body > .btn-group > .btn').click();
        cy.wait(3000);
        cy.get('.right-content2 > .btn-group > .btn > a').click();
        cy.wait(3000);
        cy.get('h1').invoke('text').should('have.string', "Entrar no Aponte Cafés")
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
        cy.get(':nth-child(1) > .field-username > a').click();
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
        cy.get('#name').type('Luciana Lima Cardoso');
        cy.get('#email').type('lucilcar@gmail.com');
        cy.get('#username').type('lucilima');
        cy.get('#password').type('luc12345');
        cy.get('#confirm_password').type('luc12345');
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
        cy.get('#nome_cafeteria').type('Café Aconchego');
        cy.get('#responsavel').type('Luciana Lima Cardoso');
        cy.get('#endereco').type('R. Dr. João Asfora, 26 - loja 1 - Ilha do Leite, Recife - PE, 50070-430');
        cy.get('#descricao').type('cafeteria recomendada por especialistas');
        cy.get('#email').type('aconchegocafe@gmail.com');
        cy.get('#horas_funcionamento').type('08:00 - 20:00');
        cy.get('#link_redesocial').type('https://www.instagram.com/cafeaconchego');
        cy.get('#site_cafeteria').type('https://www.cafeaconchego.com');
        cy.get('#cnpj').type('20096019000190');
        cy.get('#whatsapp').type('5581987765129');
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
        cy.get('#name').type('Joana Maria Sales');
        cy.get('#email').type('jmari@hotmail.com');
        cy.get('#username').type('MariaJoana');
        cy.get('#password').type('joaninhasales93');
        cy.get('#confirm_password').type('joaninhasales93');
        cy.wait(3000);
        cy.get('.criar-conta').click();
        cy.wait(2000);
        cy.get('.botao-pag-inicial').click();
        cy.wait(2000);
        cy.get(':nth-child(1) > .card-body > .btn-group > .btn').click();
        cy.wait(2000);
        cy.get('.right-content2 > .btn-group > .btn > a').click();
        cy.wait(1000);
        cy.visit('/');
        cy.get(':nth-child(1) > .card-body > .btn-group > .btn').click();
        cy.wait(2000);
        cy.get('button.btn a').should('contain.text', 'Desfavoritar');
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
        cy.get(':nth-child(1) > .field-username > a').click();
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

    it('cenario_3', () => {
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
        cy.get('#name').type('Eduarda Carneiro de Lima');
        cy.get('#email').type('dudacarneiro@gmail.com');
        cy.get('#username').type('dudalimaa');
        cy.get('#password').type('dud12345');
        cy.get('#confirm_password').type('dud12345');
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
        cy.get('#responsavel').type('Eduarda Carneiro de Lima');
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
        cy.get('#name').type('João Santos Mendes');
        cy.get('#email').type('jsm@gmail.com');
        cy.get('#username').type('joasantos');
        cy.get('#password').type('jms123456');
        cy.get('#confirm_password').type('jms123456');
        cy.wait(3000);
        cy.get('.criar-conta').click();
        cy.wait(2000);
        cy.get('.botao-pag-inicial').click();
        cy.wait(2000);
        cy.get(':nth-child(1) > .card-body > .btn-group > .btn').click();
        cy.get('.right-content2 > .btn-group > .btn').click();
        cy.visit('/');
        cy.get(':nth-child(1) > .card-body > .btn-group > .btn').click();
        cy.wait(3000);
        cy.get('.right-content2 > .btn-group > .btn > a').click();
        cy.visit('/');
        cy.get(':nth-child(1) > .card-body > .btn-group > .btn').click();
        cy.wait(3000);
        cy.get('button.btn a').should('contain.text', 'Favoritar');
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

        

        
    })
  });