import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
    
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

current_image : number = 3;

SearchedWord = "RINGBELLI";
CurrentGuessedWord = "________";

public PrintCurrentGuessedWord() :string {

  var ReturnValue :string = "";
  for(let i of this.CurrentGuessedWord) ReturnValue = ReturnValue + " " + i;
  return ReturnValue;
}


onLetterClick(ClikedLetter)
{
  var NewCurrentGuessedWord :string = "";
  for(var i in this.SearchedWord)
    if(this.SearchedWord[i]==this.CurrentGuessedWord[i] || ClikedLetter == this.SearchedWord[i]) NewCurrentGuessedWord=NewCurrentGuessedWord+this.SearchedWord[i];
        else NewCurrentGuessedWord = NewCurrentGuessedWord + "_";
    
  
  this.CurrentGuessedWord = NewCurrentGuessedWord;
  //console.log("Letter: ",ClikedLetter);
  //this.current_image++
  }
  

}
