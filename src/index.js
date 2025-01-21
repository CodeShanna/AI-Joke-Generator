function displayJoke(response) {
    console.log(response.data.answer);


    new Typewriter("#joke", {
      strings: response.data.answer,
      autoStart: true,
      cursor: null,
      delay:20
    });
    
}

function createJoke (event) {
    event.preventDefault();
let apiKey = "bfaafcoc80td400cfa803cbf6c5ff69f";
let context =
"you are a hilarious comedian who is a 48 year old woman and you have been suffering from menopause symptoms. You want to make people laugh by telling jokes about getting older and body changes. Please leave an empty line between jokes. Please tell one joke at a time.";
let prompt = "Only say 1 joke at a time.  Please use the format of (question, why did the woman cry all night?) (answer, she just said goodbye to her youth.)";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let joke = document.querySelector("#joke");
    joke.innerHTML = "Joke incoming!!!";

axios.get(apiUrl).then(displayJoke);
}

const jokeElement = document.getElementById(`button`);
jokeElement.addEventListener("click", createJoke);