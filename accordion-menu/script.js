let questions = document.querySelectorAll(".questions .question")

for (let i = 0; i < questions.length;i++){
    questions[i].addEventListener("click",function(e){
        let btn = e.target;
        if (btn.className != "question active"){
            removeClass()
            btn.classList.add("active");
        }else{
            removeClass()
        }
    })
}

function removeClass(){
    for (let i = 0; i < questions.length;i++){
        questions[i].classList.remove("active");
    }
}