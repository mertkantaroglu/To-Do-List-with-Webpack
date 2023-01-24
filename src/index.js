import './style.css';

const itemsList = [{
  index: 0,
  description: 'Finish the to-do list',
  completed: false,
},
{
  index: 1,
  description: 'Clean the house',
  completed: false,
},
{
  index: 2,
  description: 'wash the dishes',
  completed: true,
},
];

const toDoListContainer = document.querySelector('.to-do-list-container');

const itemsListDisplay = () => {
  itemsList.forEach((item) => {
    toDoListContainer.innerHTML += `
    <li class='to-do-item' value='index'>${item.description}<i class="fa-solid fa-ellipsis-vertical"></i></li>`;
  });
};

window.addEventListener('load', itemsListDisplay);
