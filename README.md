# Creating-a-Express-Node-React-Project-Node-Backend-React-Frontend

### Installation 

After making a new project in your github, make two folders in your project 
<br>
- client 
    - Inside the client directory we gonna npx create-react-app .
    <br>
- server
    - Inside the server directory I will use "npm init -y" to say yes on all the questions and create a package.json file.
    - In this file I change the name of 'main' to server.js and I create a new file -> touch server.js
    - We also need to install Express -> npm i express.
    - I will also install Nodemon so when we make changes to the server, it will automatically re-start the server -> npm i nodemon -D
    - In the package.json file I add two 'scripts: "start": "node server" and "dev": "nodemon server".
    
    
### Mission of this Exercise: Creating A users API in the Back-end and display them in the Front-end
