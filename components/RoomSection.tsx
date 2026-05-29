
"use client";

import Link from "next/link";
import Image from "next/image";

const rooms = [
  {
    title: "Luxury Private Living",
    name: "Single Sharing",
    desc: "Private room crafted for peaceful, premium and comfortable independent living.",
    img: "/images/one-sharing.jpeg",
  },

  {
    title: "Elegant Shared Comfort",
    name: "2 Sharing",
    desc: "Spacious and comfortable shared stay ideal for students and professionals.",
    img: "/images/two-sharing.jpeg",
  },

  {
    title: "Smart Student Stay",
    name: "3 Sharing",
    desc: "Affordable accommodation designed for practical and peaceful everyday living.",
    img: "/images/three-sharing.jpeg",
  },

  {
    title: "Comfort Within Budget",
    name: "4 Sharing",
    desc: "Comfortable shared living with essential facilities and homely atmosphere.",
    img: "/images/four-sharing.png",
  },

  {
  title: "Spacious Group Living",
  name: "5 Sharing",
  desc: "Smartly designed shared living with comfort, convenience, and a vibrant community atmosphere.",
  img: "/images/five-sharing.jpeg",
},
  {
    title: "Spacious Group Living",
    name: "6 Sharing",
    desc: "Economical and spacious accommodation crafted for convenient group living.",
    img: "/images/six-sharing.jpeg",
  },
];

export default function RoomSection() {

  const scrollLeft = () => {

    document.getElementById("room-scroll")?.scrollBy({
      left: -450,
      behavior: "smooth",
    });

  };

  const scrollRight = () => {

    document.getElementById("room-scroll")?.scrollBy({
      left: 450,
      behavior: "smooth",
    });

  };

  return (

    <div className="bg-white py-20 overflow-hidden">

      {/* HEADING */}
      <div className="text-center px-5">

        <p className="-mt-20 text-[#D4AF37] uppercase tracking-[5px] text-[12px] font-medium">
          Accommodation
        </p>

        <h2 className="text-4xl md:text-6xl font-serif text-[#111827] mt-4 leading-tight">

          Explore Our 
          Room Collection

        </h2>

        <p className="mt-3 text-gray-500 max-w-2xl mx-auto leading-8 text-sm md:text-base">

          Thoughtfully designed rooms crafted for
          comfort, safety and peaceful living.

        </p>

      </div>



      {/* SLIDER */}
      <div className="relative mt-16">

        {/* LEFT BUTTON */}
        <button
          onClick={scrollLeft}
          className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white border border-[#D4AF37]/20 shadow-xl w-14 h-14 rounded-full items-center justify-center text-3xl text-[#111827] hover:bg-[#D4AF37] hover:text-white transition duration-300"
        >
          ‹
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={scrollRight}
          className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white border border-[#D4AF37]/20 shadow-xl w-14 h-14 rounded-full items-center justify-center text-3xl text-[#111827] hover:bg-[#D4AF37] hover:text-white transition duration-300"
        >
          ›
        </button>



        {/* SCROLL AREA */}
        <div
          id="room-scroll"
          className="overflow-x-auto scrollbar-hide scroll-smooth"
        >

          <div className="flex gap-6 px-4 md:px-16 pb-5 w-max">

            {rooms.map((room, i) => (

              <div
                key={i}
                className="w-[320px] md:w-[420px] flex-shrink-0 bg-white rounded-[28px] overflow-hidden border border-[#D4AF37]/10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] group hover:-translate-y-1 transition duration-500"
              >

                {/* IMAGE */}
                <div className="relative h-[240px] md:h-[270px] overflow-hidden">

                  <Image
                    src={room.img}
                    alt={room.name}
                    fill
                    draggable={false}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

                  {/* FLOATING LABEL */}
                  <div className="absolute bottom-5 left-5">

                    <p className="text-[#D4AF37] uppercase tracking-[3px] text-[11px] font-medium">
                      {room.title}
                    </p>

                    <h3 className="text-2xl font-semibold text-white mt-1">
                      {room.name}
                    </h3>

                  </div>

                </div>



                {/* CONTENT */}
                <div className="p-6 md:p-7">

                  <p className="text-gray-500 leading-7 text-sm md:text-base">

                    {room.desc}

                  </p>

                  {/* BUTTON */}
                  <Link
                    href="/rooms"
                    className="inline-flex items-center gap-2 mt-7 text-[#111827] font-medium hover:text-[#D4AF37] transition duration-300"
                  >

                    Explore Room →

                  </Link>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>

  );
}

