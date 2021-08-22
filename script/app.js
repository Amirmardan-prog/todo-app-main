
countTheLefts()

let theme = document.querySelector("body")

function allTasks(){
  /*
    Function to seperate all lists
  */
  return document.querySelectorAll("ul li")
}

function doneTasks(){
  /*
    Function to seperate all checked lists
  */
  return document.querySelectorAll("ul li input:checked")
}

function activeTasks(){
  /*
    Function to seperate all nonchecked lists
  */
  return document.querySelectorAll("ul li input:not(:checked)")
}




document.getElementById("theme").addEventListener("click", function() {
  if (document.getElementById("theme").checked === true) {
    document.getElementsByClassName("dark-theme")[0].className = "light-theme"
  } else {
    document.getElementsByClassName("light-theme")[0].className = "dark-theme"
  }
})


var newTask = document.querySelector(".add-new-item input");

newTask.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    if (this.value) {
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

      let spanText = document.createElement("span")
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
      // console.log(li.innerHTML)
      ul.appendChild(li)

      countTheLefts()
      liUpdateClicks()
    }
  }

})


function liUpdateClicks(){
  /*
  Function for counting the left tasks. "i" has to be updated
  when we add new task to the list so, we have to use "liUpdateClicks" after
  adding item to the list.

  to extend "i" to the the new length of "li"s after adding new task
  */
  for (var i=0; i<document.querySelectorAll("ul li").length; i++){
    document.querySelectorAll("ul li label")[i].addEventListener('click', countTheLefts)
  }
}

// Click on the labels
for (var i=0; i<document.querySelectorAll("ul li").length; i++){
  document.querySelectorAll("ul li label")[i].addEventListener('click', countTheLefts)
}


function countTheLefts(){
  /*
    Function to count and update the number of left tasks
  */
  var all = allTasks()
  var done = doneTasks()
  var left = activeTasks().length //all.length - done.length
  document.querySelector(".items-left span").innerHTML= left

}


// For filtering
for (var filterIndex=0; filterIndex<document.querySelectorAll(".filter input").length; filterIndex++){
  document.querySelectorAll(".filter input")[filterIndex].addEventListener("click",function(){

    all = allTasks()
    done = doneTasks()
    left = activeTasks()

    // if click happens on "all", all lists have to be visible
    if (document.getElementById("all").checked){
      for (var j=0; j<left.length; j++){
        li = left[j].parentElement.parentElement
        li.style.display=''
      }

      for (var j=0; j<done.length; j++){
        li = done[j].parentElement.parentElement
        li.style.display=''
      }

    // if click happens on "active", "active" has to be visible but not "done"
    }else if (document.getElementById("active").checked){
      for (var j=0; j<left.length; j++){
        li = left[j].parentElement.parentElement
        li.style.display=''
      }

      for (var j=0; j<done.length; j++){
        li = done[j].parentElement.parentElement
        li.style.display='none'
      }

    // if click happens on "completed", "done" has to be visible but not "left"
    }else if (document.getElementById("completed").checked){

      for (var j=0; j<done.length; j++){
        li = done[j].parentElement.parentElement
        li.style.display=''
      }

      for (var j=0; j<left.length; j++){
        li = left[j].parentElement.parentElement
        li.style.display='none'
      }
    }

  })
}








// Clear completed
document.querySelector(".clear").addEventListener("click", function(){
  var allMarked = document.querySelectorAll("ul li input:checked")
  var marked
  var li
  var ul

  for (marked=0; marked<allMarked.length; marked++){
    li = allMarked[marked].parentElement.parentElement
    ul = li.parentElement

    ul.removeChild(li)
  }
})
