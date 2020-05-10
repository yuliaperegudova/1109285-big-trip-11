import TripInfoComponent from "./components/trip-info.js";
import CostComponent from "./components/cost.js";
import MenuComponent from "./components/menu.js";
import FilterComponent from "./components/filter.js";
import SortComponent from "./components/sort.js";
import EventComponent from "./components/event.js";
import EventEditComponent from "./components/edit.js";
import {generateFilters} from "./mock/filter.js";
import {generateEvents} from "./mock/point.js";
import {render, RenderPosition} from "./utils.js";

const EVENT_COUNT = 15;

const renderEvent = (eventListElement, event, index) => {

  const onEditButtonClick = () => {
    eventListElement.replaceChild(eventEditComponent.getElement(), eventComponent.getElement());
    const editForm = document.querySelector(`.event--edit`);
    editForm.addEventListener(`submit`, onEditFormSubmit);
  };

  const onEditFormSubmit = (evt) => {
    evt.preventDefault();
    eventListElement.replaceChild(eventComponent.getElement(), eventEditComponent.getElement());
  };


  const eventComponent = new EventComponent(event, index);
  const rollupButton = eventComponent.getElement().querySelector(`.event__rollup-btn`);
  rollupButton.addEventListener(`click`, onEditButtonClick);

  const eventEditComponent = new EventEditComponent(event, index);

  render(eventListElement, eventComponent.getElement(), RenderPosition.BEFOREEND);
};

const filters = generateFilters();
const events = generateEvents(EVENT_COUNT);

const tripMain = document.querySelector(`.trip-main`);
const tripControls = tripMain.querySelector(`.trip-controls`);
const tripEvents = document.querySelector(`.trip-events`);

render(tripMain, new TripInfoComponent().getElement(), RenderPosition.AFTERBEGIN);

const tripInfo = document.querySelector(`.trip-info`);

render(tripInfo, new CostComponent().getElement(), RenderPosition.BEFOREEND);
render(tripControls, new MenuComponent().getElement(), RenderPosition.AFTERBEGIN);
render(tripControls, new FilterComponent(filters).getElement(), RenderPosition.BEFOREEND);

render(tripEvents, new SortComponent().getElement(), RenderPosition.BEFOREEND);

// render(tripEvents, new EventEditComponent(events[0], true, 0).getElement(), RenderPosition.BEFOREEND);

for (let i = 1; i < events.length; i++) {
  renderEvent(tripEvents, events[i], i);
}


