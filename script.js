
let inpAge = document.querySelector("#ageVal");

let submit = document.querySelector("#submit");

let card1 = document.querySelector("#child");

let card2 = document.querySelector("#man");




inpAge.addEventListener("input", () => {






    if (inpAge.value === "") {
        card1.style.visibility = "visible";
        card2.style.visibility  = "visible";
    } else {
        let age = parseInt(inpAge.value);

        if (age >= 18) {
            card2.style.visibility  = "visible";
            card1.style.visibility  = "hidden";
        } else {
            card2.style.visibility  = "hidden";
            card1.style.visibility  = "visible";
        }

    }
    









})

