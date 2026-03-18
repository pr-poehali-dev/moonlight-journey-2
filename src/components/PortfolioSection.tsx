const projects = [
  {
    id: 1,
    title: 'Жилой комплекс «Северный»',
    type: 'Многоквартирный дом',
    year: '2023',
    area: '4 200 м²',
    image: 'https://cdn.poehali.dev/projects/bc1b152c-60fd-4ba6-b3a0-b4c2e51e7ab8/files/443485ce-301e-4622-9f0d-58c12ce1f89b.jpg',
  },
  {
    id: 2,
    title: 'Коттедж в Подмосковье',
    type: 'Частный дом',
    year: '2023',
    area: '320 м²',
    image: 'https://cdn.poehali.dev/projects/bc1b152c-60fd-4ba6-b3a0-b4c2e51e7ab8/files/9fe39746-c995-4eb2-b63b-c3f398ee13e9.jpg',
  },
  {
    id: 3,
    title: 'Вилла «Лесная»',
    type: 'Коттедж с бассейном',
    year: '2022',
    area: '580 м²',
    image: 'https://cdn.poehali.dev/projects/bc1b152c-60fd-4ba6-b3a0-b4c2e51e7ab8/files/8a854257-aa0c-4754-9451-5b8ddc461632.jpg',
  },
  {
    id: 4,
    title: 'ЖК «Зелёный двор»',
    type: 'Жилой комплекс',
    year: '2022',
    area: '12 000 м²',
    image: 'https://cdn.poehali.dev/projects/bc1b152c-60fd-4ba6-b3a0-b4c2e51e7ab8/files/c4475e3e-2d15-4ce5-b6c5-bf977654b9d1.jpg',
  },
  {
    id: 5,
    title: 'Таунхаусы «Берёзовая роща»',
    type: 'Таунхаусы',
    year: '2021',
    area: '1 800 м²',
    image: 'https://cdn.poehali.dev/projects/bc1b152c-60fd-4ba6-b3a0-b4c2e51e7ab8/files/c195fb92-7408-4d44-81c7-a8cde4660321.jpg',
  },
  {
    id: 6,
    title: 'Дом в скандинавском стиле',
    type: 'Частный дом',
    year: '2021',
    area: '210 м²',
    image: 'https://cdn.poehali.dev/projects/bc1b152c-60fd-4ba6-b3a0-b4c2e51e7ab8/files/66de35e0-f32d-4f65-9c30-064b9d4f8313.jpg',
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-zinc-950 py-24 px-8 md:px-16">
      <div className="container mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-amber-400 text-sm tracking-[0.3em] uppercase font-medium">
              Наши работы
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-white mt-3">
              Реализованные<br />
              <span className="font-semibold">объекты</span>
            </h2>
          </div>
          <p className="text-white/50 max-w-xs text-sm leading-relaxed">
            Каждый проект — это доверие наших клиентов и высокие стандарты качества строительства
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden bg-zinc-900 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-amber-400 text-xs uppercase tracking-widest mb-1">{project.type}</p>
                <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                <div className="flex gap-4 mt-2">
                  <span className="text-white/60 text-xs">{project.year}</span>
                  <span className="text-white/60 text-xs">{project.area}</span>
                </div>
              </div>
              {/* Always visible label */}
              <div className="p-5 group-hover:opacity-0 transition-opacity duration-200">
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">{project.type}</p>
                <h3 className="text-white font-medium">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://vk.com/sohibol444"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-amber-400/50 hover:border-amber-400 text-amber-400 px-10 py-4 text-sm tracking-widest uppercase transition-colors"
          >
            Обсудить ваш проект
          </a>
        </div>

      </div>
    </section>
  );
}
