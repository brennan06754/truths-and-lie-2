let fname= "";

function greet() {
    let greetParagraph = document.getElementById("greet");

    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;

    greetParagraph.innerHTML = "Greetings " + age + " year old "
        + fname + " " + lname;
}

function trivia1() {
    let triviaAnswer = document.getElementById("trivia1-answer");

    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;

    if (chocolateSelected) {
        triviaAnswer.innerHTML = "Incorrect! Try again.";
    }
    else if (tunaSelected) {
        triviaAnswer.innerHTML = "Incorrect! Try again.";
    }
    else if (honeySelected) {
        triviaAnswer.innerHTML = "Correct!";
    }
    else {
        triviaAnswer.innerHTML = "Please select an answer.";
    }
}


function checkGame1() {
    let game1Answer = document.getElementById("game1-answer");

    // get values from form
    let volleyballSelected = document.getElementById("volleyball").checked;
    let moonSelected = document.getElementById("moon").checked;
    let friendsSelected = document.getElementById("friends").checked;

    // give result based on what they selected
    if (volleyballSelected) {
        game1Answer.innerHTML = "Wrong! I do play volleyball.";
    }
    else if (moonSelected) {
        game1Answer.innerHTML = "Correct! I have not walked on the moon.";
    }
    else if (friendsSelected) {
        game1Answer.innerHTML = "Wrong! I do enjoy spending time with friends.";
    }
    else {
        game1Answer.innerHTML = "Please select an answer.";
    }
}


function checkGame2() {
    let game2Answer = document.getElementById("game2-answer");

    // get values from form
    let studentSelected = document.getElementById("student").checked;
    let brazilSelected = document.getElementById("brazil").checked;
    let dinosaurSelected = document.getElementById("dinosaur").checked;

    // give result based on what they selected
    if (studentSelected) {
        game2Answer.innerHTML = "Wrong! I am a high school student.";
    }
    else if (brazilSelected) {
        game2Answer.innerHTML = "Wrong! I have visited Brazil.";
    }
    else if (dinosaurSelected) {
        game2Answer.innerHTML = "Correct! I do not own a pet dinosaur.";
    }
    else {
        game2Answer.innerHTML = "Please select an answer.";
    }
}
function checkChallenge() {
    let challengeAnswer = document.getElementById("challenge-answer");

    // get values from form
    let triangleSelected = document.getElementById("triangle").checked;
    let weekSelected = document.getElementById("week").checked;
    let hourSelected = document.getElementById("hour").checked;

    // both truths must be selected and the lie must be unchecked
    if (triangleSelected && hourSelected && !weekSelected) {
        challengeAnswer.textContent = "Correct! You selected both truths.";
    }
    else if (weekSelected || !triangleSelected || !hourSelected) {
        challengeAnswer.textContent =
            "Try again! Select both truths and leave the lie unchecked.";
    }
}