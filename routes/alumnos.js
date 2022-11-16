const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

//conexión con la base de datos
const {connection} = require("../config.db");
const getTodos = (request, response) => {
    console.log("en el get")
    connection.query("SELECT * FROM alumnos", 
    (error, results) => {
        if(error){
            response.json({"resultado":"no"})
        }else{
            response.status(200).json({"success":"ok", results})
        }
    });
};

//ruta
app.route("/todos")
.get(getTodos);


const postAlumno = (request, response) => {
    const {matricula, nombre, correo, telefono} = request.body;
    connection.query("INSERT INTO alumnos(matricula, nombre, correo,telefono) VALUES (?,?,?,?) ", 
    [matricula, nombre, correo, telefono],
    (error, results) => {
        if(error){
            response.json({"resultado":"no"})
        }else{
            response.json({"resultado":"ok"})
        }
    });
};

//ruta
app.route("/alumno")
.post(postAlumno);


const delAlumno = (request, response) => {
    const id = request.params.id;
    connection.query("DELETE FROM alumnos WHERE matricula = ?", 
    [id],
    (error, results) => {
        if(error){
            response.json({"resultado":"no"})
        }else{
            response.json({"resultado":"ok"})
        }
    });
};

//ruta
app.route("/alumno/:id")
.delete(delAlumno);


module.exports = app;