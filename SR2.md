# SR2

## Links relevantes:
<ul>
  <li>
    <a  href="https://apontecafe.atlassian.net/jira/software/projects/APC/boards/1"
      >Projeto no Jira</a>
  </li>
    <li>
    <a  href="https://www.figma.com/design/7lTqT6QR7tPP4GbiBYDMkY/aponte-site?node-id=390-2&t=BOG7jKT6YFavzwmj-0"
      >Protótipo de Média Fidelidade no Figma</a>
  </li>
  <li>
    <a  href="https://www.youtube.com/watch?v=gWatEtoSqLw"
      >Screencast do Protótipo de Média Fidelidade - SR2</a>
  </li>
  <li>
    <a  href="https://www.youtube.com/watch?v=T1E4frktCVA"
      >Screencast CI/CD com Build e Deployment Automatizado - SR2</a>
  </li>
  <li>
    <a  href="https://www.youtube.com/watch?si=DxcBDBGeDytvK2bv&v=xd-yLl5PQcU&feature=youtu.be"
      >Screencast da Execução dos Testes - SR2</a>
  </li>
</ul>
<br/>

## Deployment das histórias produzidas:
<ul>
  <li>
    <a  href="https://apontecafe.azurewebsites.net/"
      >Projeto na Azure</a>
  </li>
  <li>
    <a  href="https://www.youtube.com/watch?v=tdsjQhi2Oro"
      >Screencast da Azure - SR2</a>
  </li>
</ul>
<br/>

## 5 Histórias do usuário bem definidas
**1. BUSCA - Buscar na Home**

Cartão: Como usuário, eu gostaria de realizar uma busca (pesquisa) nas cafeterias cadastradas.

Conversa: O usuário, mesmo sem cadastro, irá informar o termo de pesquisa e conseguirá visualizar as cafeterias cadastradas que contenham o termo em seu nome ou descrição.

Validação:

- O usuário informará o termo “natural” e visualizará a cafeteria “Café Natural”, bem como outras cafeterias cadastradas que tenham “natural” no seu nome ou descrição;
  
- O usuário informará o termo “vegana” e visualizará a cafeteria “Café Natural”, bem como outras cafeterias cadastradas que tenham “vegana” no seu nome ou descrição;
  
- O usuário informará o termo “rock” e não visualizará nenhuma cafeteria, pois não há nenhuma cafeteria cujo nome ou descrição tenha o termo pesquisado;
  
- O usuário não digitará nenhum termo de pesquisa e visualizará todas as cafeterias cadastradas. 


**2. CONSULTA FAVORITOS**

Cartão: Como cliente, eu gostaria de consultar as minhas cafeterias favoritadas.

Conversa: O usuário deverá estar logado para consultar as cafeterias favoritadas pelo o usuário.

Confirmação / Validação:

- Vou tentar consultar os meus favoritos sem estar logado no sistema e uma mensagem aparece solicitando que o login ou cadastro seja feito para poder consultar os meus favoritos;
  
- Vou logar como Pedro Antônio Gonçalves (e-mail “pag@hotmail.com”, senha “pag12345”) e tentar consultar as minhas cafeterias favoritadas sem ter nenhuma cafeteria como favorita e aparecerá na página uma mensagem “Não há nenhuma cafeteria favoritada”;
  
- Vou logar como Pedro Antônio Gonçalves (e-mail “pag@hotmail.com”, senha “pag12345”) e tentar consultar as minhas  várias cafeterias favoritadas, e aparecerá todas as cafeterias que favoritei.

**3. SISTEMA DE RESERVAS - Reservar mesas em uma cafeteria cadastrada**


Cartão: Como cliente, eu gostaria de reservar uma mesa em uma cafeteria cadastrada na aplicação.

Conversa: O usuário deverá estar logado para reservar uma mesa em uma cafeteria. Ao acessar o perfil de uma cafeteria, ele terá a opção de reservar mesa.

Confirmação / Validação:

- Vou tentar entrar em um perfil da cafeteria tres cafes para reservar uma mesa para 2 pessoas sem estar logado no sistema e uma mensagem aparece solicitando que o login ou cadastro seja feito para poder reservar uma mesa;
  
- Vou logar como Maria Alice Alcântara (e-mail “malice@hotmail.com”, senha “maa12345”) e tentar reservar uma mesa para 2 pessoas e  para a data 11/junho/2024 na cafeteria "Café aconchego" no horário de 10:30, e a minha reserva será efetivada com sucesso;
  
