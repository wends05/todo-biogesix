
import "./style.css"

// let taskList = []


document.addEventListener('DOMContentLoaded', () => {
    const inputBox = document.getElementById('input-box') as HTMLInputElement;
    
    document.getElementById("add")?.addEventListener(("click"), ()=> {
        
        console.log("h")
        
        const task = document.createTextNode(inputBox.value)
        console.log(task)
        const spanList = document.getElementById("spanList")
        const div = document.createElement("div")
        div.appendChild(task)
        spanList?.appendChild(div)
    })
});