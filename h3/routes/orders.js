var express = require('express');
var router = express.Router();

class cakeOrder{
  constructor(topping, quanity){
    this.topping = topping;
    this.quanity = quanity;
  }
}

const Data = new Array(new cakeOrder("Plain",3),new cakeOrder("Cherry",10), new cakeOrder("Plain",1), new cakeOrder("Chocolate",6), new cakeOrder("Cherry",2));

/* GET order listing. */
router.get('/', function(req, res, next) {
  res.send(JSON.stringify(Data));
});

router.post('/', function(req, res, next) {
  res.send(JSON.stringify(Data));
});

module.exports = router;
