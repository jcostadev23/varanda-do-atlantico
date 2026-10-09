export type LocalPlace = {
  name: string;
  details: string;
};

export type LocalUtilityCategory = {
  categoryName: string;
  places: LocalPlace[];
};

export const localUtilities: LocalUtilityCategory[] = [
  {
    categoryName: "Bars",
    places: [
      { name: "Barreirinha Bar Cafe", details: "Seafront bar in Funchal old town. Open late on weekends." },
      { name: "Vox", details: "Small cocktail bar near the marina. Reservations help on Friday nights." },
    ],
  },
  {
    categoryName: "Restaurants",
    places: [
      { name: "Armazem do Sal", details: "Portuguese dishes in a stone warehouse near the Funchal waterfront." },
      { name: "Restaurante do Forte", details: "Seafood with a view from Sao Tiago fortress." },
      { name: "O Regional", details: "Simple Madeiran plates such as espada and bolo do caco." },
    ],
  },
  {
    categoryName: "Supermarkets",
    places: [
      { name: "Pingo Doce", details: "Everyday groceries, fruit, and bakery. Several shops around Funchal and Canico." },
      { name: "Continente", details: "Larger supermarket for household items and a wider food range." },
    ],
  },
  {
    categoryName: "Hairdressers",
    places: [
      { name: "Salon Madeira", details: "Walk-in cuts in central Funchal. Call ahead on Saturdays." },
      { name: "Studio Cabelo Canico", details: "Local salon close to Canico. English spoken." },
    ],
  },
  {
    categoryName: "Petrol stations",
    places: [
      { name: "Galp", details: "Fuel, air, and a small shop on the main road toward Funchal." },
      { name: "Repsol", details: "24-hour pumps on the ER101. Pay at the night window after 22:00." },
    ],
  },
  {
    categoryName: "Cafes",
    places: [
      { name: "Cafe Relogio", details: "Coffee and pastel de nata in Funchal centre." },
      { name: "Mercearia da Poncha", details: "Daytime cafe with poncha later in the afternoon." },
    ],
  },
  {
    categoryName: "Bakeries",
    places: [
      { name: "Padaria da Ponte", details: "Fresh bread from 07:00. Bolo do caco sells out before lunch." },
      { name: "A Ponte Nova", details: "Pastries, sandwiches, and simple cakes for the beach." },
    ],
  },
];
