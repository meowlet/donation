"use client";

import Image from "next/image";
import Head from "next/head";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      <Head>
        <title>404</title>
      </Head>
      <div className="text-center space-y-8">
        <div className="animate-fade-in">
          <h1 className="text-7xl font-bold text-primary dark:text-dark-primary mb-4">
            404
          </h1>
          <p className="text-lg text-on-surface/70 dark:text-dark-on-surface/70 mb-4">
            Oops! Lạc đường mất rồi.
          </p>
          <p className="text-base text-on-surface/50 dark:text-dark-on-surface/50 animate-bounce">
            Click vô Thiếu Tá để về trang chủ nè!
          </p>
        </div>

        <div className="relative">
          <a href="/">
            <div className="relative mx-auto cursor-pointer">
              <Image
                src="/lena.png"
                alt="Lena"
                fill
                className="object-contain transition-all duration-300 hover:scale-105"
                priority
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
