const numberArray = [];

const gridElem = document.querySelector(".grid");

for (let i = 0; i < 100; i++){
    numberArray[i] = i + 1;
    curNumber = numberArray[i];
    console.log(i, curNumber);
    const cell = generateGridCell(curNumber);
    gridElem.append(cell);
}

function generateGridCell(innerNumber){
    const newCell = document.createElement("div");
    newCell.classList.add("cell");
    newCell.innerHTML = innerNumber;
    return newCell;
}
