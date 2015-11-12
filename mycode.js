// console.log('here is a message');
// document.write('hello world');

// var numberOfDogs = 3;
// var numberOfCats = 6;
// var numberOfAnimals = numberOfDogs * numberOfCats;

// console.log (numberOfAnimals);

// var firstName = 'Samantha';
// // var lastName = ' Lanasa';
// // var fullName = firstName + lastName;
// var lastName = ' Lanasa';

// console.log(firstName);

// function sayThis(a,b){
// 	var fullName = a + b;
// 	document.write('Your name is ' + fullName);
// }

// sayThis (firstName, lastName)

// var sandwiches = 2;
// var moreSandwiches = sandwiches;

// moreSandwiches += sandwiches;

// console.log(moreSandwiches);

// var prettyKitty = 50;

// console.log(prettyKitty / 5)

// function fullName(firstName, lastName) {
// 	return firstName + lastName
// }
// console.log(fullName('samantha',' lanasa'))



// function square(num) {
// 	return num * num;
// }
// console.log(square(4));
// var squareOfFive = square(5);

// document.write('<p>' + (squareOfFive + 1) +'</p>')

// var styleRed = "<p style='color:red;'>" + squareOfFive + '</p>';

// document.write(styleRed);


// for (var i = 1; i <= 12; i++) {
// 	console.log(9 * i);
// }

// var multipleOfNine = 1;
// while (multipleOfNine <= 12) {
// 	console.log (multipleOfNine * 9);
// 	multipleOfNine++
// }



// for (var i = 1; i <= 12; i++) {
// 	for (var j = 1; j <= 12; j++) {
// 		console.log (i * j);
// 	}	
// }

// var myFavoriteFoods = ['Tacos', ' Spaghetti', ' Pizza'];
// document.write(myFavoriteFoods);

// var firstFood = myFavoriteFoods[0]
// document.write(firstFood)
// myFavoriteFoods.push('Apples');

// document.write(myFavoriteFoods)

// for (var i = 0; i < myFavoriteFoods.length; i++) {
// 	console.log(myFavoriteFoods[i]);
// }


// for (var i = 1; i <= 12; i++) {
// 	document.write(9 * i);
// }

// 	var multipleofNine = 1;
// 	while (multipleofNine <= 12) {
// 		document.write(multipleofNine * 9);
// 		multipleofNine++}

function run() {
	var pageNode = document.getElementsByClassName('textbox');
	for (var i = 0; i < pageNode.length; i++) {
		var node = pageNode[i];
		// node.style.backgroundColor = 'blue';
	}
}

run();


function age () {
	var age = document.getElementById("whatAge").value;
	if (age >= 21) {
		window.alert ('Drink up buttercup.');
	} else {
		window.alert ('No soup for you.');
	}
}

function weather () {
	var temperature = parseInt(document.getElementById("whatTemp").value);
	var raining = Boolean(document.getElementById("raining").value);
	console.log(raining);
	console.log(temperature);
	if (isNaN(temperature)) {
		window.alert('This is not a temperature!')
	} else {
		if (temperature <= 0) {
			window.alert ('Stay inside.');
		} else if (temperature <= 30) {
			window.alert ('Put on a hat AND a coat!');
		} else if (temperature <= 50) {
			window.alert ('Put on a coat!');
		} else if (temperature >= 60 && temperature < 70 && raining == false) {
			window.alert ('You don\'t need to wear a coat if you don\'t want to.');
		} else if (temperature == 60 && raining == true) {
			window.alert ('Bring a coat and umbrella.');
		} else {
			window.alert ('Wear whatever.');
		}
	}

}

function dinner(){
	var thingsToEat = ['Mac and Cheese', 'Pizza', 'Tacos', 'Cheeseburgers', 'Burritos', 'Sandwiches', 'Breakfast', 'Salad'];
	var rand = thingsToEat[Math.floor(Math.random() * thingsToEat.length)];
	window.alert(rand);
	console.log(thingsToEat.length);
}

// var favoriteRecipe = {
// 	recipeTitle: 'Oat Apple Crisp',
// 	servings: 8,
// 	ingredients: ['Oats', ' Butter', ' Apples', ' Brown Sugar', ' Cinnamon', ' Sugar']
// };

// document.write(favoriteRecipe.recipeTitle + ' makes ' + favoriteRecipe.servings + ' servings and ingredients include ' + favoriteRecipe.ingredients);

// for (var i = 0; i < favoriteRecipe.ingredients.length; i++) {
// 	var ingredientList = favoriteRecipe.ingredients[i];
// 	console.log(ingredientList);
// }

var Dog = function(age, furColor, name, center) {
	this.age = age;
	this.furColor = furColor;
	this.name = name;
	this.center = {x: center.x, y: center.y};
	this.size = {width: size.width, height: size.height};
};

// Dog.prototype = {
// 	draw: function(size, center) {
// 		var canvas = document.getElementById('canvas');
// 		var screen = canvas.getContext('2d');
// 		screen.fillRect(center.x, center.y, size.width, size.height);
// 	},
// 	perform: function(command) {
// 		console.log(command);
// 	},
// 	play: function(action) {
// 		console.log(action)
// 	},
// 	walk: function() {
// 		this.center = { x: 100, y: 50 };
// 	}
// };

// var size = {width: 100, height: 100};
// var center = {x: 100, y: 100};

// var dog = new Dog(2, "black", "Woz", center, size);

// dog.draw(dog.size, dog.center);

// dog.walk();

var override = document.getElementById('gdiLink');

override.onclick = function() {
	event.preventDefault();
	alert('Error!');
}

var nameInput = document.getElementById('yourName');

function whatName() {
	alert('Hello, ' + nameInput.value);
}

var targetPic = document.getElementById('turtlePic');
targetPic.onmouseover = function () {
    var leftMarginValue = 0;
    function increaseMargin() {
        leftMarginValue++  // update parameter each time 
        targetPic.style.marginLeft = leftMarginValue + 'px' //set left margin 
        if (leftMarginValue === 200)  // check finish condition {
            clearInterval(movePic);
        }
    var movePic = setInterval(function(){increaseMargin()}, 10) // update every 10ms
}











