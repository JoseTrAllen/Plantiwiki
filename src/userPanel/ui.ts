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

export const displayUserPlants = (
  allPlants: Plant[],
  userPlant: SavedPlant[]
) => {
  userPlant.forEach((userPlant) => {
    const matchingPlant = allPlants.find(
      (plant) => userPlant.plantId === plant.id
    );
    if (matchingPlant) {
      console.log(userPlant.nickname, ".", userPlant.customNotes);
    }
  });
};
