const quizContainer = document.getElementById('quiz-container');
const submitButton = document.getElementById('submit-btn');

const questions = [
    {
        question: 'What is the capital of France?',
        options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
        correctAnswer: 'Paris'
    },
    {
        question: 'Which planet is known as the Red Planet?',
        options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
        correctAnswer: 'Mars'
    },
    {
        question: 'Who wrote "Romeo and Juliet"?',
        options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Leo Tolstoy'],
        correctAnswer: 'William Shakespeare'
    }
];

buildQuiz();

function buildQuiz() {
    questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `
            <p>${index + 1}. ${question.question}</p>
            <ul>
                ${question.options.map(option => `<li>${option}</li>`).join('')}
            </ul>
        `;
        quizContainer.appendChild(questionElement);
    });
}

submitButton.addEventListener('click', showResults);

function showResults() {
    const userAnswers = getUserAnswers();
    const score = calculateScore(userAnswers);

    alert(`You scored ${score} out of ${questions.length}`);
}

function getUserAnswers() {
    const userAnswers = [];
    const optionsElements = document.querySelectorAll('.question ul li');

    optionsElements.forEach((option, index) => {
        if (option.classList.contains('selected')) {
            userAnswers.push(option.textContent);
        }
    });

    return userAnswers;
}

quizContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        toggleSelected(e.target);
    }
});

function toggleSelected(option) {
    option.classList.toggle('selected');
}

function calculateScore(userAnswers) {
    let score = 0;

    userAnswers.forEach((answer, index) => {
        if (answer === questions[index].correctAnswer) {
            score++;
        }
    });

    return score;
}
