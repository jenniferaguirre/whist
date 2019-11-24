var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,


    user: "root",

    password: "password",
    database: "bamazon_DB"
});


connection.connect(function (err) {
    if (err) throw err;
    start();
});


function start() {
    inquirer
        .prompt({
            name: "enter",
            type: "list",
            message: "Do you want to enter Bamazon ?",
            choices: ["YES", "NO",]
        })
        .then(function (answer) {
            
            if (answer.enter === "YES") {
                display();
            }
            else if (answer.enter === "NO") {
                connection.end();
            }
        });

}
function display() {
        connection.query("SELECT * FROM products", function (err, results) {
            if (err) throw err;


            for (var i = 0; i < results.length; i++) {
                console.log ("-------")
                console.log(" Product's Id  " + results[i].item_id );
                console.log( "Name of product  " + results[i].product_name );
                console.log ("Price of product  " + + results[i].price );
                console.log ( "Stock quantity " + results[i].stock_quantity);
                
                }
                      
                   
            

})
}

        