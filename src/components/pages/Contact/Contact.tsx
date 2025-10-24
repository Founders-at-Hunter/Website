import NavMenu from "@/components/ui/NavMenu";
import Footer from "@/components/ui/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <NavMenu />

      {/* Contact Content */}
      <main className="flex-1 pt-24 pb-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center justify-items-center">
            {/* Left Side - Form */}
            <div className="w-full max-w-2xl">
              <h1 className="text-2xl sm:text-3xl md:text-[40px] font-semibold text-gray-900 mb-4 sm:mb-6 text-center px-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                Get in Touch:
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 text-center">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>

              {/* Contact Form */}
              <form className="space-y-4 sm:space-y-6">
                <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-none"
                placeholder="Your message..."
              />
            </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="w-[144px] h-[53px] text-sm sm:text-base text-white font-medium rounded-lg transition-colors hover:opacity-90"
                    style={{ backgroundColor: '#5F259F' }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

            {/* Right Side - Image */}
            <div className="hidden lg:flex w-full max-w-[782px] justify-center items-center">
              <div className="w-full aspect-[782/750] bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Hunter_College_North_Building.jpg/1024px-Hunter_College_North_Building.jpg"
                  alt="Hunter College North Building"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
