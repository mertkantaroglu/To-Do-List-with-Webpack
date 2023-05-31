export const setToDo = (todos) => {
  localStorage.setItem('toDoList', JSON.stringify(todos));
};

export const getToDo = () => {
  const toDoData = JSON.parse(localStorage.getItem('toDoList')) || [];
  const todos = toDoData;
  return todos;
};

/* 
const setTodo = (todos) => {
  localStorage.setItem('toDoList', JSON.stringify(todos));
};

const get ToDo = () => {
  const toDoData = JSON.parse(localStorage.getItem('toDoList')) || [];
  const todos = toDoData;
  return todos;
}
*/