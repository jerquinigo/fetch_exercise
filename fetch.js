/*## Step 1: Refactorin'

Copy your Random Dog Image app and adjust it to use `fetch` instead of `XMLHttpRequest`. You shouldn't have to change any of your DOM stuff to complete this - all of your refactoring should be inside your button listener.
*/

document.addEventListener("DOMContentLoaded", () => {
  let body = document.querySelector("body");
  let button = document.querySelector(".button1");

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
      let mainDiv = document.querySelector(".mainDiv");
        let p = document.createElement("p");
        p.innerText = innerRes.message;
        mainDiv.appendChild(p);
      });
    });
});
