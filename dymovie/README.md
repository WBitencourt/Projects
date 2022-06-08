<h1 align="center">
  <img alt="Rocketseat" height="80" title="DYMOVIE" src="dymovie-mobile/src/assets/logo264x262-noback.png" />
  <br/>
  DYMOVIE
</h1>

```diff
@@ Projeto em desenvolvimento @@
```

## 💻 Projeto
Aplicativo desenvolvido com o objetivo de permitir que pessoas avaliem filmes e comentem sobre sua experiencia,
levando outros usuários por recomendação verem também, independente a plataforma de streamer que o filme esteja.

## 🤓 Objetivo pessoal
Meu objetivo inicial com esse projeto não é criar um produto para ser entregue ao mercado, 
e sim desenvolver habilidades referentes ao React Native, do início ao fim de uma aplicação
abrangendo o máximo de recursos oferecidos por esse framework e que seja totalmente de minha autoria.

## 🔖 Layout

Você pode visualizar o layout do projeto através [desse link](https://www.figma.com/file/OxBAc8sDO8JssN8c72oSmu/DYMOVIE?node-id=0%3A1). 
É necessário ter conta no [Figma](http://figma.com/) para acessá-lo.
<br />
Desenvolvido por Wendell Bitencourt(@wbitencourt).

## ✨ Tecnologias

# Front-end
- Figma
- React Native
- Javascript
- Context API
- Babel
- Eslint
- Jest
- Styled Components
- Axios
- Postman
- React Navigation
- React vector icons (Font Awesome)

# Back-end
- Express
- Javascript
- Typescript
- Prisma
- Jest
- Postgresql
- MongoDB
- Migrations
- SWC
- Cors

## :hammer_and_wrench: Features 

# Front-end
-   [ ] O usuário deve realizar login ou se cadastrar na plataforma.
-   [ ] O sistema disponibiliza 4 atalhos de telas no menu inferior. 🏠 | 🔍 | ⭐ | 🙍‍♂️
-   [ ] 🏠 Home: Apresenta três categorias "Populares na comunidade", "Mais avaliados", "Menos avaliados".
-   [ ] 🏠 Home >> Populares na comunidade: Apresenta os filmes mais comentados na comunidade.
-   [ ] 🏠 Home >> Mais avaliados: Apresenta os filmes mais avaliados da comunidade, ou seja, filmes com avaliação igual ou superior a 4.
-   [ ] 🏠 Home >> Menos avaliados: Apresenta os filmes menos avaliados da comunidade, ou seja, filmes com avaliação igual ou menor a 3.
-   [ ] 🔍 Buscar: Direciona o usuário a tela de busca, onde pode buscar um filme, tocá-lo e ser direcionado para tela de informações.
-   [ ] ⭐ Favoritos: Permite buscar e visualizar filmes marcados como favorito, se os card forem tocadas, a tela de informações será aberta.
-   [ ] Informações: Permite ver a avaliação do filme dentro da comunidade, além de marcar como favorito, assistido, adicionar comentário, visualizar a sinopse e avaliar de 1 a 5.
-   [ ] 🙍‍♂️ Perfil: Permite alterar foto que ée publica quando um comentário é feito, além de visualizar suas notificações, dados da conta, ver dados do aplicativo e sair do sistema.
-   [ ] Notificações: Permite usuário ver dados das curtidas que recebeu.
-   [ ] Conta: Permite alterar dados da conta.
-   [ ] Sobre: Permite checar versão da aplicação.
-   [ ] Sair: Realiza o logoff do aplicativo limpando os dados de sessão, necessário realizar login novamente.

# Back-end
-   [ ] Back-end construído com base em uma aplicação REST.
-   [ ] Permite registrar dados de cadastro e fluxo de avaliação dos filmes via método HTTP POST.
-   [ ] Permite consultar as avaliações dos filmes e dados do usuário via método HTTP GET.
-   [ ] Possui testes unitários (npm run test).
-   [ ] Possui conceitos de SOLID.
-   [ ] Possui o ORM Prisma como intermediários ao fazer operações no banco de dados.
-   [ ] Desenvolvido com Postgresql e MongoDB
-   [ ] Configurado para transpilar o código typescript para javascript, comando "npm build".

## Executando o projeto

# Front-end
Para que os passos abaixo funcionem corretamente é necessário que todo ambiente de desenvolvimento esteja corretamente configurado.
Portanto confira ou siga os passos clicando [nesse link](https://reactnative.dev/docs/environment-setup). 

Utilize o **yarn** ou o **npm install** para instalar as dependências do projeto.
Em seguida, inicie o metro.

Passo 1:
```cl
npm install
```
ou

```cl
yarn install
```

Passo 2:
```cl
npx react-native start
```
ou

```cl
yarn react-native start
```

Após o Metro iniciar, abra um novo terminal e execute o comando para abrir o emulador.

Passo 3:
 ```cl
emulator -no-snapshot -avd <Nome do seu emulador aqui>
```

Passo 4:
 ```cl
npx react-native run-android
```
ou

 ```cl
yarn react-native run-android
```

## 📄 Licença

Esse projeto foi desenvolvido por Wendell Bitencourt.

<br />
