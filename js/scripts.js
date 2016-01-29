function Pizza(pizzaSize, toppings) {
  this.pizzaSize = pizzaSize;
  this.toppings = toppings;
}

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

Pizza.prototype.finalPrice = function(){
return this.sizePrice(this.pizzaSize) + this.toppingsPrice(this.toppings) + 8;
};

$(document).ready(function() {
  $("#orderForm").submit(function(event) {
      var size = $("select#size").val();
      var toppings = $("input:checkbox:checked.toppings").map(function(){
        return this.value;
      }).get();
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
