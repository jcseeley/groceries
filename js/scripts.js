$(document).ready(function() {

  $("form#grocery-list").submit(function(event) {
    $("#groceries").toggle();
    $("#list").toggle();
  
    event.preventDefault();
    const groceryList = [$("input#grocery1").val(), $("input#grocery2").val(), $("input#grocery3").val(), $("input#grocery4").val(), $("input#grocery5").val()];
    groceryList.sort();
    
    groceryList.forEach(function(grocery) {
      groceryArray = grocery.split("");
      groceryArray[0] = groceryArray[0].toUpperCase();
      grocery = groceryArray.join("");
      $("#output").append("<li>" + grocery + "</li>");


    });

  });
});