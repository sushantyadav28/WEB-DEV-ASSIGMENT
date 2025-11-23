// Name: Sushant
// Roll No: 2501350065
// Course: B.Tech CSE (FSD)
// Section: B

// JavaScript Console Quiz Game


const quizQuestions = [
    {
        question: "What is the capital of India?",
        answer: "new delhi"
    },
    {
        question: "Which language runs in a web browser?",
        answer: "javascript"
    },
    {
        question: "What keyword is used to declare a variable in JavaScript?",
        answer: "let"
    },
    {
        question: "What is 10 + 10?",
        answer: "20"
    },
    {
        question: "Which symbol is used for comments in JavaScript (single-line)?",
        answer: "//"
    }
];


function runQuiz() {
    let score = 0; 
    alert("Welcome to the Quiz! Answer the following questions:");
    for (let i = 0; i < quizQuestions.length; i++) {
        let userAnswer = prompt(`Question ${i + 1}: ${quizQuestions[i].question}`);

        
        if (userAnswer === null) {
            alert("Quiz cancelled!");
            return;
        }

        userAnswer = userAnswer.toLowerCase().trim();

        if (userAnswer === quizQuestions[i].answer) {
            alert("Correct! ✔️");
            score++;
        } else {
            alert(`Wrong ❌\nCorrect Answer: ${quizQuestions[i].answer}`);
        }
    }

    
    alert(`Quiz Completed! 🎉\nYour Score: ${score} / ${quizQuestions.length}`);
}


runQuiz();
