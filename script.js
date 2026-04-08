console.log("testing")


console.log(document)

// querySelector

const h1Node = document.querySelector("h1")
const pNode = document.querySelector("div p")

console.log(h1Node)

//1. How to select elements and analyze them (web scrapping)
console.log(h1Node.innerText)
console.log(pNode.innerText)


//2. DOM mapulation
h1Node.innerText = "Manipulating the DOM"

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