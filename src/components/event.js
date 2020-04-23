import {MONTH_NAMES} from "../const.js";
import {formatTime, formatTimeFromMs} from "../utils.js";

const createOptionsMarkup = (events) => {
  if (events && events.length) {
    const options = events
      .slice(0, 3)
      .map((event) =>
        `<li class="event__offer">
            <span class="event__offer-title">${event.title}</span>
            &plus;
            &euro;&nbsp;<span class="event__offer-price">${event.price}</span>
        </li>`
      )
      .join(`\n`);
    return (
      `<h4 class="visually-hidden">Offers:</h4>
       <ul class="event__selected-offers">
         ${options}
       </ul>`
    );
  } else {
    return ``;
  }
};

export const createEventMarkup = (event, index) => {
  const {eventType, city, eventOptions, price, dateStart, dateEnd} = event;
  const timeStartFormatted = formatTime(dateStart);
  const timeEndFormatted = formatTime(dateEnd);
  const durationFormatted = formatTimeFromMs(dateEnd - dateStart);
  const preposition = eventType.group === `Transfer` ? `to` : `in`;
  return (
    `<ul class="trip-days">
    <li class="trip-days__item  day">
      <div class="day__info">
        <span class="day__counter">${index}</span>
        <time class="day__date" datetime="2019-03-18">${MONTH_NAMES[dateStart.getMonth()]} ${dateStart.getDate()}</time>
      </div>

    <ul class="trip-events__list">
    <li class="trip-events__item">
      <div class="event">
        <div class="event__type">
                 <img class="event__type-icon" width="42" height="42" src="img/icons/${eventType.name.toLowerCase()}.png" alt="Event type icon">
               </div>
        <h3 class="event__title">${eventType.name} ${preposition} ${city}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${dateStart.toISOString().slice(0, 13)}">${timeStartFormatted}</time>
                 &mdash;
            <time class="event__end-time" datetime="${dateEnd.toISOString().slice(0, 13)}">${timeEndFormatted}</time>
          </p>
          <p class="event__duration">${durationFormatted}</p>
          </div>
          <p class="event__price">
            &euro;&nbsp;<span class="event__price-value">${price}</span>
          </p>
          ${createOptionsMarkup(eventOptions)}
          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
          </button>
        </div>
    </li>
    </ul>`
  );
};
