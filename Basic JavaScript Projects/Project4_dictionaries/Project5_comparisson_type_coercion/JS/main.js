// Choose a variable of your choice
var myVariable = 42; // You can change this variable's value to anything

// Use document.write() to display the variable's value and its data type
document.write("The value of myVariable is: " + myVariable + "<br>" +
               "The data type of myVariable is: " + typeof myVariable + "<br>");

// Use type coercian
document.write("10" + 5 +"<br>");

document.write(2E310 + "<br>");

document.write(-2E310 + "<br>");

document.write(45 > 5, "<br>");

document.write(5 > 45, "<br>");

document.write(10 == 10, "<br>");

X = 10;
Y = 10;
document.write(X === Y , "<br>");


X = 80;
Y = "80";
document.write(X === Y, "<br>");

A = "Goku";
B = "Goku";
document.write(A === B, "<br>")

document.write(5 > 2 && 10 > 4, "<br>");

document.write(5 > 10 && 10 > 4, "<br>");

document.write(5 > 10 || 10 > 4, "<br>");

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}





console.log(10 > 20);