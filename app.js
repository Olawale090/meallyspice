
const express = require("express");
const mysql = require("mysql");
const body = require("body-parser");

const app = express();

app.set("view engine","ejs");
app.use("/src",express.static('script'));
// app.use("/carrier",express.static('carrier'));
// app.use("/style",express.static('style'));
// app.use("/assets",express.static('assets'));


app.post("/placeholder",(req,res)=>{

    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'meally_spice'
    });

    console.log(req.body);
    
    connection.connect();
    
    connection.query("INSERT INTO customer_signup (id, customer_name, customer_phone, customer_email, customer_password) VALUES ('','','','','') ", 
    function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0].solution);
    });
    
    connection.end();
    

});

app.listen(1024);