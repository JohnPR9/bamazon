var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table');

var inputString = process.argv;

var firstArg = process.argv[2];
var secondArg = process.argv[3];

var connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "Fr32ndsh3p",
    database: "bamazonDB"
});

connection.connect(function(err){
    if (err) throw err;
    runColumns();
    });

function runColumns(){

    connection.query("SELECT * FROM products", function(err, result, fields) {

    var table = new Table({
        head: ['Item_ID', 'Product', 'Department', 'Price', 'Quantity']
    })

    for(var i = 0; i < result.length; i++) {
    table.push(
        [result[i].item_id, result[i].product_name, result[i].department_name, result[i].price, result[i].stock_quantity]);

    }

    console.log(table.toString());

    userOrder();
  
});
}

function userOrder() {

        inquirer
            .prompt({
                name: "action",
                type: "list",
                message: "What is the ID of the product that you would lke to buy?",
                choices: [
                    "Product ID?",
                    "How many would you like to buy?"
                ]
            })
            .then(function(answer) {
                switch (answer.action) {
                    case "Find item by prodcut id":
                        itemSearch();
                        break;
    
                    case "Verify Quantity":
                        quantitySearch();
                        break;
                }
            });
    }

//     function itemSearch() {
//         inquirer
//             .prompt({
//                 name: "item",
//                 type: "input",
//                 message: "What item would you like to search for?"
//             })
//             .then(function(answer) {
//                 var query = "SELECT item_id, quantity, FROM bamazonDB WHERE ?";
//                 connection.query(query, {
//                     artist: answer.item_id
//                 }, function(err, res) {
//                     for (var i = 0; i < res.length; i++) {
//                         console.log("Product: " + res[i].item_id, " || Song: ", + res[i].quantity);
//                     }
//                     searchItem();
//                 });
//             });
//     }
// // function to search for the quantity that the customer want to buy.
// function quantitySearch (){


// }

// // funciton to search for the item that the customer want to buy.
// function searchItem () {

// }

