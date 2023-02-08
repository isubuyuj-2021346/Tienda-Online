//Importacion
const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

//Modelos
const Categoria = require('../models/categoria');

const getCategoria = async (req = request, res = response) => {
    const query = { estado: true }

    const listaCategoria = await Promise.all([
        Categoria.countDocuments(query),
        Categoria.find(query)


    ]);

    res.json({
        msg: 'GET API de categoria',
        listaCategoria
    });

}

const postCategoria = async (req = request, res = response) => {

    const { nombre, tipo, descripcion, proveedores } = req.body;
    const categoriaDB = new Categoria({ nombre, tipo, descripcion, proveedores});

    //Guardar en Base de datos
    await categoriaDB.save();

    res.json({
        msg: 'POST API de categoria',
        categoriaDB
    });

}

const putCategoria = async (req = request, res = response) => {

    const { id } = req.params;
    // ignoramos el id rol estado y google el momento 

    const { _id, ...resto } = req.body;
    const categoriaEditado = await Categoria.findByIdAndUpdate(id, resto);

    res.json({
        msg: 'PUT API de categoria',
        categoriaEditado
    });

}

const deleteCategoria = async (req = request, res = response) => {

    const { id } = req.params;
    //eliminar y guardar
    const categoriaEliminar = await Categoria.findByIdAndDelete(id);


    res.json({
        msg: 'DELETE API de categoria',
        categoriaEliminar
    });

}

module.exports = {
    getCategoria,
    postCategoria,
    putCategoria,
    deleteCategoria
}