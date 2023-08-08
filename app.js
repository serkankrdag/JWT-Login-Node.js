const connectToDatabase = require('./config/data/connect');
const errorHandler = require('./middleware/errorHandler');
const routes = require('./routes/routes');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use('/', routes); 
app.use(errorHandler);

const port = process.env.PORT || 8000;

connectToDatabase().then(() => {
    app.listen(port, () => {
        console.log(`Uygulama ${port} Portundan Başlatıldı`);
    });
}).catch(error => {
    console.error("Bağlantı Hatası:", error.message);
});
