function Pizza(size, protein, veg) {
  this.size = size;
  this.protein = protein;
  this.veg = veg;
}

Pizza.prototype.totalPrice = function() {
  var basePrice = 0;
  if (this.size === "small")
    basePrice = 10;
  if (this.size === "medium")
    basePrice = 13;
  if (this.size === "large")
    basePrice = 16;
  return basePrice + this.protein * 3 + this.veg * 2;
}



$(document).ready(function() {
  $("form#pizza_pie").submit(function(event) {
    event.preventDefault();

    var inputtedSize = $("input[name=size]:checked").val();
    var inputtedProtein = $("input:checkbox[name=protein]:checked").length;
    var inputtedVeg = $("input:checkbox[name=veg-etc]:checked").length;
    var pizza = new Pizza(inputtedSize, inputtedProtein, inputtedVeg);

    $("#protein-choices").show();
    $("input:checkbox[name=protein]:checked").each(function() {
      var proteinChoices = $(this).val();
      var capitalProteinToppings = proteinChoices.toUpperCase();
      $("#protein-choices").append(capitalProteinToppings + "<br>");
    });
    $("#veg-etc-choices").show();
    $("input:checkbox[name=veg-etc]:checked").each(function() {
      var vegChoices = $(this).val();
      var capitalVegToppings = vegChoices.toUpperCase();
      $("#veg-etc-choices").append(capitalVegToppings + "<br>");

    });
    $("#total-price").append("$" + pizza.totalPrice());
    $("#pizza_pie").hide();
  });
});
