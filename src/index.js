import './style.css';

import {
  addToDo, editToDo, deleteToDo, clearToDos, markToDo,
} from './modules/todos.js';

import { setToDo, getToDo as toDoItems } from './modules/store.js';
import { renderToDoList } from './modules/render.js';

// Variables
const input = document.querySelector('.input-field');
const toDoList = document.querySelector('.todo-container');
const addButton = document.querySelector('.add-btn');

const clearButton = document.querySelector('.clear-all-btn');

// Add Event Listener with Enter
input.addEventListener('keypress', (e) => {
  if (e.keyCode === 13 && input.value !== '') {
    addToDo(toDoItems(), input.value);
    input.value = '';
    renderToDoList(toDoItems());
  }
});

// Add Event Listener with Click
addButton.addEventListener('click', () => {
  if (input.value !== '') {
    addToDo(toDoItems(), input.value);
    input.value = '';
    setToDo(toDoItems());
    renderToDoList(toDoItems());
  }
});

// Edit Event Listener
toDoList.addEventListener('click', (e) => {
  if (e.target.closest('.todo-text')) {
    editToDo(e, toDoItems());
  }
});

// Delete Event Listener
toDoList.addEventListener('click', (e) => {
  if (e.target.closest('.trash-can')) {
    deleteToDo(e, toDoItems());
  }
});

// Clear Completed Todo Event Listener
clearButton.addEventListener('click', () => {
  const toDoList = clearToDos(toDoItems());
  setToDo(toDoList);
  renderToDoList(toDoItems());
});

// Mark Completed Todo Event Listener
toDoList.addEventListener('click', (e) => {
  if (e.target.closest('.todo-checkbox')) {
    markToDo(e, toDoItems());
  }
});

const render = () => {
  window.addEventListener('load', renderToDoList(toDoItems()));
};
render();