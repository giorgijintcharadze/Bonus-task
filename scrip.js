let userinput = document.querySelector("#input");
let button = document.querySelector("#clickbtn");
let username = document.querySelector("#username");
let Biography = document.querySelector("#bio");
let imgOutput = document.querySelector("#Githubpicture");

button.addEventListener("click", () => {
  document
    .querySelector("#outputcontainer", "#Githubpicture")
    .classList.add("visable");
  fetch(`https://api.github.com/users/${userinput.value}`)
    .then((info) => info.json())
    .then((data) => {
      username.textContent = data.login;
      if (data.bio) {
        Biography.textContent = data.bio;
      } else {
        username.textContent = "error";
      }
      imgOutput.src = data.avatar_url;
    });
});
