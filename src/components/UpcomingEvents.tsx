"use client";

export default function UpcomingEvents() {
  const events = [
    { date: "November 4", name: "Club Kickoff" },
    { date: "November 13", name: "Vibe-Code & Deploy Workshop" },
    { date: "December 5", name: "Movie Night" },
    { date: "TBD", name: "Marketing Workshop" },
    { date: "TBD", name: "Case Study Night" },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden">
      {/* Main Frame - 1806 x 595 */}
      <div className="w-full max-w-[1806px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-[58px] xl:gap-[190px] items-stretch">
          {/* Left Content Group - Events Roadmap */}
          <div className="w-full lg:w-[778px] flex flex-col justify-start h-auto lg:h-[595px]">
            <h2 className="md:text-3xl text-2xl font-semibold text-gray-900 mb-1.5">
              Our Events:
            </h2>

            <p className="text-gray-600 md:text-lg font-light max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl leading-relaxed mb-6">
              Join us for an exciting lineup of events designed to help you grow
              as an entrepreneur.
            </p>

            {/* Event Roadmap - scrollable if needed */}
            <div className="space-y-2 sm:space-y-3 flex-1 overflow-y-auto">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all"
                >
                  <div className="flex-shrink-0 w-20 sm:w-24 lg:w-28">
                    <span className="text-xs sm:text-sm lg:text-base font-medium text-purple-600">
                      {event.date}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900">
                      {event.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Luma Event Embed */}
          <div className="w-full lg:w-auto lg:flex-1 lg:max-w-[838px] h-[450px] sm:h-[500px] lg:h-[595px] relative rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] overflow-hidden flex-shrink-0">
            <iframe
              src="https://luma.com/embed/event/evt-5dergvcwo80xjhg/simple"
              className="w-full h-full"
              style={{ border: "none" }}
              allow="fullscreen; payment"
              aria-hidden="false"
              tabIndex={0}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
