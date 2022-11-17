//PART ONE
// get element for correctness prompt
let r1 = document.querySelector("#result1");
// get button nodes
let nodelist = document.querySelectorAll("button");
// create array of nodes
let buttonsArray = Array.from(nodelist);
// pop off last node
buttonsArray.pop();
// Add event listener to each button
buttonsArray.map((btn) => {
  btn.addEventListener("click", (event) => {
    //reset style of buttons on any button click
    buttonsArray.forEach((btn) => (btn.style.backgroundColor = "#d9edff"));
    // check for correct answer
    if (event.srcElement.innerHTML.toLowerCase() === "a photic sneezer") {
      // set elements for correct answer
      event.srcElement.style.backgroundColor = "green";
      r1.innerHTML = "Correct";
    } else {
      // set elements for incorrect answer
      event.srcElement.style.backgroundColor = "red";
      r1.innerHTML = "Incorrect";
    }
  });
});

//PART TWO
// get element for correctness prompt and input
let r2 = document.querySelector("#result2");
let input = document.querySelector("input");

// clear correctness prompt and input field text and background color on click
input.addEventListener("click", (event) => {
  input.value = "";
  input.style.backgroundColor = "";
  r2.innerHTML = "";
});

// get button and add event listener
let checkBtn = document.querySelector("#checkBtn");
checkBtn.addEventListener("click", (event) => {
  //let input = document.querySelector('input');
  if (input.value.toLowerCase() === "digestive rumbles") {
    r2.innerHTML = "Correct";
    input.style.backgroundColor = "green";
  } else {
    r2.innerHTML = "Incorrect";
    input.style.backgroundColor = "red";
  }
});
