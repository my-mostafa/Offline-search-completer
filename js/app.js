let ary = [
    "hello",
    "how are you?",
    "hello how are you?",
    "its nice to meet you",
    "its nice to meet you?",
    "nice",
    "Lorem ipsum dolor sit amet",
    "consectetur adipisicing elit",
    "fugit doloribus aliquam id maxime",
    "officia deleniti exercitationem sit",
    "asperiores",
    "totam",
    "Dolorum nostrum",
    "aut",
    "aut cupiditate",
    "Dolorum nostrum",
    "cupiditate aut",
    "in sapiente perspiciatis",
    "perspiciatis",
    "sapiente",
    "fugit doloribus aliquam",
    "autdeleniti",
    "sed",
    "adipisicing",
    "fugit",
]

let inp
let fin

let box = document.querySelector(".box")
let input = document.querySelector("input")

input.addEventListener("keyup",function(){
   inp = input.value.toUpperCase()
   box.innerHTML = ''
   fin = ary.forEach(function(ert){
    if(ert.toUpperCase().startsWith(inp)){     
        box.insertAdjacentHTML("beforeend","<div onclick = \"funci(event)\" class=\"boxelem\">"+ert+"</div>")
    }
   }) 
})

function funci(event){
      input.value = event.target.innerHTML
      box.innerHTML = ''
}


