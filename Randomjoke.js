let jokeTextEl = document.getElementById("jokeText");
let jokeBtnEl = document.getElementById("jokeBtn");
let spinnerEl = document.getElementById("spinner");


function generateRandomJoke() {
    spinnerEl.classList.toggle("d-none");
    jokeTextEl.classList.add("d-none");

    let url = "https://apis.ccbp.in/jokes/random";
    let options = {
        method: "GET"
    };

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let randomJoke = jsonData.value;

            spinnerEl.classList.toggle("d-none");
            jokeTextEl.classList.remove("d-none");

            jokeTextEl.textContent = randomJoke;
        });
}

jokeBtnEl.addEventListener("click", generateRandomJoke);