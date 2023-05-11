const Mongoose = require("mongoose");

const db = Mongoose.connection;

db.once("open", () => {
  console.log("DB bağlantısı başarılı...");
});

const connectDB = async () => {
  return Mongoose.connect(
    `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
    // `mongodb+srv://taslabenii:Qwerty1234@taslabenii.otif8le.mongodb.net/?retryWrites=true&w=majority`
    // "mongodb://127.0.0.1:27017/ai-costsqo-db",
    // {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // }
  );
};

module.exports = {
  connectDB,
};
