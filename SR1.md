# SR1

***Links relevantes:***
<ul>
  <li>
    <a  href="https://cesar-mvp2.atlassian.net/jira/software/projects/APC/boards/5"
      >Projeto no Jira</a>
  </li>
    <li>
    <a  href="https://www.figma.com/file/7lTqT6QR7tPP4GbiBYDMkY/wireframe?type=design&node-id=0%3A1&mode=design&t=1748pNTyjfC6RMOg-1"
      >Protótipo de Lo-Fi no Figma - Sketches e Storyboards</a>
  </li>
   <li>
    <a  href="https://www.youtube.com/watch?v=DeHn3ZFjyk8"
      >Screencast - Figma</a>
  </li>
  <li>
    <a  href=""
      >Screencast - Azure</a>
  </li>
</ul>
<br/>

***Deployment das histórias produzidas:***
<ul>
  <li>
    <a  href="https://apontecafe.azurewebsites.net/"
      >Projeto na Azure</a>
  </li>
</ul>
<br/>

***5 Histórias do usuário bem definidas:***
<br/>
****1. Cadastro de Usuários****
	
Cartão: Como usuário, eu gostaria de me cadastrar na plataforma.

Conversa: O usuário deverá acessar a plataforma e inserir o nome completo, e-mail, senha e usuário para realizar o cadastro.

Confirmação/Validação: 
- Vou me cadastrar na plataforma como “João Mendes Souza”, e-mail “jsm@gmail.com”, senha “jms123456” e nome de usuário “jms123” e funcionará;
- Vou me cadastrar na plataforma como “João Maurício Santos”, e-mail “jsm@gmail.com”, senha “mauricio123” e nome de usuário “jmaurício” e não funcionará devido ao e-mail já cadastrado;
- Vou me cadastrar na plataforma como “Joana Mariana Sales”, e-mail “jmari@hotmail.com”, senha “joaninhasales93” e nome de usuário “jms123” e não funcionará devido ao nome de usuário já cadastrado.


****2. Cadastro de Cafeterias****

Cartão: Como empresário, eu gostaria de cadastrar a minha cafeteria na plataforma.

Conversa: O empresário deverá fornecer os seguintes dados para cadastrar a sua cafeteira: nome da cafeteria, nome do responsável pelo cadastro, descrição do estabelecimento, endereço, e-mail, número de whatsapp da empresa, horário de funcionamento, link para o perfil do instagram, link do site da cafeteria (não obrigatório), CNPJ (apenas números), senha e foto do ambiente (não obrigatório).
 
Confirmação/Validação:

- Vou cadastrar minha cafeteria “Cantinho do Amor”,  nome da responsável com “Jamile Coutinho”, vou preencher a descrição com “Este é um ambiente muito legal no Recife Antigo.” , o endereço com “Rua da Felicidade, número 808, Boa Viagem”, o email com “teste@teste.com”, o número de whatsapp com “5581998613003”, o horário de funcionamento de “12:00 - 23:00”, o link para redes sociais com “https://www.instagram.com/cantinhodoamor”, CNPJ com “77224.361000146”, a senha com “123456” e adicionarei um arquivo png da foto do ambiente e o sistema deve autorizar o cadastro da cafeteria Cantinho do Amor;
- Vou cadastrar minha cafeteria “Versado”,  com meu nome como responsável “Paolla Oliveira”, deixarei a descrição em branco, o endereço com “Rua Padre Landim, número 302, Madalena”, o email com “teste2@teste.com”, o número de whatsapp com “81940028922”, o horário de funcionamento de “9:00 - 18:00”, o link para redes sociais com “https://www.instagram.com/versadocafe”, CNPJ com “5576634441000107”, a senha com “123456” e adicionarei um arquivo png da foto do ambiente, e o sistema deve identificar que o campo de descrição do estabelecimento não foi preenchido (elemento obrigatório);
- Vou cadastrar minha cafeteria “Comida de Vó”,  com meu nome como responsável “Rosália Brito”, vou preencher a descrição como “Ambiente acolhedor e descontraído.”, o endereço com “Rua das Ladeiras, número 500, Boa Vista”, o email com “teste@teste.com”, o número de whatsapp com “5581981710026”, o horário de funcionamento de “8:00 - 22:00”, o link para redes sociais com “https://www.instagram.com/comidadevo”, CNPJ com “61785284000163”, a senha com “lala123” e adicionarei um arquivo png da foto do ambiente, e não funcionará, pois o sistema deve identificar que o e-mail já está cadastrado.


****3. Visualizar perfil com as informações das cafeterias cadastradas****

