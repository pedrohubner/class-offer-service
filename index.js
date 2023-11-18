const app = require('express')();
const bodyParser = require("body-parser");
const PORT = 8080;

app.use(bodyParser.json());

var route = require('./routes/admin-route')(app);
var route = require('./routes/offer-route')(app);
var route = require('./routes/student-route')(app);
var route = require('./routes/teacher-route')(app);

app.listen(PORT, () => {
    console.log('Servidor rodando na porta ' + PORT);
})