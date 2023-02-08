const start=document.getElementsByClassName('start')[0];
const container_start=document.getElementsByClassName('container');
const pushable_start=document.getElementsByClassName('pushable');

start.addEventListener('click',()=>{
   start.classList.add('remove');
   setTimeout(()=>{
    start.style.display="none"
   },1000);
})