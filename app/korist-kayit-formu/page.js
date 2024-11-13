"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function KoristKayitFormu() {
  const [formStatus, setFormStatus] = useState("");

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
      <br />
      <br />
      <br />
      <div className="max-w-md mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Korist Kayıt Formu
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Lütfen bilgilerinizi doldurunuz
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="access_key" value="d1204d75-6fc8-449f-b299-328d5e856d1a" />
          
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">Ad Soyad</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Ad Soyad"
              />
            </div>
            <br />
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Email adresi"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Kayıt Ol
            </button>
          </div>

          {formStatus && (
            <div className="mt-3 text-center">
              <p className={`text-sm ${formStatus.includes("başarı") ? "text-green-600" : "text-red-600"}`}>
                {formStatus}
              </p>
            </div>
          )}
        </form>
      </div>
       
    </div>
  );
}
