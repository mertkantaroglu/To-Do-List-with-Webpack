import { getToDo } from './store.js';

const toDoList = document.querySelector('.todo-container');

// eslint-disable-next-line import/prefer-default-export
export const renderToDoList = (todos) => {
  toDoList.innerHTML = '';

  todos = getToDo();
  todos.forEach((toDo) => {
    const toDoItem = document.createElement('li');
    toDoItem.classList.add('todo-li');

    const toDoCheckbox = document.createElement('input');
    toDoCheckbox.classList.add('todo-checkbox');
    toDoCheckbox.type = 'checkbox';
    toDoCheckbox.checked = toDo.completed;
    toDoItem.appendChild(toDoCheckbox);

    const toDoText = document.createElement('input');
    toDoText.classList.add('todo-text');
    toDoText.value = toDo.toDoItem;
    toDoItem.appendChild(toDoText);

    if (toDo.completed) {
      toDoText.classList.add('completed');
    }
    const deleteIcon = document.createElement('span');
    deleteIcon.classList.add('trash-can');
    deleteIcon.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
    toDoItem.appendChild(deleteIcon);
    toDoList.appendChild(toDoItem);
  });
};