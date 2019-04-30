# Bamazon

## Description
This app is a simple CLI that lets you searh a database of items, choose an item, and declare how many you would like, and finally returns your purchase order with the cost of your items.

## Tech Used:
  - Inquirer NPM
  - MySQL NPM
  
# Interface
- First we initialize the javascript file in node by typing `node bamazonCustomer.js`
- Next we are given a table of the items in the database along with the data for each item.
- When we choose an item from the list, we are then prompted with how many we would like to purchase,
- When we designate the ammount, we are given the total cost for our order.
![alt text] (/gifs/oneItemPurchased.gif "one Item Purchased")

 This is what happens inside of the databse when the user "makes an order":
 - as you can see, the number of the item the user "purchased" has been depleted by the amount they chose.
 ![alt text] (/gifs/oneItemPurchasedDB.gif)
 
If the user decides to choose more than one of the item, this is what it will look like:
![atl text](/gifs/multItemsPurchased.gif)
as well as inside the database:
![alt text](/gifs/multItemsPurchasedDB.gif)

If the item is out of stock, the user will recieve a message that the item is out of stock and needs to select another item:
![alt text](/gifs/OOS.gif)
and inside the database:
![alt text](/gifs/OOSdb.gif)




