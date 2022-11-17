let saveEl = document.getElementById("save-el")

let countEl = document.getElementById("count-el")

let count = 0



function increment() {
    count += 1
    countEl.innerText = count
}

function out() {
    count -= 1
    countEl.innerText = count
}

function initialize() {
    let init = " "
    count = 0
    countEl.innerText = count
    saveEl.innerText += init
}


function save() {
    let countStr = count + " - " 
   saveEl.textContent += countStr 
   count = 0
   countEl.textContent = count
    alert ("succesfully")
   
}


//document.getElementById("count-el").innerText=count


