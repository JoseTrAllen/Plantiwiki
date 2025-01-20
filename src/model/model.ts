// Interface para una planta
export interface Plant {
  id: number;
  name: string;
  scientificName: string;
  description: string;
  lightRequirements: string;
  wateringFrequency: string;
  restPeriod: {
    hasRestPeriod: boolean;
    duration: string | null; // Puede ser null si no hay periodo de reposo
    conditions: string | null; // Puede ser null si no hay condiciones
  };
  soilType: string;
  lastWatered: string; // Fecha en formato ISO (YYYY-MM-DD)
  lastRepotted: string; // Fecha en formato ISO (YYYY-MM-DD)
  imageUrl: string;
}

// Interface para una planta guardada en el perfil del usuario
export interface SavedPlant {
  plantId: number; // ID de la planta correspondiente
  nickname: string; // Nombre personalizado
  lastWatered: string; // Fecha en formato ISO (YYYY-MM-DD)
  lastRepotted: string; // Fecha en formato ISO (YYYY-MM-DD)
  customNotes: string; // Notas personalizadas
}

// Interface para un usuario
export interface User {
  id: number;
  username: string;
  email: string;
  password: string; // En producción, asegúrate de no manejar contraseñas directamente
  photo: string;
  savedPlants: SavedPlant[]; // Lista de plantas guardadas
}
