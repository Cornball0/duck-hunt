document.addEventListener('DOMContentLoaded', function () {
    const duck = document.getElementById('duck');

    duck.addEventListener('click', function () {
        resetDuckPosition();
    });

    function resetDuckPosition() {
        const maxX = window.innerWidth - duck.clientWidth;
        const maxY = window.innerHeight - duck.clientHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        duck.style.left = randomX + 'px';
        duck.style.top = randomY + 'px';
    }

    resetDuckPosition(); // Initial duck position
});
