//Events---->announcent (that perform any function after any action/work we done)
//event monitor. "click"
//event receive.  "play"
//event listener.  "video play(action)"
//<event-target>.addEventListener(<event-type>,<function->action>)

function changeText(){
    let fpara= document.getElementById('fpara');
    fpara.textContent = "Hello Shivani"
}

let fpara= document.getElementById('fpara');
fpara.addEventListener('click',changeText);
fpara.removeEventListener('click',changeText);

                                        //Phase of Event
//Caputuring phase(upar se niche div mei tree ki trha){true->usecapture}
//Bubbling phase(niche se upar {At-Target}){add event listener ->Bubbling phase}
//EventObject
