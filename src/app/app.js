  

function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
        //show choices 
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 showProgress(); 
    }
};

function guess(id, guess) {
var button = document.getElementById(id);
button.onclick = function() {
    quiz.guess(guess);
    populate();
}
};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + "of" + quiz.questions.length;

}
function showScores() {
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id = 'score'>Your scores: "+ quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
}


var questions = [   
 new Question("By working 5 hours/day, 4 waiters can serve 250 dishes in 8 days. 2 waiters would require how many hours/day to serve 500 dishes in 20 days?", ["8 hrs/day", "6 hrs/day", "7 hrs/day", "9 hrs/day"], "8 hrs/day"),
 new Question(" Find a two-digit number whose product of the digits is 8 and when 18 is added to this number, the digits are reversed?", ["81", "42", "24", "18"], "81"),
new Question(" What is the probability that a chosen number is a perfect cube if it is chosen at random from the set {1, 2, 3…, 100}?", ["1/25", "1/2", "4/13", "1/10"], "1/25"),
new Question("If 6 persons sit around a table, the probability that some specified 3 of them are always together is:", ["1/20", "3/10", "1/5", "4/5"], "3/10"),
new Question("Arun, Kartik and Mira can do a work in 90, 30 and 45 days respectively. If they work together, in how many days will they complete work?", ["15", "10", "20", " 25"], "15"),
new Question("What percent is 2 minutes 24 seconds of an hour?", [" 8%", "4%", "2%", "6%"], "4%"),
new Question("A batsman scored 110 runs which included 3 boundaries and 8 sixes. What percent of his total score did he make by running between the wickets?", ["45%", "45(5/11)%", "54(6/11)%", "55%"], "45(5/11)%"),
new Question("Two students appeared at an examination. One of them secured 9 marks more than the other and his marks were 56% of the sum of their marks. The marks obtained by them are:", ["39,30", "41,32", "42,33", "43,34"], "42,33"),
new Question("A fruit seller had some apples. He sells 40% apples and still has 420 apples. Originally, he had:", ["588 apples", "600 apples", "672 apples", "700 apples"], "700 apples")
];
var quiz = new Quiz(questions);
populate();