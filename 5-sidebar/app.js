const btn = document.querySelector('.btn')
const close_btn = document.querySelector('.close_btn')
const menu = document.querySelector('.menu')

btn.addEventListener('click', function(){ 
    menu.classList.toggle('show_all')
    btn.classList.toggle('hide_btn')    
})
close_btn.addEventListener('click', function(){ 
    menu.classList.toggle('show_all')
    btn.classList.toggle('hide_btn')    
})