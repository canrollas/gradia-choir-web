"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Hakkimizda() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Navbar />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-12">HAKKIMIZDA</h1>
          
          <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
            <div className="lg:w-1/2 space-y-8 text-lg">
              <p>
                Gradia Korosu, 2019 yılında çok sesli olarak kurulmuş ve müzik hayatına dinamik bir şekilde devam eden bir koro topluluğudur. İzmir Yüksek Teknoloji Enstitüsü (İYTE) öğrencileri ve mezunlarının oluşturduğu bu koro, klasik ve modern eserleri seslendirerek geniş bir repertuar sunmakta ve müzikseverlerin beğenisini kazanmaktadır.
              </p>

              <p>
                Kısa sürede birçok önemli konser ve etkinlikte sahne alan Gradia Korosu, İYTE'nin kültürel mirasını yansıtan ve yenilikçi yaklaşımlarıyla dikkat çeken bir topluluktur. Koronun performansları, dinleyicilere müziğin evrensel dilini en iyi şekilde aktararak unutulmaz anlar yaşatmaktadır.
              </p>

              <p>
                Koro, şef Toygar Babacan'ın yönetiminde, çok sesli yapısıyla uyum içinde çalışmakta ve farklı ses gruplarının katkısıyla zengin bir tını yakalamaktadır. Babacan, koro üyelerinin teknik becerilerini ve müzikal duyarlılıklarını geliştirmeye yönelik çalışmalar yapmaktadır.
              </p>
            </div>

            <div className="lg:w-1/2 space-y-8">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/toplu1.jpeg"
                  alt="Gradia Korosu Performans"
                  fill
                  style={{ objectFit: "cover" }}
                  className="hover:scale-105 transition-transform duration-500"
                />
              </div>

               
            </div>
          </div>
        </div>
      </main>

      <Footer />    
     </div>
  );
}
