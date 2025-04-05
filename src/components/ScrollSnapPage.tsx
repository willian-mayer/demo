// app/scroll-snap/page.tsx (ruta en App Router)

import Hero from "./Hero";

const ScrollSnapPage = () => {
  return (
    <div className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
      <section className="h-screen flex items-center justify-center text-5xl text-white snap-start">
        <Hero />
      </section>
      <section className="h-screen flex items-center justify-center text-5xl text-white bg-blue-600 snap-start">
        Vista 2
      </section>
      <section className="h-screen flex items-center justify-center text-5xl text-white bg-green-600 snap-start">
        Vista 3
      </section>
    </div>
  );
};

export default ScrollSnapPage;
