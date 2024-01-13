let panels =document.querySelectorAll('.panel')
let btn =document.querySelectorAll('.btn')

btn.forEach( btn => [
    btn.addEventListener('click' , (e) => {
        console.log(e.target.id);
        let a = btn.nextElementSibling;
        a.classList.toggle('active')
    })
])
let span = document.querySelectorAll('span')

