<h1 align="center">PETMATCH API</h1>



<div align="center">
  <strong>🚀 Descrição</strong>
</div>

<div align="center">
  <p>Uma api que facilita a união de futuros tutores e animais para adoção🎉</p>
  <p>Aqui você encontrará informações sobre o projeto, tecnologias utilizadas, instruções para configurar o ambiente de desenvolvimento e muito mais.</p>
  <p>Explore, colabore e divirta-se! 😄</p>
</div>


## 📖 Índice

- [Visão Geral](#visão-geral)
- [Tecnologias](#tecnologias)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Como Contribuir](#como-contribuir)
- [Licença](#licença)


## 🔭 Visão Geral

Este projeto visa criar uma plataforma de adoção de animais que utiliza uma experiência de usuário semelhante ao Tinder, onde adotantes podem encontrar animais com base em características personalizadas. O sistema permite que os usuários que desejam adotar definam atributos específicos, como porte, idade e lozalização, e o sistema realiza uma busca, retornando os animais que mais se adequam às preferências, otimizando a correspondência entre adotantes e animais disponíveis para adoção.


## 💻 Tecnologias

- Nest.js
- Typescript
- Typeorm
- Docker
- Postgres
- Swagger
- AWS


## 📚 Pré-requisitos

É ideal que a versão do [node](https://nodejs.org/pt) seja igual ou superior a 18 e tenha instalado a ultima versão do [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

Para rodar o banco de dados localmente é necessário o programa [docker](https://www.docker.com/get-started/).


## ⚙️ Configuração do Ambiente

Para rodar localmente o projeto é só seguir as instruções a seguir:

1. Clone o projeto em sua máquina

```bash
 git clone https://github.com/MayaraPimenta/ON36-PETMATCH.git
```

2. Abra o projeto e instale as dependências
```bash
 npm install
```

3. Para rodar o banco de dados usamos o docker, para iniciar o banco pela **primeira vez** execute o comando:
```bash
 docker run -d --name petmatch-db -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=root -e POSTGRES_DB=petmatch -p 5432:5432 postgres
```
- Obs: Se já seguiu o passo anterior e seu container do banco já está criado e executando e por algum motivo precisar parar para reiniciá-lo basta executar o comando:
```bash
docker start petmatch-db
```
O projeto não funciona sem o banco de dados, se não seguir este passo ou parar o container docker a aplicação não iniciará.

4. Rode as migrations
```bash
npm run migration:run
```

5. Inicie o projeto
```bash
npm run start
```
O projeto está sendo executado na porta [3000](http://localhost:3000/).

Você pode conferir as rotas documentadas [aqui](http://localhost:3000/swagger-doc).

No arquivo **petmatch.postman_collection.json** localizado na raiz do projeto você encontra a collection para testes do [Postman](https://www.postman.com/) e [Insomnia](https://insomnia.rest/).

## 🧪 Testes
Para rodar os testes unitários, execute o comando:
```bash
npm run test
```
---
Aproveite o projeto e fique à vontade para deixar sua ⭐ neste repositório.