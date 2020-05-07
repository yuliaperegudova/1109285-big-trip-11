import {eventTypes, CITIES, offersByEventsType} from "../const.js";

const DESCRIPTION_SENTENCES_COUNT = 5;

const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);

  return array[randomIndex];
};

// описание нужно перенести в отдельный файл

const destinationDescriptions = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;

const generateDestinationDescription = () => {
  const descriptions = destinationDescriptions
    .split(`.`)
    .map((descr) => descr.trim())
    .filter((descr) => descr !== ``);
  const count = getRandomIntegerNumber(1, DESCRIPTION_SENTENCES_COUNT);
  let destinationDescription = ``;
  for (let i = 1; i <= count; i++) {
    let random = getRandomIntegerNumber(0, descriptions.length - 1);
    const randomSentence = descriptions.splice(random, 1);
    destinationDescription += `${randomSentence}. `;
  }
  return destinationDescription.trim();
};

const generateDestination = () => {
  return {
    description: generateDestinationDescription(),
    photo: `http://picsum.photos/248/152?r=${Math.random()}`
  };
};

const generateOptions = (event) => {
  return offersByEventsType[event] || null;
};

const generateEvent = () => {

  const type = getRandomArrayItem(eventTypes);
  const dateStart = new Date();
  const dayRange = getRandomIntegerNumber(-40, 40);
  const day = dateStart.getDate();
  dateStart.setDate(day + dayRange);

  const hoursRange = getRandomIntegerNumber(0, 23);
  dateStart.setHours(hoursRange);

  const durationMinutes = getRandomIntegerNumber(15, 3000);
  const dateEnd = new Date(dateStart.getTime());
  dateEnd.setMinutes(dateEnd.getMinutes() + durationMinutes);

  const price = Math.floor(getRandomIntegerNumber(20, 600) / 10) * 10;

  return {
    eventType: type,
    city: getRandomArrayItem(CITIES),
    eventOptions: generateOptions(type.name.toLowerCase()),
    destination: generateDestination(),
    price,
    dateStart,
    dateEnd
  };
};

const generateEvents = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateEvent);
};

export {generateEvent, generateEvents};

