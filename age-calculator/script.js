const calendar = document.querySelector("#calendar");
const calculate = document.querySelector("#calculate");
let result = document.querySelector("#result"); 

calculate.addEventListener("click",()=>{
    let userInput = new Date(calendar.value);
    let today = new Date; 

    
    let userYear = userInput.getFullYear(); 
    let userMonth=userInput.getMonth()+1;
    let currentYear = today.getFullYear(); 
    let currentMonth = today.getMonth()+1;
    let calculateYear; 

    if (userYear <= currentYear){
        calculateYear = currentYear-userYear;
    }else{
        result.innerHTML="Invalid date, pick another date"
        return
    }
    let dateDifference = Date.now() - userInput.getTime()
    let dates = new Date (dateDifference)

    let yearResult = Math.abs(dates.getUTCFullYear()-1970)
    let monthResult
    
    if (userMonth>currentMonth){
        monthResult = 12+(currentMonth-userMonth);
    }else if (userMonth<currentMonth) {
        monthResult = currentMonth-userMonth
    }else {
        monthResult = 0;
    }
    


    result.innerHTML = (`You are ${yearResult} years and ${monthResult} months old. `);
    return
})