//model block
document.querySelector('.overlay').classList.remove('hidden')

let closeModel = document.querySelector('.close-modal')

closeModel.addEventListener('click',function(){
    document.querySelector('.modal').classList.add('hidden')
    document.querySelector('.overlay').classList.add('hidden')
})

document.querySelector('.overlay').addEventListener('click',function(){
    document.querySelector('.modal').classList.add('hidden')
    document.querySelector('.overlay').classList.add('hidden')
})