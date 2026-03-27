// app.js
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { getConnection } = require("./bd/connect-mongo");

// Importar rutas
const generoRouter = require("./routes/rGenero");
const directorRouter = require("./routes/rDirector");
const productoraRouter = require("./routes/rProductora");
const tipoRouter = require("./routes/rTipo");
const mediaRouter = require("./routes/rMedia");

// Crear la aplicación
const app = express();
const port = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Ruta de prueba
app.get("/", (req, res) => {
  res.json({
    message: "🎬 API de Películas funcionando correctamente",
    endpoints: {
      generos: "/genero",
      directores: "/director",
      productoras: "/productora",
      tipos: "/tipo",
      media: "/media"
    }
  });
});

// Registrar rutas
app.use("/genero", generoRouter);
app.use("/director", directorRouter);
app.use("/productora", productoraRouter);
app.use("/tipo", tipoRouter);
app.use("/media", mediaRouter);

// Conectar a MongoDB y luego iniciar servidor
getConnection()
  .then(() => {
    app.listen(port, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("❌ No se pudo iniciar el servidor:", err);
    process.exit(1);
  });

module.exports = app;