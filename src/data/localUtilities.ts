export type UtilityCategory =
  | "cafe"
  | "bakery"
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
  icons: string;
}

export const localUtilities: LocalUtility[] = [
  {
    name: "Miminho",
    category: "cafe",
    location: "Ribeira Brava",
    description: "Bakery, pastries and coffee.",
    url: "https://www.miminho.eu/",
    icons: "fi fi-rr-coffee",
  },
  {
    name: "A Confeitaria",
    category: "cafe",
    location: "Ribeira Brava",
    description: "Bakery, pastry shop and café.",
    url: "https://maps.app.goo.gl/B8sFcd66cS79ETUT6",
    icons: "fi fi-rr-bread-slice",
  },
  {
    name: "Sun Spot Cafe",
    category: "cafe",
    location: "Ponta do Sol",
    description: "Café and restaurant by the sea.",
    url: "https://pontadosolsunspotcafe.com/",
    icons: "fi fi-rr-coffee",
  },
  {
    name: "Café Xavier",
    category: "cafe",
    location: "Ponta do Sol",
    description: "Traditional local café.",
    url: "https://www.google.com/maps/search/?api=1&query=Cafe+Xavier+Ponta+do+Sol",
    icons: "fi fi-rr-coffee",
  },

  // Restaurants
  {
    name: "Estação 8",
    category: "restaurant",
    location: "Ponta do Sol",
    description: "Local restaurant.",
    url: "https://www.google.com/maps/search/?api=1&query=Estacao+8+Ponta+do+Sol+Madeira",
    icons: "fi fi-rr-restaurant",
  },
  {
    name: "Pizzaria Sol Doce",
    category: "restaurant",
    location: "Ponta do Sol",
    description: "Pizza, pasta and pastries.",
    url: "https://www.facebook.com/Pastelaria-Pizzaria-Sol-Doce-2067999886824691/",
    icons: "fi fi-rr-pizza-slice",
  },
  {
    name: "Sabor Italiano",
    category: "restaurant",
    location: "Ponta do Sol",
    description: "Italian restaurant.",
    url: "https://www.google.com/maps/search/?api=1&query=Sabor+Italiano+Ponta+do+Sol",
    icons: "fi fi-rr-pizza-slice",
  },
  {
    name: "Restaurante Sol Poente",
    category: "restaurant",
    location: "Ponta do Sol",
    description: "Restaurant by the seafront.",
    url: "https://www.google.com/maps/search/?api=1&query=Restaurante+Sol+Poente+Ponta+do+Sol",
    icons: "fi fi-rr-restaurant",
  },

  // Gym
  {
    name: "Alex Sampaio Fitness Center",
    category: "gym",
    location: "Ponta do Sol",
    description: "Local fitness centre and gym.",
    url: "https://www.google.com/maps/search/?api=1&query=Alex+Sampaio+Fitness+Center+Ponta+do+Sol",
    icons: "fi fi-rr-gym",
  },

  // Supermarkets
  {
    name: "Amanhecer Ponta do Sol",
    category: "supermarket",
    location: "Ponta do Sol",
    description: "Local supermarket for groceries and everyday essentials.",
    url: "https://www.google.com/maps/search/?api=1&query=Amanhecer+Ponta+do+Sol",
    icons: "fi fi-rr-shopping-basket",
  },
  {
    name: "Amanhecer na Colina",
    category: "supermarket",
    location: "Canhas",
    description: "Local supermarket.",
    url: "https://www.google.com/maps/search/?api=1&query=Amanhecer+na+Colina+Canhas",
    icons: "fi fi-rr-shopping-basket",
  },

  // Petrol stations
  {
    name: "Repsol",
    category: "petrol",
    location: "Ribeira Brava",
    description: "Fuel station and convenience shop.",
    url: "https://www.repsol.pt/localizador-estacoes-de-servico/ribeira-brava/sitio-da-murteira/",
    icons: "fi fi-rr-gas-pump",
  },
  {
    name: "Galp",
    category: "petrol",
    location: "Canhas",
    description: "Fuel station.",
    url: "https://www.google.com/maps/search/?api=1&query=Galp+Canhas+Madeira",
    icons: "fi fi-rr-gas-pump",
  },
  {
    name: "Serrão",
    category: "petrol",
    location: "Madeira",
    description: "Fuel station.",
    url: "https://serrao.pt/",
    icons: "fi fi-rr-gas-pump",
  },
];
