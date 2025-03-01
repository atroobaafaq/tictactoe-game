let boxes = document.querySelectorAll(".box")
let msgCont = document.querySelector(".msg-cont")
let winnerG = document.getElementById("winner")
let newGame = document.getElementById("newgame")
let resetGame = document.getElementById("reset")



let turnO = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

boxes.forEach((box) => {
    box.addEventListener("click", function () {
        console.log("box was cliced")
        if (turnO == true) {
            box.innerText = "O"
            turnO = false;
        }

        else {
            box.innerText = "X"
            turnO = true
        }

        box.disabled = true
        checkWiner()
    })


})

const restG = () => {
    turnO = true;
    enableboxes()
    msgCont.classList.add("hide")
    

}


const disableboxes = () => {
    for (box of boxes) {
        box.disabled = true
    }

}

const enableboxes = () => {
    for (box of boxes) {
        box.disabled = false
        box.innerText = ""
        
    }

}


const showwiner = (win) => {
    winnerG.innerText = `You won ${win} 🎉🙌`
    msgCont.classList.remove("hide")
    disableboxes()

}

const checkWiner = () => {
    for (pattern of winPattern) {
        // console.log(pattern)
        // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]])
        let pos1Val = boxes[pattern[0]].innerText
        let pos2Val = boxes[pattern[1]].innerText
        let pos3Val = boxes[pattern[2]].innerText

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val == pos2Val && pos2Val == pos3Val) {
                console.log("winner", pos1Val)
                showwiner(pos1Val)
            }
        }
    }


}


resetGame.addEventListener("click", restG)
newGame.addEventListener("click", restG)

