const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// GET all Employees
router.get('/usuario/', (req, res) => {
  mysqlConnection.query('SELECT * FROM tbl_usuario', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET all Employees
router.get('/usuario/login/:usu_usuario/:usu_password', (req, res) => {
    const { usu_usuario,usu_password } = req.params;
    mysqlConnection.query('SELECT * FROM tbl_usuario where usu_usuario = ? and usu_password =?',[usu_usuario,usu_password], (err, rows, fields) => {
      if(!err) {
          if(rows.length>0){
            res.json('TRUE');
          }else{
            res.json("FALSE");
          }
   
      } else {
        console.log(err);
      }
    });  
  });

module.exports = router;
