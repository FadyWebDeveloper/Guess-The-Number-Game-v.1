let btn= document.getElementById("btn1");
let txt=document.getElementById("txt");
let random1= document.getElementById("sp")
let par=document.getElementById("parg")
let calc= Math.floor(Math.random()*10)+1;
random1.innerHTML=calc;
let attemp=document.getElementById("attemp");
let reload=document.getElementById("again");
btn.onclick=function(){ 
  if(attemp.innerHTML !=0){
     if (+txt.value===calc){
    par.innerHTML="We have a winner🎉 Congratulation🎁";
    reload.style.display="block";
  }else if(+txt.value > calc){
    par.innerText="Number is High 🤷‍♀️";
    attemp.innerHTML = attemp.innerHTML-1;
  }else if (+txt.value < calc ){
    par.innerText=`Number is Low 🤷‍♂️ Try Again
      You Have `;
    attemp.innerHTML = attemp.innerHTML-1;
  }
  txt.value="";
  }else {
    par.innerText=`Sorry 🥴`;
    reload.style.display="block";
  }
  
}
reload.onclick=function(){
  location.reload()
}
console.log(typeof txt.value);