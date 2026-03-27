// routes/rGenero.js
const express = require("express");
const router = express.Router();
const Genero = require("../model/mdlGenero");

// GET - Obtener todos los géneros
router.get("/", async (req, res) => {
  try {
    const generos = await Genero.find();
    res.json(generos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET - Obtener un género por ID
router.get("/:id", async (req, res) => {
  try {
    const genero = await Genero.findById(req.params.id);
    if (!genero) {
      return res.status(404).json({ error: "Género no encontrado" });
    }
    res.json(genero);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST - Crear un nuevo género
router.post("/", async (req, res) => {
  try {
    const nuevoGenero = new Genero(req.body);
    await nuevoGenero.save();
    res.status(201).json(nuevoGenero);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT - Actualizar un género
router.put("/:id", async (req, res) => {
  try {
    const genero = await Genero.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!genero) {
      return res.status(404).json({ error: "Género no encontrado" });
    }
    res.json(genero);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE - Eliminar un género
router.delete("/:id", async (req, res) => {
  try {
    const genero = await Genero.findByIdAndDelete(req.params.id);
    if (!genero) {
      return res.status(404).json({ error: "Género no encontrado" });
    }
    res.json({ message: "Género eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;