let winnerMessage = document.querySelector(".winner_message");
let message = document.querySelector("#msg");
let buttons = document.querySelectorAll(".box");
let reset_button = document.querySelector("#reset_button");

let moveX = true; //When X move is true then O move is false and viceversa.

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        if (moveX){
            button.innerText = "X";
            moveX = false;
        }else{
            button.innerText = "O";
            moveX = true;
        }

        button.disabled = true;

        // console.log("Button is clicked.");

        checkWinner();
    })
})

const disableButton = (()=>{
    for (let button of buttons){
        button.disabled = true;
    }
})

const resetButton = ()=>{
    moveX = true;
    for (let button of buttons){
        button.disabled = false;
        button.innerText = "";
    }
    winnerMessage.classList.add("hide");
}

const winnerDeclare = ((win)=>{
    message.innerText = `Congratulation, Winner is ${win}`;
    winnerMessage.classList.remove("hide");
})

const checkWinner = ()=>{
    for (let pattern of winPattern){

        // console.log(buttons[pattern[0]],buttons[pattern[1]],buttons[pattern[2]]);

        let poss1val = buttons[pattern[0]].innerText;
        let poss2val = buttons[pattern[1]].innerText;
        let poss3val = buttons[pattern[2]].innerText;

        if (poss1val !== "" && poss2val !=="" && poss3val !==""){
            if (poss1val===poss2val && poss2val===poss3val){
                // console.log("Winner", poss1val);
                disableButton();
                winnerDeclare(poss1val);
            }
        }
    }
}

reset_button.addEventListener("click", resetButton)