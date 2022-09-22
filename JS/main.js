"use strict";
// random number between 1 & 20
let myNumber = Math.trunc(Math.random() * 20 + 1);

//select spans for resultes
const span1 = document.querySelector(".game-data span:nth-of-type(1)");
const span2 = document.querySelector(".game-data span:nth-of-type(2)");
const span3 = document.querySelector(".game-data span:nth-of-type(3)");

//select check button
const submitButton = document.querySelector("input[type=submit]");

//select result sapn
const resultSpan = document.querySelector(".result");

// check the number on clicking submit
submitButton.addEventListener("click", () => {
  // select inputnumber
  const numberGuessed = document.querySelector("input[type=number]").value;
  console.log(numberGuessed);
  //check
  if (numberGuessed == myNumber) {
    //ch bgr color
    document.body.classList.add("true");

    // show resultes for span 1
    span1.innerHTML = "&#128175; Correct Number!";

    // show resultes for span 3
    if (myNumber > Number(span3.innerHTML)) {
      span3.innerHTML = myNumber;
    }

    //display the correct answer in result span
    resultSpan.textContent = numberGuessed;
    resultSpan.classList.add("true");
  } else {
    //show resultes for span 1
    if (numberGuessed < myNumber) {
      span1.innerHTML = "&#128201 Too low!";
    } else {
      span1.innerHTML = "&#128200 Too high!";
    }

    //show resultes for span 2
    span2.innerHTML = Number(span2.innerHTML) - 1;
  }
  document.querySelector("input[type=number]").value = "";
});

// select again button
againButton = document.querySelector("header button");

// restart the game
againButton.addEventListener("click", () => {
  //remove bgr green
  document.body.classList.remove("true");

  //clear resSpan
  resultSpan.innerHTML = "?";

  // change statistics
  span1.innerHTML = "start guessing.....";
  span2.innerHTML = 20;

  // random number between 1 & 20
  myNumber = Math.trunc(Math.random() * 20 + 1);
});
