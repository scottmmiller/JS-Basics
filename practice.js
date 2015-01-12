//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
var isTyler = function (yourName) {
  if (yourName === name) {
    return true;
  } else {
    return false;
  };
};

//Next problem

//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
var getName = function () {
  var name = prompt ("What is your name?")
    return name;
};


//Next Problem

//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
var welcome = function () {
  alert("Welcome " + getName())
};

//Next problem

//Write a function called adder that uses the 'arguments' keyword that comes with every function to
//loop over all the arguments the function received, add them all together, then return the result.
//Save the result of the return value from your adder function, then alert "The Total Number was " + the number that was
//returned from adder.

  //Code Here
var adder = function () {
  var sumAll = 0;
  for (var i = 0; i < arguments.length; i++) {
    sumAll = sumAll + arguments[i];
  };
  alert("The Total Number was " + sumAll);
};

adder(1,2,3,4,5);
arguments = [1,2,3,4,5]

//Next Problem

//What is the difference between arguments and parameters?

  //Answer Here
parameters are part of the function definition; arguments are part of the invocation;

//Next problem

//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
1. false
2. undefined
3. null
4. empty string
5. -0 or 0
6. NaN
to check: if(val != true){
  //do something)
};



//Next Problem

//Create a function called myName that returns your name

  //Code Here
var myName = function () {
  return "Skoot"
};

//Now save the function definition of myName into a new variable called newMyName

  //Code Here
var myNewName = myName();

//Now alert the result of invoking newMyName
alert(myNewName);


//Next problem

//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
var outerFn = function () {
  return function () {
    return "Skoot";
  };
};

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
var innerFn = outerFn();
//Now invoke innerFn.
innerFn();
