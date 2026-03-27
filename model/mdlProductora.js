const { Schema, model } = require("mongoose");

const ProductoraSchema = new Schema({
  NombresPro: {
    type: String,
    required: [true, "El nombre de la productora es obligatorio"]
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
  Eslogan: {
    type: String,
    required: [true, "El eslogan es obligatorio"]
  },
  Descripcion: {
    type: String,
    required: false
  }
});

module.exports = model("mdlProductora", ProductoraSchema);