const { Schema, model } = require("mongoose");

const MediaSchema = new Schema({
  Serial: {
    type: String,
    required: [true, "El serial es obligatorio"],
    unique: true
  },
  Titulo: {
    type: String,
    required: [true, "El título es obligatorio"]
  },
  Sinopsis: {
    type: String,
    required: [true, "La sinopsis es obligatoria"]
  },
  URL: {
    type: String,
    required: [true, "La URL es obligatoria"]
  },
  Foto: {
    type: String,
    required: [true, "La foto es obligatoria"]
  },
  FechaCre: {
    type: Date,
    default: Date.now
  },
  FechaAct: {
    type: Date,
    default: Date.now
  },
  AnoEstren: {
    type: Number,
    required: [true, "El año de estreno es obligatorio"]
  },
  GeneroPrin: {
    type: Schema.Types.ObjectId,
    ref: "mdlGenero",
    required: false
  },
  DirectorPrin: {
    type: Schema.Types.ObjectId,
    ref: "mdlDirector",
    required: false
  },
  Productora: {
    type: Schema.Types.ObjectId,
    ref: "mdlProductora",
    required: false
  },
  Tipo: {
    type: Schema.Types.ObjectId,
    ref: "mdlTipo",
    required: false
  }
});

module.exports = model("mdlMedia", MediaSchema);