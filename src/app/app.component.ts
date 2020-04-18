import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
    
  const images = [
    "https://github.com/mbaczyn/angular-hangman/blob/master/src/images/1.jpg?raw=true","https://github.com/mbaczyn/angular-hangman/blob/master/src/images/2.jpg?raw=true",
    "https://github.com/mbaczyn/angular-hangman/blob/master/src/images/3.jpg?raw=true",
    "https://github.com/mbaczyn/angular-hangman/blob/master/src/images/4.jpg?raw=true",
    "https://github.com/mbaczyn/angular-hangman/blob/master/src/images/5.jpg?raw=true",
    "https://github.com/mbaczyn/angular-hangman/blob/master/src/images/6.jpg?raw=true",
    "https://github.com/mbaczyn/angular-hangman/blob/master/src/images/7.jpg?raw=true",
    "https://github.com/mbaczyn/angular-hangman/blob/master/src/images/8.jpg?raw=true"
    ];

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'W', 'V', 'X', 'Y', 'Z'];
const MaxGuessNumber : number = 7;
GuessNumber : number = -1;

SearchedWord : string = "RINGBELL";
CurrentGuessedWord : string = "";
MessageForUser : string = "";

ngOnInit(){
  this.onLetterClick();
}

public PrintCurrentGuessedWord() :string {

  var ReturnValue :string = "";
  for(let i of this.CurrentGuessedWord) ReturnValue = ReturnValue + " " + i;
  return ReturnValue;
}


onLetterClick(ClikedLetter)
{
  var NewCurrentGuessedWord :string = "";
  var Guessed :boolean = false;

  for(var i in this.SearchedWord) {
    if(ClikedLetter == this.SearchedWord[i]) { NewCurrentGuessedWord=NewCurrentGuessedWord+ClikedLetter; Guessed = true }
    else {
      if(this.SearchedWord[i]==this.CurrentGuessedWord[i]) NewCurrentGuessedWord=NewCurrentGuessedWord+this.SearchedWord[i];
        else NewCurrentGuessedWord = NewCurrentGuessedWord + "_";
    }
  }

  this.CurrentGuessedWord = NewCurrentGuessedWord;
  if(Guessed==false && this.GuessNumber<this.MaxGuessNumber) this.GuessNumber++;
    
    if(this.CurrentGuessedWord==this.SearchedWord) this.MessageForUser = "!!! C O N G R A T U L A T I O N S !!!   You are the winner !!!";
       else if(this.GuessNumber==this.MaxGuessNumber) this.MessageForUser = "You are dead !!! Game over !!! It was easy word to guess: "+this.SearchedWord;
  
  //console.log("GuessNumber, Max",this.GuessNumber, this.MaxGuessNumber);
  
}



}
