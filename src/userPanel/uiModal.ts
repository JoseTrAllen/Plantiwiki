import { Plant } from "../model/model";
import {
  modalCardImg,
  modalPlantdescription,
  modalPlantName,
  setIdCard,
} from "./infoPlantsModal";

export const displayModal = () => {
  const modal = document.querySelector(".toogle-card");
  if (modal && modal instanceof HTMLDivElement) {
    modal.style.display = "flex";
    modal.addEventListener("click", (event) => {
      if (event.target === modal && modal instanceof HTMLDivElement) {
        modal.style.display = "none";
      }
    });
  }
};

export const getIdCard = (allPlants: Plant[]) => {
  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    const plantCard = target.closest(".card-plant");
    if (plantCard) {
      const plantId = plantCard.getAttribute("data-id");
      console.log(plantId);
      displayModal();
      if (plantId) {
        setIdCard(plantId);
        const id = parseInt(plantId);
        allPlants.forEach((plant) => {
          if (plant.id === id) {
            //Aquí añado los displays del card
            modalCardImg(plant.imageUrl);
            modalPlantName(plant.name);
            modalPlantdescription(plant.description);
          }
        });
      }
    }
  });
};

/* let id: number | null = null;

export const getIdPlant = () => {
  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    const plantCard = target.closest(".card-plant");
    if (plantCard) {
      const idNumber = plantCard.getAttribute("data-id");
      if (idNumber) {
        id = parseInt(idNumber);
      }
      console.log("id: ", id);
    } else {
      console.log("No se ha obtenido el Id");
    }
  });
};


export const showModalPlant = (user: User, plants: Plant[]) => {

  plants.forEach((plant) => {
    if (plant.id === id) {
      console.log(plant.name);
      console.log(user.savedPlants);
    }
  });
}; */
