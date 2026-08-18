"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const stories = [
   {
      quote: "Rudraksha Properties made the entire buying process transparent and stress-free. We got a T&CP approved plot in Super Corridor at an honest price. Highly recommended!",
      name: "Rajesh Sharma",
      role: "Property Buyer, Indore",
      rating: 5,
      image: "/Gallery/gallery-1.jpg",
      heading: "Transparent process, legal plot, zero stress."
   },
   {
      quote: "We were looking for a plot in Pithampur for our family home. Dharmendra sir personally guided us and we got a perfect plot within our budget. The documentation was clean and fast.",
      name: "Priya & Suresh Patel",
      role: "Plot Buyers, Pithampur",
      rating: 5,
      image: "/Gallery/gallery-2.jpg",
      heading: "Personal attention that made all the difference."
   },
   {
      quote: "Investing in a commercial space through Rudraksha was the best business decision I made. Their team understood my requirements perfectly and found exactly what I needed.",
      name: "Anil Joshi",
      role: "Commercial Space Buyer, Indore",
      rating: 5,
      image: "/Gallery/gallery-3.jpg",
      heading: "The best business investment decision I made."
   },
   {
      quote: "The team's knowledge of the Ujjain Road corridor was impressive. They showed us multiple options and helped us pick the one with the best long-term value. 4.8 stars is well deserved!",
      name: "Kavita Mishra",
      role: "Investor, Ujjain Road",
      rating: 5,
      image: "/Gallery/gallery-4.jpg",
      heading: "Expertise and integrity combined."
   },
   {
      quote: "We gave Rudraksha Properties the contract for our turnkey home construction and they delivered beyond expectations. The quality of material and finishing was excellent.",
      name: "Mohit & Deepa Choudhary",
      role: "Turnkey Construction Client",
      rating: 5,
      image: "/Gallery/gallery-5.jpg",
      heading: "Construction quality that exceeded expectations."
   },
   {
      quote: "I bought agricultural land through Rudraksha near Betma Road. Suraj sir coordinated multiple site visits and helped with all the paperwork. Professional team!",
      name: "Harish Verma",
      role: "Agricultural Land Buyer",
      rating: 5,
      image: "/Gallery/gallery-6.jpg",
      heading: "Professional coordination at every step."
   }
];

export function RealJourneys() {
   const [index, setIndex] = useState(0);
   const [dbStories, setDbStories] = useState<any[]>([]);

   useEffect(() => {
      // API fetch disabled to keep static real estate client reviews
   }, []);

   const displayStories = dbStories.length > 0 ? dbStories : stories;

   const next = () => {
      setIndex((prev) => (prev + 1) % displayStories.length);
   };

   const prev = () => {
      setIndex((prev) => (prev - 1 + displayStories.length) % displayStories.length);
   };

   return (
      <section className="w-full bg-[#f9f8f6] py-24 font-sans border-t border-black/5 overflow-hidden">
         <div className="max-w-[1400px] mx-auto px-6">
            
            {/* Top Bar / Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
               <div>
                  <motion.span 
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     className="text-[10px] font-black uppercase tracking-[0.4em] text-black/20 mb-4 block"
                  >
                     Verified Feedback
                  </motion.span>
                  <AnimatePresence mode="wait">
                     <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-[32px] md:text-[54px] font-black uppercase tracking-tighter leading-[1] text-black max-w-[800px]"
                     >
                        {displayStories[index].heading}
                     </motion.div>
                  </AnimatePresence>
               </div>

               {/* Right Part (Social Proof) */}
               <div className="lg:max-w-[300px] flex flex-col items-start lg:items-end lg:text-right">
                  <div className="flex -space-x-3 mb-3">
                     {[
                        "/Gallery/gallery-6.jpg",
                        "/Gallery/gallery-7.jpg",
                        "/Gallery/gallery-8.jpg",
                        "/Gallery/gallery-9.jpg",
                        "/Gallery/gallery-10.jpg"
                     ].map((url, i) => (
                        <div key={i} className="w-9 h-9 rounded-full border-2 border-white bg-neutral-200 overflow-hidden shadow-sm">
                           <img src={url} alt={`Client feedback avatar ${i + 1}`} className="w-full h-full object-cover" />
                        </div>
                     ))}
                  </div>
                  <div className="flex gap-0.5 text-black mb-3">
                     {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                  </div>
                  <p className="text-[12px] text-black/40 font-semibold leading-relaxed uppercase tracking-tight italic">
                     Honest, transparent, and genuinely helpful. I trust Rudraksha Properties completely.
                  </p>
               </div>
            </div>

            {/* --- MAIN FEATURED CARD --- */}
            <div className="relative bg-[#1c1c1c] rounded-[1rem] md:rounded-[1.5rem] overflow-hidden min-h-[400px] lg:h-[420px] flex flex-col lg:flex-row">

               {/* LEFT SIDE: QUOTE & NAVIGATION */}
               <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-between z-10">
                  <AnimatePresence mode="wait">
                     <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="max-w-xl"
                     >
                        <div className="flex gap-2 text-primary mb-6">
                           {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                 key={i}
                                 className={`w-6 h-6 md:w-8 md:h-8 ${i < displayStories[index].rating ? 'fill-current' : 'text-white/10'}`}
                              />
                           ))}
                        </div>
                        <p className="text-[18px] md:text-[24px] lg:text-[32px] font-medium text-white/90 leading-[1.3] tracking-tight mb-8">
                           "{displayStories[index].quote}"
                        </p>
                     </motion.div>
                  </AnimatePresence>

                  <div className="flex items-center gap-6">
                     <div className="flex gap-3">
                        <button
                           onClick={prev}
                           className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white transition-all group"
                        >
                           <ChevronLeft className="w-5 h-5 group-active:-translate-x-1" />
                        </button>
                        <button
                           onClick={next}
                           className="w-11 h-11 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center text-black hover:bg-primary transition-all group"
                        >
                           <ChevronRight className="w-5 h-5 group-active:translate-x-1" />
                        </button>
                     </div>

                     <div className="flex gap-2">
                        {displayStories.map((_, i) => (
                           <div
                              key={i}
                              className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${index === i ? 'w-4 bg-primary' : 'bg-white/20'}`}
                           />
                        ))}
                     </div>
                  </div>
               </div>

               {/* RIGHT SIDE: IMAGE & BIO */}
               <div className="flex-1 relative min-h-[350px] lg:min-h-0">
                  <AnimatePresence mode="wait">
                     <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 p-3 lg:p-7"
                     >
                        <div className="relative w-full h-full rounded-[1rem] md:rounded-[1.5rem] overflow-hidden">
                           <img
                              src={displayStories[index].image}
                              className="w-full h-full object-cover grayscale-[0.2] contrast-[1.1]"
                              alt={displayStories[index].name}
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                           <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                              <h4 className="text-[18px] md:text-[22px] font-bold text-white uppercase tracking-tight leading-none mb-1">
                                 {displayStories[index].name}
                              </h4>
                              <p className="text-white/50 text-[12px] md:text-[13px] font-medium uppercase tracking-widest italic">{displayStories[index].role}</p>
                           </div>
                        </div>
                     </motion.div>
                  </AnimatePresence>
               </div>

            </div>

         </div>
      </section>
   );
}
