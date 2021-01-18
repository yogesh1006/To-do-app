const form =document.getElementById('form')
const input =document.getElementById('input')
const todoUl =document.getElementById('todos')


const todos=JSON.parse(localStorage.getItem('todos'))

if(todos){
    todos.forEach(todo => addToDOList(todo))
}

form.addEventListener('submit',(e)=>{
   e.preventDefault()

   addToDOList()


})

function addToDOList(todo){

    let todotext=input.value

    if(todo){
        todotext=todo.text
    }
    console.log(todotext);
    if(todotext){
        const todoEl=document.createElement('li')
        if(todo && todo.completed){
            todoEl.classList.add('completed')
        }

        todoEl.innerText=todotext

        todoEl.addEventListener('click',()=>{
            todoEl.classList.toggle('completed')
        
            updateLocalStorage()
        })

        todoEl.addEventListener('contextmenu',(e)=>{
            e.preventDefault()
            todoEl.remove()

            updateLocalStorage()
        })
        todoUl.appendChild(todoEl)

        input.value=''

        updateLocalStorage()
    }
}

function updateLocalStorage(){
 todoEl=document.querySelectorAll('li')
 const todos=[]
 todoEl.forEach(todoEl=>{
     todos.push({
         text:todoEl.innerText,
         completed:todoEl.classList.contains('completed')
     })
 })

 localStorage.setItem('todos',JSON.stringify(todos))
}