DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
    ID INT NOT NULL AUTO_INCREMENT,
    item_id INT default 0,
    product_name VARCHAR (30) NOT NULL,
    department_name VARCHAR (15) NOT NULL,
    price DECIMAL (0,2) NOT NULL,
    stock_quantity INT (5),
    PRIMARY KEY (ID)
);

INSERT INTO products(item_id,product_name,department_name,price,stock_quantity)
VALUES("1000","Football","Sporting Equiment","100.00","10");

INSERT INTO products(item_id,product_name,department_name,price,stock_quantity)
VALUES("2000","Golf Clubs","Sporting Equipment","250.99","5");

INSERT INTO products(item_id,product_name,department_name,price,stock_quantity)
VALUES("2100","Scuba Mask","Sporting Equipment","85.59","7");

INSERT INTO products(item_id,product_name,department_name,price,stock_quantity)
VALUES("2200","Scuba Fins","Sporting Equipment","150.99","3");

INSERT INTO products(item_id,product_name,department_name,price,stock_quantity)
VALUES("2300","Snorkels","Sporting Equipment","25.99","8");

INSERT INTO products(item_id,product_name,department_name,price,stock_quantity)
VALUES("2400","Wetsuit","Sporting Equipment","300.00","4");

INSERT INTO products(item_id,product_name,department_name,price,stock_quantity)
VALUES("3000","Baseball","Sporting Equipment","10.00","10");

INSERT INTO products(item_id,product_name,department_name,price,stock_quantity)
VALUES("3100","Baseball Glove","Sporting Equipment","110.00","9");

INSERT INTO products(item_id,product_name,department_name,price,stock_quantity)
VALUES("3200","Baseball Bat","Sporting Equipment","75.00","7");

INSERT INTO products(item_id,product_name,department_name,price,stock_quantity)
VALUES("3300","Baseball Hat","Sporting Equipment","15.00","10");

