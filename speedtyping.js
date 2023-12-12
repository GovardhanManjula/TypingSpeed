let timerEl = document.getElementById("timer")
let quoteDisplayEl = document.getElementById("quoteDisplay")
let resultEl = document.getElementById("result")
let quoteInputEl = document.getElementById("quoteInput")
let submitBtnEl = document.getElementById("submitBtn")
let resetBtnEl = document.getElementById("resetBtn")
let spinnerEl = document.getElementById("spinner")
let counter = 0;

spinnerEl.classList.toggle("d-none")

function startcounter() {
    counter += 1;
    timer.textContent = counter;
    console.log(counter);
}
let counterValue = setInterval(startcounter, 1000)

function getQute() {
    let options = {
        method: "GET"
    };
    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinnerEl.classList.add("d-none");

            let quote = jsonData.content;
            quoteDisplayEl.textContent = quote;
            console.log(jsonData.content)
        })
}
getQute()
startcounter()
resetBtnEl.onclick = function() {
    spinnerEl.classList.remove("d-none");
    getQute()
    startcounter()
    counter = 0;
    resultEl.textContent = "";
    quoteInputEl.value = "";
};
submitBtnEl.onclick = function() {
    if (quoteInputEl.value === quoteDisplayEl.textContent) {
        clearInterval(counterValue);
        resultEl.textContent = "You typed In " + counter + " Seconds";
    } else {
        resultEl.textContent = "You typed Incorrect Sentens";
    }
}