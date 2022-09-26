


let mysql = require('mysql');
let connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME

});

// connection.connect(function(err) {
//     if (err) {
//         console.error('error connecting: ' + err.stack);
//         return;
//     }
//
//     console.log('connected as id ' + connection.threadId);
// });

connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT * FROM user", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});