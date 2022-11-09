const mysql = require('mysql');
let connection;

try {
    connection = mysql.createConnection({
        host: process.env.DBHOST,
        user: process.env.DBUSER,
        password: process.env.DBPASS,
        database: process.env.DBNAME
    });
    console.log("Conexion establecida")
} catch (error) {
    console.log("Error al conectar con la base de datos");
}

module.exports = {connection};