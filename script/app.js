
let theme = document.querySelector("body")

document.getElementById("theme").addEventListener("click", function(){
  if (document.getElementById("theme").checked ===true){
    document.getElementsByClassName("dark-theme")[0].className = "light-theme"
  }else{
    document.getElementsByClassName("light-theme")[0].className = "dark-theme"
  }
})
