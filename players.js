// JavaScript File
var pitchers = ["Madison Bumgarner", "Matt Moore", "Jeff Samardzija","Johnny Cueto"];
var catchers = ["Buster Posey", "Trevor Brown"];
var firstBase = ["Brandon Belt"];
var secondBase = ["Joe Panik", "Kelby Tomlinson"];
var shortStop = ["Brandon Crawford"];
var thirdBase = ["Connor Gillapsie"];
var leftField = ["Gregor Blanco", "Angel Pagan"];
var centerField = ["Gorkys Hernandez", "Denard Span"];
var rightField = ["Hunter Pence"];


function checkInput() 
{
    var correctGuesses = 0; 
    var guesses = []; 
    
 //pitcher
    var guess = document.getElementById("pitcher").value;
    guesses.push(guess);
    guess= guess.toLowerCase();
    for(var i =0; i < pitchers.length; i++) 
    {
        if (guess == pitchers[i])
        {
            correctGuesses += 1;
        }
    }
    //catcher 
    guess = document.getElementById("catcher").value;
    guesses.push(guess);
    guess= guess.toLowerCase();
    for(i =0; i < catchers.length; i++) 
    {
        if (guess == catchers[i])
        {
            correctGuesses += 1;
        }
    }
        
        // first base
         guess = document.getElementById("firstBase").value;
    guesses.push(guess);
    guess= guess.toLowerCase();
    for(i =0; i < firstBase.length; i++) 
    {
        if (guess == firstBase[i]) 
        {
            correctGuesses += 1;
        }
    }
        
        // second base
        guess = document.getElementById("secondBase").value;
    guesses.push(guess);
    guess= guess.toLowerCase();
    for(i =0; i < secondBase.length; i++) 
    {
        if (guess == secondBase[i]) 
        {
            correctGuesses += 1;
        }
    }
        
        // short stop
        guess = document.getElementById("shortStop").value;
    guesses.push(guess);
    guess= guess.toLowerCase();
    for(i =0; i < shortStop.length; i++) 
    {
        if (guess == shortStop[i])
        {
            correctGuesses += 1;
        }
    }
        
        // third base
        guess = document.getElementById("thirdBase").value;
    guesses.push(guess);
    guess= guess.toLowerCase();
    for(i =0; i < thirdBase.length; i++)
    {
        if (guess == thirdBase[i]) 
        {
            correctGuesses += 1;
        }
    }
        
        // left field
        guess = document.getElementById("leftField").value;
    guesses.push(guess);
    guess= guess.toLowerCase();
    for(i =0; i < leftField.length; i++) 
    {
        if (guess == leftField[i]) 
        {
            correctGuesses += 1;
        }
    }
        // center field
        guess = document.getElementById("centerField").value;
    guesses.push(guess);
    guess= guess.toLowerCase();
    for(i =0; i < centerField.length; i++) 
    {
        if (guess == centerField[i]) 
        {
            correctGuesses += 1;
        }
    }
        
        // right field
        guess = document.getElementById("rightField").value;
    guesses.push(guess);
    guess= guess.toLowerCase();
    for(i =0; i < rightField.length; i++)
    {
        if (guess == rightField[i]) 
        {
            correctGuesses += 1;
        }
        
    }
    
    function calculatePerc(numcorrect) 
{
    return (numcorrect/9).toPrecision(4);
}
    
    setCookie("percentage", calculatePerc(correctGuesses), 10);
    setCookie("pitcher", guesses[0], 10);
    setCookie("catcher", guesses[1], 10);
    setCookie("first", guesses[2], 10);
    setCookie("second", guesses[3], 10);
    setCookie("short", guesses[4], 10);
    setCookie("third", guesses[5], 10);
    setCookie("left", guesses[6], 10);
    setCookie("center", guesses[7], 10);
    setCookie("right", guesses[8], 10);
    window.location = "results.html";   
} 

function loadResults() {
    
    document.getElementById("percentage").innerHTML = Number(getCookie("percentage") ).toPrecision(4) +"%";
    document.getElementById("pitcher").innerHTML = "Pitcher guess: " + getCookie("pitcher");
    document.getElementById("catcher").innerHTML = "Catcher guess: " + getCookie("catcher");
    document.getElementById("firstBase").innerHTML = "First Base guess: " + getCookie("first");
    document.getElementById("secondBase").innerHTML = "Second Base guess: " + getCookie("second");
    document.getElementById("shortStop").innerHTML = "Short Stop guess: " + getCookie("short");
    document.getElementById("thirdBase").innerHTML = "Third Base guess: " + getCookie("third");
    document.getElementById("leftField").innerHTML = "Left Field guess: " + getCookie("left");
    document.getElementById("centerField").innerHTML = "Center Field guess: " + getCookie("center");
    document.getElementById("rightField").innerHTML = "Right Field guess: " + getCookie("right");
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

