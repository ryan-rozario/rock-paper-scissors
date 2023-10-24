function userClick(userInput) {
    var computerInput = Math.floor(Math.random() * (3));

    if(userInput>2 || userInput<0 || computerInput>2 || computerInput<0)
        return;

    message = "";

    if(userInput==0 && computerInput==1){
        message = "Rock beat Scissors. You Win.";
    }
    else if(userInput==1 && computerInput==2){
        message = "Scissors beat Paper. You Win.";
    }
    else if(userInput==2 && computerInput==0){
        message = "Paper beat Rock. You Win.";
    }
    else if(userInput==1 && computerInput==0){
        message = "Rock beat Scissors. You Loose.";
    }
    else if(userInput==2 && computerInput==1){
        message = "Scissors beat Paper. You Loose.";
    }
    else if(userInput==0 && computerInput==2){
        message = "Paper beat Rock. You Loose.";
    }
    else if(userInput==0 && computerInput==0){
        message = "Both played Rock. Draw.";
    }
    else if(userInput==1 && computerInput==1){
        message = "Both played Scissors. Draw.";
    }
    else if(userInput==2 && computerInput==2){
        message = "Both played Paper. Draw.";
    }

    var resultText = document.getElementById("result");
    resultText.textContent = message;
}