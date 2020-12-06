//DOM calls
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


copy.addEventListener('click', (e) => {
    copy.textContent = 'copied!'

    let copiedText = document.querySelector('copy')
    copiedText.select();


    let test = window.copy("www.google.com")

    alert("copied")
})


let test = window.open("www.google.com")


console.log(test)




