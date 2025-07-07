// TODO(pat) keep as globals?
let problems = [];
let currentProblem = 0;
let incorrectCount = 0;

async function loadProblems() {
    try {
        const response = await fetch('questions.json');
        const data = await response.json();
        problems = data.problems;
        loadProblem(0);
    } catch (error) {
        console.error('Error loading problems:', error);
        alert('Failed to load problems');
    }
}

function loadProblem(i) {
    if (i >= problems.length) {
        alert('Problem index not valid!');
        return;
    }

    const problem = problems[i];
    const question = document.getElementById('question');
    question.innerHTML = `
        <p><strong>Question:</strong> ${problem.question}</p>
    `;
    MathJax.typesetPromise([question]).then(() => {})
        .catch((err) => console.log('MathJax error:', err));
    
    const answerDisplay = document.getElementById('answer-display');
    answerDisplay.innerHTML = `
        <p><strong>Answer:</strong> ${problem.latexAnswer}</p>
        <p><strong>Explanation:</strong> ${problem.explanation}</p>
    `;
    MathJax.typesetPromise([answerDisplay]).then(() => {})
        .catch((err) => console.log('MathJax error:', err));

}

function resetProblem() {
    incorrectCount = 0;
    hideAnswer();

    const showAnswerBtn = document.getElementById('show-answer-btn');
    showAnswerBtn.style.display = 'none';
    const nextBtn = document.getElementById('next-btn');
    nextBtn.style.display = 'none';
    
    document.getElementById('user-answer').value = "";
}

function submitAnswer() {
    const unsafeInput = document.getElementById('user-answer').value;
    const safeInput = escapeHtml(unsafeInput);

    // TODO(pat) break above section out into a renderInput() function for
    // showing the user what LaTeX they entered
    const correctAnswer = problems[currentProblem].answer;

    if (safeInput === "") {
        alert("Please enter an answer.");
        return;
    }

    const isCorrect = checkAnswer(safeInput, correctAnswer);
    if (isCorrect) {
        handleCorrectAnswer();
    } else {
        handleIncorrectAnswer();
    }
}

function checkAnswer(userInput, correctAnswer) {
    const cleanInput = userInput.trim();

    // TODO(pat) replace with LaTeX parsing library comparison somehow
    return cleanInput === correctAnswer;
}

function handleCorrectAnswer(){
    alert("Correct!");
    console.log("Correct!");

    const showAnswerBtn = document.getElementById('show-answer-btn');
    showAnswerBtn.style.display = 'block';
    
    const nextBtn = document.getElementById('next-btn');
    nextBtn.style.display = 'block';
}

function handleIncorrectAnswer() {
    incorrectCount++;

    // TODO(pat) replace with nicer popup
    alert("Incorrect, try again.");
    console.log(`Incorrect attempt ${incorrectCount}`);

    if (incorrectCount >= 3) {
        const showAnswerBtn = document.getElementById('show-answer-btn');
        showAnswerBtn.style.display = 'block';
    }
}

function showAnswer() {
    const nextBtn = document.getElementById('next-btn');
    nextBtn.style.display = 'block';

    
    const answerDisplay = document.getElementById('answer-display');
    answerDisplay.style.display = 'block';
}

function hideAnswer() {
    const answerDisplay = document.getElementById('answer-display');
    answerDisplay.style.display = 'none';
}

function nextProblem() {
    currentProblem++;
    if (currentProblem >= problems.length) {
        currentProblem = 0;
    }
    
    resetProblem();
    loadProblem(currentProblem);
}

function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

document.addEventListener('DOMContentLoaded', function() {
    const submitBtn = document.getElementById('submit-btn');
    const showAnswerBtn = document.getElementById('show-answer-btn');
    const nextBtn = document.getElementById('next-btn');
    const userAnswerInput = document.getElementById('user-answer');

    submitBtn.addEventListener('click', submitAnswer);
    showAnswerBtn.addEventListener('click', showAnswer);
    nextBtn.addEventListener('click', nextProblem);

    userAnswerInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            submitAnswer();
        }
    });
});
