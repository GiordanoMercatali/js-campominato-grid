const startBtn = document.getElementById("start");

startBtn.addEventListener("click", function(){

    startBtn.classList.add("disappear");

    const numberArray = [];

    const gridElem = document.querySelector(".grid");

    for (let i = 0; i < 100; i++){
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
