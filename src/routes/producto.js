const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

//select all

router.get('/', (req, res) => {
    
    const sql = 'select * from producto';
    mysqlConnection.query(sql, (err, rows, fields) =>{

        if(!err){
            res.json(rows);

        }else {
            console.log(err);

        }
    })


})

//select one

router.get('/:id', (req , res) =>{

  const {id} =   req.params;
  
  const sql = 'select * from producto where producto_id = ?';

  mysqlConnection.query(sql,[id], (err, rows, fields) =>{

    if(!err){
        res.json(rows[0]);

    }else {
        console.log(err);

    }

  });

})

//create

router.post('/add', (req , res) =>{

 
    const sql = 'insert into  producto set ?';

   const productoObj = {


    producto_id: req.body.producto_id, 
    cantidad: req.body.cantidad,
    tipo_producto: req.body.tipo_producto, 
    valor: req.body.valor, 
    vendedor_id: req.body.vendedor_id, 
    pais: req.body.pais
     
   }
    
mysqlConnection.query(sql,productoObj,(err, rows, fields) =>{
  
      if(!err){
          res.json(rows[0]);
  
      }else {
          console.log(err);
  
      }
  
    });

})




//update

router.put('/update/:id', (req , res) =>{

    const {id} =   req.params;
  
    const sql = `update producto set tipo_producto = ?  where producto_id = ?`;
    mysqlConnection.query(sql,[id], (err, rows, fields) =>{
  
      if(!err){
          res.json(rows[0]);
  
      }else {
          console.log(err);
  
      }
  
    });

})


//delete
router.delete('/delete/:id', (req , res) =>{

    const {id} =   req.params;
  
    const sql = 'delete from producto where producto_id = ?';
    mysqlConnection.query(sql,[id], (err, rows, fields) =>{
  
      if(!err){
          res.json(rows[0]);
  
      }else {
          console.log(err);
  
      }
  
    });

})




module.exports = router;