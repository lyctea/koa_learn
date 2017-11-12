const mysql = require("mysql");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "309003",
    database: "lyctea_db"
});

pool.getConnection(function(err, connection) {
    connection.query("SELECT * FROM student", (err, results, fields) => {
        //结束会话
        connection.release();

        //如果有异常就抛出
        if (err) throw err;
    });
});
