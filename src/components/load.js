import AbstractComponent from "./abstract-component";

const createLoadTemplate = () => {
  return (
    `<p class="trip-events__msg">Loading...</p>`
  );
};

export default class Loading extends AbstractComponent {
  constructor() {
    super();
  }

  getTemplate() {
    return createLoadTemplate();
  }
}
