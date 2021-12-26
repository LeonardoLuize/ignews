<h1 align="center">
    <img src="./public/images/logo.svg">
</h1>
<p align="center">Site de notícias sobre React feito no curso ignite</p>

<h4 align="center"> 
	- Status: ✅ -
</h4>

### ☑️ Sobre
---

<p>
  Seguindo as aulas do curso, desenvolvi este website que tem como foco 
  mostrar notícias sobre React, a ideia principal é que para ver as notícias 
  você pague uma assinatura e caso não tenha a assinatura você consegue ver 
  uma preview das notícias.
</p>

### 🔌 Como rodar o projeto | Local
---
Caso queira rodar o projeto local, você deve configurar as seguintes variáveis de ambiente em uma arquivo .env.local:
```bash
# Stripe
STRIPE_API_KEY
NEXT_PUBLIC_STRIPE_PUBLIC_KEY
STRIPE_WEBHOOK_SECRET
STRIPE_SUCCESS_URL=http://localhost:3000/posts
STRIPE_CANCEL_URL=http://localhost:3000/

# Next Auth
GITHUB_CLIENT_ID
GITHUB_CLIENT_SECRET

# FaunaDb
FAUNA_KEY

# Prismic Cms
PEISMIC_ENDPOINT
PRISMIC_ACCESS_TOKEN
```

Depois de configurar as variáveis de ambiente é necessário executar os seguintes comandos:

```bash
# Instale as dependências
$ npm install

# Execute o projeto em desenvolvimento
$ npm run dev

# Depois de iniciar o projeto em desenvolvimento, basta acessar http://localhost:3000/
```

### 🔋 Tecnologias
---

- [React](https://pt-br.reactjs.org/)
- [NextJs](https://nextjs.org/)
- [FaunaDb](https://fauna.com/)
- [Stripe](https://stripe.com)
- [Prismic](https://prismic.io/)
- [TypeScript](https://www.typescriptlang.org/)

### 🎲 Feito por
---

<a href="https://github.com/LeonardoLuize">
 <img src="https://avatars.githubusercontent.com/u/74014082?v=4" width="100px;"/>
 <br />
 <sub><b>Leonardo Luize</b></sub></a> <a href="https://github.com/LeonardoLuize" >💻</a>


Feito por Leonardo Luize 😁

[![Linkedin Badge](https://img.shields.io/badge/-Leonardo-blue?style=rounded&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/leonardoluize/)](https://www.linkedin.com/in/leonardoluize/) 
[![Gmail Badge](https://img.shields.io/badge/-leonardo.luize2@gmail.com-c14438?style=rounded&logo=Gmail&logoColor=white&link=mailto:leonardo.luize2@gmail.com)](mailto:leonardo.luize2@gmail.com)

