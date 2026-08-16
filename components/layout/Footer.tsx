import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaChevronRight } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#063327] text-white mt-auto border-t border-white/5 relative overflow-hidden font-body">

      {/* Background Mosque Silhouette (Optional decorative touch) */}
      <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
        <svg width="400" height="150" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M350 150V80C350 60 330 50 330 50C330 50 310 60 310 80V150H350Z" fill="currentColor" />
          <path d="M280 150V40C280 20 250 10 250 10C250 10 220 20 220 40V150H280Z" fill="currentColor" />
          <path d="M190 150V60C190 45 175 35 175 35C175 35 160 45 160 60V150H190Z" fill="currentColor" />
          <path d="M100 150V90C100 75 85 65 85 65C85 65 70 75 70 90V150H100Z" fill="currentColor" />
          <path d="M250 5L255 15H245L250 5Z" fill="currentColor" />
          <path d="M175 25L180 35H170L175 25Z" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8 relative z-10">

        {/* Column 1: Logo, Description & Socials */}
        <div className="col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2 space-y-6 lg:pr-4">
          <Link href="/" className="flex flex-col items-start gap-2 group w-fit">
            <div className="shadow-sm overflow-hidden rounded-lg ">
              <Image
                src="/Almuslims-footer-logo.png"
                alt="AlMuslims Logo"
                width={160}
                height={80}
                style={{ width: 'auto' }}
                className="h-20 object-contain rounded-md"
                unoptimized
              />
            </div>
          </Link>
          <p className="text-sm text-white/70 leading-relaxed font-light">
            Your trusted source for authentic Islamic knowledge. Learn, reflect, and grow — for the sake of Allah.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <span className="block text-[13px] font-bold text-secondary uppercase tracking-widest mb-6">Quick Links</span>
          <ul className="space-y-5 text-[14px] text-white/80">
            <li><Link href="/" className="hover:text-secondary transition-colors flex items-center gap-2"><FaChevronRight size={10} className="text-secondary" /> Home</Link></li>
            <li><Link href="/about" className="hover:text-secondary transition-colors flex items-center gap-2"><FaChevronRight size={10} className="text-secondary" /> About Us</Link></li>
            <li><Link href="/contact" className="hover:text-secondary transition-colors flex items-center gap-2"><FaChevronRight size={10} className="text-secondary" /> Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 3: Categories */}
        <div>
          <span className="block text-[13px] font-bold text-secondary uppercase tracking-widest mb-6">Categories</span>
          <ul className="space-y-4 text-[14px] text-white/80">
            <li><Link href="/categories" className="hover:text-secondary transition-colors flex items-center gap-2"><FaChevronRight size={10} className="text-secondary" /> All Categories</Link></li>
            <li><Link href="/holy-quran" className="hover:text-secondary transition-colors flex items-center gap-2"><FaChevronRight size={10} className="text-secondary" /> Quran</Link></li>
            <li><Link href="/categories?category=hadith" className="hover:text-secondary transition-colors flex items-center gap-2"><FaChevronRight size={10} className="text-secondary" /> Hadith</Link></li>
            <li><Link href="/dua-collection" className="hover:text-secondary transition-colors flex items-center gap-2"><FaChevronRight size={10} className="text-secondary" /> Duas & Azkar</Link></li>
            <li><Link href="/seerah" className="hover:text-secondary transition-colors flex items-center gap-2"><FaChevronRight size={10} className="text-secondary" /> Seerah</Link></li>
            <li><Link href="/names-of-allah" className="hover:text-secondary transition-colors flex items-center gap-2"><FaChevronRight size={10} className="text-secondary" /> 99 Names of Allah</Link></li>
          </ul>
        </div>

        {/* Column 4: Resources */}
        <div>
          <span className="block text-[13px] font-bold text-secondary uppercase tracking-widest mb-6">Resources</span>
          <ul className="space-y-5 text-[14px] text-white/80">
            <li><Link href="/faq" className="hover:text-secondary transition-colors flex items-center gap-2"><FaChevronRight size={10} className="text-secondary" /> FAQ</Link></li>
            <li><Link href="/privacy" className="hover:text-secondary transition-colors flex items-center gap-2"><FaChevronRight size={10} className="text-secondary" /> Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-secondary transition-colors flex items-center gap-2"><FaChevronRight size={10} className="text-secondary" /> Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Column 5: Get In Touch */}
        <div>
          <span className="block text-[13px] font-bold text-secondary uppercase tracking-widest mb-6">Get In Touch</span>
          <div className="space-y-4 text-[14px] text-white/80">
            <div className="flex items-center gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-secondary/20 flex items-center justify-center">
                <FaEnvelope className="text-secondary" size={12} />
              </span>
              <p className="break-all">officialalmuslims@gmail.com</p>
            </div>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="w-full bg-[#04281E] py-5 border-t border-white/5 relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 text-[13px] text-white/50 flex flex-col md:flex-row text-center justify-center items-center gap-4">
          <p>© {new Date().getFullYear()} AlMuslims.com - All rights reserved.</p>
        </div>
      </div>

    </footer>
  );
}