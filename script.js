   
const eleButton = document.querySelector("#btn-play");


eleButton.addEventListener("click", function () {
    const eleGrid = document.querySelector('.grid');
    const eleDifficulty = document.getElementById("level");
    let value = eleDifficulty.options[eleDifficulty.selectedIndex].value;
    console.log(value);
    
    // generare la griglia in base alla difficoltà scelta
    if (value == "100") {
        eleGrid.classList.remove("easy", "medium", "hard");
        eleGrid.classList.add("easy");
        createGrid(100, eleGrid);
    } else if (value == "81") {
        eleGrid.classList.remove("easy", "medium", "hard");
        eleGrid.classList.add( "medium");
        createGrid(81, eleGrid);
    } else if (value == "49") {
        eleGrid.classList.remove("easy", "medium", "hard");
        eleGrid.classList.add("hard");
        createGrid(49, eleGrid);
    }

    const listCells = document.querySelectorAll('.cell');
    // applicare gli event listeners a tutte le celle della griglia
    for (let i = 0; i < listCells.length; i++) {
        const cell = listCells[i];
        cell.addEventListener('click', function() {
            console.log('hai cliccato il numero' + this.innerHTML)
            this.classList.toggle('clicked');
        }
        )
    }

    
});

function createGrid(numCells, eleContainer) {
    for (let i = 0; i < numCells; i++) {
    eleContainer.innerHTML += `<div class="cell">${i+1}</div>`;
    }
}