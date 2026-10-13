import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-12 font-sans text-[#282828] bg-white">
      {/* Contact Title */}
      <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-10 text-[#282828]">
        Contact
      </h2>

      {/* Info Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
        {/* Phone */}
        <div className="md:col-span-7 bg-[#F1F3F4] rounded-2xl p-7 sm:p-8 flex flex-col justify-between">
          <span className="text-sm sm:text-base font-medium text-gray-500 mb-3">
            Phone
          </span>
          <a
            href="tel:+74993506604"
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#282828] hover:text-black transition"
          >
            +7 (499) 350-66-04
          </a>
        </div>

        {/* Socials */}
        <div className="md:col-span-5 bg-[#F1F3F4] rounded-2xl p-7 sm:p-8 flex flex-col justify-between">
          <span className="text-sm sm:text-base font-medium text-gray-500 mb-3">
            Socials
          </span>
          <div className="flex items-center gap-5">
            {/* Instagram SVG */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-[#282828] hover:opacity-75 transition"
            >
              <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* WhatsApp SVG */}
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="text-[#282828] hover:opacity-75 transition"
            >
              <svg className="w-8 h-8 sm:w-9 sm:h-9" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Address */}
        <div className="md:col-span-7 bg-[#F1F3F4] rounded-2xl p-7 sm:p-8 flex flex-col justify-between">
          <span className="text-sm sm:text-base font-medium text-gray-500 mb-3">
            Address
          </span>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#282828] leading-tight">
            Dubininskaya Ulitsa, 96, Moscow, Russia, 115093
          </p>
        </div>

        {/* Working Hours */}
        <div className="md:col-span-5 bg-[#F1F3F4] rounded-2xl p-7 sm:p-8 flex flex-col justify-between">
          <span className="text-sm sm:text-base font-medium text-gray-500 mb-3">
            Working Hours
          </span>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#282828]">
            24 hours a day
          </p>
        </div>
      </div>

      {/* Google Maps Iframe */}
      <div className="w-full h-80 sm:h-[400px] rounded-2xl overflow-hidden shadow-sm">
        <iframe
          title="Google Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2247.787680072836!2d37.63212877717466!3d55.71007797306857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b6aa0563467%3A0x6bfa33f9266782b5!2sDubininskaya%20Ulitsa%2C%2096%2C%20Moskva%2C%20Russia%2C%20115093!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </footer>
  );
}