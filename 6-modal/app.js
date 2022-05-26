const modalBtn = document.querySelector('.btn')
const overlay = document.querySelector('.modal_overlay')
const closeBtn = document.querySelector('.close_btn')

modalBtn.addEventListener('click', function(){
    overlay.classList.add('show_modal')
})
closeBtn.addEventListener('click', function(){
    overlay.classList.remove('show_modal')
})