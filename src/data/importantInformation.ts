export type InformationSection = {
  title: string;
  description: string;
  tips: string[];
  source?: {
    label: string;
    link: string;
  };
};

export const importantInformation: InformationSection[] = [
  {
    title: "Hiking and Levadas",
    description:
      "Madeira offers beautiful walking trails, but some routes can be challenging and dangerous. Always plan your hike carefully.",
    tips: [
      "Check the official trail status and weather forecast before leaving.",
      "Check whether your chosen trail requires an advance reservation and fee.",
      "Wear suitable hiking shoes and bring enough water, food and warm clothing.",
      "Fog, strong winds, heavy rain and slippery paths can make hiking dangerous.",
      "Stay on marked paths and never enter closed trails.",
      "Tell someone where you are going and when you expect to return.",
      "Allow enough time to finish your hike before sunset.",
    ],
    source: {
      label: "Official hiking information",
      link: "https://visitmadeira.com/en/travel-info/useful-information/advice-to-walkers/",
    },
  },
  {
    title: "Mobile Network Coverage",
    description:
      "Mobile phone coverage is limited or unavailable in some mountainous and remote areas of Madeira.",
    tips: [
      "Download offline maps before leaving your accommodation.",
      "Do not rely on mobile data or GPS navigation requiring an internet connection.",
      "Save your route and important information before starting your journey.",
      "Tell someone your plans before entering areas without coverage.",
      "In an emergency, call 112. A connection may still be possible, depending on network availability.",
    ],
  },
  {
    title: "Mountain Weather and Fog",
    description:
      "Weather conditions in Madeira can change quickly. The coast may be sunny while the mountains are cold, windy or covered in thick fog.",
    tips: [
      "Check the forecast for your destination, not just your accommodation.",
      "Carry a waterproof jacket and warm layers.",
      "Avoid exposed mountain routes during strong winds or poor visibility.",
      "Never continue a hike if conditions become unsafe.",
      "Choose another activity if weather conditions make your planned route dangerous.",
    ],
    source: {
      label: "Madeira weather information",
      link: "https://visitmadeira.com/en/travel-info/useful-information/weather-in-madeira/",
    },
  },
  {
    title: "Rental Cars and Fuel",
    description:
      "If you have rented a car, plan ahead when returning it, especially if you have an early-morning flight.",
    tips: [
      "Many petrol stations open around 7:00 AM, but opening hours vary.",
      "If returning your car early, refuel the previous evening whenever possible.",
      "Check your rental agreement for its fuel-return policy.",
      "Returning a car without the required fuel level may result in additional charges.",
      "Check the route and distance to the nearest petrol station before your return.",
    ],
  },
  {
    title: "Driving in Madeira",
    description:
      "Madeira has steep roads, sharp bends, tunnels and narrow streets. Mountain roads can be particularly challenging for unfamiliar drivers.",
    tips: [
      "Drive slowly and adapt your speed to road conditions.",
      "Use a low gear when descending steep hills to help control your speed.",
      "Never stop in the middle of a road to take photographs.",
      "Allow extra travel time when driving through the mountains.",
      "Check road closures and weather conditions before heading to mountain viewpoints.",
      "Never drive after consuming alcohol.",
    ],
  },
  {
    title: "Sun Protection and Hydration",
    description:
      "Even when the weather feels cool or cloudy, the sun can be strong, particularly at higher altitudes and near the sea.",
    tips: [
      "Apply sunscreen and wear sunglasses.",
      "Carry drinking water, especially when hiking.",
      "Wear a hat during prolonged outdoor activities.",
      "Take breaks and avoid overexertion during hot weather.",
    ],
  },
  {
    title: "Ocean Safety",
    description:
      "Madeira's coastline is beautiful, but the Atlantic Ocean can have strong currents, waves and sudden changes in sea conditions.",
    tips: [
      "Swim only in suitable areas and follow local safety signs.",
      "Pay attention to lifeguard instructions and warning flags.",
      "Never underestimate waves, even when the sea appears calm.",
      "Avoid entering the water during dangerous sea conditions.",
      "Keep a safe distance from exposed coastal edges and slippery rocks.",
    ],
  },
  {
    title: "Respecting Nature",
    description:
      "Madeira's natural landscapes are precious and should be protected for future visitors.",
    tips: [
      "Take all rubbish back with you.",
      "Stay on marked trails and respect restricted areas.",
      "Do not pick plants or disturb wildlife.",
      "Avoid lighting fires or discarding cigarette ends.",
      "Respect signs, local residents and other visitors.",
    ],
    source: {
      label: "Responsible nature tourism",
      link: "https://visitmadeira.com/pt/explora-respeita-preserva/a-nossa-natureza/",
    },
  },
  {
    title: "Emergency Information",
    description:
      "Keep essential information accessible during your stay, especially when exploring remote parts of the island.",
    tips: [
      "European emergency number: 112.",
      "Save your accommodation address before heading out.",
      "Keep your phone charged when travelling or hiking.",
      "Share your plans with someone when visiting remote locations.",
      "If a route becomes unsafe, turn back rather than taking unnecessary risks.",
    ],
    source: {
      label: "Official visitor safety advice",
      link: "https://visitmadeira.com/en/travel-info/useful-information/advice-to-walkers/",
    },
  },
];
