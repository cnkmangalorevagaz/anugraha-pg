"use client";
import { useState, useEffect } from "react";
import RoomSection from "../components/RoomSection";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import Link from "next/link";
 
export default function Home() {
const [showPopup, setShowPopup] = useState(false);

useEffect(() => {
  const hasSeenPopup = sessionStorage.getItem("popupSeen");

  if (!hasSeenPopup) {
    setShowPopup(true);
  }
}, []);

const closePopup = () => {
  sessionStorage.setItem("popupSeen", "true");
  setShowPopup(false);
};

  return (
    <div>
      {showPopup && (
  <div className="fixed inset-0 bg-black/60 z-[9999] flex items-center justify-center px-3">

    <div className="relative bg-white w-full max-w-4xl rounded-md shadow-2xl px-6 md:px-12 py-8 md:py-12">

      {/* Close Button */}
      <button
        onClick={closePopup}
        className="absolute -top-3 -right-3 w-9 h-9 bg-black text-white rounded-full text-xl"
      >
        ×
      </button>

      {/* Heading */}
      <h2 className="text-center text-[#D4AF37] text-2xl md:text-4xl font-semibold mb-5 md:mb-4">
        IMPORTANT NOTICE
      </h2>

      {/* Content */}
      <div className="max-w-3xl mx-auto text-center text-gray-600 leading-6 md:leading-8">

        <p className="text-sm md:text-base">
          Room availability and admission details are provided only through
          direct contact with Anugraha PG.
        
          Please do not make any advance payment to agents, brokers or third
          parties claiming to represent us.
        </p>

         <p className="text-sm md:text-base">
          For official information, please contact us directly at
          
          +91 8050 555 222
        </p>

      </div>

    </div>

  </div>
)}

     <Navbar />
{/* HERO SECTION */}
<div className="relative h-[92vh] md:h-screen w-full overflow-hidden z-0 bg-white pb-32">
  {/* BACKGROUND VIDEO */}
  <video
    autoPlay
    muted
    loop
    playsInline
    webkit-playsinline="true"
    preload="auto"
    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
  >
    <source src="/videos/v1.MP4" type="video/mp4" />
  </video>

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none"></div>

  {/* CONTENT */}
<div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-5 z-10 pointer-events-none">
    {/* MAIN TITLE */}
    <h1 className="text-5xl sm:text-6xl md:text-8xl font-semibold tracking-wide text-white font-serif">
  Anugraha
</h1>

{/* LINE + SUBTITLE */}
<div className="flex items-center gap-3 mt-3">

  <div className="w-10 md:w-16 h-[1px] bg-gray-300"></div>

  <p className="text-sm sm:text-base md:text-xl uppercase tracking-[5px] text-gray-200 font-light">
    PG FOR GIRLS
  </p>

  <div className="w-10 md:w-16 h-[1px] bg-gray-300"></div>

</div>

{/* TAGLINE */}
<p className="mt-4 text-sm sm:text-base md:text-lg text-gray-200 max-w-xl leading-relaxed font-light">
  Safety & Comfort, Crafted For Her
</p>

    </div>
</div>
{/* FLOATING FEATURE BOX */}
<div className="relative z-30 -mt-20 md:-mt-16 px-4">
  <div className="max-w-6xl mx-auto bg-white/95 backdrop-blur-md shadow-2xl rounded-3xl px-5 py-6 md:px-10 md:py-8">

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">

      {/* ITEM 1 */}
      <div className="flex items-center gap-4">

        <img
          src="/images/feature1.png"
          alt="Healthy Food"
          className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover shadow-md"
        />

        <div>

          <h3 className="text-[#c6a16e] uppercase tracking-[3px] text-xs font-medium">
            Pure Veg Food
          </h3>

          <p className="text-sm text-gray-500 leading-relaxed">
            Fresh & hygienic meals everyday
          </p>

        </div>

      </div>

      {/* ITEM 2 */}
      <div className="flex items-center gap-4">

        <img
          src="/images/feature2.png"
          alt="WiFi"
          className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover shadow-md"
        />

        <div>

          <h3 className="text-[#c6a16e] uppercase tracking-[3px] text-xs font-medium">
            High Speed WiFi
          </h3>

          <p className="text-sm text-gray-500 leading-relaxed">
            Fast & seamless internet access
          </p>

        </div>

      </div>

      {/* ITEM 3 */}
      <div className="flex items-center gap-4">

        <img
          src="/images/feature3..png"
          alt="Security"
          className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover shadow-md"
        />

        <div>

          <h3 className="text-[#c6a16e] uppercase tracking-[3px] text-xs font-medium">
            24/7 Security
          </h3>

          <p className="text-sm text-gray-500 leading-relaxed">
            Safe & secure living environment
          </p>

        </div>

      </div>

    </div>

  </div>
 {/* FEATURE BOX END */}

</div>

      <div className="mt-2">

        {/* ABOUT SECTION */}
<div className="bg-white py-14 md:py-20 px-4 md:px-8 lg:px-16">

  {/* ABOUT SECTION */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

    {/* LEFT - IMAGES */}
    <div className="grid grid-cols-2 gap-4 md:gap-6">

      {/* IMAGE 1 */}
      <Link href="/about">

        <img
          src="/images/room1.jpeg"
          alt="Room"
          className="rounded-2xl h-52 sm:h-64 md:h-80 w-full object-cover cursor-pointer hover:scale-105 transition duration-300 shadow-lg"
        />

      </Link>

      {/* IMAGE 2 */}
      <Link href="/about">

        <img
          src="/images/hall2.jpeg"
          alt="Hall"
          className="rounded-2xl h-52 sm:h-64 md:h-80 w-full object-cover mt-8 md:mt-14 cursor-pointer hover:scale-105 transition duration-300 shadow-lg"
        />

      </Link>

    </div>

    {/* RIGHT - TEXT */}
    <div className="text-center md:text-left">

  {/* SMALL TITLE */}
  <p className="text-[#D4AF37] uppercase tracking-[4px] text-sm font-medium">
    Welcome to Anugraha PG
  </p>

  {/* MAIN HEADING */}
  <h2 className="text-[34px] sm:text-5xl md:text-[39px] font-serif mt-4 leading-tight text-[#111827]">

    A Trusted Stay for <span className="text-[#D4AF37]">Girls</span> <br className="hidden md:block" />
    in Mangalore

  </h2>

  {/* DESCRIPTION */}
  <p className="mt-6 text-[#4B5563] text-[15px] sm:text-base leading-8 max-w-2xl text-justify mx-auto md:mx-0">

    Anugraha PG is recognized as one of the well reputed hostel service providers
    in Mangalore, offering safe, hygienic, and comfortable accommodation exclusively
    for women. Since 2010, we have been committed to providing a peaceful and secure
    living environment for students, working professionals, and women seeking a
    homely stay experience.

    <br />

    Our hostel is well known for its clean surroundings, caring management,
    purified drinking water, and delicious home-made pure vegetarian food prepared
    fresh every day. At Anugraha PG, we focus on comfort, safety, cleanliness,
    and quality living to ensure every resident feels at home.
  </p>
<br />
  {/* BUTTON */}
<div className="flex justify-end mt-2"> <Link href="/about" className="text-sm font-bold tracking-wide text-[#111827] hover:text-[#D4AF37] transition duration-300" > More About Us → </Link> </div></div> 
</div>
</div>

        <RoomSection />

{/* MINI GALLERY */}

<div className="bg-white py-20 px-5 md:px-10 overflow-hidden">

  {/* HEADING */}
  <div className="text-center">

    <p className="-mt-19 text-[#D4AF37] uppercase tracking-[5px] text-[12px] font-medium">
      Gallery
    </p>

    <h2 className="text-4xl md:text-6xl font-serif text-[#111827] mt-4 leading-tight">

      Explore Our 
      Living Spaces

    </h2>

    <p className="mt-3 text-gray-500 max-w-2xl mx-auto leading-8 text-sm md:text-base">

      Discover the comfort, cleanliness and peaceful
      atmosphere of Anugraha PG.

    </p>

  </div>



  {/* GALLERY GRID */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">

    {/* IMAGE 1 */}
    <a
      href="/gallery"
      className="relative overflow-hidden rounded-[18px] group"
    >

      <img
        src="/images/Gallary/gal13.jpeg"
        alt=""
        className="w-full h-[180px] md:h-[260px] object-cover group-hover:scale-105 transition duration-700"
      />

      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-300"></div>

    </a>



    {/* IMAGE 2 */}
    <a
      href="/gallery"
      className="relative overflow-hidden rounded-[18px] group"
    >

      <img
        src="/images/Gallary/gal21.jpeg"
        alt=""
        className="w-full h-[180px] md:h-[260px] object-cover group-hover:scale-105 transition duration-700"
      />

      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-300"></div>

    </a>



    {/* IMAGE 3 */}
    <a
      href="/gallery"
      className="relative overflow-hidden rounded-[18px] group"
    >

      <img
        src="/images/Gallary/gal6.jpeg"
        alt=""
        className="w-full h-[180px] md:h-[260px] object-cover group-hover:scale-105 transition duration-700"
      />

      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-300"></div>

    </a>



    {/* IMAGE 4 */}
    <a
      href="/gallery"
      className="relative overflow-hidden rounded-[18px] group"
    >

      <img
        src="/images/Gallary/gal4.jpeg"
        alt=""
        className="w-full h-[180px] md:h-[260px] object-cover group-hover:scale-105 transition duration-700"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">

        <div className="bg-white/90 backdrop-blur-md px-5 py-2 rounded-full text-sm font-semibold text-[#111827] shadow-lg">
          + More Photos
        </div>

      </div>

    </a>

  </div>


</div>


{/* HOME PAGE AMENITIES */}
<div className="bg-white py-20 px-5 md:px-10">

  <div className="-mt-15 max-w-6xl mx-auto rounded-[35px] overflow-hidden relative">

    {/* BACKGROUND IMAGE */}
    <img
      src="/images/amm.png"
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* OVERLAY */}
    

    {/* PATTERN */}
    <div className="absolute inset-0 opacity-[0.05] bg-[url('/images/pattern.png')] bg-cover bg-center"></div>



    {/* CONTENT */}
    <div className="relative px-7 md:px-14 py-14 grid md:grid-cols-3 gap-14">

      {/* LEFT */}
      <div>

        <p className="text-[#D4AF37] uppercase tracking-[4px] text-[11px] font-medium">
          Amenities
        </p>

        <h2 className="text-4xl md:text-5xl font-serif text-[#111827] mt-4 leading-tight">

          Designed For <br />
          Peaceful Living

        </h2>

      </div>



      {/* RIGHT */}
      <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-10">

        {/* ITEM */}
        <a
          href="/about#amenities"
          className="group"
        >

          <div className="text-3xl text-[#D4AF37]">
            📶
          </div>

          <h3 className="mt-4 text-[18px] font-serif text-[#111827] group-hover:text-[#D4AF37] transition">
            High Speed WiFi
          </h3>

          <p className="mt-2 text-gray-500 text-sm leading-7">
            Fast seamless internet access.
          </p>

        </a>



        {/* ITEM */}
        <a
          href="/about#amenities"
          className="group"
        >

          <div className="text-3xl text-[#D4AF37]">
            🍽️
          </div>

          <h3 className="mt-4 text-[18px] font-serif text-[#111827] group-hover:text-[#D4AF37] transition">
            Pure Veg Food
          </h3>

          <p className="mt-2 text-gray-500 text-sm leading-7">
            Fresh hygienic home-style meals.
          </p>

        </a>



        {/* ITEM */}
        <a
          href="/about#amenities"
          className="group"
        >

          <div className="text-3xl text-[#D4AF37]">
            🔐
          </div>

          <h3 className="mt-4 text-[18px] font-serif text-[#111827] group-hover:text-[#D4AF37] transition">
            24×7 Security
          </h3>

          <p className="mt-2 text-gray-500 text-sm leading-7">
            Safe and secure environment.
          </p>

        </a>



        {/* ITEM */}
        <a
          href="/about#amenities"
          className="group"
        >

          <div className="text-3xl text-[#D4AF37]">
            ⚡
          </div>

          <h3 className="mt-4 text-[18px] font-serif text-[#111827] group-hover:text-[#D4AF37] transition">
            Power Backup
          </h3>

          <p className="mt-2 text-gray-500 text-sm leading-7">
            Continuous power supply.
          </p>

        </a>



        {/* ITEM */}
        <a
          href="/about#amenities"
          className="group"
        >

          <div className="text-3xl text-[#D4AF37]">
            🚿
          </div>

          <h3 className="mt-4 text-[18px] font-serif text-[#111827] group-hover:text-[#D4AF37] transition">
            Attached Bathroom
          </h3>

          <p className="mt-2 text-gray-500 text-sm leading-7">
            Clean maintained facilities.
          </p>

        </a>



        {/* ITEM */}
        <a
          href="/about#amenities"
          className="group"
        >

          <div className="text-3xl text-[#D4AF37]">
            🛵
          </div>

          <h3 className="mt-4 text-[18px] font-serif text-[#111827] group-hover:text-[#D4AF37] transition">
            Parking Facility
          </h3>

          <p className="mt-2 text-gray-500 text-sm leading-7">
            Spacious parking available.
          </p>

        </a>

      </div>

    </div>

  </div>

</div>


        {/* REVIEWS */}
      
<div className="bg-white py-20 px-5 md:px-10 overflow-hidden">

  {/* HEADING */}
  <div className="-mt-19 text-center mb-12">

    <p className="text-[#D4AF37] uppercase tracking-[4px] text-[11px] font-medium">
      Testimonials
    </p>

    <h2 className="text-4xl md:text-5xl font-serif text-[#111827] mt-4 leading-tight">

      What Our    
      Residents Say

    </h2>

    <p className="text-gray-500 mt-3 text-sm max-w-xl mx-auto leading-7">
      Trusted by students and working professionals
      for safe, peaceful and comfortable living.
    </p>

  </div>



  {/* REVIEW SLIDER */}
  <div className="flex justify-center">

    <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-2 max-w-full">

      {/* REVIEW 1 */}
      <div className="w-[300px] md:w-[360px] flex-shrink-0 bg-white rounded-[28px] p-7 snap-start border border-[#D4AF37]/10 shadow-sm">

        {/* TOP */}
        <div className="flex items-center justify-between">

          <div>

            <h3 className="text-[22px] font-serif text-[#111827]">
              Ashwin Moily
            </h3>

            <p className="text-xs text-gray-500 mt-2 tracking-wide">
              ⭐⭐⭐⭐⭐ • 1 year ago
            </p>

          </div>

          <div className="text-5xl text-[#D4AF37]/20 font-serif">
            “
          </div>

        </div>

        {/* REVIEW */}
        <p className="mt-6 text-gray-600 leading-8 text-sm md:text-base">

          One of my relatives stayed at Anugraha PG and had
          a wonderful experience. Very clean environment,
          excellent vegetarian food and caring management.

        </p>

      </div>



      {/* REVIEW 2 */}
      <div className="w-[300px] md:w-[360px] flex-shrink-0 bg-white rounded-[28px] p-7 snap-start border border-[#D4AF37]/10 shadow-sm">

        {/* TOP */}
        <div className="flex items-center justify-between">

          <div>

            <h3 className="text-[22px] font-serif text-[#111827]">
              Mindy Srinivasan
            </h3>

            <p className="text-xs text-gray-500 mt-2 tracking-wide">
              ⭐⭐⭐⭐⭐ • 3 years ago
            </p>

          </div>

          <div className="text-5xl text-[#D4AF37]/20 font-serif">
            “
          </div>

        </div>

        {/* REVIEW */}
        <p className="mt-6 text-gray-600 leading-8 text-sm md:text-base">

          Very good PG with hygienic vegetarian food,
          peaceful surroundings and excellent safety
          measures specially designed for girls.

        </p>

      </div>



      {/* REVIEW 3 */}
      <div className="w-[300px] md:w-[360px] flex-shrink-0 bg-white rounded-[28px] p-7 snap-start border border-[#D4AF37]/10 shadow-sm">

        {/* TOP */}
        <div className="flex items-center justify-between">

          <div>

            <h3 className="text-[22px] font-serif text-[#111827]">
              Nitesh Patel
            </h3>

            <p className="text-xs text-gray-500 mt-2 tracking-wide">
              ⭐⭐⭐⭐⭐ • 1 year ago
            </p>

          </div>

          <div className="text-5xl text-[#D4AF37]/20 font-serif">
            “
          </div>

        </div>

        {/* REVIEW */}
        <p className="mt-6 text-gray-600 leading-8 text-sm md:text-base">

          Great place with peaceful atmosphere, clean rooms,
          homely food and excellent management. Safety and
          comfort are clearly prioritised here.

        </p>

      </div>

    </div>

  </div>



</div>
        <Footer />

      </div>
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