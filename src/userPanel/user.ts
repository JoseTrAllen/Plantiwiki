import {
  displayUserName,
  displayUserPhotoProfile,
  displayUserNamePlants,
  displayUserPlants,
  displayTips,
  displayNumberOfPlants,
} from "./ui";
import { fetchUsers } from "../api/usersApi";
import { fetchPlants } from "../api/plantsApi";
import { tip } from "./tips";
import { getIdCard } from "./uiModal";
import { displayNone } from "./displayUserSectionNone";
import { displaySearchBar, showAllPlants } from "./showAllPlantsUi";
import { filterPlantsByName } from "./filterPlants";

const getUserFromURL = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get("username");
};

const loadUserData = async () => {
  const userName = getUserFromURL();
  if (userName) {
    try {
      const users = await fetchUsers();
      const plants = await fetchPlants();

      const user = users.find((u) => u.username === userName);

      if (user) {
        const numberOfPlants = user?.savedPlants.length;
        displayUserPhotoProfile(user);
        displayUserName(user);
        displayTips(tip);
        displayNumberOfPlants(numberOfPlants);
        displayUserNamePlants(user.savedPlants);
        displayUserPlants(plants, user.savedPlants);
        getIdCard(plants);
      }
    } catch (e) {
      console.log(e);
    }
  }
};

const wikiButton = document.getElementById("search-button");

if (wikiButton && wikiButton instanceof HTMLParagraphElement) {
  wikiButton.addEventListener("click", () => {
    displayNone();
    displaySearchBar();
    showAllPlants();
  });
}

const searchButtonByName = document.getElementById("search-input-button");
if (searchButtonByName && searchButtonByName instanceof HTMLButtonElement) {
  searchButtonByName.addEventListener("click", () => {
    filterPlantsByName();
  });
}

document.addEventListener("DOMContentLoaded", loadUserData);
