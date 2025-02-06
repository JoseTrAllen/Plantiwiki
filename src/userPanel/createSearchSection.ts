import { Plant } from "../model/model";

export const createGridContainer = (): HTMLDivElement => {
  const main = document.querySelector("main");

  const container = document.createElement("div");
  container.classList.add("all-plants-container");

  if (main && main instanceof HTMLElement) {
    main.appendChild(container);
  }

  return container;
};

export const createCard = (id: string): HTMLDivElement => {
  const createCard = document.createElement("div");
  createCard.classList.add("card-plant");
  createCard.setAttribute("data-id", id);

  return createCard;
};

export const createImg = (img: string): HTMLImageElement => {
  const createI = document.createElement("img");
  createI.classList.add("img-search-section");
  createI.src = img;

  return createI;
};

export const createName = (text: string): HTMLHeadingElement => {
  const name = document.createElement("h2");
  name.innerText = text;

  return name;
};

export const createCardPlant = (plant: Plant, container: HTMLElement) => {
  const id = plant.id.toString();

  const card = createCard(id);
  container.appendChild(card);

  const img = createImg(plant.imageUrl);
  card.appendChild(img);

  const name = createName(plant.name);
  card.appendChild(name);
};
