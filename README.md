# NodeAuthentication

Tutorial - authenticataion sessionbased application using Nodejs

Branch 1-express
Steps

initial git repo, npm setup
express, dotenv
Use .env file to set application secrets | variables.

How to run application

Clone git repo branch
Install dependencies npm i
Start server node server
Open a browser and visit localhost:3000

### Server event order
dependencies
middleware | sessions, handle post
routes | endpoints: api response json, render page using template engine
static files
404 not found - custom page | info
500 server error
listen on server requests

### Template engine

Embedded JavaScript templating | Handlebars

https://ejs.co/

*folder structur*

- views
 - partials
  - header.ejs
  - footer.ejs
  - nav.ejs
- index.ejs
- about.ejs
- user.ejs
- .... // diverse olika filer, ex routes, login, register osv.
