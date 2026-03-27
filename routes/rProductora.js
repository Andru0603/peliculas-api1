// routes/rProductora.js
const express = require("express");
const router = express.Router();
const Productora = require("../model/mdlProductora");

// GET - Obtener todas las productoras
router.get("/", async (req, res) => {
  try {
    const productoras = await Productora.find();
    res.json(productoras);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET - Obtener una productora por ID
router.get("/:id", async (req, res) => {
  try {
    const productora = await Productora.findById(req.params.id);
    if (!productora) {
      return res.status(404).json({ error: "Productora no encontrada" });
    }
    res.json(productora);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST - Crear una nueva productora
router.post("/", async (req, res) => {
  try {
    const nuevaProductora = new Productora(req.body);
    await nuevaProductora.save();
    res.status(201).json(nuevaProductora);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT - Actualizar una productora
router.put("/:id", async (req, res) => {
  try {
    const productora = await Productora.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!productora) {
      return res.status(404).json({ error: "Productora no encontrada" });
    }
    res.json(productora);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE - Eliminar una productora
router.delete("/:id", async (req, res) => {
  try {
    const productora = await Productora.findByIdAndDelete(req.params.id);
    if (!productora) {
      return res.status(404).json({ error: "Productora no encontrada" });
    }
    res.json({ message: "Productora eliminada exitosamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;