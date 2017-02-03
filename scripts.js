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

gradeCalculation("steve", 34); //pass by value(a copy is made and those values are passed)

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


//Arrays

var numbers = [];
for (var i = 0; i <= 10; i++) {
    numbers[i] = [i];
    document.write("<br/>");
    document.write("The value of " + i + " is " + numbers[i]);
}


//objects creation

var object1 = {
    name: "xxx",
    size: 10,
    color: "green"
};

document.write("<br/>");
document.write(" The size is " + object1.size);


//object with methods

var family = {
    daddy: "abc",
    mother: "xyz",
    displays: function() {
        document.write("Daddy and mother are family " + family.daddy);
    }
};

document.write("<br/>");
document.write(family.displays());

//change the datatype of the object property
family.mother = true;

document.write("<br/>");
document.write(family.mother);

//add a new property to the object
family.brother = "none";

document.write("<br/>");
document.write(family.brother);

//add a new methods

family.priya = function() {
    document.write("new member added to the family");
}

document.write("<br/>");
document.write(family.priya());

delete family.brother;
document.write("<br/>");
document.write(family.brother);

//global object string
var name = "hello how are you";
//call methods
document.write("<br/>");
document.write(name.toUpperCase());

document.write("<br/>");
document.write("character at " + name.charAt(3));

document.write("<br/>");
document.write("Replace  " + name.replace('hello', 'hi'));

document.write("<br/>");
document.write("bold  " + name.bold());

//call properties
document.write("<br/>");
document.write(" The length of the string is " + name.length);


//math object
var result = 3.5;
document.write("<br/>");
document.write("Rounding" + Math.round(result));
document.write("<br/>");
document.write("floor" + Math.floor(result));
document.write("<br/>");
document.write("Random" + Math.ceil(Math.random() * 10));


//Date object
var dateValue = new Date();

document.write("<br/>");
document.write("Date is " + dateValue);

document.write("<br/>");
document.write("formatted date is " + dateValue.toDateString());

document.write("<br/>");
document.write("Year is  " + dateValue.getFullYear());

document.write("<br/>");
document.write("Date value " + dateValue.getDate());

//DOM

document.write("<br/>");

function changeColor() {
    var text = document.getElementById("para1").style.color = "red";
}

function changeStyle(){
	var result=document.getElementsByTagName("p");
	for(var i=0;i<result.length;i++){
		result[i].style.fontStyle="italic";
	}
}

function changeFont(){
	console.log("inside loop");
	var display=document.getElementsByClassName("div1")[0].style.fontSize="xx-large";
}

function changeText(){
	var finalResult=document.getElementById("div2").innerHTML="text changed....."
//	document.getElementsByClassName("div2")[0].innerHTML="The text as changed";
}

function combineText(){
	var text1=document.getElementById("div1").innerHTML;
	var text2=document.getElementById("div2").innerHTML;
	var text3=text1+text2;
	document.getElementById("div3").innerHTML=text3;
}

function changeImage(){
	//by ID 
	//var image1=document.getElementById("image1");
	//image1.src="c:/kamal/Android/priya.jpg"
	//by Class Name
	var img=document.getElementsByClassName("image1")[0].src="c:/kamal/Android/priya.jpg";
}


function changeBackground(){
	document.getElementById("par1").style.backgroundColor="yellow";
}

function removeBackground(){
	document.getElementById("par1").style.backgroundColor="";
}

function changeImageMouse(){
	document.getElementById("image1").src="c:/kamal/Android/priya.jpg";
}
function replaceImageMouse(){
	document.getElementById("image1").src="c:/kamal/Android/kamal.jpg";
}

function addNewText(){
	var element=document.createElement("span");
	var node =document.getElementById("text1");
	node.appendChild(element);
	
	var createText=document.createTextNode("kamal");
	element.appendChild(createText);
}


function removeNewText(){
	var element1=document.getElementsByTagName("span")[0];
	var parent=element1.parentNode;
	parent.removeChild(element1);
}

function addAttr(){
	var element=document.createElement("span");
	var node =document.getElementById("text1");
	node.appendChild(element);
	
	var createText=document.createTextNode("kamal");
	element.appendChild(createText);
	
	var pattribute=document.createAttribute("id");
	pattribute.value="addattr";
	element.setAttributeNode(pattribute);
	
}

function childNode(){
	var parent =document.getElementById("text1");
	var child=parent.childNodes[3];
	child.style.color="red";
	 var childele=parent.firstElementChild;
	 childele.style.color="green";
	  var childlast=parent.lastElementChild;
	 childlast.style.color="yellow";
}

