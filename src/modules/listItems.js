import itemsList from './listData.js';

const toDoListContainer = document.querySelector('.list-container');

const itemsListDisplay = () => {
  itemsList.forEach((item) => {
    toDoListContainer.innerHTML += `
    <li class='to-do-item' value='index'>${item.description}<i class="fa-solid fa-ellipsis-vertical"></i></li>`;
  });
};

export default itemsListDisplay;