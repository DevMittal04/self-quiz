var readLineSync = require('readline-sync');
const chalk = require('chalk');

var name = readLineSync.question(chalk.blue("Enter your Name: "));

console.log(chalk.red.italic("\nHi "+name.toUpperCase()+"!"));
console.log(chalk.greenBright("\nI present you a Quiz on DEV MITTAL(myself).\nLet\'s see how much you know me."));
console.log(chalk.redBright("\nNOTE: To answer the questions, just enter the option character(a,b,c,d), otherwise your answer will be marked as WRONG!"));

highScore = [
  {
    name:"Surbhi", score:4
  },
  {
    name:"Himani", score:3
  }
];

questions = [
  {
    question:"What is my native place?: ", options:"a. Kekri\nb. Abu Road\nc. 221B Baker Street\nd. 4 Privet Drive", answer:"b"
  },
  {
    question:"Am I older than 18?: ", options:"a. Yes\nb. No",answer:"a"
  },
  {
    question:"What am I currently pursuing?: ", options:"a. CA\nb. BBA\nc. BCA\nd. BA", answer:"c"
  },
  {
    question:"Where would I love to go?", options:"a. New York\nb. Hogwarts\nc. Bangalore", answer:"b"
    },
  {
    question:"What is the name of my pet?: ", options:"a. Tom\nb. Jerry\nc. Stuart\nd. Starlet", answer:"d"
  }
];

score = 0;

function askQuestion(question, options, answer){

  var userAnswer = readLineSync.question(chalk.blue(question)+"\n"+chalk.yellowBright(options)+"\n-> ");

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.magentaBright("Hey Congratulations, you are CORRECT!"));
    score = score + 1;
  }else{
    console.log(chalk.redBright("Sorry, you are wrong!"));
  }
  console.log(chalk.greenBright("Your Score is: "+score));
  console.log(chalk.magentaBright("------------------------"));
}

console.log();
for (i=0;i<questions.length;i++){
  askQuestion(questions[i].question, questions[i].options, questions[i].answer);
}
console.log(chalk.yellowBright("\nYour final score: "+score));

flag = 0;
for(i=0;i<highScore.length;i++){
  if(score > highScore[i].score){
    console.log("Congratulations! You have beaten the High Score ;). Send me the screenshot to update the highscore ;)");
    flag = 1;
    break;
}
}
if(flag == 0){
  console.log("OOPS! You were NOT able to break the high score, play again to beat the high score! To play again, refresh the page!");
}
