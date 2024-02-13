function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function power(n) {
    if (n === 0) return 1;
    if (n > 1) return 2 * power(n - 1);
    return 2;
}

function genereateRandArray(min, max) {
    const array = [];
    for (let i = 0; i < 4; i++) {
        let temp = [];
        for (let j = 0; j < 4; j++) {
            temp.push(power(rand(min, max)))

        }
        array.push(temp);
    }
    return array;
}

let gridValues = genereateRandArray(0, 4);

// for (let i = 0; i < 4; i++) {
//     const array = genereateRandArray(4, 0, 4);
//     gridValues.push(array);
// }

const board = document.querySelector('.board');
displayTiles();
//console.log(gridValues)
function displayTiles() {
    board.innerHTML = "";
    for (let i = 0; i < gridValues.length; i++) {
        console.log('a');
        for (let j = 0; j < gridValues[i].length; j++) {
            let temp = tile.find(element => element.value === gridValues[i][j])
            board.innerHTML += '<div class="tile" style="' + temp.text_color + ' ' + temp.tile_color + '">' + temp.display_value + '</div>'
        }
    }
}

document.querySelector("button").addEventListener('click', (e) => {
    gridValues = genereateRandArray(0, 4);
    displayTiles();
})
// console.log(board)

// console.log(gridValues);
