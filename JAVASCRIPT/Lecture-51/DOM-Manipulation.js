// Window Object: Global object(created by Browser ,everything lies in it ,we can control it's window's like open & close)

//CRUD (create, Read, update and delete)
const { createElement } = require("react");

// DOM (Document_Object_Model)(tree-like-structure):-HTML's code convert into JS object and that js (object)code is called document

// BOM (Browser_Oject_Model):- Interaction with the browser living the html content behind 


                                          // FETCH(Access) ELEMENTS
// document.getElementById("fpara");
// document.getElementById("fheading");

// document.getElementsByClassName("textmatter");

// document.getElementsByTagName('p')

// document.querySelector('#fpara');

// document.querySelector('.textmatter');       //return only first para with class textmatter

// document.querySelector('p');                 //return only 1para 
// document .querySelectorAll('p)               //return all para

// $0

                                          // UPDATE EXISTING ELEMENTS
        // *INNER HTML(get/set)*
// let button =$0
// button       to ptint
// button.innerHTML        //get only para content inside the button tag tag we want to get 

// button.innerHTML ='<p>Hello jee</p>';         //set (change the existed element )


         //*OUTER HTML*
// let content = myElement.outerHTML;
// Content

        //*TEXT CONTENT(Give me all content inside tag)*
// let element  = document.querySelector('#fdiv');
// console.log(element)

// element.textContent       //Give me all content inside tag
     
        //*INNER TEXT*
// element.innerText.       // give the content that is shown in wepage(document{para/heading})      


                                              // ADD ELEMENT
// let fHeading = document createElement('h1');
// fHeading             //to print
// fHeading.textContent = "My name is Shivani pal"
// fHeading             //to print 
// let bodyTag= document.querySelector('body');
// bodyTag.          //to print 
// bodyTag.appendChild(fHeading);           // add child at the last (in the script tag)
// bodyTag            //to print


// let mydiv = document.querySelector('#mydiv');
// my div           //to print

//let newElement = document.createElement('span');
//newElement        //to print

// newElement.textContent = "This is me Shivani pal";
//newElement       //to print
        //*Position*//
// mydiv.InsertAdjacentELEMENT('beforebegin',newElement);

// mydiv.InsertAdjacentELEMENT('beforeend',newElement);

// mydiv.InsertAdjacentELEMENT('afterbegin',newElement);

// mydiv.InsertAdjacentELEMENT('afterend',newElement);

                                                  //REMOVAL(remove child)

// let parent = document.querySelector('#mydiv');
// let child = document.querySelector('#fpara');
// parent.removeChild(child);




