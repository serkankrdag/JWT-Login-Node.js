const mongoose = require('mongoose');

const username = "serkanhomm";
const password = "Xas615das,1";
const dbName = "Login";

const dbURL = `mongodb+srv://${username}:${password}@homm.tgayvpp.mongodb.net/${dbName}`;

async function connectToDatabase() {
  try {
    await mongoose.connect(dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Bağlantısı Başarılı!");
  } catch (error) {
    console.error("Bağlantı Hatası:", error.message);
  }
}

module.exports = connectToDatabase;
