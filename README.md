# Introduction 
TODO: Give a short introduction of this project.Objectives or the motivation behind this project is create simple rest api service using nodejs and Javascript. 

# Getting Started
TODO: Guide users through getting your code up and running on their own system. In this section you can talk about:
1.	Setup Node Environment
2.  Install Package Depedency 
3.	Written in API service in JavaScript
4.  Testing service Rest Client package

# Setup Node Environment
    Install lastest Nodejs by using this link https://nodejs.org/en/download/
# Install Package Depedency 
1.	After Initalsation open new project directory in the command windows/vscode
2.	Run  "npm init" command -> Initialize the project (create package.json file)
3.	Run  "npm  i koa" command -> this used for to create API service
1.	Run  "npm i koa-router" command -> this used for to to define a router
1.	Run  "npm i koa-ejs -render -> this used for to define render propetry
# Written in API service in JavaScript
1.	Create new file app.js
2.	Define all required package in the file
         const Koa = require('koa');
         const Router = require('koa-router')
         const app = new Koa();
         const router = new Router();
      
3.	Add all api method one by one (GET,POST,PUT,DEL)
4.  Define midddleware and router using app object
5.	Finally add listening port
7.  Now Run the application

# Testing service Rest Client package
TODO: To Test application with Postman/swagger/RestClient,Here explained RestClient Test 
1.	Install RestClient
2.  Create rest.http
3.	Add Method Type and endpoint 
      GET  http://localhost:7000/Get
4.	Add Content-Type
5.	Add Content boady
6.	Click Send Request 
