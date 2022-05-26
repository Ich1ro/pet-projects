let count = 0
const btns = document.querySelectorAll('.btn')
const value = document.querySelector('#value')

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const payload = e.target.dataset.payload;
        count = payload ? count + +payload : 0;

        value.style.color = count > 0 ? 'green' :
            count < 0 ? 'red' :
                '#222222';

        value.textContent = count
    })
})