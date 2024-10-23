let taskList = []


document.addEventListener('DOMContentLoaded', () => {
    const inputBox = document.getElementById('input-box') as HTMLInputElement;
    const addButton = document.getElementById("add")?.addEventListener(("click"), ()=> {
        const task  = document.createTextNode(inputBox.value)
        console.log(task)
        const spanList = document.createElement("span")
        const div = document.createElement("div")

        div.appendChild(task)
        spanList.appendChild(div)

        

    })
    

});