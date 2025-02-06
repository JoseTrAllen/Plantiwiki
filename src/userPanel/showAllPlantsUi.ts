import { fetchPlants } from "../api/plantsApi";

import { createCardPlant, createGridContainer } from "./createSearchSection";

export const displaySearchBar = () => {
  const div = document.querySelector(".search-bar-container");
  if (div && div instanceof HTMLDivElement) {
    div.style.display = "flex";
  }
};

export const showAllPlants = async () => {
  const allPlants = await fetchPlants();
  const container = createGridContainer();

  allPlants.forEach((plant) => {
    createCardPlant(plant, container);
  });
};
