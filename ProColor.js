const hexToRgb = hex =>
hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
            ,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))

// console.log(hexToRgb("#0033ff")) // [0, 51, 255]
// console.log(hexToRgb("#03f")) // [0, 51, 255]


let color1 = document.getElementById("color1")
let color2 = document.getElementById("color2")

color1.addEventListener("input", one)
color2.addEventListener("input", one)

function  one()  {
    let a = `repeating-linear-gradient(270deg, ${color2.value} , ${color1.value}`
    document.body.style.background = a
    vlaue()
}

function vlaue()  {
    let myP = document.getElementById("p")
    myP.innerHTML = `liner-gradiwet(to right, rgb(${hexToRgb(color1.value)}), rgb(${hexToRgb(color2.value)}))`
}
vlaue()


