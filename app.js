const sadFace = document.querySelector('.sad')
const happyFace = document.querySelector('.happy')

sadFace.addEventListener('click', () => {
    if (happyFace.classList.contains('happy')) {
        sadFace.classList.remove('active');
        happyFace.classList.add('active');
    }
})

happyFace.addEventListener('click', () => {
    if (sadFace.classList.contains('sad')) {
        happyFace.classList.remove('active');
        sadFace.classList.add('active');
    }
})