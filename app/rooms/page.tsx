
"use client";

import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";

const rooms = [
  {
    sharing: "1 Person",
    name: "Single Sharing",
    heading: "Luxury Private Living",
    tagline:
      "Experience complete privacy with premium interiors and a peaceful atmosphere crafted for comfortable living.",
    image: "/images/one-sharing.jpeg",
  },

  {
    sharing: "2 Persons",
    name: "2 Sharing",
    heading: "Elegant Shared Comfort",
    tagline:
      "A perfect balance of comfort, space and affordability for students and professionals.",
    image: "/images/two-sharing.jpeg",
  },

  {
    sharing: "3 Persons",
    name: "3 Sharing",
    heading: "Smart Student Stay",
    tagline:
      "Spacious and practical accommodation designed for peaceful and convenient everyday living.",
    image: "/images/three-sharing.jpeg",
  },

  {
    sharing: "4 Persons",
    name: "4 Sharing",
    heading: "Comfort Within Budget",
    tagline:
      "Affordable shared living with essential facilities and a homely atmosphere.",
    image: "/images/four-sharing.png",
  },
{
    sharing: "5 Persons",
    name: "5 Sharing",
    heading: "Spacious 5 Sharing",
    tagline:
      "Affordable group living with spacious interiors, modern amenities, and a homely atmosphere.",
    image: "/images/five-sharing.jpeg",
  },
  {
    sharing: "6 Persons",
    name: "6 Sharing",
    heading: "Spacious Group Living",
    tagline:
      "Economical accommodation crafted for comfortable group living with modern essentials.",
    image: "/images/six-sharing.jpeg",
  },
];

