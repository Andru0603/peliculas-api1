// routes/rTipo.js
const express = require("express");
const router = express.Router();
const Tipo = require("../model/mdlTipo");

// GET - Obtener todos los tipos
router.get("/", async (req, res) => {
  try {
    const tipos = await Tipo.find();
    res.json(tipos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET - Obtener un tipo por ID
router.get("/:id", async (req, res) => {
  try {
    const tipo = await Tipo.findById(req.params.id);
    if (!tipo) {
      return res.status(404).json({ error: "Tipo no encontrado" });
    }
    res.json(tipo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST - Crear un nuevo tipo
router.post("/", async (req, res) => {
  try {
    const nuevoTipo = new Tipo(req.body);
    await nuevoTipo.save();
    res.status(201).json(nuevoTipo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT - Actualizar un tipo
router.put("/:id", async (req, res) => {
  try {
    const tipo = await Tipo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!tipo) {
      return res.status(404).json({ error: "Tipo no encontrado" });
    }
    res.json(tipo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE - Eliminar un tipo
router.delete("/:id", async (req, res) => {
  try {
    const tipo = await Tipo.findByIdAndDelete(req.params.id);
    if (!tipo) {
      return res.status(404).json({ error: "Tipo no encontrado" });
    }
    res.json({ message: "Tipo eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;