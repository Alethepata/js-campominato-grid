console.log('ciao');
const container = document.querySelector('.container');

for( let i = 1; i <= 100; i++){
    const square = createSquare(i);

    square.addEventListener('click', function(){
        this.classList.toggle('active');
    })

    container.append(square);
}

function createSquare(index){
    const squares = document.createElement('div');
    squares.className = 'square';
    squares.innerHTML = `<span>${index}</span>`;
    return squares;
}