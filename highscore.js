var highscoresEL = document.getElementById("highscores");

var highscores = JSON.parse(localStorage.getItem("highscores"))
if(highscores !== null) {

    highscores = highscores.sort(function(a,b) {
        return b.score - a.score;
});

console.log(highscores)

for(var i =o; i < highscores.length; i++){
    var li = document.createElement("li");
    li.textContent = "initials" + highscores[i].initials + "score" + highscores[i].score
    highscoresEL.appendChild(li),
}