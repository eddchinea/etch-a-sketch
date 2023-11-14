const container = document.querySelector('.grid-container');
const resetBtn = document.querySelector('.reset-btn')
const randomColorBtn = document.querySelector('.random-btn')

let size = 16;

function createGrid() {
    //Loop that creates each row and append it to the container
    for (let i = 0; i < size; i++) {
        const gridRow = document.createElement('div');
    
        gridRow.classList.add('grid-row');
        
        //Loop that creates each column (can also be view as a celd) and append it to the row
        for (let i = 0; i < size; i++) {
            const gridColumn = document.createElement('div');
            gridColumn.classList.add('grid-column');
            gridRow.appendChild(gridColumn);
            
            //Add an eventList for drawing in black in each celd
            gridColumn.addEventListener('mouseover', () => {
                gridColumn.style.backgroundColor = '#000';
            });

            //Add an eventList for drawing in a random color when the randomColor btn is pressed
            randomColorBtn.addEventListener('click', () => {
                const hexValues = 'abcdef0123456789';
            
                function printRandomColor() {
                    let randomColor = '#';
                    while (randomColor.length < 7) {
                        randomColor += hexValues[Math.floor(Math.random() * 16)];
                    }
                    return randomColor
                }

                gridColumn.addEventListener('mouseover', () => {
                    gridColumn.style.backgroundColor = printRandomColor();
                })
            
                
            });
        }
    
        container.appendChild(gridRow);
    }
}

//Creates an initial grid
createGrid()

//Reset the grid with a new size
resetBtn.addEventListener('click', () => {
    size = parseInt(prompt('Enter the size of the grid (1 - 100): '));
    if (size < 1 || size > 100) {
        alert('Size needs to be inside the range of (1 - 100)')
        size = 16
    }
    container.replaceChildren();
    createGrid()
});

