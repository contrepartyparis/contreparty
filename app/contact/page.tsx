export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">

      <div className="text-center space-y-6">

        <h1 className="text-5xl uppercase tracking-[0.2em]">
          Contact
        </h1>

        <a className="block border border-white px-6 py-3 hover:bg-white hover:text-black transition"
           href="mailto:booking@contrepartyparis.com">
          booking@contrepartyparis.com
        </a>

        <a className="block border border-white px-6 py-3 hover:bg-white hover:text-black transition"
           href="https://instagram.com/contreparty.paris">
          @contrepartyparis
        </a>

      </div>

    </main>
  )
}