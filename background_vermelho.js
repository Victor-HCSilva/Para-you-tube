const name = document.querySelector("#channel-handle")?.innerText || "";
const position_red = document.querySelector("#center");
const position = document.querySelector("#logo-icon");
const container = document.querySelector("#container"); 
const top_container = document.querySelector("#masthead-container");
const background = document.querySelector("#content");
const ytd = document.querySelector("ytd-app");
const span = document.querySelector("#span");
const body = document.querySelector("body")
const search = document.querySelector("#search");
const search_ = document.querySelector("#sb_ifc50")
const end = document.querySelector("#end");
const search_form = document.querySelector("#search-form"); 


let sigaa = "https://autenticacao.ufrn.br/sso-server/login?service=https%3A%2F%2Fsigaa.ufrn.br%2Fsigaa%2Flogin%2Fcas";


end.insertAdjacentHTML('beforebegin',

`
<style>
p1, p2, p3{
    font-weight: bold;
    cursor: pointer;
    border: 1px solid #ccc;
</style>
<div id="botoes">
        <p1 id="startButton"  >Run</p1>
        <p2 id="stopButton" >Stop</p2>
        <p3 id="inform" >Visible Time</p3>
    
    </div>
    <div id="seconds"></div>:
    <div id="minutes"></div>
    :
    <div id="hours"></div>
`);

//caso const name não seja encontrado essa constante retorna Victor_Hugo, experimente dar F5 na pg.
position.insertAdjacentHTML('beforeend', 
`
<h1><u><span style= "color: 'green'; text-align: center;"> ${name}  </u></span>
</h1>
`
)

//<!---Este método abre o link em outra pg (target="_blank")-->
position_red.insertAdjacentHTML('beforebegin',

`


<style>
#div_colors_buttons{
    display: block;
    margin: auto;
}
#blue{
    color:black;
    border:1px rgb(250,200, 0, 1.0) solid ;
    border-radius:6px;
    background: white;
    font-size:1rem;
}
#blue:hover{
    background: whitesmoke;
    color:blue;
}
#red{
    color:black;
    border:1px rgb(250,200, 0, 1.0) solid ;
    border-radius:6px;
    background: white;
    font-size:1rem;
}
#red:hover{
    background: whitesmoke;
    color:red;
}
#padrao{
    color:black;
    border:1px rgb(250,200, 0, 1.0) solid ;
    border-radius:6px;
    background: white;
    font-size:1rem;
}
#padrao:hover{
    background: whitesmoke;
    color: rgb(250,200, 0, 1.0);
}
#sigaa{
    background: rgb(0,150,225,1.0);
    border-radius:6px;
    color: white;
    font-size:1rem;
    font-family: 'Algerian'
}
#sigaa:hover{
    transition:1s;
    background: blue;
    color:white;
}
a{
    color: white
    font-family: 'Algerian'
    font-size:1rem;
}
#email{
    background: rgb(0,200,30,1.0);
    border-radius:6px;
    color: yellow;
    font-size:1rem;
    font-family: 'Algerian'

}
#email:hover{
    transition:1s;
    background: rgb(0,100,225,1.0);
   
}
#email_a:hover{
    border: 0px solid black;
}
}
</style>
<div id='div_colors_buttons'>
<button id="sigaa" >

<a href="https://autenticacao.ufrn.br/sso-server/login?service=https%3A%2F%2Fsigaa.ufrn.br%2Fsigaa%2Flogin%2Fcas" target="_blank">SIGAA</a>

</button>

<button id="email">

<a id="email_a" href="https://mail.google.com/mail/u/1/#inbox" target="_blank">EMAIL</a>

</button>

<br>
<br>
<button id="padrao">Clean</button>
<button id="red">Red</button>
<button id="blue">Blue</button>
</div>
`
)
//add o atributo Id para poder manusear o body e mudar a cor
//ytd.setAttribute("id","backgroundId")
body.setAttribute("style","color='red'")
//let imagemRed = url("https://images.unsplash.com/photo-1535868463750-c78d9543614f?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
function mudarParaVermelho(){
    position_red.style.backgroundImage = "url('https://images.unsplash.com/photo-1535868463750-c78d9543614f?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"; 
    ytd.style.backgroundImage = "url('https://images.unsplash.com/photo-1535868463750-c78d9543614f?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"; 
    search.style.backgroundImage = "url('https://images.unsplash.com/photo-1535868463750-c78d9543614f?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"; 
    container.style.backgroundImage = "url('https://images.unsplash.com/photo-1535868463750-c78d9543614f?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"; 
    search_form.style.backgroundImage = "url('https://images.unsplash.com/photo-1535868463750-c78d9543614f?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"; 
    end.style.backgroundImage = "url('https://images.unsplash.com/photo-1535868463750-c78d9543614f?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"; 
    alert('Red Mode Actived')
}
function mudarParaPadrao(){
    ytd.style.backgroundImage ="url('https://e1.pxfuel.com/desktop-wallpaper/847/615/desktop-wallpaper-plain-black-1920x1080-plain-black.jpg')";
    

    position_red.style.backgroundImage = "url('https://e1.pxfuel.com/desktop-wallpaper/847/615/desktop-wallpaper-plain-black-1920x1080-plain-black.jpg')"; 
    ytd.style.backgroundImage = "url('https://e1.pxfuel.com/desktop-wallpaper/847/615/desktop-wallpaper-plain-black-1920x1080-plain-black.jpg')"; 
    search.style.backgroundImage = "url('https://e1.pxfuel.com/desktop-wallpaper/847/615/desktop-wallpaper-plain-black-1920x1080-plain-black.jpg')"; 
    container.style.backgroundImage = "url('https://e1.pxfuel.com/desktop-wallpaper/847/615/desktop-wallpaper-plain-black-1920x1080-plain-black.jpg')"; 
    search_form.style.backgroundImage = "url('https://e1.pxfuel.com/desktop-wallpaper/847/615/desktop-wallpaper-plain-black-1920x1080-plain-black.jpg')"; 
    end.style.backgroundImage = "url('https://e1.pxfuel.com/desktop-wallpaper/847/615/desktop-wallpaper-plain-black-1920x1080-plain-black.jpg')"; 
    alert('Clean Mode Actived')
}
function mudarParaAzul(){
    //imagem padrao do azul : https://media.istockphoto.com/id/540717412/pt/foto/nebulosa-azul-e-rosa.jpg?s=2048x2048&w=is&k=20&c=DiDlR50WJ_TPvxpIGHZnbswfBWD7_VWh8M-THvohxSk=
    ytd.style.backgroundImage ="url('https://images.unsplash.com/photo-1552083940-86877723de7a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
    position_red.style.backgroundImage = "url('https://images.unsplash.com/photo-1552083940-86877723de7a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"; 
    ytd.style.backgroundImage = "url('https://images.unsplash.com/photo-1552083940-86877723de7a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"; 
    search.style.backgroundImage = "url('https://images.unsplash.com/photo-1552083940-86877723de7a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"; 
    container.style.backgroundImage = "url('https://images.unsplash.com/photo-1552083940-86877723de7a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"; 
    search_form.style.backgroundImage = "url('https://images.unsplash.com/photo-1552083940-86877723de7a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"; 
    end.style.backgroundImage = "url('https://images.unsplash.com/photo-1552083940-86877723de7a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"; 
    alert('Blue Mode Actived')
}

