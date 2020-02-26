const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// GET all peliculas
router.get('/peliculas/', (req, res) => {
  mysqlConnection.query('SELECT * FROM tbl_pelicula', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// Calendario de peliculas
router.get('/peliculas/calendario/:id_pelicula', (req, res) => {
    const { id_pelicula } = req.params;
    mysqlConnection.query('SELECT ca.ca_hora, ca.id_sala , ca.fecha, sa.sa_nombre,sa.sa_numero_asientos, sa_tipo FROM tbl_calendario ca INNER JOIN tbl_sala sa ON ca.id_sala=sa.id_sala WHERE ca.id_pelicula =? ',[id_pelicula], (err, rows, fields) => {
      if(!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });  
  });
module.exports = router;