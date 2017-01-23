export function addTask(name, date, assigned) {
  return{
    type: "ADD_TASK",
    name,
    date,
    assigned
  }
}
