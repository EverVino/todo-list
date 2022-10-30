const todoListFactory = () => {
    let projects = [];
    const add = (project)=> {
        projects.push(project);
    }
    return {projects, add}

}
const projectFactory = (title) => {
    let tasks = [];
    let index = 0;
    return {title, tasks, index}
}

const taskFactory = (title, dueDate, textArea, priority) => {
    let activities = textArea.split("\n");
    let index = 0;
    return {title, dueDate, activities, index, priority}
}

// let todoList = todoListFactory();
// todoList.add(3)
// console.log(todoList)

// console.log(todoListFactory);

// const project1 = projectFactory("Nuevo");
// const task1 = taskFactory(
//     "Poner en marcha la caldera",
//     "2022-08-04",
//     "Abrir\nCerrar\nllenar\nejemplo", "high");

// const task2 = taskFactory(
//     "Poner reactivos",
//     "2022-08-11",
//     "Abri1r\nCerrar2\nllenar3\nejemplo2","low");

// project1.tasks.push(task1);
// project1.tasks.push(task2);

// console.log(project1);

// for(act of project1.tasks[0].activities){
//     console.log(act);
// };

export {todoListFactory, projectFactory, taskFactory}