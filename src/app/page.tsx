import { PhotoCarousel } from "@/components/PhotoCarousel";

export default function HomePage() {
  return (
    <main className="flex-1">
      <section className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-5 py-10 text-center sm:px-6 md:py-16">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          O seu refúgio na Ponta do Sol
        </h2>

        <div className="space-y-4 text-base leading-7 text-pretty text-gray-700 sm:text-lg sm:leading-8">
          <p>
            Entre o Atlântico e as montanhas da Madeira, a Varanda do Atlântico
            oferece o espaço ideal para quem procura tranquilidade, conforto e a
            verdadeira essência da ilha.
          </p>

          <p>
            Com cerca de 100 m², este apartamento privado dispõe de dois
            quartos, uma confortável sala de estar, cozinha totalmente equipada,
            casa de banho e uma agradável varanda/terraço onde pode simplesmente
            parar, respirar e apreciar a paisagem.
          </p>

          <p>
            A localização, na Ponta do Sol, permite desfrutar de uma das zonas
            mais soalheiras e encantadoras da Madeira, combinando a proximidade
            do mar com a natureza e a tranquilidade característica da costa sul.
          </p>

          <p>
            Depois de um dia a explorar a ilha, regresse a um espaço pensado
            para descansar, preparar uma refeição, apreciar o pôr do sol ou
            simplesmente desfrutar da vista.
          </p>

          <p>
            Wi-Fi gratuito, estacionamento privado e todo o conforto de uma casa
            só para si.
          </p>

          <p className="font-medium text-gray-900">
            Na Varanda do Atlântico, não queremos apenas que visite a Madeira.
            Queremos que a viva ao seu próprio ritmo.
          </p>
        </div>
      </section>

      <section className="w-full px-0 sm:px-4">
        <PhotoCarousel />
      </section>
    </main>
  );
}
