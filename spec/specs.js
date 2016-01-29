describe('Pizza', function() {
  it('should create a pizza object', function() {
    var testPizza = new Pizza("large", "pepperoni");
    expect(testPizza.pizzaSize).to.equal("large");
    expect(testPizza.toppings).to.equal("pepperoni");
  });
  it('should calculate the price for a large or medium pizza', function(){
    var testPizza = new Pizza();
    testPizza.pizzaSize = "medium"
    testPizza.toppings = []
    expect(testPizza.sizePrice()).to.equal(5);
  });
  it('should calculate the price for toppings', function(){
    var testPizza = new Pizza();
    testPizza.toppings = ["pepperoni", "sausage", "pineapple"];
    expect(testPizza.toppingsPrice()).to.equal(6);
  });
  it('should calculate final price based on size and toppings', function(){
    var testPizza = new Pizza();
    testPizza.toppings = ["pepperoni", "sausage"];
    testPizza.pizzaSize = "large";
    expect(testPizza.finalPrice()).to.equal(19);
  });
});
