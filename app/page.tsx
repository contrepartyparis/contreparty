export default function ContrepartyHomepage() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 px-3 sm:px-4 md:px-8 py-4 md:py-8 flex justify-between items-center">

        <div className="uppercase tracking-[0.35em] md:tracking-[0.5em]">
          <div className="text-sm md:text-xl font-light">
            CONTREPARTY
          </div>

          <div className="text-[10px] md:text-xs tracking-[0.4em] md:tracking-[0.7em] mt-1 md:mt-2 text-zinc-500">
            PARIS
          </div>
        </div>

        <nav className="flex gap-3 sm:gap-5 md:gap-12 text-[9px] sm:text-[10px] md:text-sm uppercase tracking-[0.12em] sm:tracking-[0.18em] md:tracking-[0.3em] whitespace-nowrap">

          <a
            href="#events"
            className="hover:opacity-60 transition"
          >
            Events
          </a>

          <a
            href="#discover"
            className="hover:opacity-60 transition"
          >
            Découvrir
          </a>

          <a
            href="#contact"
            className="hover:opacity-60 transition"
          >
            Contact
          </a>

        </nav>
      </header>

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/736x/fa/4a/20/fa4a20e2fbfcc47e44831f2741591373.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 opacity-[0.04] mix-blend-screen bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        <div className="hidden md:block absolute left-10 top-1/2 -translate-y-1/2 rotate-[-90deg] tracking-[0.5em] text-xs uppercase text-zinc-500">
          Dj Set
        </div>

        <div className="hidden md:block absolute right-10 top-1/2 -translate-y-1/2 rotate-90 tracking-[0.5em] text-xs uppercase text-zinc-500">
          Collectif
        </div>

        <div className="relative z-10 text-center px-6">

          <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-[6rem] font-light tracking-[0.2em] md:tracking-[0.35em] uppercase">
            CONTREPARTY
          </h1>

          <div className="mt-3 text-[10px] md:text-sm tracking-[0.5em] md:tracking-[1em] uppercase text-zinc-400">
            PARIS
          </div>

          <div className="w-16 md:w-20 h-px bg-zinc-700 mx-auto my-8 md:my-10" />

          <p className="uppercase tracking-[0.15em] md:tracking-[0.25em] text-zinc-300 text-xs md:text-sm leading-relaxed">
            Collectif techno & house basé à Paris.
          </p>

        </div>
      </section>

      {/* EVENTS */}
      <section
        id="events"
        className="border-t border-white/10 py-16 md:py-24 px-4 md:px-16"
      >
        <div className="max-w-7xl mx-auto">

          <div className="flex justify-between items-end mb-14 md:mb-20">
            <div>
              <div className="uppercase tracking-[0.5em] text-xs text-zinc-500 mb-6">
                Prochains events
              </div>

              <h2 className="text-3xl md:text-5xl tracking-[0.15em] md:tracking-[0.2em] uppercase font-light">
                Upcoming
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-14 md:gap-10">

            {[
              {
                date: "24 MAI",
                year: "2025",
                title: "Contreparty invites",
                place: "Le Neuille, Paris",
              },
              {
                date: "14 JUIN",
                year: "2025",
                title: "Contreparty invites",
                place: "La Neuille, Paris",
              },
              {
                date: "05 JUIL",
                year: "2025",
                title: "Contreparty invites",
                place: "Neuille, Paris",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="border-l border-white/10 pl-5 md:pl-8"
              >
                <div className="text-2xl md:text-4xl tracking-[0.15em] md:tracking-[0.2em] uppercase font-light">
                  {event.date}
                </div>

                <div className="mt-4 text-zinc-500 tracking-[0.4em] md:tracking-[0.5em] text-[10px] md:text-xs">
                  {event.year}
                </div>

                <div className="mt-6 md:mt-8 text-xl md:text-3xl uppercase leading-tight tracking-[0.05em] md:tracking-[0.08em]">
                  {event.title}
                </div>

                <div className="mt-4 md:mt-6 text-zinc-400 text-sm md:text-lg">
                  {event.place}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section
        id="discover"
        className="border-t border-white/10 py-20 md:py-32 px-4 md:px-16"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">

          <div>
            <div className="uppercase tracking-[0.5em] text-xs text-zinc-500 mb-6">
              Le collectif
            </div>

            <h2 className="text-3xl md:text-6xl uppercase tracking-[0.08em] md:tracking-[0.15em] font-light leading-tight">
              Notre vision
            </h2>
          </div>

          <div className="text-zinc-300 text-base md:text-xl leading-relaxed">
            C’est à Paris, début 2026 que fleurit dans la dizaine de têtes que compte notre groupe d’amis le projet de créer un collectif à la fois frais, sobre et innovant. Chacun spécialisé dans un domaine précis, nous constituons une véritable armée de savoir-faire qui mène les soirées Contreparty à une explosion de saveurs et de grâce. En plaçant la musique électronique au centre du projet, nous invitons des djs mais pas seulement, chaque soirée est unique à travers les stands qui sont présents sur les lieux de celles-ci. Avec une direction artistique travaillée et pointue, chaque Contreparty fait voyager dans une ambiance différente à chaque fois. 
De la house de Chicago, en passant par le minimalisme berlinois jusqu’à la tech-house d’Ibiza, c’est sans effort que votre pied battra naturellement au rythme du bpm. 

Conçu par nous, pour tous. 

À très bientôt 
            

            <br />
            <br />

            
            
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <footer
        id="contact"
        className="border-t border-white/10 py-16 md:py-24 px-4 md:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">

          <div className="uppercase tracking-[0.5em] text-xs text-zinc-500 mb-6">
            Contact
          </div>

          <h2 className="text-3xl md:text-5xl uppercase tracking-[0.08em] md:tracking-[0.15em] font-light leading-tight">
            Booking & collaborations
          </h2>

          <div className="mt-10 md:mt-16 flex flex-col gap-5 md:gap-6 text-sm md:text-lg">

            <a
              href="mailto:contact@contrepartyparis.com"
              className="hover:opacity-60 transition break-all"
            >
              contact@contrepartyparis.com
            </a>

            <a
              href="https://instagram.com/contreparty.paris"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-60 transition uppercase tracking-[0.2em] md:tracking-[0.3em]"
            >
              Instagram
            </a>

          </div>
        </div>
      </footer>

    </main>
  )
}