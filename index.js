const start=document.getElementsByClassName('start')[0];
const container_start=document.getElementsByClassName('container')[0];
const pushable_start=document.getElementsByClassName('pushable')[0];
const container2=document.getElementsByClassName('container-2')[0];
const rock_btn=document.getElementById('rock');
const paper_btn=document.getElementById('paper');
const Scissor_btn=document.getElementById('scissor');
let Cscore=document.getElementById('computerScore');
let Uscore=document.getElementById('userScore');

start.addEventListener('click',()=>{
   container_start.classList.add('remove');
   setTimeout(()=>{
      container_start.style.display="none"
   },1000);
   setTimeout(()=>{
      container2.classList.remove('displaynone');
     },1000);
})


function autoremoveTied(){
   scoreC=Number(Cscore.innerText);
   scoreU=Number(Uscore.innerText);
   setTimeout(()=>{
      Cscore.innerText= scoreC;
      Uscore.innerText= scoreU;
   },500);
   Cscore.innerText="Tied!!";
   Uscore.innerText="Tied!!";
}


function uwin(){
  document.getElementsByClassName('n-result')[1].classList.add('remove');
  setTimeout(()=>{
   document.getElementsByClassName('uwin')[0].classList.remove('displaynone');
   document.getElementsByClassName('n-result')[1].style.display="none";
   },1000);
}
function cwin(){
   document.getElementsByClassName('n-result')[1].classList.add('remove');
   setTimeout(()=>{
    document.getElementsByClassName('cwin')[0].classList.remove('displaynone');
    document.getElementsByClassName('n-result')[1].style.display="none";
    },1000);
}





rock_btn.addEventListener('click',()=>{
   var options=['Rock','Paper','Scissor'];
   var item = options[Math.floor(Math.random()*options.length)];
   if(item=='Scissor'){
      score=Number(Uscore.innerText);
      score=score+1;
      Uscore.innerText=score;
      if(score==5){
         uwin();
      }
   }
   else if(item=='Rock'){
     autoremoveTied();
   }
   else{
      score=Number(Cscore.innerText);
      score=score+1;
      Cscore.innerText=score;
      if(score==5){
         cwin();
      }
   }
})



paper_btn.addEventListener('click',()=>{
   var options=['Rock','Paper','Scissor'];
   var item = options[Math.floor(Math.random()*options.length)];
   if(item=='Scissor'){
      score=Number(Uscore.innerText);
      score=score+1;
      Uscore.innerText=score;
      if(score==5){
         uwin();
      }
   }
   else if(item=='Paper'){
     autoremoveTied();
   }
   else{
      score=Number(Cscore.innerText);
      score=score+1;
      Cscore.innerText=score;
      if(score==5){
         cwin();
      }
   }
})



Scissor_btn.addEventListener('click',()=>{
   var options=['Rock','Paper','Scissor'];
   var item = options[Math.floor(Math.random()*options.length)];
   if(item=='Rock'){
      score=Number(Uscore.innerText);
      score=score+1;
      Uscore.innerText=score;
      if(score==5){
         uwin();
      }
   }
   else if(item=='Scissor'){
     autoremoveTied();
   }
   else{
      score=Number(Cscore.innerText);
      score=score+1;
      Cscore.innerText=score;
      if(score==5){
         cwin();
      }
   }
})