const startBtn = document.getElementById("start");
const difficultyElem = document.getElementById("difficulty");
console.log(difficultyElem);

startBtn.addEventListener("click", function(){

    startBtn.classList.add("disappear");
    difficultyElem.classList.add("disappear");

    const numberArray = [];

    const gridElem = document.querySelector(".grid");

    const difficulty = difficultyElem.value;
    
    let cellNumber;

    if (difficulty === "easy"){
        cellNumber = 100;
    } else if (difficulty === "medium"){
        cellNumber = 81;
    } else{
        cellNumber = 49;
    }

    for (let i = 0; i < cellNumber; i++){
        numberArray[i] = i + 1;
        curNumber = numberArray[i];
        // console.log(i, curNumber);
        const cell = generateGridCell(curNumber);
        cell.addEventListener("click", handleCellClick);
        gridElem.append(cell);
    }

    function generateGridCell(innerNumber){
        const newCell = document.createElement("div");
        newCell.classList.add("cell");
        newCell.innerHTML = innerNumber;
        return newCell;
    }

    function handleCellClick() {
        const clickedNumber = parseInt(this.innerHTML);
        console.log(clickedNumber);
        this.classList.add("blue");
    }
})
