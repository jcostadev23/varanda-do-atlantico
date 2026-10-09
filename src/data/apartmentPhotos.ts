export type ApartmentPhoto = {
  fileName: string;
  imagePath: string;
  description: string;
};

export const apartmentPhotos: ApartmentPhoto[] = [
  {
    fileName: "ocean-view.jpg",
    imagePath: "/photos/ocean-view.jpg",
    description: "Atlantic view from the balcony at sunrise.",
  },
  {
    fileName: "living-room.jpg",
    imagePath: "/photos/living-room.jpg",
    description: "Living room with sofa, dining table, and balcony access.",
  },
  {
    fileName: "kitchen.jpg",
    imagePath: "/photos/kitchen.jpg",
    description: "Fully equipped kitchen with oven, hob, and coffee machine.",
  },
  {
    fileName: "bedroom.jpg",
    imagePath: "/photos/bedroom.jpg",
    description: "Main bedroom with wardrobe and blackout curtains.",
  },
  {
    fileName: "bathroom.jpg",
    imagePath: "/photos/bathroom.jpg",
    description: "Bathroom with shower, hair dryer, and towels.",
  },
  {
    fileName: "building-exterior.jpg",
    imagePath: "/photos/building-exterior.jpg",
    description: "Building exterior and pedestrian access to the apartment.",
  },
];
