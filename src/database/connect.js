const mongoose = require("mongoose");

const connectToDatabase = async () => {
  const uri = `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@localhost:27017`;
  await mongoose
    .connect(uri)
    .then(() => {
      console.log("Conectado ao MongoDB!");
    })
    .catch((err) => console.error("Erro ao conectar ao MongoDB:", err));
};

module.exports = connectToDatabase;
