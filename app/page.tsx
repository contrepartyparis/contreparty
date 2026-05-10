export default function ContrepartyHomepage() {
  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 px-8 py-8 flex justify-between items-start">

        <div className="uppercase tracking-[0.5em]">
          <div className="text-xl font-light">
            CONTREPARTY
          </div>

          <div className="text-xs tracking-[0.7em] mt-2 text-zinc-500">
            PARIS
          </div>
        </div>

        <nav className="flex gap-12 text-sm uppercase tracking-[0.3em]">

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

        <div className="absolute left-10 top-1/2 -translate-y-1/2 rotate-[-90deg] tracking-[0.5em] text-xs uppercase text-zinc-500">
          Dj Set
        </div>

        <div className="absolute right-10 top-1/2 -translate-y-1/2 rotate-90 tracking-[0.5em] text-xs uppercase text-zinc-500">
          Collectif
        </div>

        <div className="relative z-10 text-center px-6">

          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-light tracking-[0.35em] uppercase">
            CONTREPARTY
          </h1>

          <div className="mt-4 text-sm tracking-[1em] uppercase text-zinc-400">
            PARIS
          </div>

          <div className="w-20 h-px bg-zinc-700 mx-auto my-10" />

          <p className="uppercase tracking-[0.25em] text-zinc-300 text-sm">
            Collectif techno & house basé à Paris.
          </p>

        </div>
      </section>

      {/* EVENTS */}
      <section
        id="events"
        className="border-t border-white/10 py-24 px-8 md:px-16"
      >
        <div className="max-w-7xl mx-auto">

          <div className="flex justify-between items-end mb-20">
            <div>
              <div className="uppercase tracking-[0.5em] text-xs text-zinc-500 mb-6">
                Prochains events
              </div>

              <h2 className="text-5xl tracking-[0.2em] uppercase font-light">
                Upcoming
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">

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
                className="border-l border-white/10 pl-8"
              >
                <div className="text-4xl tracking-[0.2em] uppercase font-light">
                  {event.date}
                </div>

                <div className="mt-4 text-zinc-500 tracking-[0.5em] text-xs">
                  {event.year}
                </div>

                <div className="mt-8 text-3xl uppercase leading-tight tracking-[0.08em]">
                  {event.title}
                </div>

                <div className="mt-6 text-zinc-400 text-lg">
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
        className="border-t border-white/10 py-32 px-8 md:px-16"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

          <div>
            <div className="uppercase tracking-[0.5em] text-xs text-zinc-500 mb-6">
              Le collectif
            </div>

            <h2 className="text-5xl md:text-6xl uppercase tracking-[0.15em] font-light leading-tight">
              Notre vision
            </h2>
          </div>

          <div className="text-zinc-300 text-xl leading-relaxed">
            Contreparty est un collectif parisien réunissant des artistes
            passionnés par la culture underground.

            Notre mission : créer des expériences immersives entre techno,
            house et esthétique nocturne.
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <footer
        id="contact"
        className="border-t border-white/10 py-24 px-8"
      >
        <div className="max-w-4xl mx-auto text-center">

          <div className="uppercase tracking-[0.5em] text-xs text-zinc-500 mb-6">
            Contact
          </div>

          <h2 className="text-5xl uppercase tracking-[0.15em] font-light leading-tight">
            Booking & collaborations
          </h2>

          <div className="mt-16 flex flex-col gap-6 text-lg">

            <a
              href="mailto:contact@contrepartyparis.com"
              className="hover:opacity-60 transition"
            >
              contact@contrepartyparis.com
            </a>

            <a
              href="https://instagram.com/contreparty.paris"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-60 transition uppercase tracking-[0.3em]"
            >
              Instagram
            </a>

          </div>
        </div>
      </footer>

    </main>
  )
}