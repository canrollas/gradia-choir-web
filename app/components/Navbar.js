"use client";
import { useState } from "react";
import Image from "next/image";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-black/[.08] dark:border-white/[.145]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <a href="/" className="flex items-center gap-2 select-none hover:opacity-80 transition-opacity">
            <Image src="/trebleclef.png" alt="Sol anahtarı" width={48} height={48} />
            <span className="text-xl font-bold">Gradia Koro</span>
          </a>
          
          {/* Masaüstü Menü */}
          <div className="hidden sm:flex items-center space-x-8">
            <a href="/konserlerimiz" className="hover:text-gray-600">Konserlerimiz</a>
            <a href="/hakkimizda" className="hover:text-gray-600">Hakkımızda</a>
            <a href="/sef-ve-yonetim" className="hover:text-gray-600">Şef ve Yönetim</a>
            <a href="mailto:info@gradiakoro.com" className="hover:text-gray-600">İletişim</a>
             
          </div>

          {/* Mobil Menü Butonu */}
          <div className="sm:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900">
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobil Menü */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="flex flex-col space-y-4 px-2 pt-2 pb-4">
              <a href="/konserlerimiz" className="hover:text-gray-600 block">Konserlerimiz</a>
              <a href="/hakkimizda" className="hover:text-gray-600 block">Hakkımızda</a>
              <a href="/sef-ve-yonetim" className="hover:text-gray-600 block">Şef ve Yönetim</a>
              <a href="mailto:info@gradiakoro.com" className="hover:text-gray-600 block">İletişim</a>
               
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
