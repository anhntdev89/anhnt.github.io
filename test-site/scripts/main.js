// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello World! ";

// document.querySelector("html").addEventListener("click", function () {
//   alert("Ouch! Stop pocking me!");
// });

const myImage = document.querySelector("img");
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images\\idea.png") {
    myImage.setAttribute("src", "images\\flower.jpg");
  } else if (mySrc === "images\\flower.jpg") {
    myImage.setAttribute("src", "images\\cat.jpg");
  } else if (mySrc === "images\\cat.jpg") {
    myImage.setAttribute("src", "images\\lion.jpg");
  } else if (mySrc === "images\\lion.jpg") {
    myImage.setAttribute("src", "images\\idea.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUsername() {
  const myName = prompt("Please enter your name");
  if (!myName) {
    setUsername();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is coll, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUsername();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is coll, ${storedName}`;
}

myButton.onclick = () => {
  setUsername();
};
