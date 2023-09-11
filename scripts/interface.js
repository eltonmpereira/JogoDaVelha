document.addEventListener("DOMContentLoaded", () => {
  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});

function handleClick(event) {
  let square = event.target;
  let postion = square.id;

  if (handleMove(postion)) {
    setTimeout(() => {
      alert(
        "o Jogo Acabou - O vencedor foi o jogador " +
          playerTime +
          ". Atualize a pagina para um novo jogo!"
      );
    }, 11);
  }

  updateSquare(postion);
}

function updateSquare(postion) {
  let square = document.getElementById(postion.toString());
  let symbol = board[postion];
  square.innerHTML = `<div class='${symbol}'></div>`;
}