const padraoId = document.querySelector("#padrao");
const redId = document.querySelector("#red");
const blueId = document.querySelector("#blue");

padraoId.addEventListener("click", mudarParaPadrao)
redId.addEventListener("click", mudarParaVermelho)
blueId.addEventListener("click", mudarParaAzul)

//function atalho() {
    // Sim abre uma nova página, porém meio que fecha a atual...  
//window.location.href = link;
//alert('Funcionando botão')
//
//console.log("function atalho active ('usseles')")
//}

//teste.addEventListener('click', atalho)


const seconds_id = document.querySelector("#seconds");
const minutes_id = document.querySelector("#minutes");
const hours_id = document.querySelector("#hours");

            
            

let interval;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let hours = 0;
let isPaused = false;


startButton.addEventListener("click", startTimer)
stopButton.addEventListener("click", stop)
inform.addEventListener("click", information)

function startTimer() {
   

    interval = setInterval(() => {
        minutes_id.textContent = minutes;
    seconds_id.textContent = seconds;
    hours_id.textContent = hours;
        if (!isPaused || seconds < 6) {
            miliseconds += 10;
            
            if (miliseconds === 1000) {
                seconds++;
                miliseconds = 0;
            }
            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }
            if (minutes === 60) {
                hours++;
                minutes = 0;
            }
        }
    }, 10);
    if (minutes % 20 == 0){
    console.log("Time: "+hours+":"+minutes)	
    }
    startButton.style.display = "none";
    stopButton.style.display = "inline-block"
    
}

function information() {
        alert("TimeVisible:\n" + hours + ":" + minutes + ":" + seconds)
    console.log("TimeVisible:\n" + hours + ":" + minutes + ":" + seconds);
	
}

function stop() {
    startButton.style.display = "inline-block"
    isPaused = true;
}

