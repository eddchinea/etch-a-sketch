const container = document.querySelector('.grid-container');
const resetBtn = document.querySelector('.reset-btn')
const randomColorBtn = document.querySelector('.random-btn')

let size = 16;

function createGrid() {
    for (let i = 0; i < size; i++) {
        const gridRow = document.createElement('div');
    
        gridRow.classList.add('grid-row');
    
        for (let i = 0; i < size; i++) {
            const gridColumn = document.createElement('div');
            gridColumn.classList.add('grid-column');
            gridRow.appendChild(gridColumn);
    
            gridColumn.addEventListener('mouseover', () => {
                gridColumn.style.backgroundColor = '#000';
            });
        }
    
        container.appendChild(gridRow);
    }
}

createGrid()

resetBtn.addEventListener('click', () => {
    size = parseInt(prompt('Enter the size of the grid (1 - 100): '));
    if (size < 1 || size > 100) {
        alert('Size needs to be inside the range of (1 - 100)')
        size = 16
    }
    container.replaceChildren();
    createGrid()
});