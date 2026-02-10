let paraElement =document.getElementById('spara');
//undefined
paraElement
//<p id=​"spara" style=​"background-color:​ orange;​padding:​ 0.8rem;​">​ Second Para ​</p>​
console.log(paraElement.style);
//VM316:1 CSSStyleDeclaration {0: 'background-color', 1: 'padding-top', 2: 'padding-right', 3: 'padding-bottom', 4: 'padding-left', accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}
//undefined

                                        //.style

paraElement.style.backgroundColor = 'blue';     //change bcg color using style i.e for one line
'blue'
                
                                        //.cssText

let secondElement = document.getElementById('sdiv');
//undefined
secondElement
//<div id=​"sdiv" style=​"background-color:​ yellow;​padding:​ 1.2rem;​">​…​</div>​
secondElement.style.cssText
//'background-color: yellow; padding: 1.2rem;'
secondElement.style.cssText = "background-color:black ;color:white; padding : 0.5";
//background-color:black ;color:white; padding : 0.5'

                                            //.setAttribute

let firstElement = document.querySelector('#fdiv');
//undefined
firstElement
//<div id=​"fdiv" style=​"background-color:​ aqua;​padding:​ 2rem;​">​…​</div>​
firstElement.setAttribute('class','divClass');
//undefined
firstElement
//<div id=​"fdiv" style=​"background-color:​ aqua;​padding:​ 2rem;​" class=​"divClass">​…​</div>​
firstElement.setAttribute('style',"padding = 0.1rem");

                                            //.className


let fpara = $0
//undefined
fpara
//<p id=​"fpara" style=​"background-color:​ green;​padding:​ 1rem;​" class=​"goku vageta">​ First Para ​</p>​
fpara.className 
'goku vageta'
fpara.className = "Gohan Bulbul"
//'Gohan Bulbul'
fpara.className
//'Gohan Bulbul'    

                                            //.classList
//to get list/array----> add,fetch,remove,toggle,contains

let fpara = document.querySelector('#fpara');
//undefined
fpara
//<p id=​"fpara" style=​"background-color:​ green;​padding:​ 1rem;​" class=​"goku vageta">​ First Para ​</p>​
fpara.classList
//DOMTokenList(2) ['goku', 'vageta', value: 'goku vageta']
fpara.classList.add('vinu');

fpara.classList
//DOMTokenList(3) ['goku', 'vageta', 'vinu', value: 'goku vageta vinu']
fpara.classList.remove('goku');

fpara.classList
//DOMTokenList(2) ['vageta', 'vinu', value: 'vageta vinu']
fpara.classList
//DOMTokenList(2) ['vageta', 'vinu', value: 'vageta vinu']
fpara.classList.toggle('vageta');
//false
fpara.classList
//DOMTokenList ['vinu', value: 'vinu']
fpara.classList.contains('goku');
//false
fpara.classList.contains('vinu');
//true