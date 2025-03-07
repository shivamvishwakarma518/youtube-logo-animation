let logo = document.querySelector(".logo");

setInterval(() => {
    logo.style.transform = `rotate(${Math.random() * 90}deg)`;
}, 1000);
