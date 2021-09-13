const { response } = require('express');



const usuariosGet = (req, res = response) => {

    const {q, nombre} = req.query;

    res.json({
        msg: "GET API - controlador",
        q,
        nombre
    });
}

const usuariosPost = (req, res = response) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: "POST API - controlador",
        nombre,
        edad
    });
}

const usuariosPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: "PUT API - controlador",
        id
    });
}

const usuariosPatch = (req, res = response) => {

    res.json({
        msg: "PATCH API - controlador"
    });
}

const usuariosDelete = (req, res = response) => {

    res.json({
        msg: "DELETE API - controlador"
    });
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}