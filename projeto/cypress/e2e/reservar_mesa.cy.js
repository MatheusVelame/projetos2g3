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
        cy.get('.rounded-button').click();
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
        cy.get('.btn-group > .btn').click();
        cy.wait(2000);
        cy.get('.rounded-button').click();
        cy.wait(2000);
        cy.get('.btn').click();
        cy.wait(2000);
        cy.get('#name').type('Maria Alice Alcântara');
        cy.get('#email').type('malice@hotmail.com');
        cy.get('#username').type('Malice');
        cy.get('#password').type('maa12345');
        cy.get('#confirm_password').type('maa12345');
        cy.wait(3000);
        cy.get('.criar-conta').click();
        cy.wait(2000);
        cy.get('.botao-pag-inicial').click();
        cy.wait(2000);
        cy.get('.btn-group > .btn').click();
        cy.wait(2000);
        cy.get('.rounded-button').click();
        cy.get('#nome_cliente').type('Maria Alice Alcântara');
        cy.get('#data_reserva').then($input => {
            $input[0].value = '2024-06-11'; 
        });
        cy.get('#horario_reserva').type('10:30');
        cy.get('#numero_de_pessoas').type('2');
        cy.get('#observacao').type('Quero uma mesa dentro do estabelecimento.')
        cy.wait(3000);
        cy.get('.rounded-button2').click();
        cy.get('h5').invoke('text').should('have.string', "Café Aconchego")
        cy.wait(2000);
        cy.visit('/');

        

        cy.visit('/admin');
        cy.wait(2000);
        cy.get('#id_username').type('admin');
        cy.get('#id_password').type('123');
        cy.wait(2000);
        cy.get('.submit-row > input').click();
        cy.wait(2000);
        cy.get('.model-reservacafe > th > a').click();
        cy.wait(2000);
        cy.get('.field-__str__ > a').click();
        cy.wait(2000);
        cy.get('.deletelink').click();
        cy.wait(2000);
        cy.get('div > [type="submit"]').click()
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
        cy.get('.btn-group > .btn').click();
        cy.wait(2000);
        cy.get('.rounded-button').click();
        cy.wait(2000);
        cy.get('.btn').click();
        cy.wait(2000);
        cy.get('#name').type('Maria Alice Alcântara');
        cy.get('#email').type('malice@hotmail.com');
        cy.get('#username').type('Malice');
        cy.get('#password').type('maa12345');
        cy.get('#confirm_password').type('maa12345');
        cy.wait(3000);
        cy.get('.criar-conta').click();
        cy.wait(2000);
        cy.get('.botao-pag-inicial').click();
        cy.wait(2000);
        cy.get('.btn-group > .btn').click();
        cy.wait(2000);
        cy.get('.rounded-button').click();
        cy.get('#nome_cliente').type('Maria Alice Alcântara');
        cy.get('#data_reserva').then($input => {
            $input[0].value = '2024-06-11'; 
        });
        cy.get('#horario_reserva').type('10:30');
        cy.get('#numero_de_pessoas').type('2');
        cy.get('#observacao').type('Quero uma mesa dentro do estabelecimento.')
        cy.wait(3000);
        cy.get('.rounded-button2').click();
        cy.wait(2000);
        cy.visit('/');
        cy.wait(2000);
        cy.get('.btn-group > .btn').click();
        cy.wait(2000);
        cy.get('.rounded-button').click();
        cy.get('#nome_cliente').type('Maria Alice Alcântara');
        cy.get('#data_reserva').then($input => {
            $input[0].value = '2024-06-11'; 
        });
        cy.get('#horario_reserva').type('10:30');
        cy.get('#numero_de_pessoas').type('2');
        cy.get('#observacao').type('Quero uma mesa dentro do estabelecimento.')
        cy.wait(3000);
        cy.get('.rounded-button2').click();
        cy.get('.alert.alert-danger').within(() => {
            cy.contains('Café já reservado para o horário solicitado!').should('exist');
        });
        cy.wait(2000);
        

        cy.visit('/admin');
        cy.wait(2000);
        cy.get('#id_username').type('admin');
        cy.get('#id_password').type('123');
        cy.wait(2000);
        cy.get('.submit-row > input').click();
        cy.wait(2000);
        cy.get('.model-reservacafe > th > a').click();
        cy.wait(2000);
        cy.get('.field-__str__ > a').click();
        cy.wait(2000);
        cy.get('.deletelink').click();
        cy.wait(2000);
        cy.get('div > [type="submit"]').click()
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

    it('cenario_4', () => {
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
        cy.get('.btn-group > .btn').click();
        cy.wait(2000);
        cy.get('.rounded-button').click();
        cy.wait(2000);
        cy.get('.btn').click();
        cy.wait(2000);
        cy.get('#name').type('Maria Alice Alcântara');
        cy.get('#email').type('malice@hotmail.com');
        cy.get('#username').type('Malice');
        cy.get('#password').type('maa12345');
        cy.get('#confirm_password').type('maa12345');
        cy.wait(3000);
        cy.get('.criar-conta').click();
        cy.wait(2000);
        cy.get('.botao-pag-inicial').click();
        cy.wait(2000);
        cy.get('.btn-group > .btn').click();
        cy.wait(2000);
        cy.get('.rounded-button').click();
        cy.get('#nome_cliente').type('Maria Alice Alcântara');
        cy.get('#data_reserva').then($input => {
            $input[0].value = '2024-06-11'; 
        });
        cy.get('#horario_reserva').type('10:30');
        cy.get('#numero_de_pessoas').type('2');
        cy.get('#observacao').type('Quero uma mesa dentro do estabelecimento.')
        cy.wait(3000);
        cy.get('.rounded-button2').click();
        cy.wait(2000);
        cy.get('.rounded-button3').click();
        cy.wait(2000);
        cy.get('.col').invoke('text').should('have.string', "Você não tem reservas.")
        

        cy.visit('/admin');
        cy.get('#id_username').type('admin')
        cy.get('#id_password').type('123');
        cy.get('.submit-row > input').click();
        cy.get('.model-user > th > a').click();
        cy.get(':nth-child(1) > .field-username > a').click();
        cy.get('.deletelink').click();
        cy.get('div > [type="submit"]').click();
        cy.get(':nth-child(2) > .field-username > a').click();
        cy.get('.deletelink').click();
        cy.get('div > [type="submit"]').click();
        cy.visit('/');

        cy.visit('/');

    });

    it('cenario_5', () => {
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
        cy.get('.btn-group > .btn').click();
        cy.wait(2000);
        cy.get('.rounded-button').click();
        cy.wait(2000);
        cy.get('.btn').click();
        cy.wait(2000);
        cy.get('#name').type('Maria Alice Alcântara');
        cy.get('#email').type('malice@hotmail.com');
        cy.get('#username').type('Malice');
        cy.get('#password').type('maa12345');
        cy.get('#confirm_password').type('maa12345');
        cy.wait(3000);
        cy.get('.criar-conta').click();
        cy.wait(2000);
        cy.get('.botao-pag-inicial').click();
        cy.wait(2000);
        cy.get('.btn-group > .btn').click();
        cy.wait(2000);
        cy.get('.rounded-button').click();
        cy.get('#nome_cliente').type('Maria Alice Alcântara');
        cy.get('#data_reserva').then($input => {
            $input[0].value = '2024-01-11'; 
        });
        cy.get('#horario_reserva').type('10:30');
        cy.get('#numero_de_pessoas').type('2');
        cy.get('#observacao').type('Quero uma mesa dentro do estabelecimento.')
        cy.wait(3000);
        cy.get('.rounded-button2').click();
        cy.get('.alert.alert-danger').within(() => {
            cy.contains('A data selecionada deve ser futura.').should('exist');
        });
        cy.wait(2000);
        cy.visit('/');

        

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

    it('cenario_6', () => {
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
        cy.get('.btn-group > .btn').click();
        cy.wait(2000);
        cy.get('.rounded-button').click();
        cy.wait(2000);
        cy.get('.btn').click();
        cy.wait(2000);
        cy.get('#name').type('Maria Alice Alcântara');
        cy.get('#email').type('malice@hotmail.com');
        cy.get('#username').type('Malice');
        cy.get('#password').type('maa12345');
        cy.get('#confirm_password').type('maa12345');
        cy.wait(3000);
        cy.get('.criar-conta').click();
        cy.wait(2000);
        cy.get('.botao-pag-inicial').click();
        cy.wait(2000);
        cy.get('.btn-group > .btn').click();
        cy.wait(2000);
        cy.get('.rounded-button').click();
        cy.get('#nome_cliente').type('Maria Alice Alcântara');
        cy.get('#data_reserva').then($input => {
            $input[0].value = '2024-06-11'; 
        });
        cy.get('#horario_reserva').type('10:30');
        cy.get('#numero_de_pessoas').type('0');
        cy.get('#observacao').type('Quero uma mesa dentro do estabelecimento.')
        cy.wait(3000);
        cy.get('.rounded-button2').click();
        cy.get('.alert.alert-danger').within(() => {
            cy.contains('O número de pessoas deve ser maior que zero.').should('exist');
        });
        cy.wait(2000);
        cy.visit('/');

        

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

  });
