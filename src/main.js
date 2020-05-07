import {createTripInfoTemplate} from "./components/trip-info.js";
import {createCostTemplate} from "./components/cost.js";
import {createMenuTemplate} from "./components/menu.js";
import {createFilterTemplate} from "./components/filter.js";
import {createSortTemplate} from "./components/sort.js";
import {createEventMarkup} from "./components/event.js";
import {createEventEditTemplate} from "./components/edit.js";
import {generateFilters} from "./mock/filter.js";
import {generateEvents} from "./mock/point.js";

const EVENT_COUNT = 15;

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

const filters = generateFilters();
const events = generateEvents(EVENT_COUNT);

render(tripMenuHeading, createMenuTemplate(), `afterend`);
render(tripControls, createFilterTemplate(filters), `beforeend`);
render(tripEvents, createSortTemplate(), `beforeend`);

for (let i = 1; i < events.length; i++) {
  render(tripEvents, createEventMarkup(events[i], i), `beforeend`);
}

render(tripEvents, createEventEditTemplate(events[0], true, 0), `afterbegin`);

