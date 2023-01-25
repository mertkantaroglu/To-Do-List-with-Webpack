import './style.css';
import itemsListDisplay from './modules/listItems.js';

const render = () => {
  window.addEventListener('load', itemsListDisplay());
};
render();