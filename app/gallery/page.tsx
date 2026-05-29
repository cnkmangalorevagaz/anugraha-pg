"use client";

import { useState } from "react";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";

const images = [
  "/images/Gallary/gal1.jpeg",
  "/images/Gallary/gal2.jpeg",
  "/images/Gallary/gal3.jpeg",
  "/images/Gallary/gal4.jpeg",
  "/images/Gallary/gal5.jpeg",
  "/images/Gallary/gal6.jpeg",
  "/images/Gallary/gal7.jpeg",
  "/images/Gallary/gal8.jpeg",
  "/images/Gallary/gal9.jpeg",
  "/images/Gallary/gal10.jpeg",
  "/images/Gallary/gal11.jpeg",
  "/images/Gallary/gal12.jpeg",
  "/images/Gallary/gal13.jpeg",
  "/images/Gallary/gal14.jpeg",
  "/images/Gallary/gal15.jpeg",
  "/images/Gallary/gal16.jpeg",
  "/images/Gallary/gal17.jpeg",
  "/images/Gallary/gal18.jpeg",
  "/images/Gallary/gal19.jpeg",
  "/images/Gallary/gal20.jpeg",
  "/images/Gallary/gal21.jpeg",
  "/images/Gallary/gal22.png",
  "/images/Gallary/gal23.png", 
];

export default function Gallery() {

 const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (

    <div className="bg-white min-h-screen overflow-hidden">

      <Navbar />

      {/* HERO */}
      <div className="pt-28 md:pt-36 pb-14 px-5 text-center">

        <p className="text-[#D4AF37] uppercase tracking-[5px] text-[19px] font-medium">
          Our Gallery
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-[#111827] mt-3 leading-tight">

          Explore Our 
          Living Spaces

        </h1>

        <p className="mt-4 text-gray-500 max-w-2xl mx-auto leading-8 text-sm md:text-base">

          Discover the comfort, cleanliness and peaceful
          atmosphere of Anugraha PG through our gallery.

        </p>

      </div>



      {/* GALLERY */}
      <div className="px-4 md:px-10 lg:px-16 pb-20">

  <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">

    {images.map((img, index) => (

      <div
        key={index}
        onClick={() => setSelectedImage(img)}
        className="break-inside-avoid relative overflow-hidden rounded-[10px] group cursor-pointer"
      >

        {/* IMAGE */}
        <img
          src={img}
          alt=""
          className="w-full object-cover group-hover:scale-105 transition duration-500"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300"></div>

        {/* EXPAND ICON */}
        <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 3h6m0 0v6m0-6L10 14"
            />
          </svg>

        </div>

      </div>

    ))}

  </div>

</div>



      {/* IMAGE POPUP */}
      {
        selectedImage && (

          <div
            className="fixed inset-0 bg-black/85 z-[999999] flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >

            {/* CLOSE */}
            <button
              className="absolute top-5 right-5 text-white text-5xl"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>

            {/* IMAGE */}
            <img
              src={selectedImage}
              alt=""
              className="max-w-full max-h-[90vh] rounded-[16px] shadow-2xl"
            />

          </div>

        )
      }

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