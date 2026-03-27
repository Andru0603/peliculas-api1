// model/mdlGenero.js
const { Schema, model } = require("mongoose");

const GeneroSchema = new Schema({
  Nombre: {
    type: String,
    required: [true, "El nombre del género es obligatorio"]
  },
  Estado: {
    type: String,
    required: [true, "El estado es obligatorio"],
    enum: ["Activo", "Inactivo"]
  },
  FechaCre: {
    type: Date,
    default: Date.now
  },
  FechaAct: {
    type: Date,
    default: Date.now
  },
  Descripcion: {
    type: String,
    required: false
  }
});

module.exports = model("mdlGenero", GeneroSchema);