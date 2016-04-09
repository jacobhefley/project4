class Pizza {
	constructor(size) {
		  this.PizzaSize = size;
    	this.ToppingsArray = new Int8Array (14);
      this.ToppingsArray[0]= 1; // need crust to have a pizza
      this.ToppingsArray[1]= 1;
      this.ToppingsArray[2]= 1;
      this.ToppingsToArray = {Crust: 0, Sauce: 1, Cheese: 2, Pepperoni: 3, Sausage: 4, Ham: 5, Bacon: 6, Chicken: 7, Onions: 8, Mushrooms: 9, Peppers: 10, Olives: 11, Pineapple: 12, Spinach: 13};
    	this.ToppingsToCost = {Crust: 2, Sauce: 1, Cheese: 1, Pepperoni: 1, Sausage: 1, Ham: 1, Bacon: 1, Chicken: 1, Onions: 0.5, Mushrooms: 0.5, Peppers: 0.5, Olives: 0.5, Pineapple: 0.5, Spinach: 0.5};
      this.ArrayToCost = {0: 2, 1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 0.5, 9: 0.5, 10: 0.5, 11: 0.5, 12: 0.5, 13: 0.5};
      this.SizeToCost = {Small: 1, Medium: 2, Large: 4}
      // may look strange but the code maps all inputed strings to Array 
    }
  logArray(){
    return console.log(this.ToppingsArray);
  }
  addToppings(tempArray){
    for(var i=0; i<tempArray.length; i++){
      var temp = tempArray[i];
      var indexToAdd = this.ToppingsToArray[temp];
      this.ToppingsArray[indexToAdd]=1;
      console.log("added "+tempArray[i]+" to ToppingsArray["+indexToAdd+"]");
    }
  }
  	returnCost(){
      var cost = 2;
      for(var i=1;i<8;i++){
        cost+=this.ToppingsArray[i];
      }
      for(var j =8; j<14; j++){
        cost+=((this.ToppingsArray[j])/2);
      }
      cost+=this.SizeToCost[this.PizzaSize];
      return cost;
    }
}
$(function(event){
  $("#submit").click(function(event){
    var sizeIn = $("#size").val();
    myPizza = new Pizza(sizeIn);
    var tempArray =[];
    $("input[name='check']:checked").each(function(){
      tempArray.push(this.value);
    });
    console.log(tempArray);
      myPizza.addToppings(tempArray);
      myPizza.logArray();
     $("#output").text("Total = $"+myPizza.returnCost().toFixed(2));
    event.preventDefault();

  });
});
