const reviews = [
    {
        id: 0,
        name: 'Kayla Mayer',
        job: 'Web-developer',
        img: 'https://engineering.unl.edu/images/staff/Kayla-Person.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus commodi quas doloribus repellendus exercitationem nulla ratione quis hic numquam? Commodi!'
    },
    {
        id: 1,
        name: 'john smith',
        job: 'web-designer',
        img: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus commodi quas doloribus repellendus exercitationem nulla ratione quis hic numquam? Commodi!'
    },
    {
        id: 2,
        name: 'samanta kolins',
        job: 'hr-manager',
        img: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus commodi quas doloribus repellendus exercitationem nulla ratione quis hic numquam? Commodi!'
    },
    {
        id: 3,
        name: 'Nichole Rice',
        job: 'web-developer',
        img: 'https://images.pexels.com/photos/1181649/pexels-photo-1181649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus commodi quas doloribus repellendus exercitationem nulla ratione quis hic numquam? Commodi!'
    },
    {
        id: 4,
        name: 'Peggy Frost',
        job: 'poduct manager',
        img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus commodi quas doloribus repellendus exercitationem nulla ratione quis hic numquam? Commodi!'
    },
    {
        id: 5,
        name: 'Haroon Schultz',
        job: 'developer',
        img: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus commodi quas doloribus repellendus exercitationem nulla ratione quis hic numquam? Commodi!'
    }
]

const img = document.getElementById('person-img')
const author = document.getElementById('author')
const info = document.getElementById('info')
const job = document.getElementById('job')

const prevBtn = document.querySelector('.btn_prev')
const nextBtn = document.querySelector('.btn_next')
const randomBtn = document.querySelector('.random_btn')

let currentItem = 0

window.addEventListener('DOMContentLoaded', function () {
    showPerson()
})

function showPerson(){
    const item = reviews[currentItem]
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
}

prevBtn.addEventListener('click', function(){
    currentItem--
    if(currentItem < 0){
        currentItem = reviews.length - 1
    }
    showPerson()
    
})

nextBtn.addEventListener('click', function(){
    currentItem++
    if(currentItem > reviews.length - 1){
        currentItem = 0
    }
    showPerson()
})

randomBtn.addEventListener('click', function(){
    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson()
})

