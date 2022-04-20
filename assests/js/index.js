// openning model
let close = document.querySelector('#close-model');
let boxModel = document.querySelector('.box-model');
let btngetquote = document.querySelector('.btn-getquote');

btngetquote.addEventListener('click',()=>{
     boxModel.classList.add('box-model-open')
})
close.addEventListener('click',()=>{
    boxModel.classList.remove('box-model-open')
})
boxModel.addEventListener('blur',() =>{
  console.log('Hello')
})
let page = document.querySelector('.mobile-nav-overly')
let menu = document.querySelector('#menu')
let menupressed = false;
let menuClose = document.querySelector('.closeee');
menu.addEventListener('click',()=>{
  menu.style.display='none';
  menuClose.style.display ='block';
})
menuClose.addEventListener('click',(e)=>{
    menu.style.display='block';
    menuClose.style.display ='none';
    console.log(e.target.length)
})
page.addEventListener('click',()=>{
  menu.style.display='block';
    menuClose.style.display ='none';
})
document.addEventListener('click',()=>{
  if(page.style.display=='none'){
    menu.style.display='block';
    menuClose.style.display ='none';
  }
})