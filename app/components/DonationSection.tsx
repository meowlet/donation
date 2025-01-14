'use client';
import { useState } from 'react';
import Image from 'next/image';
import { toPng } from 'html-to-image';

const PAYMENT_METHODS = {
  MOMO: {
    title: 'Momo',
    qr: '/momo-qr.svg',
    number: '0915575274',
    name: 'NGÔ VĂN ANH KIỆT'
  },
  BANK: {
    title: 'Bank',
    qr: '/bank-qr.svg',
    account: {
      name: 'NGÔ VĂN ANH KIỆT',
      number: '6330632044',
      bank: 'BIDV',
    },
  },
};

// Hàm tải QR code
const downloadQR = async (qrUrl: string, title: string) => {
  try {
    const qrElement = document.getElementById('qr-' + title);
    if (qrElement) {
      const dataUrl = await toPng(qrElement);
      const link = document.createElement('a');
      link.download = `${title.toLowerCase()}-qr.png`;
      link.href = dataUrl;
      link.click();
    }
  } catch (error) {
    console.error('Lỗi khi tải QR code:', error);
  }
};

export default function DonationSection() {
  const [activeMethod, setActiveMethod] = useState<string | null>(null);

  return (
    <section className="py-32 bg-gradient-to-b from-secondary-95 to-surface dark:from-dark-secondary-container dark:to-dark-surface">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-secondary dark:text-dark-secondary mb-16 tracking-tight">
          Cách thức donate
        </h2>
        <div className="space-y-6">
          {Object.entries(PAYMENT_METHODS).map(([key, method]) => (
            <div 
              key={key} 
              className="rounded-2xl overflow-hidden bg-white/50 dark:bg-dark-secondary/5 border border-secondary/10 dark:border-dark-secondary/10 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <button
                className="w-full p-6 text-left font-medium flex justify-between items-center text-secondary dark:text-dark-secondary hover:bg-secondary-80/5 dark:hover:bg-dark-secondary/10 transition-all duration-300"
                onClick={() => setActiveMethod(activeMethod === key ? null : key)}
              >
                <span className="text-lg">{method.title}</span>
                <span className={`transform transition-transform duration-300 ${activeMethod === key ? 'rotate-180' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div className={`transition-all duration-300 ease-in-out ${activeMethod === key ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="p-8 border-t border-secondary/10 dark:border-dark-secondary/10">
                  <div className="flex flex-col items-center gap-8">
                    <div className="relative group">
                      <Image
                        id={`qr-${method.title}`}
                        src={method.qr}
                        alt={`QR Code ${method.title}`}
                        width={280}
                        height={280}
                        className="rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <button
                        onClick={() => downloadQR(method.qr, method.title)}
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/90 dark:bg-dark-surface/90 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm font-medium text-primary dark:text-dark-primary hover:bg-white dark:hover:bg-dark-surface"
                      >
                        Tải QR code
                      </button>
                    </div>
                    
                    <div className="text-center px-4 py-3 bg-secondary-95/50 dark:bg-dark-secondary/10 rounded-xl">
                      <p className="text-sm text-secondary-50 dark:text-dark-secondary/80">
                        Scan bằng app Momo hoặc ngân hàng
                      </p>
                    </div>

                    {'account' in method ? (
                      <div className="text-center space-y-3 text-secondary-50 dark:text-dark-secondary/80">
                        <p className="font-medium">Tên TK: {method.account.name}</p>
                        <p className="font-medium">Số TK: {method.account.number}</p>
                        <p className="font-medium">Ngân hàng: {method.account.bank}</p>
                      </div>
                    ) : (
                      <div className="text-center space-y-3 text-secondary-50 dark:text-dark-secondary/80">
                        <p className="font-medium">Tên: {method.name}</p>
                        <p className="font-medium">Số điện thoại: {method.number}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}