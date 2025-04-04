import { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-[250px] overflow-hidden">
        <img
          src="https://radiolaprimerisima.s3.amazonaws.com/wp-content/uploads/2023/10/26154720/diosas1.jpg"
          alt="Hunter Valley Vineyard"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Contact Us</h1>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Address</h3>
                <p className="text-gray-700">
                  Managua<br />
                  Estelí
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Phone</h3>
                <p className="text-gray-700">
                  <a href="tel:50578841792" className="hover:text-primary">
                    78841792
                  </a>
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                <p className="text-gray-700">
                  Friday to Sunday: 10am - 4pm<br />
                  Or by appointment
                </p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 h-64 bg-gray-200 flex items-center justify-center rounded">
              <div className="text-center">
                <p className="text-gray-600 mb-2">El mapa se mostraría aquí</p>
                <a
                  href="https://www.google.com/maps/place/Estel%C3%AD/@13.0897248,-86.3813784,6675m/data=!3m2!1e3!4b1!4m6!3m5!1s0x8f718c42c00bc1ad:0x90de1ab352954a6f!8m2!3d13.0851139!4d-86.3630197!16zL20vMDNfMjRi?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Ver en Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-primary focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-primary focus:border-primary"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Visit Us Section */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Visítenos</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro velit provident voluptas culpa temporibus qui sit officia fugit! Ullam repellat consequatur distinctio tenetur quam iusto ducimus non ab? Quis, libero!
          </p>
          <Link to="/mead-tasting" className="inline-block border-2 border-white text-white px-6 py-2 rounded hover:bg-white hover:text-primary transition-colors">
            Book a Tasting
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
