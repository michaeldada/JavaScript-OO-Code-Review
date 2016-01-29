function Pizza(pizzaSize, toppings) {
  this.pizzaSize = pizzaSize;
  this.toppings = toppings;
};

Pizza.prototype.toppingsPrice = function(){
  var numberOfToppings = this.toppings.length;
  var toppingsPrice = numberOfToppings * 2;

  return toppingsPrice;
};

Pizza.prototype.sizePrice = function(){
  var pizzaSize = this.pizzaSize;
  var sizePrice = 0;

  if(pizzaSize === "large"){
    var largePrice = sizePrice + 7;

    return largePrice;

  }else if(pizzaSize === "medium"){
    var mediumPrice = sizePrice + 5;

    return mediumPrice;
  };
};

Pizza.prototype.finalPrice = function(){
  return this.sizePrice(this.pizzaSize) + this.toppingsPrice(this.toppings) + 8;
};

$(document).ready(function() {

  $("#orderForm").submit(function(event) {
    $("h1").show();
    var newPizza = new Pizza();
    var pizzaSize = $("select#size").val();
    newPizza.pizzaSize = pizzaSize;

    var toppings = $("input:checkbox:checked.toppings").map(function(){
      return this.value;
      }).get();
    newPizza.toppings = toppings;

    $("div.displayPrice").append("<h2>" + "$" + newPizza.finalPrice() + "</h2>");
    event.preventDefault();
  });
});
