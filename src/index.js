document.addEventListener("DOMContentLoaded", () => {
  const newTask = document.getElementById('create-task-form')
  const listOfTasks = document.getElementById('tasks')

  newTask.addEventListener('submit', (e) => {
    e.preventDefault()
    const newInput = e.target.querySelector('#new-task-description').value
    const taskList = document.createElement('li')
    taskList.innerText = newInput
    listOfTasks.append(taskList)
  })
})
