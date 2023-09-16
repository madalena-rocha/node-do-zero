<h1 align="center" style="text-align: center;">
  Node do Zero
</h1>

> Projeto desenvolvido em aula da Rocketseat.

<p align="center">
  <a href="#project">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#usage">Utilização</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<h2 id="project">📁 Projeto</h2>

O projeto consiste numa API que permite criar, listar, editar e deletar vídeos.

<h2 id="technologies">💻 Tecnologias</h2>

Este projeto foi desenvolvido utilizando as tecnologias:

- Node.js
- Fastify
- Postgres
- Dotenv

<h2 id="usage">💡 Utilização</h2>

A API está hospedada no endereço https://node-do-zero-jbwn.onrender.com. Por utilizar uma hospedagem gratuita, pode haver atrasos no tempo de resposta do servidor.

Caso deseje executar a aplicação em sua máquina localmente, certifique-se de ter o `Git`, o `Node.js` e o `npm` instalados antes de prosseguir com as etapas abaixo:

1. Clone o projeto:

```
$ git clone https://github.com/madalena-rocha/node-do-zero
```

2. Acesse a pasta do projeto:

```
$ cd node-do-zero
```

3. Instale as dependências:

```
$ npm install
```

4: Crie o arquivo .env:

Crie um arquivo .env de acordo com o arquivo .env.example. Crie uma conta no site [Neon](https://neon.tech/) e crie um novo projeto. Em "Connection details for your new project", selecione "Node.js". Copie suas credenciais Neon e preencha os campos do arquivo .env com os valores solicitados.

5. Crie a tabela de vídeos:

```
$ node create-table.js
```

6. Inicie o servidor:

```
$ npm run dev
```

<h2 id="license">📝 Licença</h2>

Este projeto está sob a licença MIT.

---

Feito com 💜 by Madalena 👋🏾

<div style="display: flex;">
  <a href="https://www.linkedin.com/in/madalena-machado-rocha/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" style="margin-right: 2vw" target="_blank"></a>
  <a href="mailto:rochamada1997m@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" style="margin-right: 2vw" target="_blank"></a>
  <a href="http://discordapp.com/users/827312692905377802" target="_blank"><img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" style="margin-right: 2vw" target="_blank"></a>
  <a href="https://www.instagram.com/madalena.machado.rocha/" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
</div>