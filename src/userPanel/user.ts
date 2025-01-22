import {
  displayUserName,
  displayUserPhotoProfile,
  displayUserNamePlants,
  displayUserPlants,
} from "./ui";
import { fetchUsers } from "../api/usersApi";
import { fetchPlants } from "../api/plantsApi";

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
        displayUserNamePlants(user.savedPlants);
        displayUserPlants(plants, user.savedPlants);
      }
    } catch (e) {
      console.log(e);
    }
  }
};

document.addEventListener("DOMContentLoaded", loadUserData);
