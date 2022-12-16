const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

let count_down = new Date('01/01/2023 00:00:00').getTime();
let x = setInterval(() => countDown(), second);

function countDown() {
    let now = new Date(Date.now()).getTime();
    let diff = count_down - now;

    document.getElementById('days').innerText = Math.floor(diff / day) + ' : ';
    document.getElementById('hours').innerText = Math.floor(diff % day / hour) + ' : ';
    document.getElementById('minutes').innerText = Math.floor(diff % hour / minute) + ' : ';
    document.getElementById('seconds').innerText = Math.floor(diff % minute / second);

    if (diff < 0) {
        clearInterval(x);

        document.getElementById('title').innerText = 'Foguete lançado'
        document.getElementById('days').innerText = '0 :';
        document.getElementById('hours').innerText = '0 :';
        document.getElementById('minutes').innerText = '0 :';
        document.getElementById('seconds').innerText = '0';
    };
};

const subscribe = document.querySelector("#subscribe");
const close = document.querySelector("#close");

subscribe.addEventListener("click", () => {
    document.querySelector("#modal").classList.toggle("hidden");
});

close.addEventListener("click", () => {
    document.querySelector("#modal").classList.toggle("hidden");
});

