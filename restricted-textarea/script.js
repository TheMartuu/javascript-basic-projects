const textarea = document.querySelector("#text-area");
let characters = document.querySelector("#char-count");
const submit = document.querySelector("#submit");
const deleteContent = document.querySelector("#delete");


textarea.addEventListener("input",function(){
    let currentLength = textarea.value.length;
    if (currentLength < 250){
        characters.innerHTML=(`${currentLength} / 250`);
        characters.style.color = "black";}

    else if (currentLength === 250){
        characters.style.color = "red";
        characters.innerHTML=(`${currentLength} / 250`);}
    })

submit.addEventListener("click",function(){
    alert("Comment submitted");
})

deleteContent.addEventListener("click",function(){
    textarea.value = "";
})
