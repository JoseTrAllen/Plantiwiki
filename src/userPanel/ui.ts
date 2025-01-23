import { SavedPlant, User, Plant } from "../model/model";

export const displayUserPhotoProfile = (img: User) => {
  const imgProfile = document.getElementById("img-profile");
  if (imgProfile && imgProfile instanceof HTMLImageElement) {
    imgProfile.src = img.photo;
  }
};

export const displayUserName = (user: User) => {
  const userName = document.getElementById("user-name");
  if (userName && userName instanceof HTMLHeadingElement) {
    userName.innerText = `¡Hola ${user.username}!`;
  }
};

export const displayTips = (text: string) => {
  const tip = document.getElementById("tip");
  if (
    tip !== null &&
    tip !== undefined &&
    tip instanceof HTMLParagraphElement
  ) {
    tip.innerText = `🌱PlantiConsejo🌱 ${text}`;
  }
};

export const displayUserNamePlants = (plants: SavedPlant[]) => {
  const div = document.getElementById("user-container");

  plants.forEach((plant) => {
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    h3.innerText = plant.nickname;
    p.innerText = plant.customNotes;
    div?.appendChild(h3);
    div?.appendChild(p);
  });
};

//Esta función sería con la que se trabajaría la información de las plantas
export const displayPlantInformation = (allPlants: Plant[]) => {
  const div = document.getElementById("user-container");
  const ul = document.createElement("ul");

  allPlants.forEach((plants) => {
    const li = document.createElement("li");
    li.innerText = plants.description;
    ul.appendChild(li);
    div?.appendChild(ul);
  });
};

const createCard = (id: number) => {
  const card = document.createElement("div");
  card.classList.add("card-plant");
  card.setAttribute("data-id", `${id}`);
  return card;
};

const createImg = (text: string, card: HTMLDivElement) => {
  const img = document.createElement("img");
  img.classList.add("card-img");
  img.src = text;
  card.appendChild(img);
  return img;
};

const createTitle = (text: string, card: HTMLDivElement) => {
  const title = document.createElement("h2");
  title.classList.add("plant-name");
  title.innerText = text;
  card.appendChild(title);
  return title;
};

const createSubTitle = (text: string, card: HTMLDivElement) => {
  const subTitle = document.createElement("p");
  subTitle.classList.add("plant-cientific-name");
  subTitle.innerText = text;
  card.appendChild(subTitle);
  return subTitle;
};

const createLastWattered = (text: string, card: HTMLDivElement) => {
  const info = document.createElement("p");
  info.classList.add("plant-cientific-name");
  info.innerText = `Último riego: ${text}`;
  card.appendChild(info);
  return info;
};

const createLastRepotted = (text: string, card: HTMLDivElement) => {
  const info = document.createElement("p");
  info.classList.add("plant-cientific-name");
  info.innerText = `Último transplante: ${text}`;
  card.appendChild(info);
  return info;
};

const createDivImg = () => {
  const div = document.createElement("div");
  div.classList.add("img-plant-container");
  return div;
};

export const displayUserPlants = (
  allPlants: Plant[],
  userPlant: SavedPlant[]
) => {
  const div = document.getElementById("plants-user-section");
  userPlant.forEach((userPlant) => {
    const card = createCard(userPlant.plantId);
    const divImg = createDivImg();
    div?.appendChild(card);
    card.appendChild(divImg);

    const matchingPlant = allPlants.find(
      (plant) => userPlant.plantId === plant.id
    );
    if (matchingPlant) {
      createImg(matchingPlant.imageUrl, divImg);
      createTitle(userPlant.nickname, card);
      createSubTitle(matchingPlant.name, card);
      createLastWattered(userPlant.lastWatered, card);
      createLastRepotted(userPlant.lastRepotted, card);
    }
  });
};
