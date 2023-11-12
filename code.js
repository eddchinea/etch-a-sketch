const container = document.querySelector('.grid-container');

for (let i = 0; i < 16; i++) {
    const gridRow = document.createElement('div');

    gridRow.classList.add('grid-row');

    for (let i = 0; i < 16; i++) {
        const gridColumn = document.createElement('div');
        gridColumn.classList.add('grid-column');
        gridRow.appendChild(gridColumn);

        gridColumn.addEventListener('mouseover', () => {
            gridColumn.style.backgroundColor = '#000'
        });
    }

    container.appendChild(gridRow);
}

