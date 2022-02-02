# Decor

> This website is made for business, decor related obviously...

## [LIVE](https://peno-dec.ru)

## **Tech Stack**

## Frontend

> **// ui**
>
> React.js  
> Next.js
>
> ---
>
> **// fetches && request state management**
>
> grapql  
> Apollo Client
>
> --- 
>
> **// state management**
>
> React-Redux  
> Redux-Thunk
> 
> --- 
> 
> **// 3d scenes**
>
> three  
> React Three Fiber  
> React Three Drei
>
> ---
>
> **// style**
>
> Styled-Components  
> react-icons  
> react-modal
> 
> ---

In the beginning i just used plain React, but later on made migration to Next.js because of SEO benefits.

All but constructor page are SSG (statically generated).

And i added [**Docker**](https://www.docker.com) for further deployment.

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
* **without docker**

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
> yarn - `yarn dev`

> `!!!` In dev mode, every request is rebuilding the app.

5. If you want to build app use  
> if you are use - command 
> 
> npm - `npm run build` and after `npm run start`  
> yarn - `yarn build` and after `yarn start`

* **with docker**
1. Clone repository
2. Build and tag image
> Enter following command in project root, replace ellipsis with vars values:
>
> `docker build --build --build-arg NEXT_PUBLIC_HASURA_GRAPHQL_URL=... --build-arg NEXT_PUBLIC_HASURA_ADMIN_SECRET=... -t deco`
>
3. Run the container
> Enter following command in project root:
> 
> `docker run -p 3000:3000 deco`
>
> After it you'll be able to visit your project locally at port 3000, if you want to launch it on another port in command in port pair change first value.

---

## Deployment Process

For hosting i use vps with ubuntu 20.04.
To connect to SSH, i use [**PuTTY**](https://www.putty.org).  
Before starting configuring server:
* i had to push my Docker image to  to my repository on [**Docker Hub**](https://hub.docker.com), so later on i can  access it from server.
* i already assigned [**peno-dec.ru**](peno-dec.ru) domain to server.

I. Docker
1. Installing docker on server
To install docker you need to run following commands one by one:  
// update packages  
`sudo apt update`   
// https related package installations  
`sudo apt install apt-transport-https ca-certificates curl software-properties-common`  
// add GPG-key of docker repository  
`sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"`  
// update packages  
`sudo apt update`  
// switch to the Docker repository, to install it  
`apt-cache policy docker-ce`  
// install docker  
`sudo apt install docker-ce`  
// check if it works  
`sudo systemctl status docker`  
// run these commands to use docker  
`sudo usermod -aG docker $USER`  
`su - $USER`  
2. Getting image from Docker Hub  
`docker pull sashasergeev/deco:latest`  
After this command, docker will download image to server
3. Run image  
`docker run -p 3000:3000 sashasergeev/deco:latest`  
After this you'll be able to access docker instance through /%hostIP%/:3000.

II. Nginx

Here i will use Nginx for reverse proxy and ssl sertificate.

1. Installing Nginx  
    1. Run command `sudo apt-get install nginx` to install.  
    2. Check installation with `sudo nginx -v`.
    
2. Adding SSL sertificate       
    1. Create directory where you will store sertificates:  
    `sudo mkdir /etc/nginx/ssl`   
    2. Create file to store sertificates.     
    `sudo nano /etc/nginx/ssl/peno-dec.ru.crt`    
    3. In opened file, insert all three sertificates without blank lines.    
    4. Create another file to store private key of SSL sertificate.    
    `sudo nano /etc/nginx/ssl/peno-dec.ru.key`
    5. In opened file, insert private key.  

3. Configuring server
    1. Open web server configuration file.  
    `sudo nano /etc/nginx/sites-available/default`
    2. File content should be like this: 
    ```
        server {
            # redirects http to https
            listen 80;
            server_name peno-dec.ru;
            return 301 https://$host$request_uri;
        }

        server {
            # standard behaviour
            listen 443 ssl;

            # for restricting access through vps ip address
            if ($host != "peno-dec.ru") {
                return 444;
            }

            root /var/www/html;
            server_name peno-dec.ru;
            
            # managing SSL
            ssl_certificate /etc/nginx/ssl/peno-dec.ru.crt;
            ssl_certificate_key /etc/nginx/ssl/peno-dec.ru.key;
            
            index index.html index.htm;
            location / {
                proxy_pass http://127.0.0.1:3000;
            }
        }
    ```

III. Result

After all these maipulations you can restart server to nginx to work, or just type into console `service nginx reload`.
If you restart, don't forget to run docker image.

Now you can access [**website**](https://peno-dec.ru) only through domain.