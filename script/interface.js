//Controler


document.addEventListener('DOMContentLoaded', ()=>{
  let squares = document.querySelectorAll(".square");

  squares.forEach((square)=>{
    square.addEventListener('click', handleClick);
  })
    console.log("Carregou a pagina!");
});


function handleClick(event){ 

  console.log(event.target);
  let square = event.target;
  let position = square.id;

  if(handleMove(position)){
    setTimeout(()=>{ alert("o jogador "+(playerTime+1) +" ganhou!") }  , 10);
  };
  updateSquare(position);
}

function updateSquare(position){
  let square = document.getElementById(position.toString());
  let symbol = board[position];
  square.innerHTML = `<div class='${symbol}'></div>`;
}

function updateSquares(){
  let squares = document.querySelectorAll(".square");

  squares.forEach((square)=>{
    let position = square.id
    let symbol = board[position];

    if(symbol != ''){
      square.innerHTML = `<div class='${symbol}'></div>`;
    }
  });

  console.log(board)
}