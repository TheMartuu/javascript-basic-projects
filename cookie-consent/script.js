const acceptCookies =document.querySelector("#accept");
let cookieConsent=document.querySelector("#cookie-consent");
const declineCookies = document.querySelector("#decline");
const acceptedCookies = localStorage.getItem('cookies-aceptadas');

acceptCookies.addEventListener("click",function(){
    cookieConsent.style.visibility="hidden";
    localStorage.setItem('acceptedCookies', 'true');
    
})

window.onload = function(){
    
    if (!acceptedCookies){
        cookieConsent.style.visibility="visible";
    }
}