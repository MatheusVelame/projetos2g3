describe('test suit buscar cafeteria', () => {
 
    it('cenario1', () => { // O usuário irá informar o termo "natural" na busca e visualizará a cafeteria "Café Natural".

        //Login como admin e cadastro do grupo "Empresários"
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

        cy.visit('/')
        
        cy.get('.dropdown > button').then(($button) => {
            cy.wrap($button).trigger('mouseover');
    
            cy.get('.dropdown-menu').invoke('css', 'display', 'block');
    
            cy.get('.dropdown-menu').should('be.visible');
    
            cy.get('.dropdown-menu button[type="submit"]').click(); 
        });

        cy.get('.dropdown > button').trigger('mouseover');

        cy.get('.dropdown > button').then(($button) => {
            cy.wrap($button).trigger('mouseover');
    
            cy.get('.dropdown-menu').invoke('css', 'display', 'block');
    
            cy.get('.dropdown-menu').should('be.visible');
    
            cy.get('.dropdown-menu a[href="/login/"]').then(($link) => {
            const loginUrl = $link.attr('href');
            cy.visit(loginUrl);
            });
        });
        
        //Cadastro do empresário "Pedro José Silva"
        cy.get('.btn').click()
        cy.get('#name').type('Pedro José Silva')
        cy.get('#email').type('pjsilva@example.com')
        cy.get('#username').type('pjsilva')
        cy.get('#password').type('pjs123')
        cy.get('#confirm_password').type('pjs123')
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

        //Cadastro da Cafeteria "Café Natural"
        cy.get('#nome_cafeteria').type('Café Natural')
        cy.get('#responsavel').type('Pedro José Silva')
        cy.get('#endereco').type('Rua da Guia, 100, Bairro do Recife')
        cy.get('#descricao').type('Cafeteria vegana e orgânica.')
        cy.get('#email').type('cnatural@example.com')
        cy.get('#horas_funcionamento').type('12:00 - 23:00')
        cy.get('#link_redesocial').type('https://www.instagram.com/cafenatural')
        cy.get('#site_cafeteria').type('https://www.cafenatural.com')
        cy.get('#cnpj').type('84405297000165')
        cy.get('#whatsapp').type('5581980000000')
        cy.get('.cadastrar').click()
        cy.get('h1').invoke('text').then((text) => {
            expect(text).to.include('Cadastro concluído com sucesso!');
          });
        cy.wait(3000);

        //Cadastro da Cafeteria "Café Moderno"
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

        cy.get('#nome_cafeteria').type('Café Moderno')
        cy.get('#responsavel').type('Pedro José Silva')
        cy.get('#endereco').type('Avenida Boa Viagem, 500, Recife')
        cy.get('#descricao').type('Cafeteria moderna com vista para o mar.')
        cy.get('#email').type('cmoderno@example.com')
        cy.get('#horas_funcionamento').type('08:00 - 20:00')
        cy.get('#link_redesocial').type('https://www.instagram.com/cafemoderno')
        cy.get('#site_cafeteria').type('https://www.cafemoderno.com')
        cy.get('#cnpj').type('12345678000199')
        cy.get('#whatsapp').type('5581980001111')
        cy.get('.cadastrar').click()
        cy.get('h1').invoke('text').then((text) => {
            expect(text).to.include('Cadastro concluído com sucesso!');
          });
        cy.wait(3000);

        /// Logout do site principal
        cy.get('.dropdown > button').trigger('mouseover');
        cy.get('.dropdown-menu').invoke('css', 'display', 'block');
        cy.get('.dropdown-menu form[action="/logout/"] button[type="submit"]').should('be.visible').click();
        cy.wait(2000);

        // Acessar a página principal e buscar a cafeteria digitando o termo "natural"
        cy.visit('/');
        cy.get('#search-input').type('natural');
        cy.wait(3000);
        cy.get('.search-icon').click();
        cy.wait(2000);
        cy.get('.card-title').should('contain', 'Café Natural');

       // Apagar usuário e grupo no admin
       cy.visit('/admin');
       cy.wait(2000);
       cy.get('#id_username').type('admin');
       cy.get('#id_password').type('123');
       cy.wait(2000);
       cy.get('.submit-row > input').click();
       cy.wait(2000);

       // Apagar usuário "pjsilva"
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
    })

    it('cenario2', () => { // O usuário irá informar o termo "vegana" na busca e visualizará a cafeteria "Café Natural".

        //Login como admin e cadastro do grupo "Empresários"
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

        cy.visit('/')
        
        cy.get('.dropdown > button').then(($button) => {
            cy.wrap($button).trigger('mouseover');
    
            cy.get('.dropdown-menu').invoke('css', 'display', 'block');
    
            cy.get('.dropdown-menu').should('be.visible');
    
            cy.get('.dropdown-menu button[type="submit"]').click(); 
        });

        cy.get('.dropdown > button').trigger('mouseover');

        cy.get('.dropdown > button').then(($button) => {
            cy.wrap($button).trigger('mouseover');
    
            cy.get('.dropdown-menu').invoke('css', 'display', 'block');
    
            cy.get('.dropdown-menu').should('be.visible');
    
            cy.get('.dropdown-menu a[href="/login/"]').then(($link) => {
            const loginUrl = $link.attr('href');
            cy.visit(loginUrl);
            });
        });
        
        //Cadastro do empresário "Pedro José Silva"
        cy.get('.btn').click()
        cy.get('#name').type('Pedro José Silva')
        cy.get('#email').type('pjsilva@example.com')
        cy.get('#username').type('pjsilva')
        cy.get('#password').type('pjs123')
        cy.get('#confirm_password').type('pjs123')
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

        //Cadastro da Cafeteria "Café Natural"
        cy.get('#nome_cafeteria').type('Café Natural')
        cy.get('#responsavel').type('Pedro José Silva')
        cy.get('#endereco').type('Rua da Guia, 100, Bairro do Recife')
        cy.get('#descricao').type('Cafeteria vegana e orgânica.')
        cy.get('#email').type('cnatural@example.com')
        cy.get('#horas_funcionamento').type('12:00 - 23:00')
        cy.get('#link_redesocial').type('https://www.instagram.com/cafenatural')
        cy.get('#site_cafeteria').type('https://www.cafenatural.com')
        cy.get('#cnpj').type('84405297000165')
        cy.get('#whatsapp').type('5581980000000')
        cy.get('.cadastrar').click()
        cy.get('h1').invoke('text').then((text) => {
            expect(text).to.include('Cadastro concluído com sucesso!');
          });
        cy.wait(3000);

        //Cadastro da Cafeteria "Café Moderno"
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

        cy.get('#nome_cafeteria').type('Café Moderno')
        cy.get('#responsavel').type('Pedro José Silva')
        cy.get('#endereco').type('Avenida Boa Viagem, 500, Recife')
        cy.get('#descricao').type('Cafeteria moderna com vista para o mar.')
        cy.get('#email').type('cmoderno@example.com')
        cy.get('#horas_funcionamento').type('08:00 - 20:00')
        cy.get('#link_redesocial').type('https://www.instagram.com/cafemoderno')
        cy.get('#site_cafeteria').type('https://www.cafemoderno.com')
        cy.get('#cnpj').type('12345678000199')
        cy.get('#whatsapp').type('5581980001111')
        cy.get('.cadastrar').click()
        cy.get('h1').invoke('text').then((text) => {
            expect(text).to.include('Cadastro concluído com sucesso!');
          });
        cy.wait(3000);

        /// Logout do site principal
        cy.get('.dropdown > button').trigger('mouseover');
        cy.get('.dropdown-menu').invoke('css', 'display', 'block');
        cy.get('.dropdown-menu form[action="/logout/"] button[type="submit"]').should('be.visible').click();
        cy.wait(2000);

        // Acessar a página principal e buscar a cafeteria digitando o termo "vegana"
        cy.visit('/');
        cy.get('#search-input').type('vegana');
        cy.wait(3000);
        cy.get('.search-icon').click();
        cy.wait(2000);
        cy.get('.card-title').should('contain', 'Café Natural');

        // Clicar no botão "Ver mais" da cafeteria "Café Natural"
        cy.get('a[href*="/detalhes/"]').contains('Ver mais').click();
        cy.wait(3000);

        // Rolar até o final da página
        cy.scrollTo('bottom');
        cy.wait(3000);

       // Apagar usuário e grupo no admin
       cy.visit('/admin');
       cy.wait(2000);
       cy.get('#id_username').type('admin');
       cy.get('#id_password').type('123');
       cy.wait(2000);
       cy.get('.submit-row > input').click();
       cy.wait(2000);

       // Apagar usuário "pjsilva"
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
    })

    it('cenario3', () => { // O usuário irá informar o termo "rock" na busca e não serão apresentados resultados, pois não há nenhuma cafeteria com o nome ou descrição contendo o termo pesquisado.

        //Login como admin e cadastro do grupo "Empresários"
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

        cy.visit('/')
        
        cy.get('.dropdown > button').then(($button) => {
            cy.wrap($button).trigger('mouseover');
    
            cy.get('.dropdown-menu').invoke('css', 'display', 'block');
    
            cy.get('.dropdown-menu').should('be.visible');
    
            cy.get('.dropdown-menu button[type="submit"]').click(); 
        });

        cy.get('.dropdown > button').trigger('mouseover');

        cy.get('.dropdown > button').then(($button) => {
            cy.wrap($button).trigger('mouseover');
    
            cy.get('.dropdown-menu').invoke('css', 'display', 'block');
    
            cy.get('.dropdown-menu').should('be.visible');
    
            cy.get('.dropdown-menu a[href="/login/"]').then(($link) => {
            const loginUrl = $link.attr('href');
            cy.visit(loginUrl);
            });
        });
        
        //Cadastro do empresário "Joana Andrade Silva"
        cy.get('.btn').click()
        cy.get('#name').type('Joana Andrade Silva')
        cy.get('#email').type('jas@example.com')
        cy.get('#username').type('jasilva')
        cy.get('#password').type('jas123')
        cy.get('#confirm_password').type('jas123')
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

        //Cadastro da Cafeteria "Café do Sistema"
        cy.get('#nome_cafeteria').type('Café do Sistema')
        cy.get('#responsavel').type('Joana Andrade Silva')
        cy.get('#endereco').type('Rua da Guia, 100, Bairro do Recife')
        cy.get('#descricao').type('Cafeteria tech.')
        cy.get('#email').type('csistema@example.com')
        cy.get('#horas_funcionamento').type('12:00 - 23:00')
        cy.get('#link_redesocial').type('https://www.instagram.com/cafedosistema')
        cy.get('#site_cafeteria').type('https://www.cafedosistema.com')
        cy.get('#cnpj').type('84405297000165')
        cy.get('#whatsapp').type('5581980000000')
        cy.get('.cadastrar').click()
        cy.get('h1').invoke('text').then((text) => {
            expect(text).to.include('Cadastro concluído com sucesso!');
          });
        cy.wait(3000);

        //Cadastro da Cafeteria "Café Moderno"
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

        cy.get('#nome_cafeteria').type('Café Moderno')
        cy.get('#responsavel').type('Joana Andrade Silva')
        cy.get('#endereco').type('Avenida Boa Viagem, 500, Recife')
        cy.get('#descricao').type('Cafeteria moderna com vista para o mar.')
        cy.get('#email').type('cmoderno@example.com')
        cy.get('#horas_funcionamento').type('08:00 - 20:00')
        cy.get('#link_redesocial').type('https://www.instagram.com/cafemoderno')
        cy.get('#site_cafeteria').type('https://www.cafemoderno.com')
        cy.get('#cnpj').type('12345678000199')
        cy.get('#whatsapp').type('5581980001111')
        cy.get('.cadastrar').click()
        cy.get('h1').invoke('text').then((text) => {
            expect(text).to.include('Cadastro concluído com sucesso!');
          });
        cy.wait(3000);

        /// Logout do site principal
        cy.get('.dropdown > button').trigger('mouseover');
        cy.get('.dropdown-menu').invoke('css', 'display', 'block');
        cy.get('.dropdown-menu form[action="/logout/"] button[type="submit"]').should('be.visible').click();
        cy.wait(2000);

        // Acessar a página principal e buscar a cafeteria digitando o termo "rock"
        cy.visit('/');
        cy.get('#search-input').type('rock');
        cy.get('.search-icon').click();
        cy.wait(2000);

        // Verificar se não há resultados da busca
        cy.get('.card-title').should('not.exist');
        cy.contains('Nenhuma cafeteria encontrada com o termo "."').should('be.visible'); //modificar quando for corrigido (ou suprimido) o retorno do termo pesquisado.

       // Apagar usuário e grupo no admin
       cy.visit('/admin');
       cy.wait(2000);
       cy.get('#id_username').type('admin');
       cy.get('#id_password').type('123');
       cy.wait(2000);
       cy.get('.submit-row > input').click();
       cy.wait(2000);

       // Apagar usuário "pjsilva"
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
    })

    it('cenario4', () => { 
        //Login como admin e cadastro do grupo "Empresários"
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

        cy.visit('/')
        
        cy.get('.dropdown > button').then(($button) => {
            cy.wrap($button).trigger('mouseover');
    
            cy.get('.dropdown-menu').invoke('css', 'display', 'block');
    
            cy.get('.dropdown-menu').should('be.visible');
    
            cy.get('.dropdown-menu button[type="submit"]').click(); 
        });

        cy.get('.dropdown > button').trigger('mouseover');

        cy.get('.dropdown > button').then(($button) => {
            cy.wrap($button).trigger('mouseover');
    
            cy.get('.dropdown-menu').invoke('css', 'display', 'block');
    
            cy.get('.dropdown-menu').should('be.visible');
    
            cy.get('.dropdown-menu a[href="/login/"]').then(($link) => {
            const loginUrl = $link.attr('href');
            cy.visit(loginUrl);
            });
        });
        
        // Cadastro do empresário "Pedro José Silva"
        cy.get('.btn').click()
        cy.get('#name').type('Pedro José Silva')
        cy.get('#email').type('pjsilva@example.com')
        cy.get('#username').type('pjsilva')
        cy.get('#password').type('pjs123')
        cy.get('#confirm_password').type('pjs123')
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

        // Cadastro das cafeterias "Café Natural" e "Café Moderno" por Pedro
        cy.get('#nome_cafeteria').type('Café Natural')
        cy.get('#responsavel').type('Pedro José Silva')
        cy.get('#endereco').type('Rua da Guia, 100, Bairro do Recife')
        cy.get('#descricao').type('Cafeteria vegana e orgânica.')
        cy.get('#email').type('cnatural@example.com')
        cy.get('#horas_funcionamento').type('12:00 - 23:00')
        cy.get('#link_redesocial').type('https://www.instagram.com/cafenatural')
        cy.get('#site_cafeteria').type('https://www.cafenatural.com')
        cy.get('#cnpj').type('84405297000165')
        cy.get('#whatsapp').type('5581980000000')
        cy.get('.cadastrar').click()
        cy.get('h1').invoke('text').then((text) => {
            expect(text).to.include('Cadastro concluído com sucesso!');
          });
        cy.wait(2000);

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

        cy.get('#nome_cafeteria').type('Café Moderno')
        cy.get('#responsavel').type('Pedro José Silva')
        cy.get('#endereco').type('Avenida Boa Viagem, 500, Recife')
        cy.get('#descricao').type('Cafeteria moderna com vista para o mar.')
        cy.get('#email').type('cmoderno@example.com')
        cy.get('#horas_funcionamento').type('08:00 - 20:00')
        cy.get('#link_redesocial').type('https://www.instagram.com/cafemoderno')
        cy.get('#site_cafeteria').type('https://www.cafemoderno.com')
        cy.get('#cnpj').type('12345678000199')
        cy.get('#whatsapp').type('5581980001111')
        cy.get('.cadastrar').click()
        cy.get('h1').invoke('text').then((text) => {
            expect(text).to.include('Cadastro concluído com sucesso!');
          });
        cy.wait(3000);

        // Cadastro do empresário "Joana Maria"
        cy.get('.dropdown > button').trigger('mouseover');
        cy.get('.dropdown-menu').invoke('css', 'display', 'block');
        cy.get('.dropdown-menu form[action="/logout/"] button[type="submit"]').should('be.visible').click();
        cy.wait(2000);

        cy.visit('/');
        cy.get('.dropdown > button').trigger('mouseover');
        cy.get('.dropdown-menu').invoke('css', 'display', 'block');
        cy.get('.dropdown-menu a[href="/login/"]').then(($link) => {
            const loginUrl = $link.attr('href');
            cy.visit(loginUrl);
        });

        cy.get('.btn').click();
        cy.get('#name').type('Joana Maria')
        cy.get('#email').type('jmaria@example.com')
        cy.get('#username').type('jmaria')
        cy.get('#password').type('jm123')
        cy.get('#confirm_password').type('jm123')
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

        // Cadastro das cafeterias "Café Bela Vista" e "Café Central" por Joana
        cy.get('#nome_cafeteria').type('Café Bela Vista')
        cy.get('#responsavel').type('Joana Maria')
        cy.get('#endereco').type('Rua Bela Vista, 200, Recife')
        cy.get('#descricao').type('Cafeteria com vista para o parque.')
        cy.get('#email').type('cbvista@example.com')
        cy.get('#horas_funcionamento').type('10:00 - 22:00')
        cy.get('#link_redesocial').type('https://www.instagram.com/cafebelavista')
        cy.get('#site_cafeteria').type('https://www.cafebelavista.com')
        cy.get('#cnpj').type('78945612000133')
        cy.get('#whatsapp').type('5581980002222')
        cy.get('.cadastrar').click()
        cy.get('h1').invoke('text').then((text) => {
            expect(text).to.include('Cadastro concluído com sucesso!');
          });
        cy.wait(2000);

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

        cy.get('#nome_cafeteria').type('Café Central')
        cy.get('#responsavel').type('Joana Maria')
        cy.get('#endereco').type('Avenida Central, 300, Recife')
        cy.get('#descricao').type('Cafeteria no centro da cidade.')
        cy.get('#email').type('ccentral@example.com')
        cy.get('#horas_funcionamento').type('09:00 - 21:00')
        cy.get('#link_redesocial').type('https://www.instagram.com/cafecentral')
        cy.get('#site_cafeteria').type('https://www.cafecentral.com')
        cy.get('#cnpj').type('45678912000122')
        cy.get('#whatsapp').type('5581980003333')
        cy.get('.cadastrar').click()
        cy.get('h1').invoke('text').then((text) => {
            expect(text).to.include('Cadastro concluído com sucesso!');
          });
        cy.wait(3000);

        /// Logout do site principal
        cy.get('.dropdown > button').trigger('mouseover');
        cy.get('.dropdown-menu').invoke('css', 'display', 'block');
        cy.get('.dropdown-menu form[action="/logout/"] button[type="submit"]').should('be.visible').click();
        cy.wait(2000);

        // Acessar a página principal e buscar sem digitar nada para listar todas as cafeterias
        cy.visit('/');
        cy.get('.search-icon').click();
        cy.wait(2000);

        // Verificar se todas as cafeterias cadastradas aparecem nos resultados da busca
        cy.get('.card-title').should('contain', 'Café Natural');
        cy.get('.card-title').should('contain', 'Café Moderno');
        cy.get('.card-title').should('contain', 'Café Bela Vista');
        cy.get('.card-title').should('contain', 'Café Central');

        // Apagar usuários e grupo no admin
        cy.visit('/admin');
        cy.wait(2000);
        cy.get('#id_username').type('admin');
        cy.get('#id_password').type('123');
        cy.wait(2000);
        cy.get('.submit-row > input').click();
        cy.wait(2000);

        // Apagar usuário "pjsilva"
        cy.get('.model-user > th > a').click();
        cy.wait(2000);
        cy.get(':nth-child(2) > .field-username > a').click();
        cy.wait(2000);
        cy.get('.deletelink').click();
        cy.wait(2000);
        cy.get('div > [type="submit"]').click();
        cy.wait(2000);

        // Apagar usuário "jmaria"
        cy.visit('/admin/auth/user/');
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
