const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();


//m2P1pvrTef81Krr2
//mongodb+srv://samuel:<password>@cluster0-j9gxy.gcp.mongodb.net/test?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://samuel:m2P1pvrTef81Krr2@cluster0-j9gxy.gcp.mongodb.net/omnistack?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json());
app.use(routes);

app.listen(3333);


//query params: request.query (filtros,ordenação, etc...)
//route params: request.params (identificar um recurso -put/delete-)
//body: request.body
