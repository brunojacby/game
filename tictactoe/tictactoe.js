
let board
let playerO = "O"
let playerX = "X"
let currPlaye = playerO
let gameOver = false


window.onload = function() {
    setGame()
}

function setGame() {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]

    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            //
            let tile = document.createElement("div")
            tile.id = r.toString() + "-" + c.toString()
            tile.classList.add("tile")
            if ( r == 0 | r == 1) {
                tile.classList.add("horizontalLine")
            }
            if ( c == 0 | c == 1) {
                tile.classList.add("verticalLine")
            }
            tile.addEventListener("click", setTile)
            document.getElementById("board").append(tile)
        }
    }
}

function setTile() {
    if (gameOver) {
        return
    }

    let coords = this.id.split("-")
}