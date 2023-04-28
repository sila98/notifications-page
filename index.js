let button = document.getElementById("mread");

button.addEventListener('click', () => {
    document.querySelectorAll('.box').forEach(e => {
        e.classList.remove('unseen');
    })
})