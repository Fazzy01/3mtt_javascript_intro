const qoutes = [
    "what you sow , you reap",
    "if you no eat , you no belle full ",
    "if you open eyes you see",
    "ocean is for flowing",
]


const myQoute = document.getElementById("qoute")


const myBtn = document.getElementById("btn")
myBtn.addEventListener("click", function(){

    let randomQoute =Math.floor(Math.random()*qoutes.length)
    myQoute.innerHTML = qoutes[randomQoute]
})