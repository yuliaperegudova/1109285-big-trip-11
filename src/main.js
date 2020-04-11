import {createTripInfoTemplate} from "./components/trip-info.js";
import {createCostTemplate} from "./components/cost.js";
import {createMenuTemplate} from "./components/menu.js";
import {createFilterTemplate} from "./components/filter.js";
import {createSortTemplate} from "./components/sort.js";
import {createPointTemplate} from "./components/point.js";
import {createEditTemplate} from "./components/edit.js";

const POINT_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const tripMain = document.querySelector(`.trip-main`);
const tripControls = tripMain.querySelector(`.trip-controls`);
const tripMenuHeading = tripControls.querySelector(`h2`);
const tripEvents = document.querySelector(`.trip-events`);

render(tripMain, createTripInfoTemplate(), `afterbegin`);

const tripInfo = document.querySelector(`.trip-info`);
render(tripInfo, createCostTemplate(), `beforeend`);

render(tripMenuHeading, createMenuTemplate(), `afterend`);
render(tripControls, createFilterTemplate(), `beforeend`);
render(tripEvents, createSortTemplate(), `beforeend`);

for (let i = 0; i < POINT_COUNT; i++) {
  render(tripEvents, createPointTemplate(), `beforeend`);
}

const tripEventsList = document.querySelector(`.trip-events__list`);
render(tripEventsList, createEditTemplate(), `beforeend`);
