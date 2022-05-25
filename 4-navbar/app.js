const btn = document.querySelector('.btn')
const links = document.querySelector('.nav_links')

btn.addEventListener('click', function(){
    links.classList.toggle('show_links')
})