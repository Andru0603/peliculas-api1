// bd/connect-mongo.js
const mongoose = require("mongoose");

const getConnection = async () => {
  try {
    // Verificar si ya hay una conexión activa
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("✅ Conectado exitosamente a MongoDB");
    }
    return mongoose.connection;
  } catch (error) {
    console.error("❌ Error conectando a MongoDB:", error);
    throw error;
  }
};

const closeConn = async () => {
  try {
    if (mongoose.connection.readyState !== 0) {
      await mongoose.connection.close();
      console.log("🔒 Conexión a MongoDB cerrada");
    }
  } catch (error) {
    console.error("❌ Error cerrando conexión:", error);
    throw error;
  }
};

module.exports = { getConnection, closeConn };