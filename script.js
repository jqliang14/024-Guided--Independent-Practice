//Guided Practice 

$(".button-one").click(function() {
    let userInput_one = $(".answer-one").val().toLowerCase();
    let userInput_two = $(".answer-two").val().toLowerCase();
     if (userInput_one === "Toyko" && userInput_two === "Jupiter") {
        $(".result").text("You win");
    } 
    
});
$(".button-two").click(function() {
    let userInput_three = $(".answer-one").val().toLowerCase();
    let userInput_four = $(".answer-two").val().toLowerCase();
    if (userInput_three === "cheetah" && userInput_four === "google") {
       $(".result-two").text("You win");
   }else { 
       $(".result-two").text("Try again");
   }
    
    });
    
//Independent Practice