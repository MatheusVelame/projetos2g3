describe('test suit visualizar dados perfil', () => {
    it('cenario1', () => {
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
  
      cy.get('.btn').click();
      cy.get('#name').type('Helena Santos');
      cy.get('#email').type('helenasantos@gmail.com');
      cy.get('#username').type('helenassantos');
      cy.get('#password').type('123456');
      cy.get('#confirm_password').type('123456');
      cy.get('.criar-conta').click();
  
      cy.get('.dropdown > button').trigger('mouseover');
      cy.get('.dropdown > button').then(($button) => {
        cy.wrap($button).trigger('mouseover');
        cy.get('.dropdown-menu').invoke('css', 'display', 'block');
        cy.get('.dropdown-menu').should('be.visible');
        cy.get('.dropdown-menu a[href="/perfil/"]').then(($link) => {
          const perfilUrl = $link.attr('href');
          cy.visit(perfilUrl);
  
          cy.get('.nome-completo').invoke('text').then((text) => {
            expect(text.trim()).to.equal('Helena Santos');
          });
          cy.get('.username').invoke('text').then((text) => {
            expect(text.trim()).to.include('Username: helenassantos');
          });
          cy.get('.email').invoke('text').then((text) => {
            expect(text.trim()).to.include('E-mail: helenasantos@gmail.com');
          });
          cy.get('.tipo-usuario').invoke('text').then((text) => {
            expect(text.trim()).to.include('Tipo de Usuário: Cliente');
          });
          cy.wait(3000);
        });
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
    });
  
    it('cenario2', () => {
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
  
      cy.get('.btn').click();
      cy.get('#name').type('Madson Mendes');
      cy.get('#email').type('mmendes@gmail.com');
      cy.get('#username').type('madson12');
      cy.get('#password').type('mm123');
      cy.get('#confirm_password').type('mm123');
      cy.get('.criar-conta').click();
  
      cy.get('.dropdown > button').then(($button) => {
        cy.wrap($button).trigger('mouseover');
        cy.get('.dropdown-menu').invoke('css', 'display', 'block');
        cy.get('.dropdown-menu').should('be.visible');
        cy.get('.dropdown-menu button[type="submit"]').click();
      });
  
      cy.get('.dropdown > button').trigger('mouseover');
      cy.get('.dropdown-menu a[href*="login"]').invoke('attr', 'href').then((loginUrl) => {
        cy.visit(loginUrl);
      });
  
      cy.wait(3000);
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
    });
  });
  