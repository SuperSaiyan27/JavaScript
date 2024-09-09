function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young to vote":"You are eligble to vote";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}