export default function RoomsPage() {

  return (

    <div className="bg-white min-h-screen overflow-hidden">

      <Navbar />

      {/* HERO */}
      <div className="pt-28 md:pt-36 pb-20 px-5 text-center">

        <p className="text-[#D4AF37] uppercase tracking-[6px] text-[19px] font-medium">
          Our Rooms
        </p>

        <h1 className="text-3xl md:text-6xl font-serif text-[#111827] mt-4 leading-tight">

          Where Comfort Feels Like Home

        </h1>

        <p className="mt-5 text-gray-500 max-w-2xl mx-auto leading-8 text-sm md:text-base">

          Discover thoughtfully designed accommodation
          options at Anugraha PG crafted for peaceful,
          safe and premium living.

        </p>

      </div>



      {/* ROOMS */}
      <div className="pb-24 px-5 md:px-10 lg:px-16 space-y-28">

        {rooms.map((room, index) => (

          <div
            key={index}
            className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-24 items-center ${
              index % 2 === 1 ? "md:grid-flow-dense" : ""
            }`}
          >

            {/* IMAGE SIDE */}
            <div
              className={`relative ${
                index % 2 === 1 ? "md:col-start-2" : ""
              }`}
            >

              {/* IMAGE */}
              <div className="overflow-hidden rounded-[18px]">

                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-[230px] md:h-[390px] object-cover hover:scale-105 transition duration-700"
                />

              </div>

              {/* FLOATING INFO */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-xl">

                <p className="text-[#D4AF37] uppercase tracking-[3px] text-[10px] font-medium">
                  {room.sharing}
                </p>

                <h3 className="text-black text-lg font-semibold mt-1">
                  {room.name}
                </h3>

              </div>

            </div>



            {/* TEXT SIDE */}
            <div
              className={`${
                index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""
              }`}
            >

              <p className="text-[#D4AF37] uppercase tracking-[4px] text-[10px] font-medium"> { room.name === "Single Sharing" ? "Private Premium Stay" : room.name === "2 Sharing" ? "Comfortable Shared Living" : room.name === "3 Sharing" ? "Student Friendly Living" : room.name === "4 Sharing" ? "Affordable Group Comfort" : "Economical Spacious Stay" } </p>

              {/* MAIN TITLE */}
              <h2 className="text-3xl md:text-5xl font-serif text-[#111827] mt-3 leading-tight">

                {room.heading}

              </h2>

              {/* SUB TITLE */}
              <p className="mt-2 text-black text-base md:text-lg font-medium">
                {room.name}
              </p>

              {/* DESCRIPTION */}
              <p className="mt-6 text-gray-600 leading-7 text-sm md:text-base max-w-xl">

                {room.tagline}

              </p>



              {/* UNIQUE INFO */}
              <div className="mt-8 space-y-4">

                {/* SINGLE */}
                {
                  room.name === "Single Sharing" && (
                    <>
                      <div className="flex items-start gap-4">

                        <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2"></div>

                        <p className="text-gray-700 leading-6 text-sm md:text-base">
                          Ideal for residents seeking complete privacy and a calm living atmosphere.
                        </p>

                      </div>

                      <div className="flex items-start gap-4">

                        <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2"></div>

                        <p className="text-gray-700 leading-6 text-sm md:text-base">
                          Premium setup designed for comfortable and independent living.
                        </p>

                      </div>
                    </>
                  )
                }

                {/* 2 SHARING */}
                {
                  room.name === "2 Sharing" && (
                    <>
                      <div className="flex items-start gap-4">

                        <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2"></div>

                        <p className="text-gray-700 leading-6 text-sm md:text-base">
                          Spacious and comfortable room arrangement with modern facilities.
                        </p>

                      </div>

                      <div className="flex items-start gap-4">

                        <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2"></div>

                        <p className="text-gray-700 leading-6 text-sm md:text-base">
                          Perfect for residents looking for balanced comfort and affordability.
                        </p>

                      </div>
                    </>
                  )
                }

                {/* 3 SHARING */}
                {
                  room.name === "3 Sharing" && (
                    <>
                      <div className="flex items-start gap-4">

                        <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2"></div>

                        <p className="text-gray-700 leading-6 text-sm md:text-base">
                          Smart and economical stay option crafted for students and professionals.
                        </p>

                      </div>

                      <div className="flex items-start gap-4">

                        <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2"></div>

                        <p className="text-gray-700 leading-6 text-sm md:text-base">
                          Peaceful environment with hygienic facilities and homely atmosphere.
                        </p>

                      </div>
                    </>
                  )
                }

                {/* 4 SHARING */}
                {
                  room.name === "4 Sharing" && (
                    <>
                      <div className="flex items-start gap-4">

                        <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2"></div>

                        <p className="text-gray-700 leading-6 text-sm md:text-base">
                          Budget friendly accommodation with spacious shared interiors.
                        </p>

                      </div>

                      <div className="flex items-start gap-4">

                        <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2"></div>

                        <p className="text-gray-700 leading-6 text-sm md:text-base">
                          Includes essential facilities for comfortable everyday living.
                        </p>

                      </div>
                    </>
                  )
                }

                {/* 6 SHARING */}
                {
                  room.name === "6 Sharing" && (
                    <>
                      <div className="flex items-start gap-4">

                        <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2"></div>

                        <p className="text-gray-700 leading-6 text-sm md:text-base">
                          Spacious group accommodation designed for affordable long stays.
                        </p>

                      </div>

                      <div className="flex items-start gap-4">

                        <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2"></div>

                        <p className="text-gray-700 leading-6 text-sm md:text-base">
                          Comfortable environment with pure vegetarian food and peaceful surroundings.
                        </p>

                      </div>
                    </>
                  )
                }

              </div>



              {/* BUTTON */}
              <a
                href={`https://wa.me/918050555222?text=${encodeURIComponent(
                  `Hello Anugraha PG, I would like to enquire about the ${room.name} room availability.`
                )}`}
                target="_blank"
                className="inline-flex items-center gap-2 mt-10 bg-[#D4AF37] text-black px-8 py-4 rounded-full hover:scale-105 transition duration-300 shadow-xl font-semibold"
              >
                Enquire Now →
              </a>

            </div>

          </div>

        ))}

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

