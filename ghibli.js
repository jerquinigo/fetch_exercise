// https://ghibliapi.herokuapp.com/films
//jonathan.e

const selector = apiData => {
  let select = document.querySelector(".selector");
  apiData.forEach(el => {
    let newNode = document.createElement("option");
    newNode.innerText = el.title;

    select.appendChild(newNode);
  });
};

const display = apiData => {
  let button = document.querySelector(".button1");
  let sel = document.getElementsByTagName("option");
  let title = document.createElement("h2");
  let allInfo = document.createElement("p");
  let des;
  let titleEl;
  let rtscore;

  button.addEventListener("click", () => {
    apiData.forEach((el, i) => {
      if (sel[i].selected) {
        des = el.description;
        titleEl = el.title;
        rtscore = el.rt_score;
        title.innerHTML = `Title: ${titleEl}`;
        allInfo.innerHTML = `Release Date: ${el.release_date} <br /> <hr> Rotten Tomatoes Score: ${rtscore} <br /> <hr> Description: ${des} `

      }
      document.body.appendChild(title);
      document.body.appendChild(allInfo);
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector(".button1");
  let newNode = document.createElement("option");
  let apiLink = "https://ghibliapi.herokuapp.com/films";

  fetch(apiLink)
    .then(res => {
      if (res.ok) {
        let res1 = res.json();
        return res1;
      }
    })
    .then(innerRes => {
      selector(innerRes);
      display(innerRes);
    });
});
