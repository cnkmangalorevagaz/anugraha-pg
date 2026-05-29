
export default function Footer() {
  return (

    <footer className="relative mt-7 bg-white overflow-hidden">

      {/* MAP */}
      <div className="px-5 md:px-20 relative z-20">

        <div className="w-full md:w-[440px] h-[260px] md:h-[320px] overflow-hidden rounded-[30px] border-[8px] border-white bg-white mx-auto md:ml-auto md:mr-0 -mb-20">

          <iframe
            src="https://maps.google.com/maps?q=Anugraha%20PG%20Mangalore&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full"
            loading="lazy"
          ></iframe>

        </div>

      </div>



      {/* MAIN FOOTER */}
      <div className="relative bg-gradient-to-br from-[#111827] via-[#1b2433] to-[#0f172a] text-white pt-32 pb-14 px-6 md:px-20 rounded-t-[30px] overflow-hidden">

        {/* BLUR BACKGROUND */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#d4a373]/10 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#f4d58d]/10 blur-[120px] rounded-full"></div>



        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-14">

          {/* LEFT SECTION */}
          <div>

            {/* LOGO */}
            <div className="relative inline-block">

              <img
                src="/images/logowhite.png"
                alt="Anugraha PG"
                className="h-20 md:h-24 w-auto object-contain"
              />

              {/* SINCE */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white/10 border border-white/10 backdrop-blur-md px-4 py-1 rounded-full">

                <p className="text-[10px] uppercase tracking-[3px] text-[#f4d58d] whitespace-nowrap">
                  Since 2010
                </p>

              </div>

            </div>



            {/* DESCRIPTION */}
            <p className="mt-10 text-sm leading-8 text-[#d1d5db] max-w-sm">

              Comfortable and affordable ladies PG in Mangalore
              with modern facilities, hygienic pure vegetarian food,
              safety and peaceful living for students and
              working professionals.

            </p>

          </div>



          {/* CENTER SECTION */}
          <div>

            <h3 className="text-2xl font-serif text-[#f4d58d] mb-8">
              Contact Info
            </h3>

            <div className="space-y-7">

              {/* LOCATION */}
              <div className="flex items-start gap-4">

                <div className="w-11 h-11 min-w-[44px] rounded-2xl bg-white/10 flex items-center justify-center text-lg">
                  📍
                </div>

                <p className="text-sm leading-7 text-[#d1d5db]">

                  Anugraha PG, Opp 6th Cross,
                  Ganesh Rao Lane, Kodiyalguthu East,
                  Kodialbail, Mangalore,
                  Karnataka - 575003

                </p>

              </div>



              {/* PHONE */}
              <div className="flex items-center gap-4">

                <div className="w-11 h-11 min-w-[44px] rounded-2xl bg-white/10 flex items-center justify-center text-lg">
                  📞
                </div>

                <p className="text-sm text-[#d1d5db] tracking-wide">
                  +91 8050 555222
                </p>

              </div>

            </div>

          </div>



          {/* RIGHT SECTION */}
          <div>

            <h3 className="text-2xl font-serif text-[#f4d58d] mb-8">
              Facilities
            </h3>

            <div className="grid grid-cols-2 gap-y-5 gap-x-6">

              <div className="flex items-center gap-3 text-sm text-[#d1d5db]">
                <span className="w-2 h-2 rounded-full bg-[#f4d58d]"></span>
                WiFi
              </div>

              <div className="flex items-center gap-3 text-sm text-[#d1d5db]">
                <span className="w-2 h-2 rounded-full bg-[#f4d58d]"></span>
                Furnished Rooms
              </div>

              <div className="flex items-center gap-3 text-sm text-[#d1d5db]">
                <span className="w-2 h-2 rounded-full bg-[#f4d58d]"></span>
                Security
              </div>

              <div className="flex items-center gap-3 text-sm text-[#d1d5db]">
                <span className="w-2 h-2 rounded-full bg-[#f4d58d]"></span>
                Housekeeping
              </div>

              <div className="flex items-center gap-3 text-sm text-[#d1d5db]">
                <span className="w-2 h-2 rounded-full bg-[#f4d58d]"></span>
                Hygienic Food
              </div>

              <div className="flex items-center gap-3 text-sm text-[#d1d5db]">
                <span className="w-2 h-2 rounded-full bg-[#f4d58d]"></span>
                Peaceful Stay
              </div>

            </div>

          </div>

        </div>

      </div>



      {/* BOTTOM BAR */}
      <div className="flex items-center justify-center gap-3 text-sm text-gray-400 py-4">
  
  <p>
    © 2026 Anugraha PG • All Rights Reserved
  </p>



</div>

    </footer>

  );
}