- Vou logar como Maria Alice Alcântara (e-mail “malice@hotmail.com”, senha “maa12345”) e tentar reservar uma mesa para 2 pessoas e para a data 11/Junho/2024 na cafeteria "Café Aconchego" novamente no mesmo horário, e receberei uma mensagem informando que ela já foi reservada;
  
- Vou logar como Maria Alice Alcântara (e-mail “malice@hotmail.com”, senha “maa12345”) e tentar reservar uma mesa para 2 pessoas e para uma data que já passou na cafeteria "Café Aconchego" às 10:30, e receberei uma mensagem informando para selecionar uma data que seja futura;
  
- Vou logar como Maria Alice Alcântara (e-mail “malice@hotmail.com”, senha “maa12345”) e tentar cancelar uma reserva na cafeteria "Café Aconchego" que está reservada no dia 11/junho/2024 às 10:30, e receberei uma mensagem informando que a reserva foi cancelada com sucesso;
  
- Vou logar como Maria Alice Alcântara (e-mail “malice@hotmail.com”, senha “maa12345”) e tentar reservar uma mesa para 0 pessoas e  para a data 11/Junho/2024 na cafeteria "Café Aconchego" às 10:30, e receberei uma mensagem informando que a reserva tem que ter mais de 0 pessoas.

**4. PERFIL DO USUÁRIO**

Cartão: Como cliente, eu gostaria de consultar minhas informações de cadastro.

Conversa: O usuário deverá estar logado para acessar seus dados de cadastro. Ao acessar seu perfil, ele consegue visualizá-los.

Validação:

- A usuária Helena Santos, cadastrada com nome Helena Santos, username: helenassantos, email: helenasantos@gmail.com e senha 123456, tentará, logada no sistema, visualizar os dados de seu perfil e aparecerá seu nome: Helena Santos, username: helenassantos e email:helenasantos@gmail.com;

- O usuário Madson Mendes, é cadastrado com email: mmendes@gmail.com, username madson12 e senha: mm123 mas não está logado. Ele tentará acessar o seu perfil, mas não aparecerá a opção.

**5. HISTÓRICO DE VISITAS SITE**

Cartão: Como cliente, eu gostaria de consultar minhas informações de cadastro.

Conversa: Após o usuário clicar para visualizar alguma cafeteria qualquer, essa cafeteria será automaticamente adicionada na aba de histórico, para caso o usuário queira relembrar alguma cafeteria que visualizou porém não salvou na aba de favoritos, por exemplo.

Validação:

- Vou tentar acessar meu histórico sem estar logado e vou ser redirecionado para fazer o login/cadastro antes;
  
- Vou visitar a cafeteria “cantinho” duas vezes no mesmo dia e ela aparecerá só uma vez no meu histórico.

Para visualizar todas as histórias bem definidas, consulte o documento abaixo.

<br/>
<ul>
  <li>
    <a  href="https://docs.google.com/document/d/1duo9j6WFsmtch20auUFHfpMkE5BbMLYR3IAXw-S7324/edit"
      >Todas as histórias bem definidas no nosso Drive</a>
  </li>
</ul>
<br/>

## 8 Histórias Implementadas

- 1 - DETALHES - Visualizar perfil com as informações das cafeterias cadastradas
- 2 - AVALIAÇÃO - Avaliar cafeterias cadastradas
- 3 - CADASTRO CAFÉS - Cadastrar Cafeterias
- 4 - BUSCA - Buscar na Home
- 5 - CONSULTA FAVORITOS - Consultar as cafeterias favoritadas
- 6 - SISTEMA DE RESERVAS - Reservar mesas em uma cafeteria cadastrada
- 7 - PERFIL DO USUÁRIO - Visualizar perfil de usuário
- 8 - HISTÓRICO DE VISITAS NO SITE - Visualizar histórico de visitas no site

## Instruções de acesso ao projeto:

Na página inicial da nossa aplicação, é possível visualizar todas as cafeterias cadastradas. Caso o usuário deseje buscar uma cafeteria específica, ele pode utilizar a barra de busca.

No menu principal, há cinco opções: "Minhas reservas", "Cadastre sua cafeteria", "Favoritos", "Histórico" e "Login". As quatro primeiras opções exigem que o usuário esteja logado no sistema. Além disso, a opção "Cadastre sua cafeteria" requer que o usuário esteja registrado como "Empresário".

