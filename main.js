const tictactoe = (function () {
    let PlayerOne = 'X';
    let PlayerTwo = 'O'
    let board = ['', '', '', '', '', '', '', '', ''];
    function resetBoard() {
        board = ['', '', '', '', '', '', '', '', ''] // use this one to reset the game after finishes
        currentPlayer = 1;
        document.querySelectorAll('.btn').forEach(button => {
            button.textContent = '';
        });
    }
    let currentPlayer = 1;
    let markSpot = function (position) {
        if (currentPlayer === 1) {
            if (position === '' || (position >= 0 && position <= 9)) {
                board.splice(position, 1, PlayerOne);
                // document.querySelector('.cell').style.display = "none";
                document.querySelectorAll('.cell')[position].textContent = PlayerOne
                if (board[0] === PlayerOne && board[1] === PlayerOne && board[2] === PlayerOne  ||
                    board[3] === PlayerOne && board[4] === PlayerOne && board[5] === PlayerOne  ||
                    board[6] === PlayerOne && board[7] === PlayerOne && board[8] === PlayerOne  ||
                    board[0] === PlayerOne && board[3] === PlayerOne && board[6] === PlayerOne  ||
                    board[1] === PlayerOne && board[4] === PlayerOne && board[7] === PlayerOne  ||
                    board[2] === PlayerOne && board[5] === PlayerOne && board[8] === PlayerOne  ||
                    board[0] === PlayerOne && board[4] === PlayerOne && board[8] === PlayerOne  ||
                    board[2] === PlayerOne && board[4] === PlayerOne && board[6] === PlayerOne 
                ) {
                    console.log(board)
                    alert('Player One won')
                    resetBoard();
                } else {
                    console.log(board)
                    currentPlayer = 2;
                }
            } else {
                return console.log("Please check your number");
            }
        } else {
            board.splice(position, 1, PlayerTwo);
            document.querySelectorAll('.cell')[position].textContent = PlayerTwo
            if (board[0] === PlayerTwo && board[1] === PlayerTwo && board[2] === PlayerTwo  ||
                board[3] === PlayerTwo && board[4] === PlayerTwo && board[5] === PlayerTwo  ||
                board[6] === PlayerTwo && board[7] === PlayerTwo && board[8] === PlayerTwo  ||
                board[0] === PlayerTwo && board[3] === PlayerTwo && board[6] === PlayerTwo  ||
                board[1] === PlayerTwo && board[4] === PlayerTwo && board[7] === PlayerTwo  ||
                board[2] === PlayerTwo && board[5] === PlayerTwo && board[8] === PlayerTwo  ||
                board[0] === PlayerTwo && board[4] === PlayerTwo && board[8] === PlayerTwo  ||
                board[2] === PlayerTwo && board[4] === PlayerTwo && board[6] === PlayerTwo 
            ) {
                console.log(board)
                alert('Player Two won')
                resetBoard();
            } else {
                console.log(board)
                currentPlayer = 1
            }

        }
    };

    return {
        markSpot,
        
    };
})();

var buttons = document.querySelectorAll('.btn');
buttons.forEach(function(button, index) {
    button.addEventListener('click', function() {
        tictactoe.markSpot(index);
    });
});






