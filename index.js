let music = new Audio("music.mp3")
let ting = new Audio("ting.mp3")
let gameover = new Audio("GameOver.mp3")
let isGameOver = false
let turn = "X"

const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8]
    ]
    wins.forEach(e => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && boxtext[e[0]].innerText !== ""){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isGameOver = true
            if(isGameOver){
                gameover.play()
            }
            document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width= "200px"
        }
    })
}

// Game Logic

let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText==='' && !isGameOver){
            boxtext.innerText=turn;
            turn = changeTurn();
            ting.play();
            checkWin();
            if(!isGameOver){
                document.getElementsByClassName('info')[0].innerText = 'Turn for : ' + turn;
            }
        }   
    })
})

let reset = document.querySelector('#reset');
reset.addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll('.boxtext')
    boxtext.forEach(element =>{
        element.innerText = ""
    })
    document.querySelector('.imgBox').getElementsByTagName('img')[0].style.width= "0px"
    isGameOver = false
    turn = "X"
    document.querySelector('.info').innerText = "Turn for : " + turn
})