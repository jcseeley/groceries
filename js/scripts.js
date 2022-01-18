$(document).ready(function() {
  $("form#grocery-list").submit(function(event) {
    event.preventDefault();
    $("#groceries").toggle();
    $("#list").toggle();
    let groceryList = [];
    groceryOne = $("input#grocery1").val();
    groceryTwo = $("input#grocery2").val();
    groceryThree = $("input#grocery3").val();
    groceryFour = $("input#grocery4").val();
    groceryFive = $("input#grocery5").val();
    if (groceryOne != "") {
      groceryList.push(groceryOne);
    }
    if (groceryTwo != "") {
      groceryList.push(groceryTwo);
    }
    if (groceryThree != "") {
      groceryList.push(groceryThree)
    }
    if (groceryFour != "") {
      groceryList.push(groceryFour)
    }
    if (groceryFive != "") {
      groceryList.push(groceryFive)
    }
    groceryList.sort();
    groceryList.forEach(function(grocery) {
      let groceryArray = grocery.split("");
      groceryArray[0] = groceryArray[0].toUpperCase();
      grocery = groceryArray.join("");
      $("#output").append("<li>" + grocery + "</li>");
    });
  });
});