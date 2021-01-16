const express = require('express');
const app = express();

//setting

app.set('port', process.env.PORT || 3000);


//middlewares

app.use(express.json());

//routes

app.use(require('./routes/producto'));
//starting the server


app.listen(3000, ()=> {

    console.log('Server on port', app.get('port'));

})