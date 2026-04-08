console.log("testing")


console.log(document)

// querySelector

const h1Node = document.querySelector("h1")
const pNode = document.querySelector("div p")

console.log(h1Node)

//1. How to select elements and analyze them (web scrapping)
console.log(h1Node.innerText)
console.log(pNode.innerText)

const anotherH1Node = document.querySelector("#second-title")
console.log(anotherH1Node.innerText)
console.log(anotherH1Node.innerHTML)
console.log(anotherH1Node.id)
console.log(anotherH1Node.className)

// querySelectorAll
const paragraphNodeList =  document.querySelectorAll(".some-text")
console.log(paragraphNodeList)

console.log(paragraphNodeList[1].innerText)

// loop with for loop or forEach loop

paragraphNodeList.forEach((paragNode) => {
  console.log(paragNode.innerText)
})

// what can we do with NodeList that we do with arrays:

/* 
- bracket notation for selecting a particular element
- .length property
- for loop
- forEach method

... if we want to use arrays methods on a NodeList, we can convert that NodeList into an array. Array.from()
*/

//* nested search in DOM
const cardsNodeList = document.querySelectorAll(".card")
cardsNodeList.forEach((cardNode) => {
  console.log(cardNode)
  const h3Node = cardNode.querySelector("h3")
  console.log(h3Node.innerText)

  // ... now give me the p of each card
})


//2. DOM mapulation
h1Node.innerText = "Manipulating the DOM"


const newH1Node = document.querySelector("#third-title")
// console.log(newH1Node)

newH1Node.addEventListener("click", () => {
  console.log("user clicking on the h3")
  // newH1Node.innerText = "Clicked!"
  newH1Node.innerHTML = "this is an h3! <span>with a span inside!</span>"
})

//* updating nodes

const buttonNode = document.querySelector("#increment")
const spanNode = document.querySelector("#count h2 span")

buttonNode.addEventListener("click", () => {
  // console.log("clicking")
  // spanNode.innerText++
  spanNode.innerText = Number(spanNode.innerText) + 1
})

//* Deleting and Adding nodes

const deleteBtnNode = document.querySelector("#delete-btn")
console.log(deleteBtnNode)

deleteBtnNode.addEventListener("dblclick", () => {
  console.log("doble clicking")
  deleteBtnNode.remove() // it is not destroyed. It is just out of the DOM.
  console.log(deleteBtnNode)

  // document.querySelector("body").remove()
})


const inputNode = document.querySelector("#name")
const addBtnNode = document.querySelector("#add-form button")
const ulNode = document.querySelector("#add-form ul")

// console.log(inputNode, addBtnNode, ulNode)

addBtnNode.addEventListener("click", () => {
  // console.log("testing")
  console.log(inputNode.value)

  let userInput = inputNode.value

  ulNode.innerHTML += `<li>${userInput}</li>`
})

const sectionNode = document.querySelector("#final-section")

sectionNode.addEventListener("click", () => {
  console.log(sectionNode.className)

  // sectionNode.className = "red-container"

  // console.log(sectionNode.classList)
  sectionNode.classList.toggle("blue-container")
  sectionNode.classList.toggle("red-container")
})

const lastH2Node = document.querySelector("#last-h2")
lastH2Node.addEventListener("mouseenter", () => {
  console.log(lastH2Node.style)
  lastH2Node.style.color = "blue"
  lastH2Node.style.backgroundColor = "black"
})