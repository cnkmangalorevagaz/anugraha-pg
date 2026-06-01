"use client";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function HouseRules() {
  return (
    <>
      <Navbar />

      <main className="mt-10 bg-white min-h-screen">

        {/* HERO */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-[#faf8f2] to-white ">

          <div className="max-w-5xl mx-auto px-5 text-center">

            <p className="text-[#D4AF37] uppercase tracking-[5px] text-sm font-medium">
              ANUGRAHA PG
            </p>

            <h1 className="mt-4 text-5xl md:text-7xl font-serif text-[#111827]">
              House Rules
            </h1>

            <div className="w-24 h-[2px] bg-[#D4AF37] mx-auto mt-6"></div>

          </div>

        </section>

        {/* NAVIGATION */}
       <section className="sticky top-20 z-30 bg-white border-b border-gray-100">

  <div className="max-w-7xl mx-auto px-5 py-4 overflow-x-auto hide-scrollbar bg-white">


<div className="flex gap-3 min-w-max">

  <a
    href="#admission"
    className="px-5 py-2.5 rounded-full bg-[#111827] text-white hover:bg-[#D4AF37] transition"
  >
    Admission
  </a>

  <a
    href="#rent"
    className="px-5 py-2.5 rounded-full bg-[#faf8f2] border border-[#D4AF37]/20 hover:bg-[#D4AF37] hover:text-white transition"
  >
    Rent & Payments
  </a>

  <a
    href="#food"
    className="px-5 py-2.5 rounded-full bg-[#faf8f2] border border-[#D4AF37]/20 hover:bg-[#D4AF37] hover:text-white transition"
  >
    Food & Utilities
  </a>

  <a
    href="#cleanliness"
    className="px-5 py-2.5 rounded-full bg-[#faf8f2] border border-[#D4AF37]/20 hover:bg-[#D4AF37] hover:text-white transition"
  >
    Hygiene
  </a>

  <a
    href="#security"
    className="px-5 py-2.5 rounded-full bg-[#faf8f2] border border-[#D4AF37]/20 hover:bg-[#D4AF37] hover:text-white transition"
  >
    Security
  </a>

  <a
    href="#prohibited-substances"
    className="px-5 py-2.5 rounded-full bg-[#faf8f2] border border-[#D4AF37]/20 hover:bg-[#D4AF37] hover:text-white transition"
  >
    Discipline
  </a>

  <a
    href="#room-allocation"
    className="px-5 py-2.5 rounded-full bg-[#faf8f2] border border-[#D4AF37]/20 hover:bg-[#D4AF37] hover:text-white transition"
  >
    Accommodation
  </a>

  <a
    href="#medical-emergencies"
    className="px-5 py-2.5 rounded-full bg-[#faf8f2] border border-[#D4AF37]/20 hover:bg-[#D4AF37] hover:text-white transition"
  >
    Emergencies
  </a>

  <a
    href="#social-media"
    className="px-5 py-2.5 rounded-full bg-[#faf8f2] border border-[#D4AF37]/20 hover:bg-[#D4AF37] hover:text-white transition"
  >
    Social Media
  </a>

  <a
    href="#termination"
    className="px-5 py-2.5 rounded-full bg-[#faf8f2] border border-[#D4AF37]/20 hover:bg-[#D4AF37] hover:text-white transition"
  >
    Termination
  </a>

  <a
    href="#declaration"
    className="px-5 py-2.5 rounded-full bg-[#D4AF37] text-white hover:bg-[#111827] transition"
  >
    Declaration
  </a>

</div>


  </div>

</section>


        {/* CONTENT */}
        <section className="py-10">

          <div className="max-w-5xl mx-auto px-5">

            {/* SECTION EXAMPLE */}

            <div
              id="admission"
              className="py-10 border-b border-gray-200 scroll-mt-36"
            >

              <div className="flex gap-5">

                <div className="w-1 bg-[#D4AF37] rounded-full"></div>

                <div className="flex-1">

                  <h2 className="text-2xl font-semibold text-[#111827] mb-5">
                    1. Admission & Documentation
                  </h2>

                  <div className="space-y-3 text-black text-[15px] leading-7">

                    <p>
                      1.1 Every resident must submit valid Government-issued
                      photo identification, address proof, passport-size
                      photographs, and any other documents requested by
                      the management before occupancy.
                    </p>

                    <p>
                      1.2 Residents must provide accurate personal and
                      emergency contact details and promptly notify
                      management of any changes.
                    </p>

                    <p>
                      1.3 The management reserves the right to refuse
                      admission if the required documentation is not
                      submitted or verified.
                    </p>

                  </div>

                </div>

              </div>

            </div>
<div
  id="timings"
  className="py-10 border-b border-gray-200 scroll-mt-36"
>
  <div className="flex gap-5">

    <div className="w-1 bg-[#D4AF37] rounded-full"></div>

    <div className="flex-1">

      <h2 className="text-2xl font-semibold text-[#111827] mb-5">
        2. PG Timings
      </h2>

      <div className="space-y-3 text-black text-[15px] leading-7">

        <p>2.1 The PG closing time is 08:30 PM.</p>

        <p>
          2.2 Residents are expected to return before the
          stipulated closing time.
        </p>

        <p>
          2.3 Late entry shall be permitted only with prior
          approval from the management under exceptional
          circumstances.
        </p>

        <p>
          2.4 Repeated violation of PG timings may result
          in disciplinary action, penalties, or termination
          of accommodation.
        </p>

      </div>

    </div>

  </div>
</div>
<div
  id="rent"
  className="py-10 border-b border-gray-200 scroll-mt-36"
>
  <div className="flex gap-5">

    <div className="w-1 bg-[#D4AF37] rounded-full"></div>

    <div className="flex-1">

      <h2 className="text-2xl font-semibold text-[#111827] mb-5">
        3. Rent Policy
      </h2>

      <div className="space-y-3 text-black text-[15px] leading-7">

        <p>
          3.1 The monthly rent cycle shall be calculated
          from the 1st to the 31st of every month.
        </p>

        <p>
          3.2 Rent shall be payable in full irrespective
          of the resident's joining date during the month.
        </p>

        <p>
          3.3 No prorated rent adjustment shall be
          applicable.
        </p>

        <p>
          3.4 Monthly rent must be paid on or before
          the 4th day of every month.
        </p>

      </div>

    </div>

  </div>
</div>

<div
  id="late-payment"
  className="py-10 border-b border-gray-200 scroll-mt-36"
>
  <div className="flex gap-5">

    <div className="w-1 bg-[#D4AF37] rounded-full"></div>

    <div className="flex-1">

      <h2 className="text-2xl font-semibold text-[#111827] mb-5">
        4. Late Payment Charges
      </h2>

      <div className="space-y-3 text-black text-[15px] leading-7">

        <p>
          4.1 A late payment charge of ₹50 per day shall
          be applicable from the 5th day of the month
          until all outstanding dues are cleared.
        </p>

        <p>
          4.2 Continued non-payment may result in
          suspension of services, restriction of
          facilities, or termination of accommodation.
        </p>

      </div>

    </div>

  </div>
</div>

<div
  id="maintenance"
  className="py-10 border-b border-gray-200 scroll-mt-36"
>
  <div className="flex gap-5">

    <div className="w-1 bg-[#D4AF37] rounded-full"></div>

    <div className="flex-1">

      <h2 className="text-2xl font-semibold text-[#111827] mb-5">
        5. Maintenance Charges
      </h2>

      <div className="space-y-3 text-black text-[15px] leading-7">

        <p>
          5.1 Annual maintenance charges of ₹3,000 per
          resident shall be payable every year.
        </p>

        <p>
          5.2 The maintenance cycle shall be from
          April to March.
        </p>

        <p>
          5.3 Maintenance charges shall be collected
          during March every year.
        </p>

        <p>
          5.4 Maintenance charges are strictly
          non-refundable irrespective of the joining
          or vacating date.
        </p>

      </div>

    </div>

  </div>
</div>

<div
  id="refund"
  className="py-10 border-b border-gray-200 scroll-mt-36"
>
  <div className="flex gap-5">

    <div className="w-1 bg-[#D4AF37] rounded-full"></div>

    <div className="flex-1">

      <h2 className="text-2xl font-semibold text-[#111827] mb-5">
        6. Refund & Payment Policy
      </h2>

      <div className="space-y-3 text-black text-[15px] leading-7">

        <p>
          6.1 All payments made towards rent, booking amount,
          advance, maintenance charges and other fees shall
          be governed by the PG's refund policy.
        </p>

        <p>
          6.2 Unless specifically approved in writing by the
          management, all payments made shall be non-refundable
          and non-transferable.
        </p>

        <p>
          6.3 No refunds shall be provided for early departure,
          absence from the PG or unused services.
        </p>

      </div>

    </div>

  </div>
</div>
<div
  id="vacating"
  className="py-10 border-b border-gray-200 scroll-mt-36"
>
  <div className="flex gap-5">

    <div className="w-1 bg-[#D4AF37] rounded-full"></div>

    <div className="flex-1">

      <h2 className="text-2xl font-semibold text-[#111827] mb-5">
        7. Notice Period for Vacating
      </h2>

      <div className="space-y-3 text-black text-[15px] leading-7">

        <p>
          7.1 Residents intending to vacate the PG must
          provide a minimum 30 days' written notice to
          the management.
        </p>

        <p>
          7.2 Failure to provide the required notice period
          may result in forfeiture of any eligible refundable
          amount, if applicable.
        </p>

        <p>
          7.3 Residents vacating without notice shall remain
          liable for applicable charges during the notice period.
        </p>

      </div>

    </div>

  </div>
</div>
<div
  id="food"
  className="py-10 border-b border-gray-200 scroll-mt-36"
>
  <div className="flex gap-5">

    <div className="w-1 bg-[#D4AF37] rounded-full"></div>

    <div className="flex-1">

      <h2 className="text-2xl font-semibold text-[#111827] mb-5">
        8. Food Policy
      </h2>

      <div className="space-y-3 text-black text-[15px] leading-7">

        <p>
          8.1 Residents are expected to consume food
          responsibly.
        </p>

        <p>
          8.2 Wastage of food is strictly discouraged.
        </p>

        <p>
          8.3 Repeated food wastage may attract penalties
          as determined by the management.
        </p>

        <p>
          8.4 Food shall not be removed from dining areas
          without permission.
        </p>

      </div>

    </div>

  </div>
</div>

<div
  id="water"
  className="py-10 border-b border-gray-200 scroll-mt-36"
>
  <div className="flex gap-5">

    <div className="w-1 bg-[#D4AF37] rounded-full"></div>

    <div className="flex-1">

      <h2 className="text-2xl font-semibold text-[#111827] mb-5">
        9. Water Conservation
      </h2>

      <div className="space-y-3 text-black text-[15px] leading-7">

        <p>
          9.1 Water is a valuable resource and must be
          used responsibly.
        </p>

        <p>
          9.2 Residents shall avoid unnecessary wastage
          of water.
        </p>

        <p>
          9.3 Repeated misuse of water may result in
          penalties.
        </p>

      </div>

    </div>

  </div>
</div>

<div
  id="electricity"
  className="py-10 border-b border-gray-200 scroll-mt-36"
>
  <div className="flex gap-5">

    <div className="w-1 bg-[#D4AF37] rounded-full"></div>

    <div className="flex-1">

      <h2 className="text-2xl font-semibold text-[#111827] mb-5">
        10. Electricity Conservation
      </h2>

      <div className="space-y-3 text-black text-[15px] leading-7">

        <p>
          10.1 Residents must switch off lights, fans,
          geysers, chargers and other electrical fittings
          when not in use.
        </p>

        <p>
          10.2 Unnecessary wastage of electricity is
          prohibited.
        </p>

      </div>

    </div>

  </div>
</div>

<div
  id="electrical-appliances"
  className="py-10 border-b border-gray-200 scroll-mt-36"
>
  <div className="flex gap-5">

    <div className="w-1 bg-[#D4AF37] rounded-full"></div>

    <div className="flex-1">

      <h2 className="text-2xl font-semibold text-[#111827] mb-5">
        11. Use of Electrical Appliances
      </h2>

      <div className="space-y-3 text-black text-[15px] leading-7">

        <p>
          11.1 Except for mobile phone chargers and laptops,
          personal electrical appliances are not permitted
          without prior written approval from management.
        </p>

        <p>
          11.2 Prohibited appliances include, but are not
          limited to:
        </p>

        <ul className="list-disc pl-8 space-y-2">
          <li>Induction stoves</li>
          <li>Electric kettles</li>
          <li>Rice cookers</li>
          <li>Immersion rods</li>
          <li>Heaters</li>
          <li>Irons</li>
          <li>Refrigerators</li>
          <li>Cooking equipment</li>
        </ul>

        <p>
          11.3 Unauthorized use of electrical appliances
          shall attract a penalty of ₹2,000 per instance.
        </p>

        <p>
          11.4 Management reserves the right to confiscate
          unauthorized appliances.
        </p>

      </div>

    </div>

  </div>
</div>

<div
  id="cleanliness"
  className="py-10 border-b border-gray-200 scroll-mt-36"
>
  <div className="flex gap-5">

    <div className="w-1 bg-[#D4AF37] rounded-full"></div>

    <div className="flex-1">

      <h2 className="text-2xl font-semibold text-[#111827] mb-5">
        12. Cleanliness & Hygiene
      </h2>

      <div className="space-y-3 text-black text-[15px] leading-7">

        <p>
          12.1 Residents shall maintain cleanliness and
          hygiene within their rooms and common areas.
        </p>

        <p>
          12.2 Garbage must be disposed of in designated bins.
        </p>

        <p>
          12.3 Residents shall ensure that their rooms do not
          create health hazards, pest infestations, foul odors
          or unsanitary conditions.
        </p>

        <p>
          12.4 Any cleaning or rectification expenses incurred
          by management due to negligence may be recovered from
          the concerned residents.
        </p>

      </div>

    </div>

  </div>
</div>

<div
  id="property-damage"
  className="py-10 border-b border-gray-200 scroll-mt-36"
>
  <div className="flex gap-5">

    <div className="w-1 bg-[#D4AF37] rounded-full"></div>

    <div className="flex-1">

      <h2 className="text-2xl font-semibold text-[#111827] mb-5">
        13. Damage to Property
      </h2>

      <div className="space-y-3 text-black text-[15px] leading-7">

        <p>
          13.1 Residents shall maintain all furniture,
          fixtures, fittings and facilities in good condition.
        </p>

        <p>
          13.2 Any damage caused inside a room shall be jointly
          borne by the occupants of that room.
        </p>

        <p>
          13.3 Any damage caused in common areas shall be shared
          among all residents unless responsibility can be
          specifically determined.
        </p>

        <p>
          13.4 Repair or replacement costs determined by the
          management shall be binding upon the residents concerned.
        </p>

      </div>

    </div>

  </div>
</div>

<div
  id="visitors"
  className="py-10 border-b border-gray-200 scroll-mt-36"
>
  <div className="flex gap-5">

    <div className="w-1 bg-[#D4AF37] rounded-full"></div>

    <div className="flex-1">

      <h2 className="text-2xl font-semibold text-[#111827] mb-5">
        14. Visitors Policy
      </h2>

      <div className="space-y-3 text-black text-[15px] leading-7">

        <p>
          14.1 Visitors shall be allowed only with prior
          permission from the management.
        </p>

        <p>
          14.2 Male visitors are strictly prohibited from
          entering residential rooms.
        </p>

        <p>
          14.3 Visitors shall remain only in designated
          visitor areas, if permitted.
        </p>

        <p>
          14.4 Residents shall be fully responsible for
          the conduct of their visitors.
        </p>

      </div>

    </div>

  </div>
</div>

<div
  id="security"
  className="py-10 border-b border-gray-200 scroll-mt-36"
>
  <div className="flex gap-5">

    <div className="w-1 bg-[#D4AF37] rounded-full"></div>

    <div className="flex-1">

      <h2 className="text-2xl font-semibold text-[#111827] mb-5">
        15. Safety & Security
      </h2>

      <div className="space-y-3 text-black text-[15px] leading-7">

        <p>
          15.1 Residents shall cooperate with all safety
          and security measures implemented by the management.
        </p>

        <p>
          15.2 Any suspicious activity, security concern or
          emergency must be immediately reported to management.
        </p>

        <p>
          15.3 Tampering with locks, security systems,
          CCTV equipment, internet equipment, electrical
          systems or safety devices is strictly prohibited.
        </p>

      </div>

    </div>

  </div>
</div>

<div
  id="security"
  className="py-10 border-b border-gray-200 scroll-mt-36"
>
  <div className="flex gap-5">

    <div className="w-1 bg-[#D4AF37] rounded-full"></div>

    <div className="flex-1">

      <h2 className="text-2xl font-semibold text-[#111827] mb-5">
        16. CCTV Surveillance
      </h2>

      <div className="space-y-3 text-black text-[15px] leading-7">

        <p>
          16.1 Common areas of the PG may be monitored through CCTV surveillance for safety and security purposes.
        </p>

        <p>
          16.2 CCTV recordings shall remain the property of the management.
        </p>

        <p>
          16.3 Access to CCTV footage shall be provided only where legally required or at the discretion of management.
        </p>

      </div>

    </div>

  </div>
</div>

<div
  id="belongings"
  className="py-10 border-b border-gray-200 scroll-mt-36"
>
  <div className="flex gap-5">

    <div className="w-1 bg-[#D4AF37] rounded-full"></div>

    <div className="flex-1">

      <h2 className="text-2xl font-semibold text-[#111827] mb-5">
        17. Personal Belongings
      </h2>

      <div className="space-y-3 text-black text-[15px] leading-7">

        <p>
          17.1 Residents are solely responsible for the
          safety and security of their personal belongings.
        </p>

        <p>
          17.2 The management shall not be responsible for
          loss, theft, damage or misplacement of cash,
          jewellery, electronics, documents or any personal
          property.
        </p>

        <p>
          17.3 Residents are advised to secure their
          valuables appropriately.
        </p>

      </div>

    </div>

  </div>
</div>

<div
  id="prohibited-substances"
  className="py-10 border-b border-gray-200 scroll-mt-36"
>
  <div className="flex gap-5">

    <div className="w-1 bg-[#D4AF37] rounded-full"></div>

    <div className="flex-1">

      <h2 className="text-2xl font-semibold text-[#111827] mb-5">
        18. Tobacco, Alcohol & Prohibited Substances
      </h2>

      <div className="space-y-3 text-black text-[15px] leading-7">

        <p>
          18.1 Anugraha PG for Girls maintains a strict
          Zero-Tolerance Policy towards alcohol, tobacco
          products, cigarettes, vaping devices, hookahs,
          narcotic drugs, banned substances and illegal
          intoxicants.
        </p>

        <p>
          18.2 Possession, storage, consumption, distribution
          or facilitation of such substances within or around
          the PG premises is strictly prohibited.
        </p>

        <p>
          18.3 Residents found violating this policy may
          face immediate eviction, notification to
          parents/guardians, forfeiture of applicable
          payments and reporting to law enforcement
          authorities where required by law.
        </p>

      </div>

    </div>

  </div>
</div>

<div
  id="anti-ragging"
  className="py-10 border-b border-gray-200 scroll-mt-36"
>
  <div className="flex gap-5">

    <div className="w-1 bg-[#D4AF37] rounded-full"></div>

    <div className="flex-1">

      <h2 className="text-2xl font-semibold text-[#111827] mb-5">
        19. Anti-Ragging Policy
      </h2>

      <div className="space-y-3 text-black text-[15px] leading-7">

        <p>
          19.1 Ragging in any form is strictly prohibited.
        </p>

        <p>
          19.2 Any act causing physical, emotional, verbal,
          psychological or mental discomfort, embarrassment,
          intimidation, humiliation or harassment shall be
          treated as ragging.
        </p>

        <p>
          19.3 Residents involved directly or indirectly in
          ragging activities may face immediate eviction and
          legal action wherever applicable.
        </p>

      </div>

    </div>

  </div>
</div>

<div
  id="respectful-conduct"
  className="py-10 border-b border-gray-200 scroll-mt-36"
>
  <div className="flex gap-5">

    <div className="w-1 bg-[#D4AF37] rounded-full"></div>

    <div className="flex-1">

      <h2 className="text-2xl font-semibold text-[#111827] mb-5">
        20. Anti-Harassment & Respectful Conduct
      </h2>

      <div className="space-y-3 text-black text-[15px] leading-7">

        <p>
          20.1 Every resident shall treat fellow residents,
          staff members, visitors and management personnel
          with dignity and respect.
        </p>

        <p>
          20.2 Harassment, bullying, intimidation, threats,
          stalking, cyberbullying, discrimination, abusive
          language or inappropriate conduct shall not be
          tolerated.
        </p>

        <p>
          20.3 Violations may result in disciplinary action,
          including termination of accommodation.
        </p>

      </div>

    </div>

  </div>
</div>

<div
  id="illegal-activities"
  className="py-10 border-b border-gray-200 scroll-mt-36"
>
  <div className="flex gap-5">

    <div className="w-1 bg-[#D4AF37] rounded-full"></div>

    <div className="flex-1">

      <h2 className="text-2xl font-semibold text-[#111827] mb-5">
        21. Illegal Activities
      </h2>

      <div className="space-y-3 text-black text-[15px] leading-7">

        <p>
          21.1 Residents shall not engage in any illegal,
          unlawful, criminal, fraudulent, immoral or
          anti-social activities within or around the
          PG premises.
        </p>

        <p>
          21.2 Any such activity may result in immediate
          eviction and reporting to the relevant authorities.
        </p>

      </div>

    </div>

  </div>
</div>

<div
  id="community-living"
  className="py-10 border-b border-gray-200 scroll-mt-36"
>
  <div className="flex gap-5">

    <div className="w-1 bg-[#D4AF37] rounded-full"></div>

    <div className="flex-1">

      <h2 className="text-2xl font-semibold text-[#111827] mb-5">
        22. Noise & Community Living
      </h2>

      <div className="space-y-3 text-black text-[15px] leading-7">

        <p>
          22.1 Residents shall maintain a peaceful and
          respectful living environment.
        </p>

        <p>
          22.2 Loud music, parties, shouting, gatherings
          or activities causing disturbance to other
          residents are not permitted.
        </p>

        <p>
          22.3 Repeated complaints may result in
          disciplinary action.
        </p>

      </div>

    </div>

  </div>
</div>

<div
  id="room-allocation"
  className="py-10 border-b border-gray-200 scroll-mt-36"
>
  <div className="flex gap-5">

    <div className="w-1 bg-[#D4AF37] rounded-full"></div>

    <div className="flex-1">

      <h2 className="text-2xl font-semibold text-[#111827] mb-5">
        23. Room Allocation & Changes
      </h2>

      <div className="space-y-3 text-black text-[15px] leading-7">

        <p>
          23.1 Room allocation shall be solely at the
          discretion of management.
        </p>

        <p>
          23.2 Requests for room changes may be considered
          subject to availability.
        </p>

        <p>
          23.3 Management reserves the right to reallocate
          rooms whenever operationally necessary.
        </p>

      </div>

    </div>

  </div>
</div>

<div
  id="room-inspection"
  className="py-10 border-b border-gray-200 scroll-mt-36"
>
  <div className="flex gap-5">

    <div className="w-1 bg-[#D4AF37] rounded-full"></div>

    <div className="flex-1">

      <h2 className="text-2xl font-semibold text-[#111827] mb-5">
        24. Room Inspection Rights
      </h2>

      <div className="space-y-3 text-black text-[15px] leading-7">

        <p>
          24.1 Management reserves the right to inspect
          rooms and common areas periodically for
          maintenance, hygiene, security, safety and
          compliance purposes.
        </p>

        <p>
          24.2 Residents are expected to cooperate during
          such inspections.
        </p>

      </div>

    </div>

  </div>
</div>

<div
  id="pets-policy"
  className="py-10 border-b border-gray-200 scroll-mt-36"
>
  <div className="flex gap-5">

    <div className="w-1 bg-[#D4AF37] rounded-full"></div>

    <div className="flex-1">

      <h2 className="text-2xl font-semibold text-[#111827] mb-5">
        25. Pets Policy
      </h2>

      <div className="space-y-3 text-black text-[15px] leading-7">

        <p>
          25.1 Pets are not permitted within the PG premises
          unless specifically approved in writing by
          management.
        </p>

      </div>

    </div>

  </div>
</div>

<div
  id="medical-emergencies"
  className="py-10 border-b border-gray-200 scroll-mt-36"
>
  <div className="flex gap-5">

    <div className="w-1 bg-[#D4AF37] rounded-full"></div>

    <div className="flex-1">

      <h2 className="text-2xl font-semibold text-[#111827] mb-5">
        26. Medical Emergencies
      </h2>

      <div className="space-y-3 text-black text-[15px] leading-7">

        <p>
          26.1 In case of medical emergencies, management
          may contact the resident's emergency contact
          person and arrange immediate assistance.
        </p>

        <p>
          26.2 Any medical expenses incurred shall be borne
          solely by the resident or her family.
        </p>

      </div>

    </div>

  </div>
</div>

<div
  id="social-media"
  className="py-10 border-b border-gray-200 scroll-mt-36"
>
  <div className="flex gap-5">

    <div className="w-1 bg-[#D4AF37] rounded-full"></div>

    <div className="flex-1">

      <h2 className="text-2xl font-semibold text-[#111827] mb-5">
        27. Social Media & Reputation
      </h2>

      <div className="space-y-3 text-black text-[15px] leading-7">

        <p>
          27.1 Residents shall not post false, defamatory,
          misleading, abusive or malicious content about
          the PG, its residents, staff or management on
          public platforms.
        </p>

        <p>
          27.2 Genuine grievances should first be reported
          to management for resolution.
        </p>

      </div>

    </div>

  </div>
</div>

<div
  id="termination"
  className="py-10 border-b border-gray-200 scroll-mt-36"
>
  <div className="flex gap-5">

    <div className="w-1 bg-[#D4AF37] rounded-full"></div>

    <div className="flex-1">

      <h2 className="text-2xl font-semibold text-[#111827] mb-5">
        28. Management's Right to Terminate Accommodation
      </h2>

      <div className="space-y-4 text-black text-[15px] leading-7">

        <p>
          The management reserves the right to terminate
          accommodation without prior notice in cases involving:
        </p>

        <ul className="list-disc pl-8 space-y-2">
          <li>Non-payment of dues</li>
          <li>Violation of PG rules</li>
          <li>Ragging or harassment</li>
          <li>Possession or consumption of prohibited substances</li>
          <li>Criminal or unlawful activities</li>
          <li>Damage to property</li>
          <li>
            Conduct affecting the safety, reputation,
            discipline or peaceful environment of the PG
          </li>
        </ul>

        <p>
          The decision of the management shall be final
          and binding.
        </p>

      </div>

    </div>

  </div>
</div>

<div
  id="force-majeure"
  className="py-10 border-b border-gray-200 scroll-mt-36"
>
  <div className="flex gap-5">

    <div className="w-1 bg-[#D4AF37] rounded-full"></div>

    <div className="flex-1">

      <h2 className="text-2xl font-semibold text-[#111827] mb-5">
        29. Force Majeure
      </h2>

      <div className="space-y-3 text-black text-[15px] leading-7">

        <p>
          The management shall not be liable for any
          interruption of services caused by events beyond
          its reasonable control, including natural disasters,
          fire, floods, pandemics, government restrictions,
          utility failures, strikes, civil disturbances or
          other unforeseen circumstances.
        </p>

      </div>

    </div>

  </div>
</div>

<div
  id="amendments"
  className="py-10 border-b border-gray-200"
>
  <div className="flex gap-5">

    <div className="w-1 bg-[#D4AF37] rounded-full scroll-mt-36"></div>

    <div className="flex-1">

      <h2 className="text-2xl font-semibold text-[#111827] mb-5">
        30. Amendments
      </h2>

      <div className="space-y-3 text-black text-[15px] leading-7">

        <p>
          The management reserves the right to amend,
          modify, add or remove any provision of these
          Terms & Conditions at any time in the interest
          of safety, discipline, administration and
          operational efficiency.
        </p>

      </div>

    </div>

  </div>
</div>
            {/* COPY THIS BLOCK FOR ALL 30 SECTIONS */}

          </div>

        </section>

        {/* DECLARATION */}

       <section
  id="declaration"
  className="py-20"
>
  <div className="max-w-5xl mx-auto px-5">

    <div className="bg-[#111827] rounded-[32px] p-8 md:p-12 shadow-2xl">

      <p className="text-[#D4AF37] uppercase tracking-[4px] text-sm">
        Final Agreement
      </p>

      <h2 className="text-3xl md:text-4xl font-serif text-white mt-3">
        Declaration
      </h2>

      <div className="w-20 h-[2px] bg-[#D4AF37] mt-5"></div>

      <p className="mt-8 text-gray-300 leading-8 text-justify">
        By residing at Anugraha PG for Girls, I acknowledge
        that I have read, understood and agreed to abide by
        all the Terms & Conditions, rules, regulations,
        policies and future amendments issued by the
        management. Failure to comply may result in penalties,
        suspension of facilities, eviction or other actions
        deemed appropriate by the management.
      </p>

      <div className="mt-10 pt-6 border-t border-white/10">

        <p className="text-white">
          For any clarification regarding these rules and
          policies, please contact the management directly.
        </p>

        <p className="text-[#D4AF37] text-lg font-semibold mt-3">
          +91 8050 555 222
        </p>

      </div>

    </div>

  </div>
</section>

      </main>

      <Footer />
    </>
  );
}