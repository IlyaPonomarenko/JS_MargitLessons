const todoForm = document.querySelector("#todoForm");
const taskNameInput = todoForm['task']
const taskDescInput = todoForm['desc']
const tasksCont = document.querySelector(".tasks")

const taskArr = JSON.parse(localStorage.getItem("CurrentTasks")) || []

const createTask = (task, desc) => {
    taskArr.push({
        task:task,
        desc:desc
    });
    localStorage.setItem("CurrentTasks", JSON.stringify(taskArr))
    return {task,desc}
}

const addTask = ({task,desc}) => {
    const taskli = document.createElement("li")
    taskli.classList.add("indTask")
    const taskname = document.createElement("h2")
    const taskdesc = document.createElement("p")
    taskname.innerText = task;
    taskdesc.innerText = "Description: " + desc;
    tasksCont.appendChild(taskli);
    taskli.append(taskname, taskdesc);

}
taskArr.forEach(addTask)
todoForm.onsubmit = (e) =>{
    e.preventDefault();
    const newTask = createTask(taskNameInput.value,taskDescInput.value);
    addTask(newTask);
    taskNameInput.value="";
    taskDescInput.value="";
}
