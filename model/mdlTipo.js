const { Schema, model } = require("mongoose");

const TipoSchema = new Schema({
  Nombre: {
    type: String,
    required: [true, "El nombre del tipo es obligatorio"]
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
    required: [true, "La descripción es obligatoria"]
  }
});

module.exports = model("mdlTipo", TipoSchema);