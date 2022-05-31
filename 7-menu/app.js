const menu = [
    {
        id: 1,
        title: 'pancakes',
        category: 'breakfast',
        price: '$15.99',
        img: 'https://images.unsplash.com/photo-1598214886806-c87b84b7078b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam temporibus iusto velit culpa similique minus sapiente ipsam id fuga doloremque!`,
    },
    {
        id: 2,
        title: 'cereal with milk',
        category: 'breakfast',
        price: '$15',
        img: 'https://images.unsplash.com/photo-1521483451569-e33803c0330c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1085&q=80',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam temporibus iusto velit culpa similique minus sapiente ipsam id fuga doloremque!`,
    },
    {
        id: 3,
        title: 'toast with egg',
        category: 'breakfast',
        price: '$10.99',
        img: 'https://images.unsplash.com/photo-1550935770-d58cbf30c003?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1625&q=80',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam temporibus iusto velit culpa similique minus sapiente ipsam id fuga doloremque!`,
    },
    {
        id: 4,
        title: 'waffles',
        category: 'breakfast',
        price: '$8.99',
        img: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam temporibus iusto velit culpa similique minus sapiente ipsam id fuga doloremque!`,
    },
    {
        id: 5,
        title: 'sandwich',
        category: 'lunch',
        price: '$12.99',
        img: 'https://images.unsplash.com/photo-1554997433-bd88e371760b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1143&q=80',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam temporibus iusto velit culpa similique minus sapiente ipsam id fuga doloremque!`,
    },
    {
        id: 6,
        title: 'soup',
        category: 'lunch',
        price: '$10',
        img: 'https://images.unsplash.com/photo-1560963805-6c64417e3413?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=836&q=80',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam temporibus iusto velit culpa similique minus sapiente ipsam id fuga doloremque!`,
    },
    {
        id: 7,
        title: 'rolls',
        category: 'lunch',
        price: '$13.99',
        img: 'https://images.unsplash.com/photo-1554502078-ef0fc409efce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=784&q=80',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam temporibus iusto velit culpa similique minus sapiente ipsam id fuga doloremque!`,
    },
    {
        id: 8,
        title: 'salad',
        category: 'lunch',
        price: '$8.99',
        img: 'https://images.unsplash.com/photo-1542528180-a1208c5169a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=877&q=80',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam temporibus iusto velit culpa similique minus sapiente ipsam id fuga doloremque!`,
    },
    {
        id: 9,
        title: 'chocolate shake',
        category: 'shakes',
        price: '$6.99',
        img: 'https://images.unsplash.com/photo-1591864384134-8a21ffb51cb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam temporibus iusto velit culpa similique minus sapiente ipsam id fuga doloremque!`,
    },
    {
        id: 10,
        title: 'strawberry milkshake',
        category: 'shakes',
        price: '$7.99',
        img: 'https://images.unsplash.com/photo-1589734575451-8ddc34c5752b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1194&q=80',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam temporibus iusto velit culpa similique minus sapiente ipsam id fuga doloremque!`,
    },
    {
        id: 11,
        title: 'oreo milkshake',
        category: 'shakes',
        price: '$9.99',
        img: 'https://images.unsplash.com/photo-1528740096961-3798add19cb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam temporibus iusto velit culpa similique minus sapiente ipsam id fuga doloremque!`,
    },
    {
        id: 12,
        title: 'cherry milkshake',
        category: 'shakes',
        price: '$6.99',
        img: 'https://images.unsplash.com/photo-1601391554611-2b4b90b0d364?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam temporibus iusto velit culpa similique minus sapiente ipsam id fuga doloremque!`,
    },
    {
        id: 13,
        title: 'pizza',
        category: 'dinner',
        price: '$20',
        img: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam temporibus iusto velit culpa similique minus sapiente ipsam id fuga doloremque!`,
    },
    {
        id: 14,
        title: 'steak',
        category: 'dinner',
        price: '$22.99',
        img: 'https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam temporibus iusto velit culpa similique minus sapiente ipsam id fuga doloremque!`,
    },
    {
        id: 15,
        title: 'burger',
        category: 'dinner',
        price: '$16.50',
        img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam temporibus iusto velit culpa similique minus sapiente ipsam id fuga doloremque!`,
    },
    {
        id: 16,
        title: 'mac & cheese',
        category: 'dinner',
        price: '$12.99',
        img: 'https://images.unsplash.com/photo-1612892010343-983bfd063dc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam temporibus iusto velit culpa similique minus sapiente ipsam id fuga doloremque!`,
    },
]

const links = document.querySelector('.nav-links')

document.querySelector('.nav-btn').addEventListener('click', function(){
    links.classList.toggle('show-links')
})

const sectionCenter = document.querySelector('.section-center')
const filterBtns = document.querySelectorAll('.btn')

window.addEventListener('DOMContentLoaded', function(){
    displayMenuItems(menu)
})

filterBtns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const category = e.currentTarget.dataset.id
        const menuCategory = menu.filter(function(menuItem){
            if(menuItem.category === category){
                return menuItem
            }
        })
        if(category === 'all'){
            displayMenuItems(menu)
        }
        else{
            displayMenuItems(menuCategory)
        }
})
})

function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(obj){
        return `<article class="menu-item">
        <img src=${obj.img} alt=${obj.title} class="photo">
        <div class="item-info">
            <header>
                <h4>${obj.title}</h4>
                <h4 class="price">${obj.price}</h4>
            </header>
            <p class="item-text">${obj.desc}</p>
        </div>
    </article>`
    })
    displayMenu = displayMenu.join('')

    sectionCenter.innerHTML = displayMenu
}