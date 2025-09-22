import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { FeaturedGames } from "./components/FeaturedGames";
import { GameCategories } from "./components/GameCategories";
import { NewsSection } from "./components/NewsSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedGames />
        <GameCategories />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}