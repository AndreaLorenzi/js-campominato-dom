
const eleButton = document.querySelector("#btn-play");
let score = 0
const num = []



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
        getRandom(1, 100, num);
    } else if (value == "81") {
        
        eleGrid.classList.remove("easy", "medium", "hard");
        eleGrid.classList.add("medium");
        createGrid(81, eleGrid);
        getRandom(1, 81, num);
    } else if (value == "49") {
        
        eleGrid.classList.remove("easy", "medium", "hard");
        eleGrid.classList.add("hard");
        createGrid(49, eleGrid);
        getRandom(1, 49, num);

    }

    const listCells = document.querySelectorAll('.cell');
    // applicare gli event listeners a tutte le celle della griglia
    for (let i = 0; i < listCells.length; i++) {
        const cell = listCells[i];
        cell.addEventListener('click', function () {
            if(num.includes(i + 1)){
                console.log("hai cliccato la cella: " + this.innerHTML);
                this.classList.toggle('bombs');
                console.log('hai perso');
            } else{
                console.log("hai cliccato la cella: " + this.innerHTML);
                this.classList.toggle('clicked');
                score++;
                console.log(score)
                score.innerHTML= score
                
            }
        }
        )
    }
});




















function createGrid(numCells, eleContainer) {
    eleContainer.innerHTML = '';
    for (let i = 0; i < numCells; i++) {
        eleContainer.innerHTML += `<div class="cell">${i + 1}</div>`;
    }
}

function getRandom (min, max, numbers) {
    while (numbers.length < 16) {
      let randomNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
      if (!numbers.includes(randomNumber)) {
    numbers.push(randomNumber);
  }
}
// console.log(numbers);
}