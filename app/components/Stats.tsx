export default function Stats() {
  return (
    <section className="py-20 bg-tertiary-95 dark:bg-dark-tertiary-container">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="p-6 rounded-2xl bg-tertiary-90/50 dark:bg-dark-tertiary/10">
            <h3 className="text-4xl font-bold text-tertiary dark:text-dark-tertiary mb-2">3,000+</h3>
            <p className="text-tertiary-50 dark:text-dark-tertiary/80">Server đang sử dụng</p>
          </div>
          <div className="p-6 rounded-2xl bg-tertiary-90/50 dark:bg-dark-tertiary/10">
            <h3 className="text-4xl font-bold text-tertiary dark:text-dark-tertiary mb-2">1M+</h3>
            <p className="text-tertiary-50 dark:text-dark-tertiary/80">Người dùng</p>
          </div>
          <div className="p-6 rounded-2xl bg-tertiary-90/50 dark:bg-dark-tertiary/10">
            <h3 className="text-4xl font-bold text-tertiary dark:text-dark-tertiary mb-2">24/7</h3>
            <p className="text-tertiary-50 dark:text-dark-tertiary/80">Thời gian hoạt động</p>
          </div>
        </div>
      </div>
    </section>
  );
}