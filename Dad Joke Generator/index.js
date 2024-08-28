 const btnEl = document.getElementById("btn")
 const jokeE1 = document.getElementById("joke")

 const apiKey = "mpYhqNp5EhPsxqzy3Isg5w==G7eKB1k2wfYRBaXs"
 apiURL = "https://api.api-ninjas.com/v1/dadjokes?"

const options = {
    method: "GET",
    headers: {
        "X-Api-key": apiKey ,
    },     
};

async function getJoke(){

    try {
        
    jokeE1.innerText = "Updating.."
    btnEl.disabled = true;
    btnEl.innerText = "loading..";
   const response = await fetch(apiURL, options)
   const data = await response.json()

   btnEl.disabled = false;
   btnEl.innerText = "tell me a joke";
   jokeE1.innerText = data[0].joke;
}

 catch (error) {
   jokeEl.innerText = "An error Happened, try again later";
    
    btnEl.disabled = false;
    btnEl.innerText = "tell me a joke";
 console.log(error)
    }
}
        
btnEl.addEventListener("click", getJoke)