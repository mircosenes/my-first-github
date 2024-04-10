//FILE NODE JS PER ACCESSO A DB

const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(express.json());

var con = mysql.createConnection({ //I initialize a connection to mysql server
    host: 'localhost',
    user: "root",
    password: 'feri99tc',
    database: "mydb" 
});


app.get('/customers', (req, res) => {

    con.connect(function(err){

        if(err) throw err;
        console.log("Connected!");

        con.query("SELECT * FROM customers", function(err,data,fields){
            if(err) throw err;
            if(data){ 
                res.json(data)  //ritorno i dati in formato json
            }
        })
    })

});

app.listen(8080, () => {
    console.log(`Server is running on port 8080.`);
  });