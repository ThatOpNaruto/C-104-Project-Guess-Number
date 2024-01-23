// generation of random value
var y = Math.floor(Math.random() * 10 + 1);
var guess = 1;
player_name = localStorage.getItem("player_name");
function submit()
{
    var x = document.getElementById("guessField").value;

// count of attempts
// until hit
  if(x==y)
  {
    alert("CONGRATULATIONS!!!"+player_name+"  YOU GUESSED IT RIGHT IN" + guess + "GUESS");
    guess = 1;
  }
// function for the number sent by the user
   else if(x > y)
   {
    guess++;
    alert("OOPS SORRY! TRY A SMALLER NUMBER");
   }
   else
   {
    guess++;
    alert("OOPS SORRY!! TRY A GREATER NUMBER");
   }
   }

   function playAgain()
   {
    y = Math.floor(Math.random() * 10 + 1);
   }
