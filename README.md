<h1 align="center">
    <img alt="Be The Hero" title="Be The Hero" src=".github/logo.svg" width="220px" />
</h1>


## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://expo.io/)

## 💻 Projeto

Projeto resultado da Semana Omnistack #11 <br>
O Be The Hero é um projeto que visa conectar pessoas interessadas em ajudar ongs.

## :fire: Como usar

- ### **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)**
  - É **necessário** possuir o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.

1. Faça um clone :

```sh
  $ git clone https://github.com/PanzariniDaniel/bethehero.git
```

2. Executando a Aplicação:

- ## Server

```sh
  # Instale as dependências
  $ cd server
  $ yarn install

  # Crie o banco de dados
  $ yarn knex:migrate
  $ yarn knex:seed

  # Inicie a API
  $ yarn start
```

- ## Web
```sh
  # Instale as dependências
  $ cd web
  $ yarn install

  # Inicie o projeto web
  $ yarn start
```

- ## Mobile
```sh
  # Instale as dependências
  $ cd mobile
  $ yarn install

  # Inicie  o projeto mobile
  $ yarn start
```

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

