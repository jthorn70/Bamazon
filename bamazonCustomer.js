var mysql = require("mysql");
var inquirer = require('inquirer');
var cTable = require('console.table');




var connection = mysql.createConnection ({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected as id " + connection.threadId + "! ");
    startPrompt();
});

function readDatabase() {
    console.log("Selecting all products.\n");
    connection.query("SELECT*FROM products", function(err, res){
        if (err) throw err;
        console.log(res);
        // connection.end();
    })
    startPrompt();
};

var products = []


function startPrompt() {
    connection.query("SELECT product_name FROM products", function(err, data) {
        if (err) throw err;
        
        for (var i=0; i<data.length; i++){
            products.push(data[i].product_name);
            
        }

        console.table([
            {
              id: 'foo',
              age: 10
            }, {
              name: 'bar',
              age: 20
            }
          ]);
          
          // prints
          name  age
          ----  ---
          foo   10
          bar   20
        // console.log("Here is a list of our products!")
        // console.log("--------------------------------")
        // console.log()
        inquirer.prompt([
            {
                type: "list",
                message: "What would you like to buy?",
                choices: products,
                name: "productChoice"
            },
            {
                type: "input",
                message: "How many would you like to buy?",
                name: "numPurchased"
            }

        ]).then(function(callback){
            connection.query("SELECT item_id, product_name, stock_quantity, price FROM products", function(err, data){
                if (err) throw err;

                for (var i=0; i<products.length;i++){
                    if (callback.productChoice == data[i].product_name){
                        connection.query(
                            "UPDATE products SET ? WHERE ?",
                            [
                              {
                                stock_quantity: data[i].stock_quantity - callback.numPurchased
                              },
                              {
                                product_name: data[i].product_name
                              }
                            ]
                        )
                        console.log("Your order of " + callback.numPurchased + " " + callback.productChoice + " comes to a total of, $" + callback.numPurchased*data[i].price + ".")
                    }
                    if (data[i].stock_quantity <= 0){
                        console.log("Sorry we are out of stock with this item! :( ")
                    }
                }
                connection.end();
            })
        })
    });
 
    
};
