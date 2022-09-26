# Creating-a-Express-Node-React-Project-Node-Backend-React-Frontend

### Learning Objective
- Create a Back-end with Node.js and Express
- Make API endpoints in the back-end 
- Fetch all this data in the front-end with React and display the data
- After this we will make our own exercise with a database and CRUD in the back-end.

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
