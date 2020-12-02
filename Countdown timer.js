//DOM calls
let day = document.querySelector('#day')
const hour = document.querySelector('#hour')
const minute = document.querySelector('#minute')
const second = document.querySelector('#second')
const milisecond = document.querySelector('#miliseconds')
const menu = document.querySelector('menu')
const nav = document.querySelector("#hurger-menu")
const navItems = document.querySelectorAll(".nav")
const pt2 = document.querySelector('.pt2')
const pt4 = document.querySelector('.pt4')
const pt6 = document.querySelector('.pt6')
const pt8 = document.querySelector('.pt8')
console.log(pt2)
console.log(navItems)


menu.addEventListener('click', function() {
    console.log("object")
    nav.classList.toggle('open');

    pt2.classList.toggle('pt2_none')
    pt4.classList.toggle('pt4_none')
    pt6.classList.toggle('pt6_none')
    pt8.classList.toggle('pt8_none')



})

const countDownDate = new Date("Dec 02, 2020 00:00:00").getTime();

console.log(countDownDate)

const countDownFunction = setInterval(function () {
    const now = new Date().getSeconds();


    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000))

    second.innerHTML = new Date().getSeconds();
    minute.innerHTML = new Date().getMinutes();
    hour.innerHTML = new Date().getHours();
    milisecond.innerHTML = new Date().getUTCMilliseconds();
    let dayNew = new Date().getDay();
    day.innerHTML = dayNew - 1

})