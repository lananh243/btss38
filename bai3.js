
const image = document.getElementById("image");
const increaseText = document.getElementById("increase");
image.classList.add('mờ-nhạt');

let percent = 0;
const interval = setInterval(() => {
    percent += 10;
    if(percent > 100){
        percent = 100;
        clearInterval(interval);
    }
    image.style.filter = `brightness(${percent}%)`;
    image.style.opacity = percent / 100;
    increaseText.textContent = `${percent}%`;
}, 200);