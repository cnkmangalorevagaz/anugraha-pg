"use client";

import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { useState } from "react";

export default function Contact() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsApp = () => {

    const text = `Hello Anugraha PG,

Name: ${name}
Phone: ${phone}
Room Preference: ${room}

Message:
${message}`;

    const url = `https://wa.me/918050555222?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

  };

  return (

    <div className="bg-white min-h-screen overflow-hidden">

      <Navbar />

      {/* HERO */}
      <div className="pt-32 pb-14 px-5 text-center">

        <p className="text-[#D4AF37] uppercase tracking-[5px] text-[19px] font-medium">
          Contact Us
        </p>

        

        <p className="mt-2 text-gray-500 max-w-xl mx-auto leading-7 text-sm">

          Safe, peaceful and comfortable accommodation
          crafted exclusively for women in Mangalore.

        </p>

      </div>



      {/* MAIN SECTION */}
      <div className="max-w-6xl mx-auto px-5 md:px-10 pb-24 grid md:grid-cols-2 gap-14 items-start">

  {/* LEFT SIDE SIMPLE TEXT */}
  <div className="pt-5">

    

    <h2 className="text-4xl md:text-6xl font-serif text-black mt-4 leading-tight">

      Let’s Talk About <br />
      Your Stay

    </h2>

    <p className="mt-4 text-black/70 leading-8 text-sm md:text-base max-w-lg">

      Anugraha PG offers safe, peaceful and comfortable accommodation
      exclusively for women in Mangalore. Connect with us for room
      availability, facilities and pricing details.

    </p>

    {/* DETAILS */}
    <div className="mt-10 space-y-5">

      <div>

        <p className="text-[#D4AF37] uppercase tracking-[3px] text-xs">
          Call / WhatsApp
        </p>

        <p className="text-black text-lg font-medium mt-1">
          +91 80505 55222
        </p>

      </div>

      <div>

        <p className="text-[#D4AF37] uppercase tracking-[3px] text-xs">
          Location
        </p>

        <p className="text-black text-lg font-medium mt-1">
          Anugraha PG,            
                  Kodialbail, Mangalore
                 
        </p>

      </div>

      <div>

        

      </div>

    </div>

  </div>



  {/* RIGHT SIDE FORM */}
  <div className="bg-[#f8f8f8] rounded-[32px] p-7 md:p-10 border border-[#D4AF37]/10 shadow-sm">

    <p className="text-[#D4AF37] uppercase tracking-[4px] text-[11px] font-medium">
      Quick Enquiry
    </p>

    <h2 className="text-2xl md:text-4xl font-serif text-black mt-3 leading-tight">

      Send Us <br />
      A Message

    </h2>

    {/* FORM */}
    <div className="mt-8 grid gap-4">

  {/* NAME */}
  <input
    type="text"
    placeholder="Your Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    className="h-12 px-4 rounded-2xl bg-white outline-none border border-transparent focus:border-[#D4AF37]/30 text-sm text-black"
  />

  {/* PHONE */}
  <input
    type="tel"
    placeholder="Phone Number"
    value={phone}
    maxLength={10}
    onChange={(e) => {

      const value = e.target.value.replace(/\D/g, "");
      setPhone(value);

    }}
    className="h-12 px-4 rounded-2xl bg-white outline-none border border-transparent focus:border-[#D4AF37]/30 text-sm text-black"
  />

  {/* MESSAGE */}
  <textarea
    rows={4}
    placeholder="Message"
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    className="p-4 rounded-[20px] bg-white outline-none border border-transparent focus:border-[#D4AF37]/30 text-sm text-black"
  ></textarea>

  {/* BUTTON */}
  <button
    onClick={() => {

      // VALIDATION
      if (!name.trim()) {

        alert("Please enter your name");
        return;

      }

      if (phone.length !== 10) {

        alert("Please enter a valid 10 digit phone number");
        return;

      }

      

      handleWhatsApp();

    }}
    className="mt-2 h-12 rounded-2xl bg-[#D4AF37] text-black text-sm font-semibold hover:scale-[1.01] transition duration-300"
  >
    Send Enquiry
  </button>



    </div>

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