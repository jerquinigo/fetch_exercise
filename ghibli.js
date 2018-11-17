// https://ghibliapi.herokuapp.com/films
document.addEventListener("DOMContentLoaded", () =>{
  // let select = document.querySelector("selector")


fetch("https://ghibliapi.herokuapp.com/films").then(res => {
if(res.ok){
  let res1 = res.json()
  return res1
  }
}).then(innerRes =>{
  innerRes.forEach(el  =>{
    let select = document.querySelector(".selector")
  let newNode = document.createElement("option")
    newNode.innerText = el.title
    console.log(select,"this is select");
    select.appendChild(newNode)
    // return el.title
  })
 })
})
