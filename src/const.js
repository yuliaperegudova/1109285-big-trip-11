export const CITIES = [`Rome`, `Amsterdam`, `Paris`, `Barselona`, `Moscow`, `Porto`, `Bratislava`, `Berlin`, `London`];

export const MONTH_NAMES = [
  `Jan`,
  `Feb`,
  `Mar`,
  `Apr`,
  `May`,
  `Jun`,
  `Jul`,
  `Aug`,
  `Sep`,
  `Oct`,
  `Nov`,
  `Dec`,
];

export const DESCRIPTIONS = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`
];

export const eventTypes = [
  {
    name: `Taxi`,
    group: `Transfer`
  },
  {
    name: `Bus`,
    group: `Transfer`
  },
  {
    name: `Train`,
    group: `Transfer`
  },
  {
    name: `Ship`,
    group: `Transfer`
  },
  {
    name: `Transport`,
    group: `Transfer`
  },
  {
    name: `Drive`,
    group: `Transfer`
  },
  {
    name: `Flight`,
    group: `Transfer`
  },
  {
    name: `Check-in`,
    group: `Activity`
  },
  {
    name: `Sightseeing`,
    group: `Activity`
  },
  {
    name: `Restaurant`,
    group: `Activity`
  }
];

export const offersByEventsType = {
  flight: [
    {
      name: `luggage`,
      title: `Add luggage`,
      price: 50
    },
    {
      name: `comfort`,
      title: `Switch to comfort`,
      price: 100
    },
    {
      name: `meal`,
      title: `Add meal`,
      price: `100`
    },
    {
      name: `seats`,
      title: `Choose seats`,
      price: 5
    },
    {
      name: `train`,
      title: `Travel by train`,
      price: 40
    }
  ],
  drive: [
    {
      name: `car`,
      title: `Rent a car`,
      price: 200
    }
  ],
  [`check-in`]: [
    {
      name: `breakfast`,
      title: `Add breakfast`,
      price: 50
    }
  ],
  sightseeing: [
    {
      name: `tickets`,
      title: `Book tickets`,
      price: 40
    },
    {
      name: `lunch`,
      title: `Lunch in city`,
      price: 30
    }
  ],
  taxi: [
    {
      name: `uber`,
      title: `Order Uber`,
      price: 20
    }
  ]
};

