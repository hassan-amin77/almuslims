"use client";

import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaSearch, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import {
  AllCategoriesIcon,
  QuranIcon,
  DuasIcon,
  SeerahIcon,
  NamesOfAllahIcon,
  FiqhIcon,
} from "@/components/ui/IslamicIcons";

interface NavItem {
  label: string;
  href: string;
  isDropdown?: boolean;
}

const navLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Quran", href: "/holy-quran" },

  { label: "Duas & Azkar", href: "/dua-collection" },
  { label: "Seerah", href: "/seerah" },
  { label: "Categories", href: "/categories", isDropdown: true },
];

const categoryDropdownItems = [
  {
    name: "Quran",
    desc: "Tafsir, recitation rules & Quranic articles",
    href: "/categories?category=quran",
    icon: QuranIcon,
    bgClass: "bg-amber-50 text-amber-900 border-amber-100",
    primaryColor: "#854D0E",
    secondaryColor: "#D48C46",
  },
  {
    name: "Dua",
    desc: "Authentic supplications & daily Adhkar",
    href: "/categories?category=duas",
    icon: DuasIcon,
    bgClass: "bg-orange-50 text-orange-900 border-orange-100",
    primaryColor: "#9A3412",
    secondaryColor: "#D48C46",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSearchClick = () => {
    window.dispatchEvent(new Event("open-global-search"));
  };

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setCategoriesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setCategoriesDropdownOpen(false);
    }, 200);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCategoriesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  return (
    <nav className="w-full bg-white shadow-xs border-b border-gray-100 min-h-[64px] relative z-50">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Brand Logo */}
          <div className="shrink-0">
            <Link href="/" className="flex items-center gap-3 group transition-all">
              <Image 
                src="/logo.png" 
                alt="AlMuslims Logo" 
                width={240} 
                height={60} 
                style={{ width: "auto" }}
                className="h-11 sm:h-14 object-contain transition-transform duration-300 group-hover:scale-105"
                priority
                unoptimized
              />
            </Link>
          </div>

          {/* Center: Navigation Links (Desktop) */}
          <div className="hidden xl:flex items-center space-x-7 font-body">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href === "/categories" && pathname.startsWith("/categories"));

              if (link.isDropdown) {
                return (
                  <div
                    key={link.href}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setCategoriesDropdownOpen(false)}
                      className={`text-sm font-medium transition-colors py-2 flex items-center gap-1.5 cursor-pointer ${
                        isActive 
                          ? "text-primary font-bold border-b-2 border-secondary" 
                          : "text-zinc-600 hover:text-primary"
                      }`}
                    >
                      <span>{link.label}</span>
                      <FaChevronDown
                        className={`text-[10px] transition-transform duration-200 ${
                          categoriesDropdownOpen ? "rotate-180 text-primary" : "text-zinc-400"
                        }`}
                      />
                    </Link>

                    {/* Premium Dropdown Menu */}
                    {categoriesDropdownOpen && (
                      <div className="absolute top-[calc(100%+8px)] right-0 xl:left-1/2 xl:-translate-x-1/2 w-[360px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 py-3 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                        <div className="px-3 py-1.5 mb-2 border-b border-gray-100 flex items-center justify-between">
                          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Explore By Category</span>
                          <Link 
                            href="/categories" 
                            onClick={() => setCategoriesDropdownOpen(false)}
                            className="text-[11px] font-bold text-secondary hover:text-primary transition-colors flex items-center gap-1"
                          >
                            <span>View All</span>
                            <span>→</span>
                          </Link>
                        </div>
                        <div className="grid grid-cols-1 gap-1">
                          {categoryDropdownItems.map((cat) => {
                            const IconComponent = cat.icon;
                            return (
                              <Link
                                key={cat.name}
                                href={cat.href}
                                onClick={() => setCategoriesDropdownOpen(false)}
                                className="flex items-center gap-3.5 p-2.5 rounded-xl hover:bg-[#FAF7F2] transition-all group border border-transparent hover:border-amber-900/10"
                              >
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${cat.bgClass} shadow-2xs group-hover:scale-105 transition-transform duration-300`}>
                                  <IconComponent
                                    className="w-6 h-6"
                                    primaryColor={cat.primaryColor}
                                    secondaryColor={cat.secondaryColor}
                                  />
                                </div>
                                <div className="flex flex-col flex-1">
                                  <span className="text-[13px] font-bold text-gray-800 group-hover:text-primary transition-colors">
                                    {cat.name}
                                  </span>
                                  <span className="text-[11px] text-gray-500 leading-tight mt-0.5">
                                    {cat.desc}
                                  </span>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors py-2 ${
                    isActive 
                      ? "text-primary font-bold border-b-2 border-secondary" 
                      : "text-zinc-600 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right Side: Search + Action (Desktop) */}
          <div className="hidden xl:flex items-center gap-4 text-zinc-600">
            <button 
              onClick={handleSearchClick}
              className="p-2.5 rounded-full hover:bg-gray-50 hover:text-primary transition-colors cursor-pointer"
              aria-label="Search site"
            >
              <FaSearch className="text-sm" />
            </button>
            
          </div>
          
          {/* Mobile Actions and Hamburger */}
          <div className="xl:hidden flex items-center gap-2">
            <button 
              onClick={handleSearchClick}
              className="p-2 text-zinc-600 hover:text-primary cursor-pointer"
              aria-label="Search site"
            >
              <FaSearch size={16} />
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-zinc-700 p-2 focus:outline-none cursor-pointer rounded-lg hover:bg-gray-50"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-zinc-100 font-body px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => {
            if (link.isDropdown) {
              return (
                <div key={link.href} className="border-t border-gray-100 pt-2 mt-2">
                  <div className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-gray-50 text-primary font-bold text-sm">
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex-1"
                    >
                      {link.label}
                    </Link>
                    <button
                      type="button"
                      onClick={() => setMobileCategoriesOpen(!mobileCategoriesOpen)}
                      className="p-1 text-zinc-500"
                    >
                      <FaChevronDown className={`text-xs transition-transform ${mobileCategoriesOpen ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                  
                  {mobileCategoriesOpen && (
                    <div className="pl-2 pr-1 py-2 space-y-1.5">
                      {categoryDropdownItems.map((cat) => {
                        const IconComponent = cat.icon;
                        return (
                          <Link
                            key={cat.name}
                            href={cat.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-3 px-3 py-2 text-xs font-semibold text-zinc-700 hover:text-primary hover:bg-[#FAF7F2] rounded-xl transition-colors"
                          >
                            <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0">
                              <IconComponent className="w-5 h-5" primaryColor={cat.primaryColor} secondaryColor={cat.secondaryColor} />
                            </div>
                            <span>{cat.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary font-bold"
                    : "text-zinc-700 hover:bg-zinc-50 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="pt-3 border-t border-gray-100">
            <Link
              href="/categories"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full block text-center py-3 bg-primary text-white text-xs font-bold rounded-xl hover:bg-primaryHover shadow-xs"
            >
              Explore All Categories
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}