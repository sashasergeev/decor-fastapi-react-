# Decor

> This website is made for business, decor related obviously...

## **Tech Stack**

## Frontend

> **// ui**
>
> React.js
>
> Next.js
>
> ---
>
> **// fetches && request state management**
>
> grapql
>
> Apollo Client
>
> --- 
>
> **// state management**
>
> React-Redux
>
> Redux-Thunk
> 
> --- 
> 
> **// 3d scenes**
>
> three
>
> React Three Fiber
>
> React Three Drei
>
> ---
>
> **// style**
>
> Styled-Components
>
> react-icons
>
> react-modal
> 
> ---

In the beginning i just used plain React, but later on made migration to Next.js because of SEO benefits.

All but constructor page are SSG (statically generated).

---

## Backend

### **!!!** What is use now
> For now, i use [**Hasura**](https://hasura.io) service, which provides GraphQL API.
>
> As for database, i used [**Heroku**](https://heroku.com) service, which provides PostgreSQL. 

At the moment, i manage static (primarily, images, stl files) with the help of `public` folder. Later, i will probably use some cloud service for this but don't think it is needed here...  

### **!!!** WHAT I USED AT THE BEGINNING 
> FastApi framework
>
> SQLAlchemy orm
>
> Alembic - db migraions
>

---

Changed my mind about what to use as backend after migration to Next.js, which provides opportunity to use it as fullstack application.


I had a choice, whether i can set up Next.js api endpoints or use some service like Hasura. I chose the latter.

I think i can use free backend services without speed concerns just because this website, ***for most part***,  statically generated plus fallback is set to false, so if i need to generate new page i need to rebuild app, this is also isn't a concern here because new data is rarely added. 

The only pages which is fetching data from client side is constructor related. But there is caching for fetch results provided by Apollo Client, so user experience wouldn't be bad either...

---

## How to run this app on your machine?

1. Clone this repository

2. Install deps of project:

> if you are use - command
>
> npm - `npm install`
> 
> yarn - `yarn` or `yarn install`

3. Without modifying anything, you need a database and graphql api.
> You should create `.env.local` file in project root directory.
>
> In this file you should create two variables:
>
> `NEXT_PUBLIC_HASURA_GRAPHQL_URL=...`
> `NEXT_PUBLIC_HASURA_ADMIN_SECRET=...`
>
> Provide enndpoint url to first variable.
> Prefix NEXT_PUBLIC_ is needed to provide them to client side too.
4. If you want run app and modify something 
> if you are use - command 
>
> npm - `npm run dev`
> 
> yarn - `yarn dev`

> `!!!` In dev mode, every request is rebuilding the app.

5. If you want to build app use  
> if you are use - command 
>
> npm - `npm run build` and after `npm run start`
> 
> yarn - `yarn build` and after `yarn start`
