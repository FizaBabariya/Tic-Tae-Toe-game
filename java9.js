let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let newbtn = document.querySelector(".newbtn");
let messagecontainer = document.querySelector(".messagecontainer");
let mesbtn = document.querySelector(".mesbtn");
let msg = document.querySelector(".msg")

let turnO = true; //playerX , playerO

const winpatterns = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const resetgame = () => {
    turnO = true;
    enableboxes();
    messagecontainer.classList.remove("hide");
    mesbtn.classList.remove("hide");
}

const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showwinner = (winner) => {
    msg.innerText = `Congratulations , Winner is ${winner}`;
    messagecontainer.classList.remove("hide");
    mesbtn.classList.remove("hide");
    disableboxes();
}

const checkwinner = () => {
    for(let pattern of winpatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if( pos1 != "" && pos2 != "" && pos3 != "" ){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("Winner",pos1);
                showwinner(pos1);
            }
        }
    }
}


boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if(turnO === true){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkwinner();        
    }) 
})

newbtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);