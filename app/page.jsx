export default function Home() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Smooth scroll */}
      <style>{`html { scroll-behavior: smooth; }`}</style>

      {/* Header */}
      <header className="bg-black shadow-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1
            className="text-red-600 font-extrabold text-4xl"
            style={{ fontFamily: 'Agency FB, Impact, sans-serif' }}
          >
            Red Snapper Realty
          </h1>

          <nav className="space-x-6 hidden md:block text-white">
            <a href="#about" className="hover:text-red-600">About</a>
            <a href="#services" className="hover:text-red-600">Services</a>
            <a href="#contact" className="hover:text-red-600">Contact</a>
            <a href="tel:13862932321" className="hover:text-red-600">(386) 293-2321</a>
          </nav>

          <a
            className="px-4 py-2 bg-red-700 hover:bg-red-800 text-white rounded-xl"
            href="#contact"
          >
            Get in Touch
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-24 px-6 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')] bg-cover bg-center text-white">
        <div className="bg-black bg-opacity-40 p-10 rounded-xl inline-block">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Coastal Living, Expertly Managed
          </h2>

          <p className="text-lg max-w-2xl mx-auto mb-6">
            Red Snapper Realty is a full-service brokerage along Volusia County Florida’s east coast specializing in property management while helping buyers find their coastal dream homes, and also helping sellers with their next chapter. From Palm Coast to Oak Hill, and anywhere in between, you've found your one stop shop for residential real estate needs.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">

            <a
              className="px-4 py-2 bg-red-700 hover:bg-red-800 text-white rounded-xl inline-block"
              href="https://www.realtor.com/realestateandhomes-search/Volusia-County_FL"
              target="_blank"
              rel="noreferrer"
            >
              View Available Homes For Sale
            </a>

            <a
              className="px-4 py-2 bg-red-700 hover:bg-red-800 text-white rounded-xl inline-block"
              href="https://www.realtor.com/apartments/Volusia-County_FL"
              target="_blank"
              rel="noreferrer"
            >
              View Available Homes For Rent
            </a>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 max-w-5xl mx-auto px-6 text-center">
        <img
          src="/red-snapper-logonew.png"
          alt="Red Snapper Realty Logo"
          className="mx-auto mb-8 w-56 md:w-72 lg:w-80"
        />

        <h3 className="text-3xl font-semibold text-red-700 mb-6">
          About Us
        </h3>

        <p className="text-gray-400 max-w-3xl mx-auto">
          Based along Volusia County Florida’s stunning east coast, Red Snapper Realty combines local market expertise with personalized service. We specialize in property management and offer comprehensive brokerage services for buyers and sellers who want to experience the best of coastal living. Areas of concentration include Ormond Beach, Daytona Beach, Daytona Beach Shores, Ponce Inlet, Port Orange, New Smyrna Beach, Edgewater, and Oak Hill.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-red-50 text-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold text-red-700 mb-10">Our Services</h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 shadow-md rounded-xl bg-white">
              <div className="h-12 w-12 bg-red-700 rounded mb-4" />
              <h4 className="font-semibold text-xl mb-2">Property Management</h4>
              <p className="text-gray-600 text-sm">
                We manage coastal properties with care — from tenant placement and maintenance to financial oversight and owner reporting.
              </p>
            </div>

            <div className="p-6 shadow-md rounded-xl bg-white">
              <div className="h-12 w-12 bg-red-700 rounded mb-4" />
              <h4 className="font-semibold text-xl mb-2">Buying a Home</h4>
              <p className="text-gray-600 text-sm">
                Let us help you find your perfect coastal retreat. Our agents provide personalized guidance every step of the way.
              </p>
            </div>

            <div className="p-6 shadow-md rounded-xl bg-white">
              <div className="h-12 w-12 bg-red-700 rounded mb-4" />
              <h4 className="font-semibold text-xl mb-2">Selling Your Home</h4>
              <p className="text-gray-600 text-sm">
                From strategic marketing to expert negotiation, we make selling along Florida’s east coast smooth and rewarding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 max-w-5xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-semibold text-red-700 mb-6">Contact Us</h3>

        <p className="text-gray-400 mb-8">
          Have questions or ready to start your coastal real estate journey? We’d love to connect.
        </p>

        {/* Direct contact info */}
        <div className="mb-8 text-gray-300">
          <p>📍 100 East Granada Boulevard, Ormond Beach, Florida 32176</p>
          <p>
            📞 <a href="tel:13862932321" className="text-red-600">(386) 293-2321</a>
          </p>
        </div>

        <form
          action="https://formsubmit.co/04987e1454334b82bbf278a8f84009b0"
          method="POST"
          className="max-w-xl mx-auto flex flex-col gap-4 text-left"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="text" name="_honey" style={{ display: 'none' }} />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded bg-white text-black"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="p-3 rounded bg-white text-black"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number (Optional)"
            className="p-3 rounded bg-white text-black"
          />

          <textarea
            name="inquiry"
            placeholder="Your Inquiry"
            required
            className="p-3 rounded bg-white text-black h-32"
          />

          <button
            type="submit"
            className="px-4 py-2 bg-red-700 hover:bg-red-800 text-white rounded-xl"
          >
            Send Inquiry
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-red-900 text-white py-8 text-center">
        <p className="font-semibold">Red Snapper Realty</p>
        <p>100 East Granada Boulevard, Ormond Beach, Florida 32176</p>
        <p>(386) 293-2321</p>
        <p className="mt-2">
          &copy; {new Date().getFullYear()} Red Snapper Realty. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

