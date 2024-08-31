const btnEl = document.getElementById("btn")
const quoteEl = document.getElementById("quote")
const authorEl = document.getElementById("author")

const apiURL = "https://api.quotable.io/random"


async function getQuote(){
    

    try {   
        btnEl.innerText = "Loading...";
        btnEl.disabled = true;
        const response = await fetch(apiURL);
        const data = await response.json();
        const quoteContent = data.content;
        const quoteAuthor = data.author;
        quoteEl.innerText = quoteContent;
        authorEl.innerText = quoteAuthor;
        btnEl.innerText = "Get a Quote";
        btnEl.disabled = false;
        console.log(data);
        
    } catch (error) {
        console.log(error);
        quoteEl.innerText = "Error!!! Try Again Later";
        authorEl.innerText = "Error!!! Try Again";
        btnEl.innerText = "Get a Quote";
        btnEl.disabled = false;
    }

 
}

btnEl.addEventListener("click", getQuote)