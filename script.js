let button=document.querySelectorAll(" button")
let text=document.getElementById("text")

let num="";
let after;
let before;

  button.forEach(function (val) {
    val.addEventListener("click",function () {
      
      text.value+=val.value
      num.trim()
      
    })
  }) 

function delet() {
  text.value=text.value.slice(0,-1)
}
function clea() {
  text.value= text.textContent

}

function calc(e) {
  if (text.value == "") {
    e.preventDefault()
  }
  try{
    text.value=eval(text.value)
  }
  catch(err){
      text.value="Error"
    
  }

}
