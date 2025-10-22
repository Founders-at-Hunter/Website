export default function WhatWeOffer() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* TODO: Add your "What We Offer" content here */}
        <h2 className="text-4xl font-bold text-center mb-12">What We Offer</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Offering 1</h3>
            <p>Description here</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Offering 2</h3>
            <p>Description here</p>
          </div>
          <div className="p-6 border rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Offering 3</h3>
            <p>Description here</p>
          </div>
        </div>
      </div>
    </section>
  );
}
