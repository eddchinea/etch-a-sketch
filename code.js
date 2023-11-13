const container = document.querySelector('.grid-container');
const btn = document.querySelector('.reset-btn')

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