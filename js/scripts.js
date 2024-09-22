
// let age = document.querySelector(".number")
// let button = document.querySelector("button")

// let txt = document.querySelector("h2")

// button.addEventListener("click", function () {
//     if (age.value >= 18) {
//         // console.log("You Are Adult");
//         txt.innerHTML = "You Are Adult"
//         txt.style.color = "green"

//     } 
//     else {
//         // console.log("You Are Baby");
//         txt.innerHTML = "You Are Baby"
//         txt.style.color = "red"
//     }

// })





let gender = document.querySelector(".gender")
let area = document.querySelector(".area")
let age = document.querySelector(".age")
let button = document.querySelector("button")
let txt = document.querySelector("h2")

button.addEventListener("click", function () {
    if (gender.value === "female") {
        if (area.value === "bogura") {
            if (age.value >= 21 && age.value <= 30) {
                txt.innerHTML = "You Are Perfect Candidate"
                txt.style.color = "green"
            }
            else {
                txt.innerHTML = "Age not Match (>21 to <30 for Perfect Candidate)"
                txt.style.color = "red"
            }
        }
        else {
                txt.innerHTML = "Must Entry (bogura) but Your entry wrong"
                txt.style.color = "red"
        }
    }
    else {
                txt.innerHTML = "Must Entry (female) but Your entry wrong"
                txt.style.color = "red"
    }
})

