
let tasks = [
    {
        text:"Apprendre le Javascript",
        priority: 1,
    },
    {
        text:"Créer un compte Github",
        priority: 2,
    },
    {
        text:"Repondre à mes emails",
        priority: 3,
    },
    {
        text:"Veille Informatique",
        priority: 2,
    },
]

const inputTitle = document.querySelector("#input-title");
const inputPriority = document.querySelector("#select-priority");
const SubmitButton = document.querySelector("#submit-button");
const ClearButton = document.querySelector("#delete-list");
const listContainer = document.querySelector(".list-container");


const renderList=(text, priority)=> {
    const li = document.createElement("li");
    const classPrio = ["prio-1", "prio-2", "prio-3"];
    li.classList.add("todo-li", classPrio[priority-1]);
    const label = document.createElement("label");
    label.classList.add("todo-title");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.classList.add("checkbox-todo");
    label.append(input);
    label.append(document.createTextNode(text));
    li.append(label);
    listContainer.append(li);
}

const init = ()=> {
    for( let task of tasks){
        renderList(task.text, task.priority);
    }
}

init();

// Ajouter une tache

function addTask() {
    const title = inputTitle.value;
    const priority = inputPriority.value;
    const newTask = {
        text: title,
        priority: priority,
    }
    tasks.push(newTask);
    listContainer.append(renderList(newTask.text, newTask.priority))
    console.log(newTask);
    console.log(tasks);
}

SubmitButton.addEventListener("click", addTask);

// Supprimer la liste

const DeleteAll = ()=> {
    listContainer.innerHTML = "";
    tasks = tasks.splice(0,0)
;    console.log(tasks);
    window.alert("Liste supprimée");
}

ClearButton.addEventListener("click", DeleteAll);

// Supprimer une tache


const CheckBox = document.querySelectorAll(".checkbox-todo");

const NewTasks = (text)=> {
    return tasks.filter((task) => task.text !== text);
}  


const deleteTask = (e) => {
    const liParent = e.target.parentElement.parentElement;
    const labelParent = e.target.parentElement;
    const text = labelParent.innerText;
    const newVersion = NewTasks(text);
    tasks = newVersion;
    liParent.remove();
}

const attachEventHandlers = () => {
    const CheckBox = document.querySelectorAll(".checkbox-todo");
    CheckBox.forEach((checkbox) => {
        checkbox.addEventListener('click', deleteTask);
    });
}

attachEventHandlers();


// Tri 

const sortTasks = (e) => {
    e.preventDefault();
    const sortedTasks = tasks.sort((a,b) => a.priority - b.priority);
    tasks = sortedTasks;
    listContainer.innerHTML = "";
    for (let task of tasks){
        renderList(task.text, task.priority);
    }
    attachEventHandlers();
}

const SortButtonHight = document.querySelector("#btn-tri-normal");

SortButtonHight.addEventListener("click", sortTasks);

// Tri inverse

const sortTasksReverse = (e) => {
    e.preventDefault();
    const sortedTasks = tasks.sort((a,b) => b.priority - a.priority);
    tasks = sortedTasks;
    listContainer.innerHTML = "";
    for (let task of tasks){
        renderList(task.text, task.priority);
    }
    attachEventHandlers();
}

const SortButtonLow = document.querySelector("#btn-tri-reverse");

SortButtonLow.addEventListener("click", sortTasksReverse);



