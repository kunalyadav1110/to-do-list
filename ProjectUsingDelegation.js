console.log("hello");
const todoform = document.querySelector(".form-todo");
const todoinput = document.querySelector(".form-todo input[type='text']");
const todolist = document.querySelector(".form-list");
console.log(todoinput);
console.log(todoform);

todoform.addEventListener("submit",(e)=>{
    e.preventDefault();
    const newtodotext = todoinput.value;
    const newLi = document.createElement("Li");
    const newLiInnerHTML = `<span class ="text">${newtodotext}</span>
    <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>
    `;
    newLi.innerHTML = newLiInnerHTML;
    todolist.append(newLi);
    todoinput.value= ""
});
todolist.addEventListener("click",(e)=>{
    
    //check if user click on done button
    if(e.target.classList.contains("remove")){
        console.log("you want to remove something ?");
        const targetLi = e.target.parentNode.parentNode;
        //console.log(targetLi);
        targetLi.remove();
    }
    if(e.target.classList.contains("done")){
        const liSpan = e.target.parentNode.previousElementSibling;
        //console.log(liSpan);
        liSpan.style.textDecoration = "line-through";
    }
});
// })
