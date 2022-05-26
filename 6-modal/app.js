const overlay = document.querySelector('.modal_overlay')

document.querySelector('.btn').addEventListener('click', function(){
    overlay.classList.add('show_modal')
})

document.querySelector('.close_btn').addEventListener('click', function(){
    overlay.classList.remove('show_modal')
})