Cartão: Como cliente, eu gostaria de visualizar o perfil das cafeterias cadastradas, com as suas respectivas informações.

Conversa: O usuário deverá estar cadastrado para acessar os perfis das cafeterias.

Confirmação/Validação:
- Vou tentar entrar no perfil da cafeteria São Café sem informar meu login e senha (e-mail “jsm@gmail.com” e senha “jms123456”), e aparecerá uma mensagem para logar ou cadastrar no sistema;
- Vou tentar entrar no perfil da cafeteria Bom Lugar sem informar meu login e senha (e-mail “jsm@gmail.com” e senha “jms123456”), e aparecerá uma mensagem para logar ou cadastrar no site, porém vou fechar  o popup e não vou conseguir ver o perfil da cafeteria desejada;
- Vou tentar entrar no perfil da cafeteria Grão Dourado logado (e-mail “jmari@hotmail.com” e senha “joaninhasales93”), e conseguirei ver o perfil da cafeteria desejada.


****4. Favoritar cafeteria****

Cartão: Como cliente, eu gostaria de favoritar minhas cafeterias preferidas para acessá-las facilmente.

Conversa: O usuário deverá estar logado para favoritar cafeterias. Ao acessar o perfil de uma cafeteria, ele terá a opção de favoritar.

Confirmação / Validação:
- Vou tentar favoritar uma cafeteria sem estar logado no sistema e uma mensagem aparece solicitando que o login ou cadastro seja feito para poder favoritar;
- Vou logar como Joana Maria Sales (e-mail “jmari@hotmail.com”, senha “joaninhasales93”) e tentar favoritar a cafeteria "Café Aconchego", e esta cafeteria será adicionada aos meus favoritos;
- Vou logar como João Mendes (e-mail “jsm@gmail.com”, senha “jms123456”) e tentar favoritar a cafeteria "Café Aconchego" novamente, e receberei uma mensagem informando que ela já está nos meus favoritos.

****5. Avaliar cafeterias cadastradas****

Cartão: Como cliente, eu gostaria de avaliar minha experiência com uma cafeteria cadastrada na aplicação.

Conversa: O usuário conseguirá cadastrar uma avaliação (comentário) para uma das cafeterias cadastradas na aplicação.

Confirmação/Validação:
- Vou tentar tentar deixar uma avaliação para a Cafeteria Testando estando cadastrado e logado no sistema como João Mendes (e-mail “jsm@gmail.com”, senha “jms123456”) e funcionará;
- Vou tentar deixar uma avaliação para a cafeteria “Amor de Vó” sem estar cadastrado no sistema e não conseguirei;
- Vou tentar deixar uma avaliação para a cafeteria cadastrada “Amélie Poulain” sem estar logada no sistema (apesar de cadastrada como Joana Maria Sales - e-mail “jmari@hotmail.com”, senha “joaninhasales93”) e não funcionará;
- Vou tentar deixar um comentário para uma cafeteria não cadastrada no sistema após devidamente cadastrado e logado no sistema como João Maurício Santos (e-mail “jsm@gmail.com”, senha “mauricio123”) e não conseguirei.


***Histórias Implementadas:***

- Cadastro de Usuários
- Favoritar cafeteria


***Instruções de acesso ao projeto:***

Nossa aplicação, hospedada na Azure Websites, oferece uma interface intuitiva para explorar cafeterias. Na página inicial, você encontrará informações sobre as cafeterias cadastradas, com funcionalidades ainda em desenvolvimento, como filtros e campo de busca para aprimorar a experiência do usuário.

Clicando em "Ver mais" em qualquer cafeteria listada, você acessa detalhes como descrição, endereço, horário de funcionamento e o número de Whatsapp. Além disso, há um botão "Enviar mensagem via Whatsapp" para iniciar uma conversa diretamente com o estabelecimento.

Para facilitar o acesso às suas cafeterias favoritas, desenvolvemos a funcionalidade "Favoritar", nossa primeira história implementada. No entanto, essa opção só está disponível para usuários logados. Caso contrário, o sistema direciona para a página de Login.

Em seguida, estamos desenvolvendo a página de cadastro de cafeterias, a qual permite aos usuários registrar estabelecimentos no banco de dados. Embora essa funcionalidade ainda apresente alguns bugs e não esteja completamente implementada, já é possível visualizar progressos.

Também disponibilizamos o cadastro de usuários, nossa segunda e última história implementada para esta entrega (SR1), onde você pode criar sua conta para acessar recursos exclusivos. As informações são armazenadas de forma segura, permitindo o login através de e-mail e senha. 

