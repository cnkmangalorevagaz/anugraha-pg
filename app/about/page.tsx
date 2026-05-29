"use client";

import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function About() {

  const amenities = [
    "Comfortable Beds",
    "Free WiFi",
    "Pure Veg Food",
    "Daily Cleaning",
    "24/7 Security",
    "Hot Water",
    "Power Backup",
    "Free Ironing",
    "Laundry (Extra Cost)",
    "2 Wheeler Parking",
    "Auto Facility at Gate",
    "Peaceful Environment",
  ];

  const rules = [
    "Maintain cleanliness in rooms",
    "No loud music after 10 PM",
    "Visitors only in common area",
    "Rent must be paid on time",
    "Respect other residents",
    "Smoking strictly prohibited",
    "Alcohol not allowed",
    "Switch off lights while leaving",
    "Keep washrooms clean",
    "Inform management before leaving station",
    "Avoid food wastage",
    "Damages must be reported immediately",
    "Use water responsibly",
    "Entry timings must be followed",
    "Proper ID proof required",
  ];

 return (

  <div className="bg-white min-h-screen overflow-hidden">

    <Navbar />

    {/* HERO SECTION */}
    <div className="relative h-[45vh] md:h-[60vh] overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src="/images/aboutus.png"
        alt="About Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      

    </div>



    {/* ABOUT SECTION */}
    <div className="px-5 md:px-16 py-16 md:py-24 grid md:grid-cols-2 gap-12 md:gap-20 items-center max-w-7xl mx-auto">

      {/* TEXT */}
      <div>

        {/* SMALL TITLE */}
        <p className="text-[#D4AF37] uppercase tracking-[4px] text-sm font-medium">
          Anugraha PG - SINCE 2010
        </p>

        {/* MAIN HEADING */}
        <h2 className="text-4xl md:text-6xl font-serif leading-tight text-[#111827] mt-4">

          A Peaceful & Trusted <br />
          Stay for Girls

        </h2>

        {/* PARA 1 */}
        <p className="mt-7 text-[#4B5563] text-[15px] sm:text-base leading-8 text-justify">

          Anugraha PG is recognized as one of the trusted and well reputed
          girl’s hostel accommodations in Mangalore, providing a safe,
          hygienic and comfortable living environment exclusively for girls
          and working women.
          Since 2010, we have been committed to creating a peaceful and
          homely atmosphere where residents can feel secure, comfortable
          and cared for throughout their stay.

        </p>

        {/* PARA 3 */}
        <p className="mt-5 text-[#4B5563] text-[15px] sm:text-base leading-8 text-justify">

          Our hostel is well known for its cleanliness, caring management,
          purified drinking water and delicious home-made pure vegetarian
          food prepared fresh every day. Located in the heart of Mangalore,
          Anugraha PG offers convenient access to colleges, workplaces,
          supermarkets and public transport.

        </p>

        {/* CTA */}
        <a
          href="https://wa.me/918050555222?text=Hello%20Anugraha%20PG,%0AI%20would%20like%20to%20enquire%20about%20room%20availability,%20facilities%20and%20pricing."
          target="_blank"
          className="inline-flex items-center gap-2 mt-10 bg-[#D4AF37] text-black px-8 py-4 rounded-full hover:scale-105 transition duration-300 shadow-xl font-semibold"
        >
          Enquire Now →
        </a>

      </div>

      {/* IMAGE */}
      <div className="relative">

        {/* GOLD BG */}
        <div className="absolute -top-5 -left-5 w-full h-full rounded-[35px] bg-[#D4AF37]/10"></div>

        {/* IMAGE */}
        <div className="relative overflow-hidden rounded-[35px] shadow-2xl border border-[#D4AF37]/10">

          <img
            src="/images/about.png"
            alt="About"
            className="w-full h-[350px] md:h-[650px] object-cover hover:scale-105 transition duration-700"
          />

        </div>

      </div>

    </div>



    {/* FEATURES */}
    <div className="-mt-20 bg-white py-20 px-5 md:px-16">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center">

          <p className="text-[#D4AF37] uppercase tracking-[4px] text-sm font-medium">
            Why Anugraha PG
          </p>

          <h2 className="text-4xl md:text-6xl font-serif text-[#111827] mt-4">
            More Than Just A Hostel Stay
          </h2>

          <p className="mt-5 text-gray-500 max-w-2xl mx-auto leading-8 text-sm md:text-base">
            Experience peaceful and comfortable living designed exclusively
            for Girls with safety, hygiene and homely care at its core.
          </p>

        </div>

        {/* FEATURE SECTION */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">

          {/* LEFT BIG CARD */}
          <div className="bg-[#faf8f5] rounded-[40px] p-10 border border-[#D4AF37]/10">

            <p className="text-[#D4AF37] tracking-[4px] uppercase text-sm">
              Safe Living
            </p>

            <h3 className="text-3xl md:text-4xl font-serif text-[#111827] mt-4 leading-tight">
              Secure & Peaceful
              Environment
            </h3>

            <p className="mt-6 text-gray-600 leading-8 text-sm md:text-base">
              24 hour security, peaceful atmosphere and caring management
              ensure every resident feels safe, comfortable and at home.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">

              <span className="px-4 py-2 rounded-full bg-white text-sm border border-[#D4AF37]/20">
                24 Hr Security
              </span>

              <span className="px-4 py-2 rounded-full bg-white text-sm border border-[#D4AF37]/20">
                CCTV Monitoring
              </span>

              <span className="px-4 py-2 rounded-full bg-white text-sm border border-[#D4AF37]/20">
                Homely Atmosphere
              </span>

            </div>

          </div>

          {/* RIGHT GRID */}
          <div className="grid grid-cols-2 gap-6">

            {/* ITEM */}
            <div className="bg-white rounded-[30px] border border-gray-100 p-7 hover:shadow-xl transition duration-300">

              <div className="text-4xl">🍲</div>

              <h3 className="mt-5 text-[#D4AF37] uppercase tracking-[2px] text-sm font-medium">
  Pure <span className="text-[#4CAF50]">Veg</span> Dining
</h3>

              <p className="mt-3 text-gray-500 text-sm leading-7">
                Fresh home-made vegetarian food prepared daily.
              </p>

            </div>

            {/* ITEM */}
            <div className="bg-white rounded-[30px] border border-gray-100 p-7 hover:shadow-xl transition duration-300">

              <div className="text-4xl">⚡</div>

              <h3 className="mt-5 text-[#D4AF37] uppercase tracking-[2px] text-sm font-medium">
                Power Backup
              </h3>

              <p className="mt-3 text-gray-500 text-sm leading-7">
                24 hour uninterrupted power support facility.
              </p>

            </div>

            {/* ITEM */}
            <div className="bg-white rounded-[30px] border border-gray-100 p-7 hover:shadow-xl transition duration-300">

              <div className="text-4xl">🚿</div>

              <h3 className="mt-5 text-[#D4AF37] uppercase tracking-[2px] text-sm font-medium">
                Water Supply
              </h3>

              <p className="mt-3 text-gray-500 text-sm leading-7">
                Continuous 24 hour water supply facility.
              </p>

            </div>

            {/* ITEM */}
            <div className="bg-white rounded-[30px] border border-gray-100 p-7 hover:shadow-xl transition duration-300">

              <div className="text-4xl">🏠</div>

              <h3 className="mt-5 text-[#D4AF37] uppercase tracking-[2px] text-sm font-medium">
                Homely Stay
              </h3>

              <p className="mt-3 text-gray-500 text-sm leading-7">
                Comfortable environment with caring management.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>



    {/* AMENITIES */}
    <div className="bg-[#faf8f5] py-20 px-5 md:px-16">

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center">

          <p className="text-[#D4AF37] uppercase tracking-[4px] text-sm font-medium">
            Premium Facilities
          </p>

          <h2 className="text-4xl md:text-6xl font-serif text-[#111827] mt-4">
            Amenities
          </h2>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-16">

  {[
    
    ["🚿", "Attached Bathroom"],
    ["📶", "Free WiFi"],
    ["⚡", "Power Backup"],
    ["🚰", "24 Hr Water"],
    ["🛵", "Parking Space"],
    ["🧺", "Laundry (Charges Extra)"],
    ["🔐", "24 Hr Security"],
    ["🍽️", "Pure Veg Food"],
    ["🌿", "Peaceful Stay"],
    ["🧹", "Daily Cleaning"],
    ["🏠", "Homely Atmosphere"],
    ["📍", "Prime Location"],
    ["☕", "Hot Water"],
    ["🪑", "Furnished Rooms"],
  ].map((item, i) => (

    <div
      key={i}
      className="bg-white rounded-[24px] p-5 border border-[#D4AF37]/10 hover:shadow-lg hover:-translate-y-1 transition duration-300"
    >

      {/* ICON */}
      <div className="w-12 h-12 rounded-xl bg-[#faf8f5] flex items-center justify-center text-xl">

        {item[0]}

      </div>

      {/* TEXT */}
      <h3 className="mt-4 text-[#111827] font-medium text-sm leading-6">
        {item[1]}
      </h3>

    </div>

  ))}



        </div>

      </div>

    </div>



    {/* CTA SECTION */}
    <div className="relative mx-5 md:mx-16 my-20 overflow-hidden rounded-[40px]">

      {/* BACKGROUND IMAGE */}
      <img
        src="/images/contactaboutus.png"
        alt="Contact"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT */}
      <div className="relative z-10 py-20 px-6 text-center text-white">

        <p className="text-[#D4AF37] uppercase tracking-[4px] text-sm font-medium">
          Contact Us
        </p>

        <h2 className="text-4xl md:text-6xl font-serif mt-4 leading-tight">
          Looking For A Safe <br />
          & Comfortable Stay?
        </h2>

        <p className="mt-6 text-white/80 max-w-2xl mx-auto text-sm md:text-base leading-8">
          Experience peaceful living with premium facilities,
          pure vegetarian dining and a homely atmosphere
          at Anugraha PG.
        </p>

        {/* BUTTON */}
        <a
          href="https://wa.me/918050555222?text=Hello%20Anugraha%20PG,%0AI%20would%20like%20to%20enquire%20about%20room%20availability,%20facilities%20and%20pricing."
          target="_blank"
          className="inline-flex items-center gap-2 mt-10 bg-[#D4AF37] text-black px-8 py-4 rounded-full hover:scale-105 transition duration-300 shadow-xl font-semibold"
        >
          Enquire Now →
        </a>

      </div>

    </div>
<Footer />
<a
            href="https://wa.me/918050555222?text=Hello%20Anugraha%20PG,%0AI%20would%20like%20to%20enquire%20about%20room%20availability,%20facilities%20and%20pricing."

  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-5 z-50"
>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
    alt="WhatsApp"
    className="w-14 h-14 hover:scale-110 transition duration-300 drop-shadow-2xl"
  />
</a>
  </div>

);
}