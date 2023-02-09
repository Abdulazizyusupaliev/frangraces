const inputName = document.querySelector('.name_input'),
    inputNumber = document.querySelector('.number_input'),
    inputComment = document.querySelector('.comment__input'),
    clear1 = document.querySelector('.clear_1'),
    clear2 = document.querySelector('.clear_2'),
    clear3 = document.querySelector('.clear_3'),
    navBurger = document.querySelector('.navigation_bar'),
    list = document.querySelector('.navbar_list_one'),
    background = document.querySelector('.background_');

inputName.addEventListener('input', function(){
    inputName.style.border = "1px solid black";
    clear1.style.display = 'block'
})
inputNumber.addEventListener('input', function(){
    inputNumber.style.border = "1px solid black";
    clear2.style.display = 'block'
})
// inputComment.addEventListener('input', function(){
//     clear3.style.display = 'block'
//     inputComment.style.border = "1px solid black";
// })
navBurger.addEventListener('click', function(){
    list.classList.add('active')
    background.classList.add('active')
})

background.addEventListener('click', function(){
    list.classList.remove('active')
    background.classList.remove('active')
})