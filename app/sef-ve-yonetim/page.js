"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SefVeYonetim() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-12">ŞEF VE YÖNETİM</h1>
          
          <div className="max-w-6xl mx-auto">
            <div className="relative float-right ml-8 mb-8 w-[400px]">
              <div className="h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/toygar.jpg"
                  alt="Toygar Babacan - Koro Şefi"
                  fill
                  style={{ objectFit: "cover" }}
                  className="hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="text-lg space-y-8">
              <p>
                Toygar Babacan, İzmir Işılay Saygın Güzel Sanatlar Lisesi'nde aldığı temel müzik eğitiminin ardından Yaşar Üniversitesi Bestecilik Bölümü'nden mezun olmuş çok yönlü bir müzisyen ve koro şefidir. Multienstrümantalist olarak birçok enstrümana hakim olan Babacan, müziğin farklı alanlarında kendini geliştirmiştir.
              </p>

              <p>
                Kariyeri boyunca çeşitli koroların şefliğini üstlenen Babacan, özellikle ödüllü Rezonans Korosu ile elde ettiği başarılarla dikkat çekmiştir. Rezonans Korosu'nda gerçekleştirdiği çalışmalarla, çok sesli koro müziğine yenilikçi yaklaşımlar kazandırmış ve yüksek kaliteli performanslarıyla adından söz ettirmiştir.
              </p>

              <p>
                Şu anda Gradia Korosu'nun şefliğini yapan Toygar Babacan, burada da koro müziği alanındaki bilgi ve deneyimini koro üyelerine aktarmaya devam etmektedir. Babacan'ın müzikal liderliği, koro üyelerinin teknik becerilerini ve müzikal duyarlılıklarını geliştirmelerine olanak tanımaktadır. Gradia Korosu, İzmir Yüksek Teknoloji Enstitüsü (İYTE) Polifoni Topluluğu tarafından yönetilmekte olup, topluluğun başkanlığını Elektrik Elektronik Mühendisliği öğrencisi Ada Şahin yürütmektedir.
              </p>

              <p>
                Bu yönetim ekibiyle birlikte Gradia Korosu, koro müziğinin evrensel değerlerini sahneye taşımakta, hem klasik hem de modern repertuarıyla dinleyicilere unutulmaz bir müzik deneyimi sunmaktadır.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />    
    </div>
  );
}
