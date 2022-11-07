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

function calc() {
  try{
    text.value=eval(text.value)
  }
  catch(err){
    if (text.value == "") {
      text.value=""
    }
    if (text.value != "") {
      
      text.value="Error"
    }
  }

}
