export default function Hero() {
  return (
    <section className="relative py-32 text-center bg-gradient-to-b from-primary-95 to-surface dark:from-dark-primary-container dark:to-dark-surface overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative animate-fadeIn">
        <h1 className="text-5xl md:text-7xl font-bold text-primary dark:text-dark-primary mb-8 tracking-tight">
          Donate cho <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-tertiary">Google-chan</span>
        </h1>
        <div className="space-y-6">
          <p className="text-xl md:text-2xl text-primary-50/90 dark:text-dark-primary/80 max-w-2xl mx-auto leading-relaxed">
            Mọi đóng góp của các bạn sẽ là động lực để mình tiếp tục phát triển bot trong tương lai
          </p>
          
          <div className="max-w-2xl mx-auto bg-white/50 dark:bg-dark-primary/5 backdrop-blur-sm rounded-xl p-6 border border-primary/10 dark:border-dark-primary/10">
            <p className="text-base md:text-lg text-primary-50/90 dark:text-dark-primary/80 leading-relaxed">
              Mới đây thôi, bot đã phải offline khoảng 3-4 ngày. Sau khi nhận được report, mình kiểm tra thì phát hiện bot sập do chưa được shard. Đây cũng là lúc mình nhận ra bot đã lớn đến chừng nào. Để đảm bảo bot hoạt động ổn định 24/7, mình cần chút kinh phí để sắm cho em nó một chỗ hosting tốt hơn. Rất mong nhận được sự giúp đỡ từ các bạn! 🙏
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}