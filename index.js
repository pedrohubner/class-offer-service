const app = require('express')();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const PORT = 8080;

app.use(bodyParser.json());

mongoose.connect('mongodb://db:27017/class-offer', {
    useNewUrlParser: true
})
    .then(result => {
        console.log('MongoDB Conectado');
    })
    .catch(error => {
        console.log(error);
    });

var route = require('./routes/admin-route')(app);
var route = require('./routes/offer-route')(app);
var route = require('./routes/student-route')(app);
var route = require('./routes/teacher-route')(app);

app.listen(PORT, () => {
    console.log('Servidor rodando na porta ' + PORT);
})