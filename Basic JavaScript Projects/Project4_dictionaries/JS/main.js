//main.js

function my_Dictionary() {
    var DragonBall = {
        Warrior:"Goku",
        Race:"Saiyan",
        Age:"48",
        Move:"Kamahamaha",
        Sound:"Shout!"
    };
    delete DragonBall.Race; //this removes the Race KVP frmo the Dictionary before it is displayed
    document.getElementById("Dictionary").innerHTML = DragonBall.Race;
}