import { setToDo } from './store.js';
import { renderToDoList } from './render.js';

// Add Todo
export const addToDo = (todos, toDoItem) => {
  todos.push({
    toDoItem,
    completed: false,
    id: todos.length + 1,
  });
  setToDo(todos);
};

// Edit Todo
export const editToDo = (e, todos) => {
  const clickedToDo = e.target.closest('.todo-text');
  clickedToDo.disabled = false;
  clickedToDo.focus();
  const toDoText = clickedToDo.value;
  clickedToDo.addEventListener('keypress', (e) => {
    if (e.keyCode === 13 && clickedToDo.value !== '') {
      const toDoIndex = todos.findIndex(
        (toDoItem) => toDoItem.toDoItem === toDoText,
      );
      todos[toDoIndex].toDoItem = clickedToDo.value;
      clickedToDo.disabled = true;
      setToDo(todos);
      renderToDoList(todos);
    }
  });
};

// Delete Todo
export const deleteToDo = (e, todos) => {
  const deleteButton = e.target.closest('.trash-can');
  const clickedToDo = deleteButton.previousElementSibling;
  const toDoIndex = todos.findIndex(
    (toDoItem) => toDoItem.toDoItem === clickedToDo.value,
  );
  todos.splice(toDoIndex, 1);
  todos.forEach((toDoItem, index) => {
    toDoItem.id = index + 1;
  });
  setToDo(todos);
  renderToDoList(todos);
};
