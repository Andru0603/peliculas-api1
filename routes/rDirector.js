// routes/rDirector.js
const express = require("express");
const router = express.Router();
const Director = require("../model/mdlDirector");

// GET - Obtener todos los directores
router.get("/", async (req, res) => {
  try {
    const directores = await Director.find();
    res.json(directores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET - Obtener un director por ID
router.get("/:id", async (req, res) => {
  try {
    const director = await Director.findById(req.params.id);
    if (!director) {
      return res.status(404).json({ error: "Director no encontrado" });
    }
    res.json(director);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST - Crear un nuevo director
router.post("/", async (req, res) => {
  try {
    const nuevoDirector = new Director(req.body);
    await nuevoDirector.save();
    res.status(201).json(nuevoDirector);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT - Actualizar un director
router.put("/:id", async (req, res) => {
  try {
    const director = await Director.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!director) {
      return res.status(404).json({ error: "Director no encontrado" });
    }
    res.json(director);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE - Eliminar un director
router.delete("/:id", async (req, res) => {
  try {
    const director = await Director.findByIdAndDelete(req.params.id);
    if (!director) {
      return res.status(404).json({ error: "Director no encontrado" });
    }
    res.json({ message: "Director eliminado exitosamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;