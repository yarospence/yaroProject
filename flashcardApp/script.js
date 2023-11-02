//const for different variables in the code
//const represents constant meaning the variable will not change.
const container = document.querySelector(".container");
const addQuestionCard = document.getElementById("add-question-card");
const cardButton = document.getElementById("save-btn");
const question = document.getElementById("question");
const answer = document.getElementById("answer");
const errorMessage = document.getElementById("error");
const addQuestion = document.getElementById("add-flashcard");
const closeBtn = document.getElementById("close-btn");
let editBool = false;

//Add Question when user pushes 'Add Flashcard' button
addQuestion.addEventListener("click", () => {
  container.classList.add("hide");
  question.value = ""; //this saves space for the user 
  answer.value =  "";
  addQuestionCard.classList.remove("hide");
});

//Hide Create flashcard card
//what is an event listener???
closeBtn.addEventListener (
  "click",
  (hideQuestion = () => {
    container.classList.remove("hide");
    addQuestionCard.classList.add("hide");
    if (editBool) {
      editBool = false; //if the statement is false the Bool will respond false.
      submitQuestion();
    }
  })
);
//Submit Question
cardButton.addEventListener (
  "click",
  (submitQuestion = () => {
    editBool = false;
    tempQuestion = question.value.trim();
    tempAnswer = answer.value.trim();
    if (!tempQuestion || !tempAnswer) {
      errorMessage.classList.remove("hide");
    } else {
      container.classList.remove("hide");
      errorMessage.classList.add("hide");
      viewlist ();
      question.value = "";
      answer.value = "";
      //double quotes ("") allows the user to save space in variables
    }
  })
);

//Card Generation
function viewList() {
  let listCard = document.getElementsByClassName("card-list-container");
  let div = document.createElement("div");
  div.classList.add("card");
  //Question
  div.innerHTML += `
  <p class="question-div">${question.value}</p>`;
  //Answer
  let displayAnswer = document.createElement("p");
  displayAnswer.classList.add("answer-div", "hide");
  displayAnswer.innerText = answer.value;
  //Link to show/hide the answer
  let link = document.createElement("a");
  link.setAttribute("href", "#");
  link.setAttribute("class", "show-hide-btn");
  link.innerHTML = "Show/Hide";
  link.addEventListener("click", () => {
    displayAnswer.classList.toggle("hide");
  });

  div.appendChild(link);
  div.appendChild(displayAnswer);
  //Edit button
  let buttonsCon = document.createElement( )
  //Delete button
}

//Modify Elements
//Disable edit and delete buttons