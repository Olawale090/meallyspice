const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
// const session = require("express-session");
const cors = require("cors");

const app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: true })

app.set("view engine","ejs");


// app.use(session({
//     secret:"checker",
//     saveUninitialized:true,
//     resave:true
// }))

var userPlaceholder;

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("app testing");
})

app.get("/checkuser",urlencodedParser,(req,res)=>{

    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'meally_spice'
    });

    const customer_email = req.body.customerEmail;

    if(customer_email != ""){

        var fetchUsers = "SELECT * FROM customer_signup";
        connection.query(fetchUsers,(error, results)=>{ 


            if(error){
                console.log("Error");
                // res.send("New user email detected...");
            }
            
            // console.log(results);
            res.send(results);

        });

    }else{

        res.send("Fill all form inputs");

    }

    connection.end();

});


app.post("/register",urlencodedParser,(req,res)=>{
    
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'meally_spice'
    });

    const customer_name = req.body.customerName;
    const customer_phone = req.body.customerPhone;
    const customer_email = req.body.customerEmail;
    const customer_password = req.body.customerPassword;

    if(customer_name != "" || customer_phone != "" || customer_email != "" || customer_password != ""){

        var insertQuery = "INSERT INTO customer_signup (customer_name, customer_phone, customer_email, customer_password) VALUES (?,?,?,?) ";
        connection.query(insertQuery,[customer_name,customer_phone,customer_email,customer_password],(error, results)=>{
  
        if (error) {
            console.log("INSERT Query failed");
        }

        res.send("Registration successful");

        console.log(customer_name);

    });
    }else{
        res.send("Fill all form inputs")
    }

    connection.end();

});


app.get("/login",(req,res)=>{

    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'meally_spice'
    });
    
    var login = "SELECT * FROM customer_signup";
    connection.query(login,(error, results)=>{
        
        if (error){
            console.error("Query failed");
        }

        res.send(results);

    });
    
    connection.end();

})

app.post("/order",(req,res)=>{

        var connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : '',
            database : 'meally_spice'
        });

        const food_category = req.body.foodCategory;
        const food_price = req.body.foodPrice;
        const food_quantity = req.body.foodQuantity;
        const soup_type = req.body.soupType;
        const meat_type = req.body.meatType;
        const meat_price = req.body.meatPrice;
        const meat_quantity = req.body.meatQuantity;
        const water_type = req.body.waterType;
        const water_price = req.body.waterPrice;
        const water_quantity = req.body.waterQuantity;
        const customer_name = req.body.customerName;
        const customer_phone = req.body.customerPhone;

        console.log(food_category);
        console.log(food_price);
        console.log(food_quantity);
        console.log(soup_type);
        console.log(meat_type);
        console.log(meat_price);
        console.log(meat_quantity);
        console.log(water_type);
        console.log(water_price);
        console.log(water_quantity);
        console.log(customer_name);
        console.log(customer_phone);

        var insertQuery = "INSERT INTO customer_orders (customer_name,food_category,food_quantity,meat_type,meat_quantity,water_type,water_quantity,food_price,soup_type,meat_price,water_price,customer_phone_number) VALUES (?,?,?,?,?,?,?,?,?,?,?,?) ";
        connection.query(insertQuery,[customer_name,food_category,food_quantity,meat_type,meat_quantity,water_type,water_quantity,food_price,soup_type,meat_price,water_price,customer_phone],(error, results)=>{
  
            if (error) {
                console.log("INSERT Query failed");
            }

            res.send("Food ordered succesfully, we'll call you for delivery in a moment");

        });
    
})

app.listen(1024)