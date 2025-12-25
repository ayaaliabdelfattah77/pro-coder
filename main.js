let arrow_service=document.querySelector('#arrow-service');
let animationX_services = document.querySelectorAll('.animation-x');
let animationy_services = document.querySelectorAll('.animation-y');





arrow_service.onclick=function(){
    window.location.href="html/services.html"
}
window.addEventListener('scroll',function(){
    animationX_services.forEach(service =>{
        let serviceTop=service.getBoundingClientRect().top;
        let screenHigh=window.innerHeight;
        if(serviceTop < screenHigh-100){
            service.classList.add('show')
        }
    })
})
window.addEventListener('scroll',function(){
    animationy_services.forEach(service =>{
        let serviceTop=service.getBoundingClientRect().top;
        let screenHigh=window.innerHeight;
        if(serviceTop < screenHigh-100){
            service.classList.add('show')
        }
    })
})

