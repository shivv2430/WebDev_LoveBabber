                                    //Access  elements
const myBody = document.body;
myBody.style.backgroundColor = "red";   
console.log(myBody);
//using Id
const box2 = document.getElementById('box2')
console.log(box2);
//using TagName
const divs = document.getElementsByTagName('div');
console.log(divs);
//using ClassName
const boxes = document.getElementsByClassName('box');
console.log(boxes);
//query Selector
const random = document.querySelector('.container .random');
console.log(random);

                                    //Modify(update) elements
//using innerHTML
const box1 = document.getElementById('box2');                                   
box1.innerHTML = "<h1> Hello World </h1>";
box1.style.backgroundColor="red";
box1.image.src
//using attribute value
box1.classList.add('round-border');
const box = document.getElementsByClassName('box');
for(let i=0;i<box1.length;i++){
    box[i].classList.add('round-border');

}
box1.classList.remove('box');
 
                                                //Creating Elements
const newParagraph = document.createElement("p");
newParagraph.innerText = " This is Brand new ";
const container = document.getElementById('container');
newParagraph.classList.add('box');
container.appendChild(newParagraph);

const element = document.getElementById("div");


