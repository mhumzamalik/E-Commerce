import home from "../assets/home.jpg"

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-linear-to-b from-gray-800 to-gray-600">
      {/* Background image */}
      <img
        src={home}
        alt="Models"
        className="absolute inset-0 w-full h-full object-cover object-[50%_16%] opacity-70"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-gray-900/60 to-transparent"></div>

      {/* Text */}
      <div className="absolute bottom-1 w-full text-center text-white">
        <h2 className="text-4xl md:text-6xl font-bold tracking-widest animate-fadeIn">
          MONOCHROME MUST-HAVES
        </h2>
        <button className="mt-6 px-8 py-3 hover:underline text-2xl text-white uppercase tracking-wide cursor-pointer transition">
          SHOP NOW
        </button>
      </div>
    </section>
  );
}
