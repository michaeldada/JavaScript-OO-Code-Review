describe('Pizza', function() {
  it('should create a pizza object', function() {
    var testPizza = new Pizza("large", "pepperoni");
    expect(testPizza.pizzaSize).to.equal("large");
    expect(testPizza.toppings).to.equal("pepperoni");
  });
  it('should create a base price for the pizza', function(){
    var testPizza = new Pizza();
    expect(testPizza.basePrice).to.equal(10);
  });
  it('should add 2 to the base price for each additional topping', function(){
    var testPizza = new Pizza();
    testPizza.toppings = ["pepperoni", "sausage", "pineapple"];
    expect(testPizza.newPrice()).to.equal(14);
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
