import { Plant } from "../model/model";

const plantsApi = "https://67895c042c874e66b7d88056.mockapi.io/api/v1/plants";

export const fetchPlants = async (): Promise<Plant[]> => {
  try {
    const response = await fetch(plantsApi);
    const data = await response.json();
    const plants: Plant[] = data[0].plants;
    return plants;
  } catch (error) {
    throw new Error("La llamada ha fallado");
  }
};