A página de Favoritos, acessível somente por usuários logados, reúne todas as suas cafeterias preferidas em um único lugar, facilitando o acesso e visualização de detalhes. Vale ressaltar que, ao clicar em “ver mais” no painel de cada cafeteria, podemos obter ainda mais informações sobre elas.

Por fim, temos as opções de login e logout. Se deslogado, você verá a opção de login, onde, se já cadastrado, poderá entrar no sistema com seu e-mail e senha. Caso não tenha cadastro, a página oferece a opção "Não possui uma conta? Crie sua conta: Cliente / Cafeteria", direcionando para a página de cadastro adequada. Uma vez logado, a opção de logout estará disponível, permitindo sair do sistema facilmente.

Para fins de testes, seguem alguns dados cadastrados no banco de dados da Azure.

****Usuários cadastrados****

Elias Lima Menezes - 1 User:

Cadastro do Usuário:

Nome: Elias Lima Menezes
E-mail: elm201@gmail.com
Username: eliaslm
Senha: elima123

Gabriel Santana Vila Lobos - 2 User:

Cadastro do Usuário:

Nome: Gabriel Santana Vila Lobos
E-mail: gvilalobos@gmail.com
Username: gblobos
Senha: vilal123

****Cafeterias cadastradas****

Cafeteria Soberana - 1 Cafeteria:

Cadastro da cafeteria:

Responsável: Carlos Antônio Lacerda
Nome da cafeteria: Cafeteria Soberana
Endereço: R. Dr. João Santos Filho, 255 - Parnamirim, Recife - PE, 52060-904
Descrição: A Cafeteria Soberana é reconhecida como um marco no cenário local, oferecendo um refúgio tranquilo para quem deseja escapar do ritmo acelerado do dia a dia. 

Ao entrar na Cafeteria Soberana, os clientes são recebidos por um ambiente que combina o charme clássico com toques modernos, criando um espaço sofisticado e confortável. A decoração é cuidadosamente selecionada para refletir um padrão de qualidade superior, com móveis de madeira fina e detalhes artísticos que enriquecem a experiência.

O cardápio da Cafeteria Soberana é uma celebração da cultura do café, oferecendo uma extensa seleção de blends especiais de todo o mundo. Cada xícara é meticulosamente preparada, garantindo que o sabor e o aroma sejam preservados em sua forma mais pura. Além dos cafés, a cafeteria oferece uma variedade de chás selecionados, infusões de ervas e bebidas alternativas para aqueles que preferem uma opção diferente.

Para complementar a experiência, a Cafeteria Soberana também serve uma seleção de pratos leves, incluindo sanduíches gourmet, saladas frescas e pastelaria fina. Tudo é preparado no local, utilizando os ingredientes mais frescos e de alta qualidade, para garantir que cada mordida seja tão memorável quanto cada gole.

Em resumo, a Cafeteria Soberana não é apenas um lugar para beber café, mas um destino onde os amantes do café podem se deleitar com a arte da cafeicultura em um ambiente que é ao mesmo tempo acolhedor e majestoso. É o lugar perfeito para reuniões de negócios, encontros casuais ou momentos de reflexão solitária.

E-mail: cafetsoberana@gmail.com
Whatsapp: 5581993716563
Horário de funcionamento: 6:00 - 17:00
Link do instagram: https://www.instagram.com/cafeteriasoberana
Site da cafeteria: https://www.instagram.com/cafeteriasoberana
CNPJ: 67563810000159
Senha: csoberana123


Cafeteria Café Sereno - 2 Cafeteria:

Cadastro da cafeteria:

Responsável: Luiza Gomes de Almeida Muniz
Nome da cafeteria: Café Sereno
Endereço: Armazém Original - Mercado da Torre - R. José Bonifácio, 747 - Torre, Recife - PE, 50710-001
Descrição: A cafeteria Café Sereno convida todos os apreciadores de um bom café a desfrutarem de um ambiente único, onde cada detalhe é cuidadosamente planejado para proporcionar uma experiência transcendental. Localizada em um bairro charmoso, a cafeteria se destaca pela sua decoração elegante e convidativa, que combina elementos modernos com toques clássicos, criando um espaço onde o tempo parece desacelerar.

O cardápio da Café Sereno foi criado para satisfazer os paladares mais exigentes, oferecendo uma seleção diversificada de cafés especiais, provenientes de várias partes do mundo. Cada bebida é preparada com precisão por baristas experientes, garantindo a extração perfeita dos aromas e sabores. Além dos cafés, a cafeteria também serve chás artesanais, bebidas à base de chocolate e uma variedade de sucos naturais.

