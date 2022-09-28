const dotenv = require("dotenv");
let mysql = require('mysql');
const { Pool } = require("pg");
const {query} = require("express");
let connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME

});

function emptyOrRows(rows) {
    if (!rows) {
        return [];
    }
    return rows;
}

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

module.exports = {
    query: (text, params, callback) => {
        return query(text, params, callback);
    },
};