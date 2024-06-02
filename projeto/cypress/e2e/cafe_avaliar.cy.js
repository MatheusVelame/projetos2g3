describe('test suit avaliar cafe', () => {
  it('cenario3', () => { // Vou deixar uma avaliação, logado com o e-mail “mauriciodesouza@gmail.com” e senha “mauricio123”,  na Cafeteria da Esquina e ela não aparecerá na Cafeteria Panela da Roça, e não conseguirei.
    cy.visit('/')
    cy.get('.dropdown > button').then(($button) => {
      cy.wrap($button).trigger('mouseover');

      cy.get('.dropdown-menu').invoke('css', 'display', 'block');

      cy.get('.dropdown-menu').should('be.visible');

      cy.get('.dropdown-menu a[href="/login/"]').then(($link) => {
        const loginUrl = $link.attr('href');
        cy.visit(loginUrl);
      });
    });

    // Primeiro cria empresário da primeira cafeteria
    cy.get('.btn').click()
    cy.get('#name').type('Felipe Souza')
    cy.get('#email').type('fesouza@gmail.com')
    cy.get('#username').type('felipe_souza')
    cy.get('#password').type('fesouza123')
    cy.get('#confirm_password').type('fesouza123')
    cy.get('#is_business').click()
    cy.get('.criar-conta').click()
    cy.wait(3000)

    cy.get('.dropdown > button').trigger('mouseover');
    cy.get('.dropdown > button').then(($button) => {

      cy.wrap($button).trigger('mouseover');
      cy.get('.dropdown-menu').invoke('css', 'display', 'block');
      cy.get('.dropdown-menu').should('be.visible');
      cy.get('.dropdown-menu a[href="/cadastro_cafeteria/"]').click();
    });

    // Cria a Cafeteria da Esquina
    cy.get('#nome_cafeteria').type('Cafeteria da Esquina')
    cy.get('#responsavel').type('Felipe Souza')
    cy.get('#endereco').type('Rua Professor Armando Moura, numero 456, Bairro do Recife')
    cy.get('#descricao').type('Cafeteria com o preco do tamanho do seu bolso.')
    cy.get('#email').type('teste3@teste.com')
    cy.get('#horas_funcionamento').type('12:00 - 23:00')
    cy.get('#link_redesocial').type('https://www.instagram.com/cafeteriadaesquina')
    cy.get('#site_cafeteria').type('https://www.cafeteriadaesquina.com')
    cy.get('#cnpj').type('89470720000124')
    cy.get('#whatsapp').type('5581984731652')
    cy.get('.cadastrar').click()
    cy.wait(3000)
    cy.get('.dropdown > button').should('be.visible').trigger('mouseover');

    cy.get('.dropdown > button').then(($button) => {
      cy.wrap($button).trigger('mouseover');
      cy.get('.dropdown-menu').invoke('css', 'display', 'block');
      cy.get('.dropdown-menu').should('be.visible');
      cy.wait(500);
      cy.get('.button-sair').should('be.visible').click({ force: true });
    });
    cy.wait(3000)

    cy.visit('/')
    cy.get('.dropdown > button').then(($button) => {
      cy.wrap($button).trigger('mouseover');

      cy.get('.dropdown-menu').invoke('css', 'display', 'block');

      cy.get('.dropdown-menu').should('be.visible');

      cy.get('.dropdown-menu a[href="/login/"]').then(($link) => {
        const loginUrl = $link.attr('href');
        cy.visit(loginUrl);
      });
    });

    // Primeiro cria empresário da segunda cafeteria
    cy.get('.btn').click()
    cy.get('#name').type('Amanda Alves')
    cy.get('#email').type('amandaalves@gmail.com')
    cy.get('#username').type('amanda_alves')
    cy.get('#password').type('aalves123')
    cy.get('#confirm_password').type('aalves123')
    cy.get('#is_business').click()
    cy.get('.criar-conta').click()
    cy.wait(3000)

    cy.get('.dropdown > button').trigger('mouseover');
    cy.get('.dropdown > button').then(($button) => {

      cy.wrap($button).trigger('mouseover');
      cy.get('.dropdown-menu').invoke('css', 'display', 'block');
      cy.get('.dropdown-menu').should('be.visible');
      cy.get('.dropdown-menu a[href="/cadastro_cafeteria/"]').click();
    });

    // Cria a Cafeteria Panela da Roça
    cy.get('#nome_cafeteria').type('Cafeteria Panela da Roca')
    cy.get('#responsavel').type('Amanda Alves')
    cy.get('#endereco').type('Rua do Arco iris, numero 147, Bairro do Recife')
    cy.get('#descricao').type('Cafeteria de comida caseira.')
    cy.get('#email').type('teste3@teste.com')
    cy.get('#horas_funcionamento').type('12:00 - 23:00')
    cy.get('#link_redesocial').type('https://www.instagram.com/cafeteriadaesquina')
    cy.get('#site_cafeteria').type('https://www.cafeteriadaesquina.com')
    cy.get('#cnpj').type('36886176000130')
    cy.get('#whatsapp').type('5581997846547')
    cy.get('.cadastrar').click()
    cy.wait(3000)
    cy.get('.dropdown > button').should('be.visible').trigger('mouseover');

    cy.get('.dropdown > button').then(($button) => {
      cy.wrap($button).trigger('mouseover');
      cy.get('.dropdown-menu').invoke('css', 'display', 'block');
      cy.get('.dropdown-menu').should('be.visible');
      cy.wait(500);
      cy.get('.button-sair').should('be.visible').click({ force: true });
    });
    cy.wait(3000)

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

    // Cria o cliente Maurício de Souza
    cy.get('.btn').click()
    cy.get('#name').type('Mauricio de Souza')
    cy.get('#email').type('mauriciodesouza@gmail.com')
    cy.get('#username').type('mauricio_souza')
    cy.get('#password').type('mauricio123')
    cy.get('#confirm_password').type('mauricio123')
    cy.get('.criar-conta').click()
    cy.wait(3000);

    cy.get('.botao-pag-inicial').click();
    cy.wait(2000);
    cy.get('.btn-group > .btn').click();
    cy.wait(2000);
    cy.get('.rounded-button2').click();
    cy.wait(2000)

    // Fazendo a avaliação
    cy.get('[for="star1"]').click();
    cy.get('#comentario').type('Não gostei.');
    cy.wait(3000)
    cy.get('[for="gasto5"]').click();
    cy.get('button.submit-btn').click()
    cy.wait(3000)
    cy.get('h1').invoke('text').then((text) => {
      expect(text).to.include('Avaliação enviada com sucesso!');
    });

    // Avaliação não está na Cafeteria da Roça
    cy.visit('/')
    cy.wait(2000);
    cy.get(':nth-child(2) > .card-body > .btn-group > .btn').click();
    cy.contains('Não gostei.').should('not.exist');
    cy.wait(2000);

    // Vendo a avaliação nos detalhes da Cafeteria da Esquina
    cy.visit('/')
    cy.wait(2000);
    cy.get(':nth-child(1) > .card-body > .btn-group > .btn').click();
    cy.contains('Não gostei.').should('be.visible');
    cy.wait(2000);

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
    cy.wait(1000);
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

  });
  
  it('cenario1', () => { // Vou tentar deixar uma avaliação para a Cafeteria Testando estando cadastrado e logado no sistema como João Mendes (e-mail “jsm@gmail.com”, senha “jms123456”). Avaliarei a Cafeteria Testando com uma nota de “4 estrelas”, deixarei o comentário “Muito bom, pena que é caro” e definirei o gasto por pessoa como “R$100-120” e funcionará.
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

    // Primeiro cria empresário
    cy.get('.btn').click()
    cy.get('#name').type('Alice Martins')
    cy.get('#email').type('alicem@gmail.com')
    cy.get('#username').type('alice_martins')
    cy.get('#password').type('alice123')
    cy.get('#confirm_password').type('alice123')
    cy.get('#is_business').click()
    cy.get('.criar-conta').click()
    cy.wait(3000)

    cy.get('.dropdown > button').trigger('mouseover');
    cy.get('.dropdown > button').then(($button) => {

      cy.wrap($button).trigger('mouseover');
      cy.get('.dropdown-menu').invoke('css', 'display', 'block');
      cy.get('.dropdown-menu').should('be.visible');
      cy.get('.dropdown-menu a[href="/cadastro_cafeteria/"]').click();
    });

    // Cria a Cafeteria Testando
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
    cy.wait(3000)
    cy.get('.dropdown > button').should('be.visible').trigger('mouseover');

    cy.get('.dropdown > button').then(($button) => {
      cy.wrap($button).trigger('mouseover');
      cy.get('.dropdown-menu').invoke('css', 'display', 'block');
      cy.get('.dropdown-menu').should('be.visible');
      cy.wait(500);
      cy.get('.button-sair').should('be.visible').click({ force: true });
    });
    cy.wait(3000)

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

    // Cria o cliente João Mendes
    cy.get('.btn').click()
    cy.get('#name').type('João Mendes')
    cy.get('#email').type('jsm@gmail.com')
    cy.get('#username').type('joao_mendes')
    cy.get('#password').type('jsm123456')
    cy.get('#confirm_password').type('jsm123456')
    cy.get('.criar-conta').click()
    cy.wait(3000);

    cy.get('.botao-pag-inicial').click();
    cy.wait(2000);
    cy.get('.btn-group > .btn').click();
    cy.wait(2000);
    cy.get('.rounded-button2').click();
    cy.wait(2000)

    // Fazendo a avaliação
    cy.get('[for="star4"]').click();
    cy.get('#comentario').type('Muito bom, pena que é caro');
    cy.wait(3000)
    cy.get('[for="gasto6"]').click();
    cy.get('button.submit-btn').click()
    cy.wait(3000)
    cy.get('h1').invoke('text').then((text) => {
      expect(text).to.include('Avaliação enviada com sucesso!');
    });

    // Vendo a avaliação nos detalhes
    cy.get('.botao-pag-inicial').click();
    cy.wait(2000);
    cy.get('.btn-group > .btn').click();
    cy.contains('Muito bom, pena que é caro').should('be.visible');
    cy.wait(2000);

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
    cy.wait(1000);
    cy.get(':nth-child(2) > .field-username > a').click()
    cy.wait(2000);
    cy.get('.deletelink').click();
    cy.wait(2000);
    cy.get('div > [type="submit"]').click();
    cy.wait(2000);
  })

  it('cenario2', () => { // Vou tentar deixar uma avaliação para a cafeteria “Amor de Vó” sem estar cadastrado no sistema e não conseguirei;
    cy.visit('/');
    cy.get('.dropdown > button').then(($button) => {
      cy.wrap($button).trigger('mouseover');

      cy.get('.dropdown-menu').invoke('css', 'display', 'block');

      cy.get('.dropdown-menu').should('be.visible');

      cy.get('.dropdown-menu a[href="/login/"]').then(($link) => {
        const loginUrl = $link.attr('href');
        cy.visit(loginUrl);
      });
    });

    // Primeiro cria empresário
    cy.get('.btn').click()
    cy.get('#name').type('Suzanna Vieira')
    cy.get('#email').type('susu@gmail.com')
    cy.get('#username').type('suzanna_vieira')
    cy.get('#password').type('suzaninha123')
    cy.get('#confirm_password').type('suzaninha123')
    cy.get('#is_business').click()
    cy.get('.criar-conta').click()
    cy.wait(3000)

    cy.get('.dropdown > button').trigger('mouseover');
    cy.get('.dropdown > button').then(($button) => {

      cy.wrap($button).trigger('mouseover');
      cy.get('.dropdown-menu').invoke('css', 'display', 'block');
      cy.get('.dropdown-menu').should('be.visible');
      cy.get('.dropdown-menu a[href="/cadastro_cafeteria/"]').click();
    });

    // Cria a Cafeteria Amor de Vó
    cy.get('#nome_cafeteria').type('Amor de Vo')
    cy.get('#responsavel').type('Suzanna Vieira')
    cy.get('#endereco').type('Rua das Camelias, numero 987, Bairro do Recife')
    cy.get('#descricao').type('Cafeteria aconchegante.')
    cy.get('#email').type('teste2@teste.com')
    cy.get('#horas_funcionamento').type('12:00 - 23:00')
    cy.get('#link_redesocial').type('https://www.instagram.com/cafeteriaamordevo')
    cy.get('#site_cafeteria').type('https://www.cafeteriaamordevo.com')
    cy.get('#cnpj').type('15066252000190')
    cy.get('#whatsapp').type('5581984765231')
    cy.get('.cadastrar').click()
    cy.wait(3000)
    cy.get('.dropdown > button').should('be.visible').trigger('mouseover');

    cy.get('.dropdown > button').then(($button) => {
      cy.wrap($button).trigger('mouseover');
      cy.get('.dropdown-menu').invoke('css', 'display', 'block');
      cy.get('.dropdown-menu').should('be.visible');
      cy.wait(500);
      cy.get('.button-sair').should('be.visible').click({ force: true });
    });
    cy.wait(3000)

    // Tentando avaliar uma cafeteria sem estar logado
    cy.get('.btn-group > .btn').click();
    cy.wait(2000);
    cy.get('.rounded-button2').click();
    cy.wait(2000)

    // Aparece para fazer login
    cy.get('h1').invoke('text').then((text) => {
      expect(text).to.include('Entrar no Aponte Cafés');
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

  });