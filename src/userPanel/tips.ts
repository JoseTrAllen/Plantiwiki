const plantTips: string[] = [
  "Riega solo cuando el sustrato esté seco.",
  "Evita que el agua se acumule en el plato.",
  "Coloca las plantas cerca de ventanas con luz indirecta.",
  "Gira las macetas para un crecimiento uniforme.",
  "Elimina hojas secas o amarillas con regularidad.",
  "Usa sustrato adecuado para cada tipo de planta.",
  "Evita cambios bruscos de temperatura.",
  "Limpia las hojas para que respiren mejor.",
  "No todas las plantas necesitan fertilizante frecuente.",
  "Agrupa plantas según sus necesidades de humedad.",
  "Comprueba la humedad del sustrato con el dedo.",
  "Usa macetas con buen drenaje.",
  "Protege las plantas de corrientes de aire.",
  "Cuidado con el exceso de agua: es la causa más común de muerte.",
  "Trasplanta solo cuando sea necesario.",
  "Elige macetas proporcionales al tamaño de la planta.",
  "Usa agua a temperatura ambiente para regar.",
  "Investiga si tu planta necesita poda regular.",
  "Deja descansar a las plantas en invierno si tienen reposo.",
  "Revisa tus plantas para detectar plagas a tiempo.",
];

const random = Math.floor(Math.random() * plantTips.length);

export const tip = plantTips[random];