Ao realizar o login como um usuário típico (cliente), utilizando o e-mail "elm201@gmail.com" e a senha "elima123", é possível acessar mais detalhes das cafeterias. Nesta página, o usuário pode favoritá-las, entrar em contato via WhatsApp, reservar uma mesa para um horário específico (data futura), fazer e visualizar avaliações, e explorar outras opções de cafeterias.

Na seção "Minhas reservas", o cliente pode consultar as reservas já realizadas. Se a reserva já tiver passado, ele terá a opção de avaliá-la. Caso contrário, ele poderá alterar ou excluir a reserva.

A opção "Cadastre sua cafeteria" não estará disponível para usuários regulares (não empresários).

Na aba "Favoritos", o usuário típico pode visualizar suas cafeterias favoritadas.

Na página de "Histórico", ele pode ver as cafeterias visitadas e a data da visita.

Por fim, em "Perfil", ele pode visualizar e editar suas informações.

Por outro lado, caso o login seja realizado como empresário, utilizando o e-mail "carlosal@gmail.com" e a senha "Antonio123", o usuário poderá ver e editar informações sobre suas cafeterias, cadastrar novas cafeterias, e gerenciar seu perfil.

Para utilizar outros dados cadastrados no Banco de Dados Azure, consulte as informações detalhadas abaixo.

<ul>
  <li>
    <a  href="https://docs.google.com/document/d/1V0PYILdxs2su1gIqemqTv5knzBefBpix_hNhgZVk5BM/edit"
      >Documento com as Informações do Banco de Dados da Azure</a>
  </li>
</ul>
<br/>

## Diagrama de atividades do sistema:




<br/>

