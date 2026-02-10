//Events---->announcent (that perform any function after any action/work we done)
//event monitor. "click"
//event receive.  "play"
//event listener.  "video play(action)"
//<event-target>.addEventListener(<event-type>,<function->action>)

function changeText(event){
    console.log(event);
    let fpara= document.getElementById('fpara');
    fpara.textContent = "Hello Shivani"
}

let fpara= document.getElementById('fpara');
fpara.addEventListener('click',changeText);
fpara.removeEventListener('click',changeText);

                                        //Phase of Event
//Caputuring phase(upar se niche div mei tree ki trha){true->usecapture}
//Bubbling phase(niche se upar {At-Target}){add event listener ->Bubbling phase}

//EventObject.   adding console.log(event) in function changeText()

                                        //Default Action

// let anchorElement = document.getElementById('fanchor');
// anchorElement.addEventListener('click',function (event){
//     event.preventDefault();
//     anchorElement.textContent = "click done bhyi"
// });

// let paras = document.querySelectorAll('p');
function alertPara (event){
    if(event.target.nodeName == 'SPAN'){
     alert("You have clicked on para: "+ event.target.textContent)
}
}
// for(let i=0;i<paras.length;i++){
//     let para= paras[i];
//     para.addEventListener("click",function (){
//          alert("You have clicked on para: "+(i+1));
//     })
   
// }
let mydiv =document.getElementById('wrapper');
document.addEventListener('click',alertpara);

