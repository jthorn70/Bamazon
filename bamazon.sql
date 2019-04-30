CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products (
	item_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price INT (10) NOT NULL,
    stock_quantity  INT (5) NOT NULL
);



INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE("office chair","office", "75", "10");
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE("L shaped desk","office", "150", "6");
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE("Corsair keyboard","gaming", "100", "17");
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE("Razr keyboard","gaming", "145", "19");
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE("Logitech keyboard","gaming", "120", "12");
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE("cheezy poofs","food", "10", "80");
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE("sour patch kids","food", "8", "67");
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE("peanut butter","food", "3", "57");
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE("laser pointer","tools", "15", "125");
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE("flashlight","tools", "15", "88");


SELECT * FROM products;