## Issues/bug tracker:
  
  - Issues em abertas:

  ![image](https://github.com/MatheusVelame/projetos2g3/assets/142419881/3020c4dc-399d-4367-b939-5b42da7675ef)

       
  - Issues fechadas:

![image](https://github.com/MatheusVelame/projetos2g3/assets/142419881/c1e19d2a-7fd0-4df7-a7fa-c7f4630df100)
![image](https://github.com/MatheusVelame/projetos2g3/assets/142419881/ed667986-47c9-4a4a-a10c-71201cddc81f)
![image](https://github.com/MatheusVelame/projetos2g3/assets/142419881/3372462a-ea73-4300-b02c-d7b7708d16b3)
![image](https://github.com/MatheusVelame/projetos2g3/assets/142419881/2b363fe1-3df5-4143-9241-d1e5e38721ca)
![image](https://github.com/MatheusVelame/projetos2g3/assets/142419881/8f7ad59f-89c9-4066-a9af-6f6ec8d8ebd6)
![image](https://github.com/MatheusVelame/projetos2g3/assets/142419881/70e37646-4232-481b-a2e1-6b500744a406)
![image](https://github.com/MatheusVelame/projetos2g3/assets/142419881/380a7f81-3664-4c65-8a72-e672e31469ff)
![image](https://github.com/MatheusVelame/projetos2g3/assets/142419881/fd79f8c2-c126-4044-b4e9-4d9e564dc450)

<br/>

 ## Print do backlog do projeto:
  
![image](https://github.com/MatheusVelame/projetos2g3/assets/142419881/ec8ab36b-7077-48d7-aa32-b3187c95461e)

<br/>  
 
## Print do quadro da Sprint:

![image](https://github.com/MatheusVelame/projetos2g3/assets/142419881/45a4d508-8c79-404c-a6b4-fc34ee9047ab)
![image](https://github.com/MatheusVelame/projetos2g3/assets/142419881/aa22bbf0-aa03-4448-a261-6d58298a8002)

<br/>

## Relato da Programação em Par experimentada:
*Introdução*

Dando continuidade ao projeto de desenvolvimento da aplicação Aponte Cafés, a segunda e última etapa demandou a implementação de oito novas histórias juntamente com a realização de Testes de Sistema (E2E) Automatizados utilizando a ferramenta Cypress. Nos tópicos seguintes, serão detalhadas as experiências de cada dupla durante esta etapa do projeto.
Assim como na etapa anterior, os membros do grupo se organizaram em três duplas e um trio, ficando cada subgrupo responsável pela codificação e outras tarefas específicas. O método de condução do trabalho permaneceu de livre escolha de cada subgrupo e os resultados dessa abordagem serão apresentados a seguir.

*Par 01 – Beatriz e Manuela*

Inicialmente, o Par 01 assumiu a tarefa de desenvolver as funcionalidades de cadastro de cafeterias e perfil do usuário. A primeira funcionalidade teve sua implementação iniciada na etapa anterior e diz respeito ao cadastro dos dados dos empreendimentos abordados pela aplicação. Por sua vez, a funcionalidade Meu Perfil permite ao usuário visualizar e alterar os dados informados em seu cadastro.
Nessa implementação, os membros da dupla colaboraram ativamente e de forma conjunta. Nos testes, alguns cenários foram criados por cada membro de forma separada, com revisão posterior pelo outro integrante. Destaque-se que a atuação conjunta demonstrou ser mais eficaz, pois permitiu a troca contínua de ideias e soluções, resultando em uma aplicação mais confiável.

*Par 02 – Lisa e Luziane*

Nesta etapa, coube ao Par 02 a tarefa de desenvolver as funcionalidades de pesquisa e avaliação de cafeterias. Na primeira, o usuário visualiza as cafeterias que contenham o termo pesquisado em seu nome ou descrição, enquanto na segunda é possível avaliar e deixar comentários em uma cafeteria escolhida pelo usuário. 
Na implementação das histórias desta etapa, os membros do par desenvolveram suas atividades de forma remota, com alternância entre as atividades de codificação e revisão/orientação do código. Não obstante, parte da codificação, notadamente a que se refere aos testes, foi construída de forma apartada, com posterior revisão pelo outro membro. Da mesma forma que o par anterior, o trabalho em conjunto provou ser mais eficiente, pois possibilitou uma troca mais efetiva de ideias e soluções, levando a um código mais robusto e a uma menor incidência de inconsistências.

*Par 03 – Matheus Cazé e Ygor*

Após a divisão de tarefas, o Par 03 assumiu a função de desenvolver as funcionalidades de cadastro de usuários e visualização do histórico das cafeterias cadastradas. A primeira funcionalidade teve sua implementação iniciada na etapa anterior, consistente no registro de informações básicas dos usuários, enquanto a segunda apresenta as cafeterias que tiveram seus detalhes visualizados pelo usuário.
Para a realização desse processo, os integrantes do Par 03 reuniram-se em uma sala remota e distribuíram entre si as atividades que iriam produzir. A parte principal da implementação, assim como a construção dos testes, foi realizada parcialmente em conjunto, enquanto o estilo visual (CSS) foi desenvolvido separadamente. A eficácia da programação em par, especialmente no que se refere à troca contínua de experiências entre os membros, também restou evidente neste caso, refletindo os mesmos benefícios observados no trabalho do par anterior.

*Par 04 – Matheus Velame, Thaís e Arthur*

Finalmente, coube ao último subgrupo a tarefa de elaborar as funcionalidades referentes à seção de Favoritos (consultar, incluir ou excluir cafeterias da seção), bem como a implementação da exibição dos detalhes das cafeterias cadastradas e do sistema de reservas. 
Assim como na etapa anterior, dois integrantes do subgrupo se reuniram de forma virtual para a codificação conjunta, colaborando de perto na elaboração do código, inclusive no que se refere aos testes. Por sua vez, o terceiro membro contribuiu ora de maneira independente, ora em complementação nos trabalhos previamente elaborados. Essa abordagem híbrida permitiu uma distribuição das responsabilidades e uma colaboração eficaz entre os membros da equipe, embora sejam incontestáveis os benefícios da adoção integral da programação em par, tal como proposta pelos orientadores do projeto.

*Conclusões*

A segunda etapa (SR2) do projeto de desenvolvimento da aplicação Aponte Cafés foi concluída e as funcionalidades referidas foram integralmente implementadas. Embora essas funcionalidades estejam operacionais, reconhecemos que há espaço para melhorias, visando otimizar a usabilidade e a eficiência do sistema.
A ideia central do projeto continua se mostrando sólida e promissora. O trabalho colaborativo e a programação em pares foram, mais uma vez, fundamentais para alcançar os objetivos desta etapa. Ainda que adotada parcialmente, essa abordagem não só fortaleceu a coesão entre os membros da equipe, como também aprimorou a qualidade do código produzido.
Com esses avanços, estamos motivados a aperfeiçoar ainda mais a aplicação, mesmo que não haja uma próxima etapa formal do projeto, uma vez que a ideia central demonstrou grande potencial e merece ser aprimorada continuamente pela equipe.
