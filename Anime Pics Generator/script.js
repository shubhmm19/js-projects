const btnEl =  document.getElementById("btn");
const animeContainerEl = document.querySelector(".animeContaier");
const animeImgEl = document.querySelector(".anime-img");
const animeNameEl = document.querySelector(".anime-name");

btnEl.addEventListener("click" , async function(){
    try {
        const response = await fetch("https://www.ailabapi.com/api/image/effects/ai-anime-generator")
        const data = await response.json();
        console.log(data);
    } catch (error) {
        
    }
})