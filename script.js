let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-game");
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg");
let turn0 = true; //playerX, player0
let count= 0 ;// for draw
let arr = [[1, 2, 3], [3, 4, 5],]
const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
const resetGame=() => {
    turn0 =true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide")
    boxes.forEach((box) => {
        box.innerText=" "
        box.classList.remove('player-X','player-O');
       
    })
}
const gameDraw= () => {
    msg.innerText= " DRAW";
    msgContainer.classList.remove("hide");
    disableBoxes()
}
boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        console.log("box was clicked");
        if(turn0){
            box.innerText="X";
            box.classList.add("player-X");
            turn0=false;
        }
        else{ 
            box.innerText="O";
            box.classList.add("player-O");
            turn0=true;
        }
        box.disabled=true;
        count++;

        let isWinner = checkWinner();
        if (count === 9 && !isWinner){
            gameDraw();
        }
        

    });

});
const enableBoxes= () => {
    for(let box of boxes){
        box.disabled = false;
    }
}
const disableBoxes= () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const showWinner = (winner) => {
    msg.innerText=`Congratulations winnner is ${winner}`;
    msgContainer.classList.remove("hide");
   
};
const checkWinner = () => {
    for(let pattern of winPattern) {
        let posval1 =  boxes[pattern[0]].innerText;
        let posval2 =  boxes[pattern[1]].innerText;
        let posval3 =  boxes[pattern[2]].innerText;
        if(posval1 !="" && posval2!="" && posval3!=""){
            if(posval1 === posval2 && posval2 === posval3){
                console.log("Winner",posval1);
                disableBoxes();
                showWinner(posval1);
            }
            
        }
        
    }
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

