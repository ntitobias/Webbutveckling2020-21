/* En kommentar
som kan sträcka sig över flera rader. */

//En kommentar på en rad.
function visaDialog(){
    alert('Hej på dej!');
    changeText();
}

function changeText(){
    document.getElementById("demo").innerHTML = "Hello javaScript;";
}

function writeText(){
    var namn = document.getElementById("fnamn").value;
    document.getElementById("text").innerHTML = namn;
}