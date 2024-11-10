"use client";
import Image from "next/image";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formStatus, setFormStatus] = useState("");
  
  const slides = [
    "/_MG_9128.JPG",
    "/_MG_9120.JPG", 
    "/_MG_8826.JPG",
    "/toplu.jpeg",
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    const object = {};
    formData.forEach((value, key) => {
      object[key] = value;
    });

    object.access_key = "d1204d75-6fc8-449f-b299-328d5e856d1a";

    setFormStatus("Lütfen bekleyin...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(object)
      });

      const json = await response.json();
      
      if (response.status === 200) {
        setFormStatus(json.message);
        form.reset();
        setTimeout(() => {
          setFormStatus("");
        }, 5000);
      } else {
        setFormStatus(json.message);
      }
    } catch (error) {
      console.log(error);
      setFormStatus("Bir hata oluştu!");
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] bg-white">
      <Navbar />

      <main className="flex-1">
        <div className="relative w-full h-[300px] sm:h-[400px] mb-8 sm:mb-16 overflow-hidden">
          <button onClick={prevSlide} className="absolute left-2 sm:left-4 top-1/2 z-10 bg-black/50 text-white p-2 rounded-full">
            &#8592;
          </button>
          <button onClick={nextSlide} className="absolute right-2 sm:right-4 top-1/2 z-10 bg-black/50 text-white p-2 rounded-full">
            &#8594;
          </button>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-500 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide}
                alt={`Koro fotoğrafı ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                priority={index === 0}
                quality={100}
                sizes="100vw"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-8 items-center px-4">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full max-w-6xl">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-8">
                Etkinlik Programımız
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
                Etkinlik programımızı görmek için lütfen bize tıklayın
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  className="rounded-full border border-solid border-transparent bg-black text-white hover:bg-gray-800 text-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base transition-colors"
                  href="#etkinlikler"
                >
                  Konserlerimiz
                </a>
                <a
                  className="rounded-full border border-solid border-gray-200 hover:bg-gray-100 text-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base transition-colors"
                  href="mailto:info@gradiakoro.com"
                >
                  İletişim
                </a>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="border rounded-lg p-4 sm:p-6 bg-white shadow-lg">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">Yaklaşan Etkinlikler</h3>
                <div className="space-y-4">
                  <div className="border-b pb-3">
                    <p className="font-bold">8 Aralık 2024</p>
                    <p className="text-gray-600">Dünya Korolar Günü Festivali</p>
                    <p className="text-sm text-gray-500">
                      <a href="https://www.aassm.org.tr/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Ahmet Adnan Saygun Sanat Merkezi
                      </a>
                    </p>
                  </div>
                   
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full">
            <div className="absolute inset-0">
              <Image
                src="/_MG_9128.JPG"
                alt="Koro arka plan"
                fill
                style={{ objectFit: "cover" }}
                className="opacity-30"
              />
            </div>
            <div className="relative z-10 bg-white/10 p-4 sm:p-8 backdrop-blur-sm max-w-6xl mx-auto py-8 sm:py-16">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Bize Ulaşın</h3>
              <form action="https://api.web3forms.com/submit" method="POST" id="form" onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4 sm:space-y-6">
                <input type="hidden" name="access_key" value="d1204d75-6fc8-449f-b299-328d5e856d1a" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ad Soyad</label>
                    <input
                      type="text"
                      name="name"
                      className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">E-posta</label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Konu</label>
                  <select name="subject" className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500">
                    <option>Genel Bilgi</option>
                    <option>Konser Bilgileri</option>
                    <option>İş Birliği</option>
                    <option>Diğer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Mesajınız</label>
                  <textarea
                    name="message"
                    className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500 h-32"
                    placeholder="Mesajınızı buraya yazabilirsiniz..."
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    Mesaj Gönder
                  </button>
                  {formStatus && (
                    <p className={`mt-4 ${formStatus.includes("başarı") ? "text-green-500" : "text-red-500"}`}>
                      {formStatus}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>

          <div className="w-full max-w-6xl mx-auto mb-8 sm:mb-16">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ahmet Adnan Saygun Dünya Korolar Günü Festivali 2023</h3>
                <p className="text-gray-600 mb-4">
                  2023 yılında gerçekleşen Dünya Korolar Günü Festivali'nde sahne aldığımız performansımızdan bir kesit. 
                  Bu özel günde diğer korolarla birlikte müziğin birleştirici gücünü kutladık.
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <video 
                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                    controls
                    preload="metadata"
                  >
                    <source src="/aasm.mp4" type="video/mp4" />
                    Tarayıcınız video oynatmayı desteklemiyor.
                  </video>
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
