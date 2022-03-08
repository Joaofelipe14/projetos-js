const img = document.getElementById("img");
const buttons = document.getElementById("buttons");
let colorIndex = 0;
let intervalID= null;

const trafficLight = (event) => {
    stopSemaforo();
  turnOn[event.target.id]();
};

const nextIndex = () =>{

    colorIndex = colorIndex < 2 ? ++colorIndex : 0;
    
    // if (colorIndex <2){
    // colorIndex++
    // }else{
    //     colorIndex= 0
    // }
}

const changeColor = () => {
  const colors = ["red", "yellow", "green"];
  const color = colors[colorIndex];
  turnOn[color]();
  nextIndex();
};

const stopSemaforo =()=>{
    clearInterval (intervalID);
}

const turnOn = {
  red: () => (img.src = "./img/vermelho.png"),
  yellow: () => (img.src = "./img/amarelo.png"),
  green: () => (img.src = "./img/verde.png"),
  automatic: () => intervalID = setInterval(changeColor, 100),
};

buttons.addEventListener("click", trafficLight);
