export default function UpcomingEvents() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        {/* TODO: Add your upcoming events content here */}
        <h2 className="text-4xl font-bold text-center mb-12">Upcoming Events</h2>
        <div className="space-y-6">
          <div className="p-6 bg-white border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Event 1</h3>
            <p className="text-gray-600">Date & Time</p>
            <p className="mt-2">Event description</p>
          </div>
          <div className="p-6 bg-white border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Event 2</h3>
            <p className="text-gray-600">Date & Time</p>
            <p className="mt-2">Event description</p>
          </div>
        </div>
      </div>
    </section>
  );
}
