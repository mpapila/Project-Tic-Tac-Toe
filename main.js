const tictactoe = (function () {
    let PlayerOne = 'X';
    let PlayerTwo = 'O'
    let board = ['', '', '', '', '', '', '', '', ''];
    let getBoard = function () {
        return board;
    };
    let resetBoard = ['', '', '', '', '', '', '', '', ''] // use this one to reset the game after finishes

    let currentPlayer = 1;
    let markSpot = function (position) {
        if (currentPlayer === 1) {
            if (position === '' || (position >= 0 && position <= 9)) {
                board.splice(position, 1, PlayerOne);
                if (board[0] && board[1] && board[2] === PlayerOne ||
                    board[3] && board[4] && board[5] === PlayerOne ||
                    board[6] && board[7] && board[8] === PlayerOne ||
                    board[0] && board[3] && board[6] === PlayerOne ||
                    board[1] && board[4] && board[7] === PlayerOne ||
                    board[2] && board[5] && board[8] === PlayerOne ||
                    board[0] && board[4] && board[8] === PlayerOne ||
                    board[2] && board[4] && board[6] === PlayerOne
                ) {
                    console.log(board)
                    alert('Player One won')
                } else {
                    console.log(board)
                    currentPlayer = 2;
                }
            } else {
                return console.log("Please check your number");
            }
        } else {
            board.splice(position, 1, PlayerTwo);
            if (board[0] && board[1] && board[2] === PlayerTwo ||
                board[3] && board[4] && board[5] === PlayerTwo ||
                board[6] && board[7] && board[8] === PlayerTwo ||
                board[0] && board[3] && board[6] === PlayerTwo ||
                board[1] && board[4] && board[7] === PlayerTwo ||
                board[2] && board[5] && board[8] === PlayerTwo ||
                board[0] && board[4] && board[8] === PlayerTwo ||
                board[2] && board[4] && board[6] === PlayerTwo
            ) {
                console.log(board)
                alert('Player Two won')
            } else {
                console.log(board)
                currentPlayer = 1
            }

        }
    };

    return {
        getBoard,
        markSpot
    };
})();



// let currentPlayer = 1;
// var buttons = document.querySelectorAll('.btn');
// buttons.forEach(function(button) {
//     button.addEventListener('click', function() {
//       if (currentPlayer === 1) {
//         console.log('Player 1 clicked a button');
//         currentPlayer = 2;
//       } else {
//         console.log('Player 2 clicked a button');
//         currentPlayer = 1;
//       }
//     });
//   });

