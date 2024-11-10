"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Konserlerimiz() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-12">KONSERLERİMİZ</h1>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-6">Yaklaşan Konserler</h2>
              
              <div className="space-y-6">
                <a href="https://www.aassm.org.tr/" target="_blank" rel="noopener noreferrer" className="block hover:bg-blue-50 transition-colors rounded-lg">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-100 rounded-lg p-3 text-center min-w-[80px]">
                        <div className="text-sm text-blue-600">ARALIK</div>
                        <div className="text-2xl font-bold text-blue-800">8</div>
                        <div className="text-sm text-blue-600">2024</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">Dünya Korolar Günü Festivali</h3>
                        <p className="text-gray-600 mt-1">Ahmet Adnan Saygun Sanat Merkezi</p>
                        <p className="text-gray-500 text-sm mt-2">
                          Dünya Korolar Günü kapsamında gerçekleştirilecek özel konserde, 
                          repertuarımızdan seçkin eserleri seslendirecek ve diğer korolarla 
                          birlikte sahne alacağız.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-6">Geçmiş Konserler</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-gray-300 pl-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-100 rounded-lg p-3 text-center min-w-[80px]">
                      <div className="text-sm text-gray-600">ARALIK</div>
                      <div className="text-2xl font-bold text-gray-800">10</div>
                      <div className="text-sm text-gray-600">2023</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Dünya Korolar Günü Festivali 2023</h3>
                      <p className="text-gray-600 mt-1">Ahmet Adnan Saygun Sanat Merkezi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
