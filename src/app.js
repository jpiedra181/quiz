// import './style.css'

async function loadQuestions() {

  let response
  const pageTitle = document.querySelector('title').textContent;

  if (pageTitle === "Quiz - History") {
      response = await fetch('/JSON/history_questions.json')
  } else if (pageTitle === "Quiz - Science") {
      response = await fetch('/JSON/science_questions.json')
  } else if (pageTitle === "Quiz - Geography") {
      response = await fetch('/JSON/geography_questions.json')
  } else if (pageTitle === "Quiz - Math") {
      response = await fetch('/JSON/mathematics_questions.json')
  } else if (pageTitle === "Quiz - Literature") {
      response = await fetch('/JSON/literature_questions.json')
  }

  // Fetch the questions from the JSON file
  // const response = await fetch('history_questions.json');
  const allQuestions = await response.json();
  // console.log(historyQuestions.questions); // Array of questions

  // Filter out easy questions
  const easyQuestions = allQuestions.questions.filter((question) => question.level == "easy"); // Array of easy questions
  const selectEasyQuestions = easyQuestions.sort(() => 0.5 - Math.random()).slice(0, 3); // Randomly select 3 questions

  // Filter out medium questions
  const mediumQuestions = allQuestions.questions.filter((question) => question.level == "medium"); // Array of medium questions
  const selectMediumQuestions = mediumQuestions.sort(() => 0.5 - Math.random()).slice(0, 5); // Randomly select 5 questions

  // Filter out hard questions
  const hardQuestions = allQuestions.questions.filter((question) => question.level == "hard"); // Array of easy questions
  const selectHardQuestions = hardQuestions.sort(() => 0.5 - Math.random()).slice(0, 2); // Randomly select 2 questions
  

  // Array of selected questions
  const selectedQuestions = [...selectEasyQuestions, ...selectMediumQuestions, ...selectHardQuestions];
  console.log(selectedQuestions);

  renderQuestions(selectedQuestions);
}

function renderQuestions(questions) {
  const quizDiv = document.getElementById('quiz');
  quizDiv.innerHTML = '';

  questions.forEach((q, index) => {
      const questionDiv = document.createElement('div');
      questionDiv.classList.add('question');

      questionDiv.innerHTML = `
          <p>${index + 1}. ${q.question}</p>
          ${q.options
          .map(
              (option, i) =>
              `<label>
                  <input type="radio" name="question${index}" value="${option}">
                  ${option}
              </label><br>`
          )
          .join('')} 
      `;

      quizDiv.appendChild(questionDiv);
  });

  // Attach event listener to submit button
  const submitButton = document.getElementById('submit');
  // submitButton.onclick = () => checkAnswers(questions);
  submitButton.addEventListener("click", e => {
      e.preventDefault();
      checkAnswers(questions);
      submitButton.textContent = "Try Again";
      submitButton.addEventListener("click", () => {
          location.reload();
      })
  })
}

function checkAnswers(questions) {
  let score = 0;
  const quizDiv = document.getElementById('quiz');

  questions.forEach((q, index) => {
  const userAnswer = document.querySelector(
      `input[name="question${index}"]:checked`
  );

  const questionDiv = quizDiv.children[index];
  if (userAnswer && userAnswer.value === q.answer) {
      score++;
      questionDiv.classList.add('right');
  } else {
      questionDiv.classList.add('wrong');
  }
  });

  if (score <= 5) {
      document.querySelector('p.score').innerText = `Your score is ${score} out of 10.`
      document.querySelector('p.comment').textContent = "You can do better!"
  } else if (score > 5 && score <= 7) {
      document.querySelector('p.score').innerText = `Your score is ${score} out of 10.`
      document.querySelector('p.comment').textContent = "Good job!"
  } else if (score > 7 && score <= 9) {
      document.querySelector('p.score').innerText = `Your score is ${score} out of 10.`
      document.querySelector('p.comment').textContent = "Great job!"
  } else {
      document.querySelector('p.score').innerText = `Your score is ${score} out of 10.`
      document.querySelector('p.comment').textContent = "CONGRATULATIONS!!!"
  }
  
}

// Load the quiz when the page loads
loadQuestions();


// Menu button
const menuBtn = document.querySelector('.menu')
const options = document.querySelector('.options')
const closeBtn = document.querySelector('.close')

menuBtn.addEventListener('click', () => {
  options.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
  options.style.display = 'none'
})
