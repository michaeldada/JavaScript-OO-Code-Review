describe('Pizza', function() {
  it('should create a pizza object', function() {
    var testPizza = new Pizza("large", "pepperoni");
    expect(testPizza.pizzaSize).to.equal("large");
    expect(testPizza.toppings).to.equal("pepperoni");
  });
  it('should calculate the price for a large or medium pizza', function(){
    var testPizza = new Pizza("large",[]);
    //testPizza.pizzaSize = "medium"
    //testPizza.toppings = []
    expect(testPizza.sizePrice()).to.equal(7);
  });
  it('should calculate the price for toppings', function(){
    var testPizza = new Pizza();
    testPizza.toppings = ["pepperoni", "sausage", "pineapple"];
    expect(testPizza.toppingsPrice()).to.equal(4);
  });
  it('should calculate final price based on size and toppings', function(){
    var testPizza = new Pizza();
    testPizza.toppings = ["pepperoni", "sausage", "pineapple"];
    testPizza.pizzaSize = "large";
    expect(testPizza.finalPrice()).to.equal(19)
  });
});
//   it('should return a full name', function() {
//     var testContact = new Contact("Paul", "Hess");
//     expect(testContact.fullName()).to.equal("Paul Hess");
//   });
// });
//
// describe('Address', function() {
//   it('should create an address object', function() {
//     var testAddress = new Address("123 N Ave", "Portland", "OR");
//     expect(testAddress.street).to.equal("123 N Ave");
//     expect(testAddress.city).to.equal("Portland");
//     expect(testAddress.state).to.equal("OR");
//   });
//
//   it('should return a full address', function() {
//     var testAddress = new Address("123 N Ave", "Portland", "OR");
//     expect(testAddress.fullAddress()).to.equal("123 N Ave, Portland, OR");
//   });
//
