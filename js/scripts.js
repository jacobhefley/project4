//Pizza 
// var myobj = {
//   "name": ["Crust","Sauce","Cheese","Pepperoni","Sausage","Ham","Bacon","Chicken","Onions","Mushrooms","Peppers","Olives","Pineapple","Spinach"],
//   "value": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
//   "cost": [2,1,1,1,1,1,1,1,0.5,0.5,0.5,0.5,0.5,0.5]
// }

// alert(myobj['employee'][1]); // Outputs "amit"

// .indexof()



class Pizza {
	constructor(size) {
		this.PizzaSize = size;
    	this.PizzaToppings = [];
    	this.PizzaToppings[0] = 1; // prevent errors to amke sure every pizza has a crust, so if this.Pizza Topping[0] = 1 ERROR
    	this.PizzaCost = 0;
    	this.Toppings = 
    	this.ToppingsToCost = {Crust: 2, Sauce: 1, Cheese: 1, Pepperoni: 1, Sausage: 1, Ham: 1, Bacon: 1, Chicken: 1, Onions: 0.5, Mushrooms: 0.5, Peppers: 0.5, Olives: 0.5, Pineapple: 0.5, Spinach: 0.5};
    }
//     	 = {
//   							"name": ["Crust","Sauce","Cheese","Pepperoni","Sausage","Ham","Bacon","Chicken","Onions","Mushrooms","Peppers","Olives","Pineapple","Pineapple"],
//   							"value": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
//   							"cost": [2,1,1,1,1,1,1,1,0.5,0.5,0.5,0.5,0.5,0.5]
// }
  	addTopping(nameIn){
  		// check if nameIn is typeof String 
  		// var temp = this.Toppings.('name').indexof(nameIn);
  		return this.ToppingsToCost[nameIn];


  	}
  	// ArraytoTopping(){


  	// }

  	// calculateCost
  	returnCost(){
  		return this.PizzaCost;
  	}
  	// returnSize()
}

class Cheese extends Pizza {
	constructor(size) {
    	this.efficentArray = new Int8Array(9);
  	}
	
}

class Pepperoni extends Pizza {
		constructor(size) {
		this.PizzaSize = size;
    	this.PizzaToppings = [];
    	this.PizzaCost = 6;

  	}

}

class Supreme extends Pizza {
	
}

class Custom extends Pizza {
	
}

class Topping {
	constructor(toppingID){
		this.toppingID= topppingID;
		this.choices= 0;
	}
	toppingMap(){

	}


}

test = new Pizza(0);

console.log(test.addTopping("Crust"));




