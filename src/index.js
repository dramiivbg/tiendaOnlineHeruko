const express = require('express');
const app = express();

//setting

app.set('port', process.env.PORT || 4000);


//middlewares

app.use(express.json());

//routes

app.use(require('./routes/producto'));
//starting the server


app.listen(4000, ()=> {

    console.log('Server on port', app.get('port'));

})