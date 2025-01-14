import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-surface/60 dark:bg-dark-surface/60 backdrop-blur-xl border-b border-outline/10 dark:border-dark-outline/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <span className="font-medium text-lg text-primary/90 dark:text-dark-primary/90 hover:text-primary dark:hover:text-dark-primary transition-colors">
          Google-chan
        </span>
        <ThemeToggle />
      </div>
    </header>
  );
}
