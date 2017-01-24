document.writeln("This text comes from script javascript file");

// function creation
saySomething();

function saySomething() {
    document.write("<br />");
    document.write("Hi, this is a function");
}

//function with parameters

function addSomething(num1, str) {
    var result = num1 + str;
    document.write("<br/>" + result);
}

addSomething(1000, " more examples in javascript");


var x = 10;
x--;
document.write("<br/>");
document.write("x value is " + x);

//conditions
function conditionStatements() {
    var food = "meat";
    if (food == "apple") {
        document.write("it is apples");
    } else if (food == "meat") {
        document.write("we had meat");
    } else {
        document.write("It is not apple");
    }
}
conditionStatements();

//loops
var i = 1;
while (i <= 5) {
    document.write("<br/>");
    document.write(i + "loop");
    i++;
}

//for loop
document.write("<br/>");
document.write("This is from the for loop");
for (var j = 0; j <= 5; j++) {
    document.write("<br/>");
    document.write(j + "loop");
}


//function with if conditionStatements
//grade calculation
function gradeCalculation(name, score) {
    if (score >= 70 && score <= 90) {
        document.write("<br/>");
        document.write("Good job " + name + " you grade is A");
    } else if (score >= 50 && score <= 69) {
        document.write("<br/>");
        document.write("better job " + name + " you grade is B");
    } else if (score >= 0 && score <= 49) {
        document.write("<br/>");
        document.write("Try it again " + name + " you grade is C");
    } else {
        document.write("<br/>");
        document.write("Excelllent Score " + name + " you grade is A+");
    }
}

gradeCalculation("steve", 34);

//return
function returnFunc(x, y) {
    return x + y;
}
var theResult = returnFunc(10, 20);
document.write("<br/>");
document.write("The result is " + theResult);


//local and globale variables

var globalVar = 10;

function varScope(localVar) {
    //var localVar = 20;
    document.write("The value is " + localVar);
}
varScope(90);
document.write("<br/>");
document.write("The value is " + globalVar);
