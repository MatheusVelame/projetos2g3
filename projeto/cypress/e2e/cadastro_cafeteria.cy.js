describe('test suit cadastrar cafeteria', () => {
    it('cenario1', () => { // Vou me cadastrar na plataforma como “Samantha Lins”, email “samlins12@gmail.com”, senha “sam123”, nome de usuário “samantha_lins”, site da cafeteria “https://www.cantinhodoamor.com” e marcarei a opção propríetário. Vou cadastrar minha cafeteria “Cantinho do Amor”,  nome da responsável com “Samantha Lins”, vou preencher a descrição com “Este é um ambiente muito legal no Recife Antigo.” , o endereço com “Rua da Felicidade, número 808, Boa Viagem”, o email com “teste@teste.com”, o número de whatsapp com “5581998613003”, o horário de funcionamento de “12:00 - 23:00”, o link para redes sociais com “https://www.instagram.com/cantinhodoamor”, CNPJ com “77224361000146”, e não adicionarei um arquivo png da foto do ambiente e o sistema deve autorizar o cadastro da cafeteria Cantinho do Amor.

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
        
        cy.get('.btn').click()
        cy.get('#name').type('Samantha Lins')
        cy.get('#email').type('samlins12@gmail.com')
        cy.get('#username').type('samantha_lins')
        cy.get('#password').type('sam123')
        cy.get('#confirm_password').type('sam123')
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

        cy.get('#nome_cafeteria').type('Cantinho do Amor')
        cy.get('#responsavel').type('Samantha Lins')
        cy.get('#endereco').type('Rua da Felicidade, número 808, Boa Viagem')
        cy.get('#descricao').type('Este é um ambiente muito legal no Recife Antigo.')
        cy.get('#email').type('teste@teste.com')
        cy.get('#horas_funcionamento').type('12:00 - 23:00')
        cy.get('#link_redesocial').type('https://www.instagram.com/cantinhodoamor')
        cy.get('#site_cafeteria').type('https://www.cantinhodoamor.com')
        cy.get('#cnpj').type('77224361000146')
        cy.get('#whatsapp').type('5581998613003')
        cy.get('.cadastrar').click()
        cy.get('h1').invoke('text').then((text) => {
            expect(text).to.include('Cadastro concluído com sucesso!');
          });
        cy.wait(3000)
        
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

    it('cenario2', () => { // Vou me cadastrar na plataforma como “Rosália Brito”, email “rosaliabrito34@gmail.com”, usuário “rosaliab” e senha ”rosalia123”. Vou cadastrar minha cafeteria “Comida de Vó”,  com meu nome como responsável “Rosália Brito”, vou preencher a descrição como “Ambiente acolhedor e descontraído.”, o endereço com “Rua das Ladeiras, número 500, Boa Vista”, o email com “teste2@teste.com”, site da cafeteria “https://www.comidadevo.com”, o número de whatsapp com “5581981710026”, o horário de funcionamento de “8:00 - 22:00”, o link para redes sociais com “https://www.instagram.com/comidadevo”, CNPJ com “77224361000146”,  e não adicionarei um arquivo png da foto do ambiente, e não funcionará, pois o sistema deve identificar que o CNPJ já está cadastrado.
        
        cy.visit('/')
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
        
        cy.get('.btn').click()
        cy.get('#name').type('Samantha Lins')
        cy.get('#email').type('samlins12@gmail.com')
        cy.get('#username').type('samantha_lins')
        cy.get('#password').type('sam123')
        cy.get('#confirm_password').type('sam123')
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

        cy.get('#nome_cafeteria').type('Cantinho do Amor')
        cy.get('#responsavel').type('Samantha Lins')
        cy.get('#endereco').type('Rua da Felicidade, número 808, Boa Viagem')
        cy.get('#descricao').type('Este é um ambiente muito legal no Recife Antigo.')
        cy.get('#email').type('teste@teste.com')
        cy.get('#horas_funcionamento').type('12:00 - 23:00')
        cy.get('#link_redesocial').type('https://www.instagram.com/cantinhodoamor')
        cy.get('#site_cafeteria').type('https://www.cantinhodoamor.com')
        cy.get('#cnpj').type('77224361000146')
        cy.get('#whatsapp').type('5581998613003')
        cy.get('.cadastrar').click()

        cy.get('.dropdown > button').then(($button) => {
                cy.wrap($button).trigger('mouseover');
        
                cy.get('.dropdown-menu').invoke('css', 'display', 'block');
        
                cy.get('.dropdown-menu').should('be.visible');
        
                cy.get('.dropdown-menu button[type="submit"]').click(); 
            });
        
        cy.get('.dropdown > button').then(($button) => {
                cy.wrap($button).trigger('mouseover');
        
                cy.get('.dropdown-menu').invoke('css', 'display', 'block');
        
                cy.get('.dropdown-menu').should('be.visible');

                cy.get('.dropdown-menu a[href="/login/"]').then(($link) => {
                const loginUrl = $link.attr('href');
                cy.visit(loginUrl);
                });
            });

            cy.get('.btn').click()
            cy.get('#name').type('Rosália Brito')
            cy.get('#email').type('rosaliabrito34@gmail.com')
            cy.get('#username').type('rosaliab')
            cy.get('#password').type('rosalia123')
            cy.get('#confirm_password').type('rosalia123')
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
    
            cy.get('#nome_cafeteria').type('Comida de Vó')
            cy.get('#responsavel').type('Rosália Brito')
            cy.get('#endereco').type('Rua das Ladeiras, número 500, Boa Vista')
            cy.get('#descricao').type('Ambiente acolhedor e descontraído')
            cy.get('#email').type('teste2@teste.com')
            cy.get('#horas_funcionamento').type('8:00 - 22:00')
            cy.get('#link_redesocial').type('https://www.instagram.com/comidadevo')
            cy.get('#site_cafeteria').type('https://www.comidadevo.com')
            cy.get('#cnpj').type('77224361000146')
            cy.get('#whatsapp').type('5581981710026')
            cy.get('.cadastrar').click()

            cy.get('p').invoke('text').then((text) => {
                expect(text).to.include('O CNPJ já está em uso');
              });
            
            cy.wait(3000)
            
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
        cy.get(':nth-child(2) > .field-username > a').click()
        cy.wait(2000);
        cy.get('.deletelink').click();
        cy.wait(2000);
        cy.get('div > [type="submit"]').click();
        cy.wait(2000);

    })

    it('cenario3', () => { // Vou me cadastrar na plataforma como “Júnior Gonçalves”, email “juniorgoncalves@gmail.com”, usuário “juniorgoncalves” e senha “junior1234”. Vou cadastrar minha cafeteria “Love Coffee”,  com meu nome como responsável “Júnior Golçalves”, vou preencher a descrição como “Ambiente com comidas e cafés deliciosos. Também é coworking e petfriendly.”, o endereço com “Rua das Marias, número 230, Boa vista”, o email com “teste4@teste.com”, o número de whatsapp com “5581981710026” o horário de funcionamento de “8:00 - 22:00”, o link para redes sociais com “https://www.instagram.com/lovecoffee”, CNPJ com “12333432123489”, site da cafeteria “https://www.lovecoffee.com” e adicionarei não um arquivo png da foto do ambiente, e não funcionará, pois o sistema deve identificar que o whatsapp já está cadastrado.

        
        cy.visit('/')
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
        
        cy.get('.btn').click()
        cy.get('#name').type('Samantha Lins')
        cy.get('#email').type('samlins12@gmail.com')
        cy.get('#username').type('samantha_lins')
        cy.get('#password').type('sam123')
        cy.get('#confirm_password').type('sam123')
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

        cy.get('#nome_cafeteria').type('Cantinho do Amor')
        cy.get('#responsavel').type('Samantha Lins')
        cy.get('#endereco').type('Rua da Felicidade, número 808, Boa Viagem')
        cy.get('#descricao').type('Este é um ambiente muito legal no Recife Antigo.')
        cy.get('#email').type('teste@teste.com')
        cy.get('#horas_funcionamento').type('12:00 - 23:00')
        cy.get('#link_redesocial').type('https://www.instagram.com/cantinhodoamor')
        cy.get('#site_cafeteria').type('https://www.cantinhodoamor.com')
        cy.get('#cnpj').type('77224361000146')
        cy.get('#whatsapp').type('5581998613003')
        cy.get('.cadastrar').click()

        cy.get('.dropdown > button').then(($button) => {

                cy.wrap($button).trigger('mouseover');
        
 
                cy.get('.dropdown-menu').invoke('css', 'display', 'block');

                cy.get('.dropdown-menu').should('be.visible');
        

                cy.get('.dropdown-menu button[type="submit"]').click(); 
            });
        
        cy.get('.dropdown > button').then(($button) => {
                cy.wrap($button).trigger('mouseover');
        
                cy.get('.dropdown-menu').invoke('css', 'display', 'block');

                cy.get('.dropdown-menu').should('be.visible');
        
                cy.get('.dropdown-menu a[href="/login/"]').then(($link) => {
                const loginUrl = $link.attr('href');
                cy.visit(loginUrl);
                });
            });

            cy.get('.btn').click()
            cy.get('#name').type('Júnior Gonçalves')
            cy.get('#email').type('juniorgoncalves@gmail.com')
            cy.get('#username').type('juniorgoncalves')
            cy.get('#password').type('junior1234')
            cy.get('#confirm_password').type('junior1234')
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
    
            cy.get('#nome_cafeteria').type('Love Coffee')
            cy.get('#responsavel').type('Júnior Golçalves')
            cy.get('#endereco').type('Rua das Marias, número 230, Boa vista')
            cy.get('#descricao').type('Ambiente com comidas e cafés deliciosos. Também é coworking e petfriendly.')
            cy.get('#email').type('teste4@teste.com')
            cy.get('#horas_funcionamento').type('8:00 - 22:00')
            cy.get('#link_redesocial').type('https://www.instagram.com/lovecoffee')
            cy.get('#site_cafeteria').type('https://www.lovecoffee.com')
            cy.get('#cnpj').type('12333432123489')
            cy.get('#whatsapp').type('5581998613003')
            cy.get('.cadastrar').click()

            cy.get('p').invoke('text').then((text) => {
                expect(text).to.include('O número de WhatsApp já está em uso.');
              });
            
            cy.wait(3000)
        
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
            cy.get(':nth-child(2) > .field-username > a').click()
            cy.wait(2000);
            cy.get('.deletelink').click();
            cy.wait(2000);
            cy.get('div > [type="submit"]').click();
            cy.wait(2000);

    })

    it('cenario4', () => { // Vou me cadastrar na plataforma como  “Paolla Oliveira”, email “paollaoliv@gmail.com”, senha “paolla123”, nome de usuário “paollaoliveira” e marcarei a opção propríetário. Vou cadastrar minha cafeteria “Versado”,  com meu nome como responsável “Paolla Oliveira”, deixarei a descrição “Ambiente confortável para um bom café e bate papo com amigos!”, o endereço com “Rua Padre Landim, número 302, Madalena”, o email com “teste3@teste.com”, o número de whatsapp com “81940028922”, o horário de funcionamento de “9:00 - 18:00”, o link para redes sociais com “https://www.instagram.com/versadocafe”, CNPJ com “5576634441000107”, site da cafeteria “https://www.versadocafe.com” e não adicionarei um arquivo png da foto do ambiente, e o sistema deve identificar que o campo de whatsapp deve conter 13 dígitos.
        
        cy.visit('/')
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
        
        cy.get('.btn').click()
        cy.get('#name').type('Paolla Oliveira')
        cy.get('#email').type('paollaoliv@gmail.com')
        cy.get('#username').type('paollaoliveira')
        cy.get('#password').type('paolla123')
        cy.get('#confirm_password').type('paolla123')
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

        cy.get('#nome_cafeteria').type('Versado')
        cy.get('#responsavel').type('Paolla Oliveira')
        cy.get('#endereco').type('Rua Padre Landim, número 302, Recife Antigo')
        cy.get('#descricao').type('Ambiente confortável para um bom café e bate papo com amigos!')
        cy.get('#email').type('teste3@teste.com')
        cy.get('#horas_funcionamento').type('9:00 - 18:00')
        cy.get('#link_redesocial').type('https://www.instagram.com/versadocafe')
        cy.get('#site_cafeteria').type('https://www.versadocafe.com')
        cy.get('#cnpj').type('5576634441000107')
        cy.get('#whatsapp').type('81940028922')
        cy.get('.cadastrar').click()
        cy.get('p').invoke('text').then((text) => {
            expect(text).to.include('O número de WhatsApp deve ter 13 dígitos.');
            });
        
        cy.wait(3000)
    
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

    it('cenario5', () => { // Vou me cadastrar na plataforma como “Lucas Silva”, email “lucassilva@gmail.com”, senha “lucas123”, nome de usuário “lucas_silva” e marcarei a opção proprietário. Vou cadastrar minha cafeteria “Café do Lucas”, com meu nome como responsável “Lucas Silva”, deixarei a descrição “Ambiente confortável para um bom café e bate papo com amigos!”, o endereço com “Rua das Flores, número 100, Centro”, email com “teste5@teste.com”, o número de whatsapp com “5581940028933”, o horário de funcionamento de “10:00 - 19:00”, o link para redes sociais com “https://www.instagram.com/cafedolucas”, CNPJ com “12.345.678/9012-34”, site da cafeteria “https://www.cafedolucas.com” e não adicionarei um arquivo png da foto do ambiente, e o sistema deve identificar que o campo de CNPJ deve contar apenas 14 dígitos.
        
        cy.visit('/')
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
        
        cy.get('.btn').click()
        cy.get('#name').type('Lucas Silva')
        cy.get('#email').type('lucassilva@gmail.com')
        cy.get('#username').type('lucas_silva')
        cy.get('#password').type('lucas123')
        cy.get('#confirm_password').type('lucas123')
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

        cy.get('#nome_cafeteria').type('Café do Lucas')
        cy.get('#responsavel').type('Lucas Silva')
        cy.get('#endereco').type('Rua das Flores, número 100, Centro')
        cy.get('#descricao').type('Ambiente confortável para um bom café e bate papo com amigos!')
        cy.get('#email').type('teste4@teste.com')
        cy.get('#horas_funcionamento').type('10:00 - 19:00')
        cy.get('#link_redesocial').type('https://www.instagram.com/cafedolucas')
        cy.get('#site_cafeteria').type('https://www.cafedolucas.com')
        cy.get('#cnpj').type('12.345.678/9012-34')
        cy.get('#whatsapp').type('5581940028933')
        cy.get('.cadastrar').click()
        cy.get('p').invoke('text').then((text) => {
            expect(text).to.include('O CNPJ deve conter apenas números e ter 14 dígitos.');
            });
        
        cy.wait(3000)
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