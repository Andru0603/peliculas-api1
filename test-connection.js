// test-connection.js
require("dotenv").config();
const mongoose = require("mongoose");

console.log("URI:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ CONEXIÓN EXITOSA");
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log("❌ ERROR:", err.message);
  });