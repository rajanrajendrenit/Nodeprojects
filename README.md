# Introduction 
TODO: Give a short introduction of this project,objectives or the motivation behind this project is create simple rest api service using nodejs and Javascript. 

# Getting Started
TODO: Guide users through getting your code up and running on their own system. In this section you can talk about:
1.	Setup Node Environment
2.  Install Package Depedency 
3.	Written in API service in JavaScript
4.  Testing service Rest Client package

# Setup Node Environment
 1. Download and Install lastest Node js by using this link [Click here to download nodejs](https://nodejs.org/en/download/) 
# Install Package Depedency 
1.	After Initalsation open new project directory in the command windows/vscode
2.	Run  "npm init" command -> Initialize the project (create package.json file)
3.	Run  "npm  i koa" command -> this used for to create API service
4.	Run  "npm i koa-router" command -> this used for to to define a router
5.	Run  "npm i koa-ejs -render" command -> this is used for to define render propetry
6.	5.	Run  "npm i nodemon" command -> this is used to run the app
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
7.  Now Run the application command windows/vscode using this [ nodemon app.js ] comment
    
8. Else  add this comment in package.json in the scripts section "start": "nodemon app.js" and run with this [ npm start ] comment 
   
# Testing service Rest Client package
TODO: To Test application with Postman/swagger/RestClient,Here explained RestClient Test 
1.	Install RestClient ![image](https://user-images.githubusercontent.com/24937459/146165270-d212b037-3db4-4b82-9f25-5e51db9f63b0.png)
2.  Create rest.http
3.	Add Method Type and endpoint 
      GET  http://localhost:7000/Get
4.	Add Content-Type
5.	Add Content boady
6.	Click Send Request 
 ![image](https://user-images.githubusercontent.com/24937459/146163621-85119889-fe99-4194-918b-e9118dd5ab44.png)

