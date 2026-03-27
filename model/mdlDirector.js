const { Schema, model } = require("mongoose");

const DirectorSchema = new Schema({
  Nombres: {
    type: String,
    required: [true, "El nombre del director es obligatorio"]
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
  }
});

module.exports = model("mdlDirector", DirectorSchema);