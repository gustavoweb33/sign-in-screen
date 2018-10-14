const express = require('express');
const app = express();
const mysql = require('mysql');

const bodyParser = require('body-parser');  //to retrive data from the user
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'companydatabase',
    password: 'Capstone2018'
});

app.get('/', () => {
  app.render('/public');
});

app.post('/', (request, response) => {
  let user = {
    username: request.body.username,
    userpassword: request.body.userpassword
  };
  
  if(error) throw error;

  console.log(user);
});

const port = 8080;
app.listen(port);

// connection.connect((error) => {
//     if(error) throw error;

//     connection.query('SELECT * FROM users', (error, results, fields) => {
//         if(error) throw error;
//         console.log(results);
//     });
// });

