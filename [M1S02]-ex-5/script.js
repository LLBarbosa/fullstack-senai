
const startButton = document.querySelector("#start");
const timerDisplay = document.querySelector("#timer");

startButton.addEventListener("click", function () {
    let count = 10;
    timerDisplay.innerHTML = count;
    const countDown = setInterval(function () {
        count--;
        if (count === 0) {
            timerDisplay.innerHTML = "Seu tempo acabou!! Tente novamente!!";
            clearInterval(countDown);
        } else {
            timerDisplay.innerHTML = count;
        }
    }, 1000);
});

