var express = require('express');
var router = express.Router();

//Class for orders
 class cakeOrder{
  constructor(topping, quanity){
    this.topping = topping;
    this.quanity = quanity;
  }
}
//Array of orders
const Data = new Array(new cakeOrder("Plain",3),new cakeOrder("Cherry",10), new cakeOrder("Plain",1), new cakeOrder("Chocolate",6), new cakeOrder("Cherry",2));

//Send JSON objects to /orders
router.get('/', function(req, res, next) {
  res.json(Data);
});

//Send Json object to user
router.post('/', function(req, res, next) {
  res.json(Data);
});

module.exports = router;
