//DOM calls
let day = document.querySelector('#day')
const hour = document.querySelector('#hour')
const minute = document.querySelector('#minute')
const second = document.querySelector('#second')
const milisecond = document.querySelector('#miliseconds')
const menu = document.querySelector('menu')
const nav = document.querySelector("#burger-menu")
const navItems = document.querySelectorAll(".nav")
const pt2 = document.querySelector('.pt2')
const pt4 = document.querySelector('.pt4')
const pt6 = document.querySelector('.pt6')
const pt8 = document.querySelector('.pt8')
const copy = document.querySelector('#copy')
const notReadyYet = document.querySelector('.loading')
console.log(notReadyYet)


notReadyYet.addEventListener('click', (e) =>{
    alert("Article will be ready soon..")
})

copy.addEventListener('click', (e) =>{
    copy.textContent = 'copied!'
})

function copyText() {
    const textToCopy = "bit.ly/3IL2VKH"

    textToCopy.select();
    document.execCommand("copyText")
}

menu.addEventListener('click', function() {
    nav.classList.toggle('open');

    pt2.classList.toggle('pt2_none')
    pt4.classList.toggle('pt4_none')
    pt6.classList.toggle('pt6_none')
    pt8.classList.toggle('pt8_none')
})


const countDownDate = new Date("Dec 31, 2020 00:00:00").getTime();


const countDownFunction = setInterval(function () {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const miliseconds = Math.floor((distance % (1000 * 60)));

    milisecond.innerHTML = miliseconds
    second.innerHTML = seconds
    minute.innerHTML = minutes
    hour.innerHTML = hours
    day.innerHTML = days


    if (distance < 0) {
        clearInterval(countDownFunction)
        second.innerHTML = '00'
        minute.innerHTML = '00'
        hour.innerHTML = '00'
        day.innerHTML = '00'
    }
})