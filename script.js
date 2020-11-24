//Looking for a variable in the outter scope
//******************************************

let num = 50;              // The variable "num" is declared and its value is initialized to 50.

function changenum(){      // The variable "changenum" is declared and its value is a new function
  num = 100;               // that takes no arguments and has a body of 2 statements.
  console.log(num);
};

changenum();               // "changenum" is called: the JS interpreter goes into the "changenum" function and tries to assign the value of 100 to
                           // a variable called "num". Since there are no such variable in this scope, it looks for it in the outer scope, finds it
                           // and assign to it the value of 100. In the last statement of the function, it console.log the new value of num which is now 100.

console.log(num);          // The JS interpretor looks for a variable called "num" to log its value.
                           // Since the function "changenum" change the value of "num" ( in line 7)
                           // "num"´s new value is 100. The console will log 100.



// Same variable name, different scope
//*************************************

let num = 50;             //The variable "num" is declared and its value is initialized to 50.

function changenum(){     // The variable "changenum" is declared and its value is a new function
  let num;                // that takes no arguments  and has a body of 3 statements.
  num = 100;
  console.log(num);
};

changenum();            //"changenum" is called: The JS interpretor goes inside the "changenum" function and console log the value of "num".
                        //in this case "num" is a local variable to the function "changenum".
                        //"num" is declared in line 27.
                        //"num" is initialized in line 28.
                        //"num" is logged in line 29.
                       //in line 32, the closing curly bracket closes the function and destroys "num".


console.log(num);      // The JS interpretor looks for a variable called "num" in its scope, finds it in line 24 and console log its value
                      // of 50.




//Primitives are passed by value
//******************************

let num = 50;             //The variable "num" is declared and its value is initialized to 50.
function changenum(x){   // The variable "changenum" is declared and its value is a new function
  x = 100;               // that takes one parameter and has a body of 2 statements.
  console.log(x);
};


changenum(num);       //"changenum" is called with the variable "num" as argument.
                      //the JS interpretor copies the value of the variable "num" and passes it to the function "changenum".
                      //Since "num" has been passed as an argument it has already been declared and its value can be now changed by the function.
                      // In line 52, the new value of "num" (100) is now logged.
                      // In line 53, the function is closed and the "copied" value version of "num" is destroyed.


console.log(num);     // the "original" variable num, is not affected by the changes that occured to the argument of "changenum".
                      //The console logs "num"´s initial value.




//Objects are passed by Reference
//*******************************

let joe = {age: 33};        // The variable "Joe" is declared and its value is a new Object that has one property.

function changeage(x){      // the variable "changeage" is declared and its value is a new function that takes one parameter
  x.age = 1000000;         // and has a body of 2 statements.
  console.log(x.age);
};

changeage(joe);           // The function "changeage" is called and the variable "Joe" is passed to it as argument.
                         // Instead of only passing the value of the variable "Joe", JS refers to the Object to the function.
                         // The function "changeage" changes the property of "joe" on line 75 and log it on line 76.


console.log(joe.age);   // The property of the Object Joe is now changed and JS will log here the new value of 1000000.
foo
foo2
