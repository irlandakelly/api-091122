const express = require("express");
const app = express();

//nos ayuda a analizar el cuerpo de la solicitud POST
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//cargamos el archivo de rutas
app.use(require('./routes/alumnos'));

app.listen(3000,() => {
    console.log("Servicio corriendo en el puerto 3000 ")
});

module.exports = app;