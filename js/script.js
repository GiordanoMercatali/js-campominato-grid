const startBtn = document.getElementById("start");
const difficultyElem = document.getElementById("difficulty");
console.log(difficultyElem);

startBtn.addEventListener("click", function(){

    startBtn.classList.add("disappear");
    difficultyElem.classList.add("disappear");

    const numberArray = [];

    const gridElem = document.querySelector(".grid");

    const difficulty = difficultyElem.value;
    
    let gridSize;

    if (difficulty === "easy"){
        gridSize = 100;
        cellSize = 10;
    } else if (difficulty === "medium"){
        gridSize = 81;
        cellSize = 9;
    }else{
        gridSize = 49;
        cellSize = 7;
    }
    console.log(gridSize);
    
    for (let i = 0; i < gridSize; i++){
        numberArray[i] = i + 1;
        curNumber = numberArray[i];
        const cell = generateGridCell(curNumber, cellSize);
        cell.addEventListener("click", handleCellClick);
        gridElem.append(cell);
    }

    function generateGridCell(innerNumber, cellSizeMultiplier){
        const newCell = document.createElement("div");
        newCell.classList.add("cell");
        newCell.style.width = `calc(100% / ${cellSizeMultiplier})`;
        newCell.style.height = `calc(100% / ${cellSizeMultiplier})`;
        newCell.innerHTML = innerNumber;
        return newCell;
    }

    function handleCellClick() {
        const clickedNumber = parseInt(this.innerHTML);
        console.log(clickedNumber);
        this.classList.add("blue");
    }
})

