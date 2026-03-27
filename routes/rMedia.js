// routes/rMedia.js
const express = require("express");
const router = express.Router();
const Media = require("../model/mdlMedia");

// GET - Obtener todas las medias (con datos relacionados)
router.get("/", async (req, res) => {
  try {
    const medias = await Media.find()
      .populate("GeneroPrin")
      .populate("DirectorPrin")
      .populate("Productora")
      .populate("Tipo");
    res.json(medias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET - Obtener una media por ID (con datos relacionados)
router.get("/:id", async (req, res) => {
  try {
    const media = await Media.findById(req.params.id)
      .populate("GeneroPrin")
      .populate("DirectorPrin")
      .populate("Productora")
      .populate("Tipo");
    if (!media) {
      return res.status(404).json({ error: "Media no encontrada" });
    }
    res.json(media);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST - Crear una nueva media
router.post("/", async (req, res) => {
  try {
    const nuevaMedia = new Media(req.body);
    await nuevaMedia.save();
    res.status(201).json(nuevaMedia);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// PUT - Actualizar una media
router.put("/:id", async (req, res) => {
  try {
    const media = await Media.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!media) {
      return res.status(404).json({ error: "Media no encontrada" });
    }
    res.json(media);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE - Eliminar una media
router.delete("/:id", async (req, res) => {
  try {
    const media = await Media.findByIdAndDelete(req.params.id);
    if (!media) {
      return res.status(404).json({ error: "Media no encontrada" });
    }
    res.json({ message: "Media eliminada exitosamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;