//main.js

//A function with JS and HTML using ternary operator with input from the browser
function Ride_Function() {
    var Height = document.getElementById("Height").value;
    var Can_ride = Height < 52 ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can+ride + "to ride";
}

//A constructor function utilizing "new" and "this" keywods
function Vehicle(Make, Model, Year, Colour) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Colour = Colour;
}
var Caig = new Vehicle("Citreon", "C4", 2008, "Silver");
var Kasia = new Vehicle("Mazda", "Type 7", 2008, "Silver");
var GeoRyan = new Vehicle("Volswagen", "Polo", "2012", "Dark Blue");

//A function to display the results of the contructor in an HTML element
function myFunction() {
    document.getElementById("Keywords_and_Constructos").innerHTML = 
        "Erik drives a " +
        Erik.Vehicle_Colour +
        "-coloured " +
        Erik.Vehicle.Model +
        " manufactored in " +
        Erik.Vehicle_Year;
}

//A nested function
function add_Strings() {
    var start_string = "Hello";

    function Adding(str) {
        start_string = start_string + " " + str;
    }
    Adding("World");
    document.getElementById("Nested_Function").innerHTML = start_string;
}