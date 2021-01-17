const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '3148719225',
    database: 'tienda_online'
})


mysqlConnection.connect(function (error){

    if(error){

        console.log(error);

        return;
    }else{

        console.log('Db is connect');
    }

});



module.exports = mysqlConnection;

