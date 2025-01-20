import { SavedPlant, User, Plant } from "../model/model";

export const displayUserPhotoProfile = (img: User) => {
  const newImg = document.createElement("img");
  const div = document.getElementById("user-container");
  if (div && div instanceof HTMLDivElement) {
    newImg.src = img.photo;
    div.appendChild(newImg);
  }
};

export const displayUserName = (name: User) => {
  const newHeader = document.createElement("h2");
  const div = document.getElementById("user-container");
  if (div && div instanceof HTMLDivElement) {
    newHeader.innerText = name.username;
    div.appendChild(newHeader);
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
  userPlant.forEach((u) => {
    allPlants.forEach((plant) => {
      if (u.plantId === plant.id) {
        console.log(u.nickname, ".", u.customNotes, plant.description);
      }
    });
  });
};
