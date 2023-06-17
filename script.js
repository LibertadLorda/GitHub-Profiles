const user  = document.getElementById('search');

const APIURL = "https://api.github.com/users/";

user.addEventListener("keypress",generateUser);

async function generateUser(){

    const response = await fetch(APIURL + user)
    .then((response) => response.json())
        .then((data) => {
            
        })
    
}
generateUser();


const jokeEl = document.querySelector('.joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener("click", generateJoke)
 
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

const res = await fetch("https://icanhazdadjoke.com", config)
.then((res) => res.json())
  .then((data) => {
    jokeEl.innerHTML = data.joke;
})
}