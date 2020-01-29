# intent-interview-challenge
Shopping Cart API build for &lt;intent> interview challenge

This project was built with Express.js and vanilla Javascript, as I thought using a frontend framework would be overkill. 

I designed the project to be extensible so that it would work with a greater variety of items in the shopping cart. You can see this in the way the cart is created and the price is calculated. Furthermore, the HTML renders dynamically, so any number of items can be add/removed from the JSON catalogue. You can see in my version I added "strawberries" but you could easily remove or add more items. 

To run this project:
1) npm install
2) node index.js OR nodemon index.js
3) visit http://localhost:3000/

If there is an issue with node.js, please try using node version 13.6.0. 

To run the tests:
1) npm test

Testing is done with mocha and supertest. 

The project should be view on a web browser. I recommend Chrome, as thats what I used when testing it. It was not built mobile responsive due to time constraints, but that would be an easy extension. 
