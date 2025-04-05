// app/scroll-snap/page.tsx (ruta en App Router)

const ScrollSnapPage = () => {
  return (
    <div className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
      <section className="h-screen flex items-center justify-center text-5xl text-white bg-red-500 snap-start">
        Vista 1
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
