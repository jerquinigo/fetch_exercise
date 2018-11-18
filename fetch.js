//jonathan.e

document.addEventListener("DOMContentLoaded", () => {
  let body = document.querySelector("body");
  let button = document.querySelector(".button1");
  let img = document.createElement("img")
  document.body.appendChild(img);
  img.style.width = "50%";

  button.addEventListener("click", () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => {
      if (res.ok) {
        console.log(res);
        let res1 = res.json();
        return res1;
        // debugger;
      }
    })
    .then(innerRes => {
      console.log(innerRes);
      // debugger;
      // let mainDiv = document.querySelector(".mainDiv");
        ;
        img.src = innerRes.message;

      });
    });
});
