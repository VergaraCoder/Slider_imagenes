let containerRigthAndLeft=document.querySelector(".containerImagenes");
let toques1=0;
let toques2=0;
containerRigthAndLeft.addEventListener("click",(e)=>{
    let evento=e.target;
    if(evento.className=="ri-arrow-right-fill"){
        document.querySelector(".container-IMAGEN2").classList.remove("retrocede");
        document.querySelector(".container-IMAGEN1").classList.remove("retrocede");
        document.querySelector(".container-IMAGEN3").classList.add("avanza");
        toques1++;
        if(toques1 % 2==0){
        document.querySelector(".container-IMAGEN1").classList.remove("retrocede");
        document.querySelector(".container-IMAGEN2").classList.add("avanza");
        }
      
    }
    else if(evento.className=="ri-arrow-left-fill"){
        document.querySelector(".container-IMAGEN1").classList.add("retrocede");
        document.querySelector(".container-IMAGEN2").classList.remove("avanza");

        toques2++;
        if(toques2 % 2 ==0){
        document.querySelector(".container-IMAGEN2").classList.add("retrocede");

        document.querySelector(".container-IMAGEN3").classList.remove("avanza");
        }
    }
});