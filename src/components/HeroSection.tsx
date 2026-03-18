import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const images = [
  'https://cdn.poehali.dev/projects/bc1b152c-60fd-4ba6-b3a0-b4c2e51e7ab8/files/e3212a69-3588-45b8-b646-56bb856e4f33.jpg',
  'https://cdn.poehali.dev/projects/bc1b152c-60fd-4ba6-b3a0-b4c2e51e7ab8/files/b75ea9c4-98a4-451d-9a9a-8221958f8407.jpg',
  'https://cdn.poehali.dev/projects/bc1b152c-60fd-4ba6-b3a0-b4c2e51e7ab8/files/d1f74d3d-09ae-482e-8cd2-0fc780501671.jpg',
  'https://cdn.poehali.dev/projects/bc1b152c-60fd-4ba6-b3a0-b4c2e51e7ab8/files/52461b1a-cb29-46c4-b1b6-c1b6eb52c407.jpg',
];

const stats = [
  { value: '15+', label: 'лет на рынке' },
  { value: '300+', label: 'объектов сдано' },
  { value: '98%', label: 'в срок' },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />

      {/* Top nav */}
      <div
        className={cn(
          'absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-6 md:px-16 transform transition-all duration-700 ease-out',
          isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
        )}
      >
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-amber-500 flex items-center justify-center">
            <span className="text-black font-black text-lg">С</span>
          </div>
          <span className="text-white font-semibold text-lg tracking-wide">СтройДом</span>
        </div>
        <a
          href="tel:+79602976052"
          className="hidden md:block text-white/80 hover:text-white transition-colors text-sm tracking-widest uppercase border border-white/30 hover:border-white/60 px-5 py-2"
        >
          +7 960 297-60-52
        </a>
      </div>

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex max-w-2xl flex-col gap-10">

            {/* Tag */}
            <div
              className={cn(
                'transform transition-all duration-700 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <span className="text-amber-400 text-sm tracking-[0.3em] uppercase font-medium">
                Строительная компания
              </span>
            </div>

            {/* Heading */}
            <div
              className={cn(
                'transform transition-all duration-1000 delay-150 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <h1 className="text-5xl font-light text-white md:text-6xl lg:text-7xl leading-tight">
                Строим<br />
                <span className="font-semibold text-amber-400">надёжно.</span><br />
                Сдаём в срок.
              </h1>
            </div>

            {/* Description */}
            <div
              className={cn(
                'transform transition-all duration-1000 delay-300 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <p className="text-lg text-white/70 font-light max-w-md leading-relaxed">
                Жилые комплексы, коммерческая и промышленная недвижимость. Полный цикл — от проекта до сдачи ключей.
              </p>
            </div>

            {/* CTA */}
            <div
              className={cn(
                'flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-500 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <a
                href="https://t.me/sohibol"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-500 hover:bg-amber-400 text-black font-semibold px-8 py-4 text-sm tracking-widest uppercase transition-colors inline-block text-center"
              >
                Получить консультацию
              </a>
              <a
                href="#portfolio"
                className="border border-white/40 hover:border-white/80 text-white px-8 py-4 text-sm tracking-widest uppercase transition-colors inline-block text-center"
              >
                Наши объекты
              </a>
            </div>

            {/* Stats */}
            <div
              className={cn(
                'flex gap-10 pt-4 transform transition-all duration-1000 delay-700 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="text-3xl font-semibold text-amber-400">{stat.value}</span>
                  <span className="text-xs text-white/50 uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-1 transition-all duration-300',
              currentIndex === index ? 'w-12 bg-amber-400' : 'w-8 bg-white/30 hover:bg-white/50'
            )}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}