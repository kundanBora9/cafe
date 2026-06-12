import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FindUs from "@/components/FindUs";
import OurStory from "@/components/OurStory";
import MenuSection from "@/components/MenuSection";
import Gallery from "@/components/Gallery";
import Reels from "@/components/Reels";
import Testimonials from "@/components/Testimonials";
import Locations from "@/components/Locations";
import Reservation from "@/components/Reservation";
import InstagramFeed from "@/components/InstagramFeed";
import Footer from "@/components/Footer";
import Petals from "@/components/Petals";

export default function Home() {
  return (
    <div data-testid="home-page" className="relative">
      <Petals count={16} />
      <Header />
      <main>
        <Hero />
        <FindUs />
        <OurStory />
        <MenuSection />
        <Gallery />
        <Reels />
        <Testimonials />
        <Locations />
        <Reservation />
        <InstagramFeed />
      </main>
      <Footer />
    </div>
  );
}