Para acompanhar, os visitantes podem escolher entre diversas opções de bolos, tortas e doces finos, todos feitos no local com ingredientes de alta qualidade. As opções de salgados também não deixam a desejar, com sanduíches elaborados e quiches saborosos que são perfeitos para um almoço leve ou um lanche da tarde.

O Café Sereno é mais do que uma simples cafeteria; é um espaço onde a arte do café é celebrada, onde amigos se encontram e novas amizades nascem. É um convite para pausar a correria do dia a dia, sentar e saborear cada momento em um ambiente que eleva a experiência do café a um patamar celestial.


E-mail: cafesereno@gmail.com
Whatsapp: 5581907729053
Horário de funcionamento: 6:00 - 17:00
Link do instagram: https://www.instagram.com/cafeserenito
Site da cafeteria: https://www.cafesereno.com/cafesereno
CNPJ: 56572816000159
Senha: cafeserenito123


***Diagrama de atividades do sistema:***

![image](https://github.com/MatheusVelame/projetos2g3/assets/142419881/88783806-b261-42f5-84a4-c355d96a311f)



<br/>

***Issues/bug tracker:***
  
  - Issues em abertas:
    
   ![Screenshot 2024-04-25 225340](https://github.com/MatheusVelame/projetos2g3/assets/144596701/417050ca-428a-4e82-80c1-0b9b4a3f60ed)

![Screenshot 2024-04-25 225349](https://github.com/MatheusVelame/projetos2g3/assets/144596701/5028c669-4cfc-4091-bd23-791b04c6f613)
 

  - Issues fechadas:

  ![Screenshot 2024-04-25 225715](https://github.com/MatheusVelame/projetos2g3/assets/144596701/668ad653-1c1c-41db-81db-525a35e63e3b)

  ![Screenshot 2024-04-25 225802](https://github.com/MatheusVelame/projetos2g3/assets/144596701/ef24942c-2a06-48ea-bf74-d28aa1b26eda)

![Screenshot 2024-04-25 225830](https://github.com/MatheusVelame/projetos2g3/assets/144596701/b20a9582-1e2c-449e-93d0-5173c18e32ff)

![Screenshot 2024-04-25 225842](https://github.com/MatheusVelame/projetos2g3/assets/144596701/93b7a7d7-3fc2-4ea2-b344-187d46b52313)


<br/>

 ***Print do backlog do projeto:***
  
![image](https://github.com/MatheusVelame/projetos2g3/assets/142419881/d01ea0a4-ff42-4ac4-a470-0ec8c00a3ce6)




<br/>  
 
***Print do quadro da Sprint:***

![image](https://github.com/MatheusVelame/projetos2g3/assets/142419881/c2c80443-d43e-4854-ad24-5df502ac6176)





<br/>

***Relato da Programação em Par experimentada:***

Relatório: Pair Programming – SR1

Introdução

Alvo de várias disciplinas do corrente semestre letivo, a temática da Extreme Programming (XP) se destaca por ser um método ágil cuja abordagem de desenvolvimento de software promove a agilidade e a qualidade, sendo recomendada quando os requisitos do projeto a ser desenvolvido são vagos ou sujeitos a mudanças. 
Além de valores e princípios, essa metodologia proposta por Kent Beck no final dos anos 90 preconiza práticas como a programação em pares (pair programming), onde dois desenvolvedores colaboram na implementação do código, alternando-se entre quem codifica e quem revisa/orienta o trabalho.
Essa forma de desenvolvimento promove uma visão ampla do projeto, permitindo antecipar problemas e soluções futuras durante o processo de codificação, além de contribuir para disseminar o conhecimento sobre o código e facilitar a comunicação entre os membros do time. 
Em relação à atividade prática proposta pela disciplina de Projetos 2, consistente no desenvolvimento de uma aplicação web utilizando a framework Django e o ambiente da Azure, e tendo em vista o desafio proposto pelo cliente, a equipe concebeu uma aplicação para divulgar cafeterias localizadas no Recife Antigo, conferindo-lhe o título de Aponte Cafés.
Para realizar essa tarefa, os membros do grupo se organizaram em três duplas e um trio, ficando cada subgrupo responsável pela codificação e outras tarefas específicas. O método de condução do trabalho foi deixado à livre escolha de cada subgrupo e os resultados dessa abordagem serão apresentados a seguir.

Par 01 – Beatriz e Manuela

Inicialmente, o Par 01 assumiu a tarefa de desenvolver a funcionalidade de cadastro de cafeterias. Essa seção específica do sistema diz respeito ao cadastro dos dados dos empreendimentos abarcados pela aplicação, consistindo no registro de uma série de informações, tais como email, telefone (contato Whatsapp), endereço, entre outros dados relevantes.
De forma coordenada e operando remotamente, a equipe deu início ao trabalho de aprofundamento na compreensão do framework Django, o qual fundamenta a arquitetura da aplicação em questão. Para tanto, os conhecimentos adquiridos na disciplina de Fundamentos de Desenvolvimento de Software (FDS) se mostraram extremamente valiosos para o aprendizado e progresso do projeto.
Durante o desenvolvimento, uma integrante do par desempenhou o papel de programadora, conduzindo a sessão de codificação e compartilhando sua tela através do Google Meet durante as reuniões virtuais. Paralelamente, a outra integrante contribuiu com a pesquisa de informações e esclarecimento de dúvidas ao longo do processo. Em um segundo momento, a dupla optou por alternar os papéis, visando otimizar a eficiência do trabalho e minimizar a margem para erros futuros.

Par 02 – Lisa e Luziane

De início, coube ao Par 02 a tarefa de desenvolver a funcionalidade de enviar mensagens para a cafeteria, consistente em um link no perfil da cafeteria que, a partir do telefone cadastrado no banco de dados da aplicação, direcionasse para o aplicativo Whatsapp, de forma a iniciar uma troca de mensagens entre o remetente (cliente) e o empreendimento (cafeteria). 
Na implementação das histórias desta primeira etapa, os membros do par combinaram os conhecimentos adquiridos na disciplina de FDS, incluindo Django e Azure, com suas habilidades em Python, HTML e CSS. Essa complementação de habilidades foi crucial para a execução e conclusão bem-sucedida das tarefas propostas, demonstrando a importância da aprendizagem contínua e da colaboração entre os membros da equipe.
No que se refere à elaboração do código, o Par 02 realizou suas atividades de forma presencial e remota, empregando a funcionalidade de compartilhamento de tela do Google Meet durante as interações remotas. Em ambos os casos, houve alternância entre as atividades de codificação e revisão/orientação do código. Destaque-se que essa prática se revelou benéfica tanto para prevenir eventuais equívocos como para facilitar a resolução destes de forma mais ágil.

Par 03 – Matheus Cazé e Ygor

Após a divisão de tarefas, o Par 03 assumiu a função de desenvolver a funcionalidade de cadastro de usuários, consistente no registro de informações básicas dos clientes, tais como nome, e-mail e telefone (contato Whatsapp). Para a realização desse processo, os integrantes do Par 03 reuniram-se em uma sala remota e distribuíram entre si as atividades que iriam produzir. 
Os membros da equipe optaram por realizar o trabalho de codificação de forma remota, utilizando plataformas de comunicação online e ferramentas de colaboração virtual. Mesmo estando fisicamente distantes, a reunião virtual permitiu a execução das atividades, garantindo uma comunicação eficaz e um fluxo contínuo de trabalho.

Par 04 – Matheus Velame, Thaís e Arthur

Finalmente, coube ao último subgrupo a tarefa de elaborar uma funcionalidade de visualização das cafeterias cadastradas, bem como implementar a opção de favoritar cafeterias, permitindo aos usuários marcar seus locais favoritos para fácil acesso posterior. Enquanto a programação em par tradicionalmente envolve apenas duas pessoas trabalhando juntas em um único código, a dinâmica muda quando um trio é envolvido.
Para executar essa atividade, dois integrantes do subgrupo se reuniram de forma virtual para a codificação conjunta, colaborando de perto na elaboração do código. Enquanto isso, o terceiro membro desempenhou um papel igualmente crucial, contribuindo ora de maneira independente, ora em complementação nos trabalhos previamente elaborados. Essa abordagem híbrida permitiu uma distribuição das responsabilidades e uma colaboração eficaz entre os membros da equipe, resultando em um produto de qualidade superior.

Conclusões

A primeira etapa do projeto de desenvolvimento da aplicação Aponte Cafés utilizando Python e Django juntamente com o ambiente Azure foi concluída e alcançou marcos significativos, embora diversos pontos tenham permanecido pendentes de implementação ou correção, os quais serão objeto de complementação para o SR2.
Ressalta-se, mais uma vez, a importância da programação em pares para atingir esse objetivo, eis que promoveu não apenas uma colaboração mais estreita entre os membros da equipe como também contribuiu para um aperfeiçoamento da codificação em sentido amplo, o que representa mais um incentivo para prosseguir com sua aplicação.

