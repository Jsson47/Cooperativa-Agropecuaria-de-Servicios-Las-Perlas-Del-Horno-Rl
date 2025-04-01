import { Link } from 'react-router-dom';

const AboutUsPage = () => {
  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-[300px] overflow-hidden">
        <img
          src="https://www.el19digital.com/files/articulos/329998.jpg"
          alt="Beehives"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">About Us</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">HONEY WINES AUSTRALIA MEADERY</h2>

          <div className="space-y-6">
            <p>
              We are an Australian meadery based in the Hunter Valley Region of NSW.
            </p>

            <p>
              Before starting Honey Wines Australia Meadery, we had been home brewing
              mead for over 10 years and beekeeping for 5 years. The honey we use is
              raw untreated honey produced from our own hives placed locally in the Hunter Region.
            </p>

            <p>
              We sell mead both wholesale and direct to the public through our online store.
              We also sell a wide range of Viking related merchandise such as drinking horns
              as we all know Viking products go hand in hand with mead.
            </p>

            <p>
              In July 2022 we have moved to the Broke NSW wine region of the Hunter Valley
              to open a shop front/cellar door.
            </p>

            <p>
              EDIT* Since Oct 2022 our beehives were euthanised with the varroa outbreak
              in the Hunter Region. Will start beekeeping again one day but will source
              honey from other local beekeepers outside the quarantine zone for the time
              being, however we will ensure any outsourced honey meets our specifications
              of quality and being raw and not heat treated.
            </p>

            <p className="text-gray-600">
              ABN: 58 685 728 412
            </p>
          </div>

          <div className="mt-8">
            <Link to="/buy-mead" className="btn-primary">Shop Now</Link>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="overflow-hidden rounded">
              <img
                src="https://www.el19digital.com/files/notas/source/2022/Junio/07Jun/esteli/COOPERATIVA_5.jpg"
                alt="Honey wines australia meadery"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded">
              <img
                src="https://www.el19digital.com/files/notas/source/2022/Junio/07Jun/esteli/COOPERATIVA_4.jpg"
                alt="Mead tasting amongst beehives"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded">
              <img
                src="https://www.el19digital.com/files/notas/source/2022/Junio/07Jun/esteli/COOPERATIVA_3.jpg"
                alt="Beekeeping"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded">
              <img
                src="https://ext.same-assets.com/3079580843/3792019027.jpeg"
                alt="Bees"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Have a question in mind?</h2>
          <p className="mb-6">We are happy to help you!</p>
          <Link to="/contact-us" className="btn-primary">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
