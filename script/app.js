
let theme = document.querySelector("body")

document.getElementById("theme").addEventListener("click", function(){
  if (document.getElementById("theme").checked ===true){
    document.getElementsByClassName("dark-theme")[0].className = "light-theme"
  }else{
    document.getElementsByClassName("light-theme")[0].className = "dark-theme"
  }
})


var newTask = document.querySelector(".add-new-item input");

newTask.addEventListener("keyup",function(event){
  if (event.keyCode === 13){
    let ul = document.querySelector("ul");

    let li = document.createElement("li");
    li.className = "flex-row"

    let label = document.createElement("label")
    label.className = "list-item";

    let inputCheckbox = document.createElement("input")
    inputCheckbox.setAttribute("type", "checkbox")
    inputCheckbox.setAttribute("name", "todoItem")
    // inputCheckbox.className = "checkbox"

    let spanCheckmark = document.createElement("span")
    spanCheckmark.className = "checkmark"

    let spanText =  document.createElement("span")
    spanText.className = "text"
    spanText.appendChild(document.createTextNode(this.value))

    // document.createTextNode(this.value)
    let spanRemove = document.createElement("span")
    spanRemove.className = "remove"

    let divMask = document.createElement("div")
    divMask.className = "mask"

    spanCheckmark.innerHTML += "\n \t \t \t"
    spanCheckmark.appendChild(divMask)

    label.innerHTML += "\n \t \t"
    label.appendChild(inputCheckbox)
    label.innerHTML += "\n \t \t"
    label.appendChild(spanCheckmark);

    label.innerHTML += "\n \t \t"
    label.appendChild(spanText)

    li.innerHTML += "\n \t"
    li.appendChild(label)

    li.innerHTML += "\n \t"
    li.appendChild(spanRemove)
    console.log(li.innerHTML)
    ul.appendChild(li)

    // document.querySelectorAll(".content ul li")
    console.log(document.querySelectorAll(".content ul li"))


    // const newTaskToAdd = document.createElement("li")




    // document.querySelectorAll(".content ul li").appendChild("li")
    // console.log(newTaskToAdd)
  }

})
