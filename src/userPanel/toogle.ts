import { Plant } from "../model/model";

export const displayModal = () => {
  const modal = document.querySelector(".toogle-card");
  if (modal && modal instanceof HTMLDivElement) {
    modal.style.display = "flex";
  }

  modal?.addEventListener("click", (event) => {
    if (event.target === modal && modal instanceof HTMLDivElement) {
      modal.style.display = "none";
    }
  });
};

const setIdCard = (id: string) => {
  const card = document.querySelector(".modal-card");
  if (card) {
    card.setAttribute("data-id", id);
  }
};

export const modalCardImg = (text: string) => {
  const img = document.querySelector(".img-modal");
  if (img && img instanceof HTMLImageElement) {
    img.src = text;
  }
  return img;
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
            console.log(plant.name);
            //Aquí añado los displays del card
            modalCardImg(plant.imageUrl);
          }
        });
      }
    }
  });
};
