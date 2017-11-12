const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "309003",
    database: "lyctea_db"
});

connection.connect();

connection.query("SELECT * FROM student", function(error, results, fields) {
    if (error) throw error;
    console.log("The solution is: ", results);
});

connection.end();
