export default function StaticImages() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">Our Work</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-2 rounded">
            <img src="/images/zbx-grid.jpeg" alt="ZBX" className="w-full h-auto" />
          </div>

          <div className="bg-white p-2 rounded">
            <img src="/images/ghostdrive-grid.jpeg" alt="Ghostdrive" className="w-full h-auto" />
          </div>

          <div className="bg-white p-2 rounded">
            <img src="/images/luxury-car-rental.png" alt="Luxury Car Rental" className="w-full h-auto" />
          </div>

          <div className="bg-white p-2 rounded">
            <img src="/images/superfuture-grid.jpeg" alt="VFX" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
