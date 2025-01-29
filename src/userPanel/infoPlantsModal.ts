export const setIdCard = (id: string) => {
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

export const modalPlantName = (text: string) => {
  const name = document.querySelector(".plant-modal-name");
  if (name && name instanceof HTMLHeadingElement) {
    name.innerText = text;
  }
  return name;
};

export const modalPlantdescription = (text: string) => {
  const description = document.querySelector(".plant-modal-description");
  if (description && description instanceof HTMLParagraphElement) {
    description.innerText = text;
  }
  return description;
};
