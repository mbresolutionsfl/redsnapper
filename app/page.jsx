export const metadata = {
  title: "Red Snapper Realty",
  description: "Coastal living, expertly managed - Red Snapper Realty"
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Header */}
      <header className="bg-black shadow-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-red-600 font-extrabold text-4xl" style={{ fontFamily: 'Agency FB, Impact, sans-serif' }}>
            Red Snapper Realty
          </h1>

          <nav className="space-x-6 hidden md:block text-white">
            <a href="#about" className="hover:text-red-600">About</a>
            <a href="#services" className="hover:text-red-600">Services</a>
            <a href="#contact" className="hover:text-red-600">Contact</a>
          </nav>

          <a className="px-4 py-2 bg-red-700 hover:bg-red-800 text-white rounded-xl" href="mailto:mbresolutionsfl@gmail.com">Get in Touch</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-24 px-6 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')] bg-cover bg-center text-white">
        <div className="bg-black bg-opacity-40 p-10 rounded-xl inline-block">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Coastal Living, Expertly Managed
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Red Snapper Realty is a full-service brokerage along Florida’s east coast specializing in property management while helping buyers and sellers find their dream coastal homes.
          </p>
          <a className="px-4 py-2 bg-red-700 hover:bg-red-800 text-white rounded-xl inline-block" href="https://www.realtor.com/realestateandhomes-search/Volusia-County_FL" target="_blank" rel="noreferrer">
            View Available Homes
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 max-w-5xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-semibold text-red-700 mb-6">About Us</h3>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Based along Florida’s stunning east coast, Red Snapper Realty combines local market expertise with personalized service. We specialize in property management and offer comprehensive brokerage services for buyers and sellers who want to experience the best of coastal living.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-red-50 text-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-semibold text-red-700 mb-10">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 shadow-md rounded-xl bg-white">
              <div className="h-12 w-12 bg-red-700 rounded mb-4"></div>
              <h4 className="font-semibold text-xl mb-2">Property Management</h4>
              <p className="text-gray-600 text-sm">
                We manage coastal properties with care — from tenant placement and maintenance to financial oversight and owner reporting.
              </p>
            </div>

            <div className="p-6 shadow-md rounded-xl bg-white">
              <div className="h-12 w-12 bg-red-700 rounded mb-4"></div>
              <h4 className="font-semibold text-xl mb-2">Buying a Home</h4>
              <p className="text-gray-600 text-sm">
                Let us help you find your perfect coastal retreat. Our agents provide personalized guidance every step of the way.
              </p>
            </div>

            <div className="p-6 shadow-md rounded-xl bg-white">
              <div className="h-12 w-12 bg-red-700 rounded mb-4"></div>
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
        <a className="px-4 py-2 bg-red-700 hover:bg-red-800 text-white rounded-xl inline-block" href="mailto:mbresolutionsfl@gmail.com">
          Email Us
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-red-900 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Red Snapper Realty. All rights reserved.</p>
      </footer>
    </div>
  );
}
