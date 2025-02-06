import { fetchPlants } from "../api/plantsApi";
import { createCardPlant } from "./createSearchSection";

const getInputText = () => {
  const input = document.getElementById("search-input");
  if (input && input instanceof HTMLInputElement) {
    const text = input.value;
    return text;
  }
};

export const filterPlantsByName = async () => {
  const plants = await fetchPlants();
  const container = document.querySelector(".all-plants-container");
  if (container) {
    container.innerHTML = "";
  }

  const search = getInputText();
  if (search) {
    const filtered = plants.filter((plant) =>
      plant.name.toLowerCase().startsWith(search.toLowerCase())
    );

    filtered.forEach((plant) => {
      if (container && container instanceof HTMLElement) {
        createCardPlant(plant, container);
      }
    });

    console.log(filtered);
  }
};
