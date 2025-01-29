import {
  displayUserName,
  displayUserPhotoProfile,
  displayUserNamePlants,
  displayUserPlants,
  displayTips,
} from "./ui";
import { fetchUsers } from "../api/usersApi";
import { fetchPlants } from "../api/plantsApi";
import { tip } from "./tips";
import { getIdCard } from "./uiModal";
import { displayNone } from "./displayNone";

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
        displayUserPhotoProfile(user);
        displayUserName(user);
        displayTips(tip);
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
  });
}

document.addEventListener("DOMContentLoaded", loadUserData);
