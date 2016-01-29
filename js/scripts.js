function Pizza(pizzaSize, toppings) {
  this.pizzaSize = pizzaSize;
  this.toppings = toppings;
}
//this.toppings = ["pepperoni", "sausage", "pineapple"];

//Pizza.prototype.basePrice = 10;

Pizza.prototype.toppingsPrice = function(){
var numberOfToppings = this.toppings.length;
 var additionalToppings = (numberOfToppings -1);
 var additionalToppingsPrice = additionalToppings * 2;
 return additionalToppingsPrice;
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
  }else{
    return sizePrice;
  };
};
// };
//console.log(this.toppings.length);
// Address.prototype.fullAddress = function() {
//   return this.street + ", " + this.city + ", " + this.state;
// }
//
// $(document).ready(function() {
//   $("#addAddress").click(function() {
//       $("#originalAddress").append('<div class="newAddress">' +
//                                    '<div class="form-group">' +
//                                      '<label for="street">Street</label>' +
//                                      '<input type="text" class="street">' +
//                                    '</div>' +
//                                    '<div class="form-group">' +
//                                      '<label for="city">City</label>' +
//                                      '<input type="text" class="city">' +
//                                    '</div>' +
//                                    '<div class="form-group">' +
//                                      '<label for="state">State</label>' +
//                                      '<input type="text" class="state">' +
//                                    '</div>' +
//                                  '</div>');
// });
//   $('form#contact').submit(function(event) {
//     event.preventDefault();
//     var firstNameInput = $('input#firstName').val();
//     var lastNameInput = $('input#lastName').val();
//     // var streetInput = $('input#street').val();
//     // var cityInput = $('input#city').val();
//     // var stateInput = $('input#state').val();
//
//     var newContact = new Contact(firstNameInput, lastNameInput);
//
//     $("ul#nameList").append("<li class='firstList'>" + newContact.fullName() + "</li>");
//
//     $(".newAddress").each(function() {
//       var inputtedStreet = $(this).find("input.street").val();
//       var inputtedCity = $(this).find("input.city").val();
//       var inputtedState = $(this).find("input.state").val();
//       var completeAddress = new Address(inputtedStreet, inputtedCity, inputtedState);
//       newContact.address.push(completeAddress.fullAddress());
//
//     $('li.firstList').click(function() {
//       $('div.contactLastHidden').show();
//       $('li#nameOutput').text(newContact.fullName());
//       $('li.addressOutput').text(completeAddress.fullAddress());
//       //$('li#cityOutput').text(newContact.city);
//       //$('li#stateOutput').text(newContact.state);
//       });
//     });
//   });
// });
