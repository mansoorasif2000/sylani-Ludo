    let player1Name = prompt("Enter Player 1's Name:");
    let player2Name = prompt("Enter Player 2's Name:");

    const boardSize = 3;
    const boardElement = document.getElementById('board');
    const diceResultElement = document.getElementById('diceResult');
    const playersTurnElement = document.getElementById('playersTurn');
    let currentPlayer = 1;

    // Initialize the board
    for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j < boardSize; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.row = i;
        cell.dataset.col = j;
        boardElement.appendChild(cell);
      }
    }

    function rollDice() {
      const diceResult = Math.floor(Math.random() * 6) + 1;
      diceResultElement.innerText = diceResult;

      const selectedCell = document.querySelector(`.cell[data-row="1"][data-col="${currentPlayer - 1}"]`);
      selectedCell.innerText = diceResult;

      playersTurnElement.innerText = `Turn: ${currentPlayer === 1 ? player2Name : player1Name}`;

      currentPlayer = currentPlayer === 1 ? 2 : 1;
    }