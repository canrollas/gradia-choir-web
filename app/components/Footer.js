"use client";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-4 items-center justify-center text-sm text-gray-600 p-4 bg-gray-50">
      <div className="flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:info@gradiakoro.com"
        >
          info@gradiakoro.com
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.instagram.com/gradiakoro/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/konserlerimiz"
        >
          Konserlerimiz
        </a>
      </div>
      <div className="flex flex-col sm:flex-row items-center text-xs text-gray-500 gap-2 sm:gap-4">
        <p>gradiakoro@{new Date().getFullYear()}</p>
        <span className="hidden sm:inline">|</span>
        <p>{new Date().toLocaleDateString('tr-TR')}</p>
        <span className="hidden sm:inline">|</span>
        <a 
          href="https://rollastech.com"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          powered by rollastech.com
        </a>
      </div>
    </footer>
  );
}
