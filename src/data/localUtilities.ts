export type UtilityCategory =
  | "cafe"
  | "restaurant"
  | "gym"
  | "supermarket"
  | "petrol";

export interface LocalUtility {
  name: string;
  category: UtilityCategory;
  location: string;
  description: string;
  url: string;
}

export const localUtilities: LocalUtility[] = [
  // Cafés
  {
    name: "Miminho",
    category: "cafe",
    location: "Ribeira Brava",
    description: "Bakery, pastries and coffee.",
    url: "https://www.miminho.eu/",
  },
  {
    name: "Flor do Vale",
    category: "cafe",
    location: "Ribeira Brava",
    description: "Bakery, pastry shop and café.",
    url: "https://www.flordovale.pt/",
  },
  {
    name: "Sun Spot Cafe",
    category: "cafe",
    location: "Ponta do Sol",
    description: "Café and restaurant by the sea.",
    url: "https://pontadosolsunspotcafe.com/",
  },
  {
    name: "Café Xavier",
    category: "cafe",
    location: "Ponta do Sol",
    description: "Traditional local café.",
    url: "https://www.google.com/maps/search/?api=1&query=Cafe+Xavier+Ponta+do+Sol",
  },

  // Restaurants
  {
    name: "Estação 8",
    category: "restaurant",
    location: "Ponta do Sol",
    description: "Local restaurant.",
    url: "https://www.google.com/maps/search/?api=1&query=Estacao+8+Ponta+do+Sol+Madeira",
  },
  {
    name: "Pizzaria Sol Doce",
    category: "restaurant",
    location: "Ponta do Sol",
    description: "Pizza, pasta and pastries.",
    url: "https://www.facebook.com/Pastelaria-Pizzaria-Sol-Doce-2067999886824691/",
  },
  {
    name: "Sabor Italiano",
    category: "restaurant",
    location: "Ponta do Sol",
    description: "Italian restaurant.",
    url: "https://www.google.com/maps/search/?api=1&query=Sabor+Italiano+Ponta+do+Sol",
  },
  {
    name: "Restaurante Sol Poente",
    category: "restaurant",
    location: "Ponta do Sol",
    description: "Restaurant by the seafront.",
    url: "https://www.google.com/maps/search/?api=1&query=Restaurante+Sol+Poente+Ponta+do+Sol",
  },

  // Gym
  {
    name: "Alex Sampaio Fitness Center",
    category: "gym",
    location: "Ponta do Sol",
    description: "Local fitness centre and gym.",
    url: "https://www.google.com/maps/search/?api=1&query=Alex+Sampaio+Fitness+Center+Ponta+do+Sol",
  },

  // Supermarkets
  {
    name: "Amanhecer Ponta do Sol",
    category: "supermarket",
    location: "Ponta do Sol",
    description: "Local supermarket for groceries and everyday essentials.",
    url: "https://www.google.com/maps/search/?api=1&query=Amanhecer+Ponta+do+Sol",
  },
  {
    name: "Amanhecer na Colina",
    category: "supermarket",
    location: "Canhas",
    description: "Local supermarket.",
    url: "https://www.google.com/maps/search/?api=1&query=Amanhecer+na+Colina+Canhas",
  },

  // Petrol stations
  {
    name: "Repsol",
    category: "petrol",
    location: "Ribeira Brava",
    description: "Fuel station and convenience shop.",
    url: "https://www.repsol.pt/localizador-estacoes-de-servico/ribeira-brava/sitio-da-murteira/",
  },
  {
    name: "Galp",
    category: "petrol",
    location: "Canhas",
    description: "Fuel station.",
    url: "https://www.google.com/maps/search/?api=1&query=Galp+Canhas+Madeira",
  },
  {
    name: "Serrão",
    category: "petrol",
    location: "Madeira",
    description: "Fuel station.",
    url: "https://serrao.pt/",
  },
];
