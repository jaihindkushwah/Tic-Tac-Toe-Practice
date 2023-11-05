const TicTacToe=function(){
    let lastClick="O";

    const possibleWins=[
        [1,2,3],
        [1,5,9],
        [4,5,6],
        [7,8,9],
        [1,4,7],
        [2,5,8],
        [3,6,9],
        [3,5,7]
    ];


    let steps=0;
    const clickedButtonX=[];
    const clickedButtonO=[];
    const buttons=document.querySelectorAll(".btn");
    buttons.forEach((button)=>{
        button.addEventListener("click",(e)=>{
            if(lastClick==="O"){
                lastClick="X";
                e.target.innerText=lastClick;
                clickedButtonX.push(Number(e.target.dataset.num));
                button.disabled=true;
                if(isMatching(clickedButtonX)){
                    resultElement("X");
                    reStart();
                    disableAllBtn();
                    return;
                }
            }else{
                lastClick="O";
                e.target.innerText=lastClick;
                clickedButtonO.push(Number(e.target.dataset.num));
                button.disabled=true;
                if(isMatching(clickedButtonO)){
                    resultElement("O");
                    reStart();
                    disableAllBtn();
                    return;
                }
            }
            steps++;
            
            if(steps===9){
                console.log(clickedButtonX);
                console.log(clickedButtonO);
                resultElement("Tie")
                reStart();
            }
        })
    })
    const isMatching=(player)=>{
        let isWon=false;
        possibleWins.map((arr)=>{
            let count=0;
            arr.map((el)=>{
                if(player.includes(el)){
                    count++;
                }
            })
            if(count==3){
                isWon=true;
            }
        })
        return isWon;
    }
    const reStart=()=>{
        document.querySelector(".restart").addEventListener("click",()=>{
            window.location.reload();
        })
    }
    const resultElement=(winner)=>{
        document.querySelector(".result").innerHTML=`<span>Won : ${winner} </span> <button class='restart'>Restart</button>`;
    }
    const disableAllBtn=()=>{
        buttons.forEach((button)=>{
            button.disabled=true;
        })
    }
}
TicTacToe();