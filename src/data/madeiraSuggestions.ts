export type MadeiraSuggestion = {
  title: string;
  description: string;
  source: { label: string; link: string };
};

export const madeiraSuggestions: MadeiraSuggestion[] = [
  {
    title: "Hikes and Levadas",
    description:
      "Explore the nature of Madeira through its famous levadas. Levada das 25 Fontes offers a moderately difficult hike of approximately 8.6 km in total, while Levada do Caldeirão Verde crosses the lush Laurissilva Forest. Wear suitable footwear and always check trail conditions before setting out.",
    source: {
      label: "Discover the hikes",
      link: "https://visitmadeira.com/pt/o-que-fazer/exploradores-da-natureza/atividades/caminhadas/pr-6-levada-das-25-fontes/",
    },
  },
  {
    title: "Fanal",
    description:
      "Discover one of Madeira's most magical landscapes, known for its centuries-old trees and the mysterious atmosphere of the Laurissilva Forest. When foggy, the landscape becomes especially enchanting. It is an ideal place to walk, take photographs, and enjoy the tranquillity of nature.",
    source: {
      label: "Discover Fanal",
      link: "https://www.visitmadeira.com/pt/o-que-fazer/exploradores-da-natureza/floresta-laurissilva/fanal/",
    },
  },
  {
    title: "Cascata dos Anjos",
    description:
      "One of the best-known places in Ponta do Sol, where water runs down the hillside to the old road beside the sea. However, access is currently prohibited by the authorities due to the risk of landslides and accidents. Follow all safety signs and choose other safe places to enjoy Madeira's waterfalls.",
    source: {
      label: "Check safety notices",
      link: "https://visitmadeira.com/pt/onde-ir/madeira/cascata-dos-anjos/",
    },
  },
  {
    title: "Funchal Cable Car",
    description:
      "Travel from central Funchal to Monte by cable car and enjoy panoramic views over the city, bay, and mountains. In Monte, you can visit the Monte Palace Tropical Garden and the Church of Nossa Senhora do Monte.",
    source: {
      label: "Information and tickets",
      link: "https://madeiracablecar.com/",
    },
  },
  {
    title: "Sunset in Ponta do Sol",
    description:
      "End the day by the sea in the village of Ponta do Sol. The small beach and seafront offer a beautiful setting for watching the colours of the sunset over the Atlantic. Arrive a little earlier to walk around the village and enjoy its peaceful atmosphere.",
    source: {
      label: "Discover Ponta do Sol",
      link: "https://visitmadeira.com/pt/onde-ir/madeira/costa-oeste/ponta-do-sol/",
    },
  },
  {
    title: "Sunrise at Bica da Cana",
    description:
      "Start the day with stunning views over Madeira's mountains from the Bica da Cana viewpoint, located at approximately 1,580 metres above sea level. On favourable days, you may see the sun rise above a sea of clouds. Bring warm clothing and check the weather conditions before setting out.",
    source: {
      label: "Discover Bica da Cana",
      link: "https://visitmadeira.com/pt/o-que-fazer/exploradores-da-natureza/miradouros/miradouro-da-bica-da-cana/",
    },
  },
  {
    title: "Bolo do Caco Workshop at Casa da Nati",
    description:
      "Experience Madeira's traditions authentically through a Bolo do Caco workshop at the home of a local family in Canhas, Ponta do Sol. Learn how to prepare the traditional bread, cook it by hand, and finish the experience around the table with local flavours and stories from Madeira.",
    source: {
      label: "Discover the experience",
      link: "https://www.casadanati.com/pt",
    },
  },
];
