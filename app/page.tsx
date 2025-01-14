import Header from "./components/Header";
import Hero from "./components/Hero";
import DonationSection from "./components/DonationSection";
import Footer from "./components/Footer";
import ProfileCard from "./components/ProfileCard";


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="py-20">
          <ProfileCard
            username="Google-chan"
            bio="Discord TTS Bot thay lời muốn nói. Sẵn sàng phục vụ 23.9/7!"
            avatar="/bot-avatar.webp"
            cover="/bot-cover.webp"
            stats={{
              servers: "2500+",
              users: "200K+",
              commands: "10+"
            }}
          />
        </section>
        <DonationSection />
      </main>
      <Footer />
    </>
  );
}