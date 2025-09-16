import { GameCard } from "./GameCard";

const featuredGames = [
  {
    title: "Valorant",
    description: "Shooter táctico 5v5 con habilidades únicas. Compite en emocionantes partidas llenas de estrategia y precisión.",
    image: "https://wallpapers.com/images/featured/valorant-305kescxw5dpup7y.jpg",
    genre: "FPS Táctico",
    rating: 4.8,
    players: "10 jugadores",
    releaseYear: "2020",
    featured: true
  },
  {
    title: "FIFA 25",
    description: "La experiencia futbolística más realista. Juega con tus equipos favoritos en el simulador de fútbol más popular.",
    image: "https://images4.alphacoders.com/137/thumb-1920-1371791.jpeg",
    genre: "Deportes",
    rating: 4.3,
    players: "1-4 jugadores",
    releaseYear: "2023",
    featured: true
  },
  {
    title: "New Super Mario Bros",
    description: "El clásico aventurero de Nintendo. Acompaña a Mario en sus increíbles aventuras por el Reino Champiñón.",
    image: "https://cdn.wallpapersafari.com/68/5/3IXMBw.jpg",
    genre: "Plataformas",
    rating: 4.9,
    players: "1-2 jugadores",
    releaseYear: "1985",
    featured: true
  },
  {
    title: "Inazuma Eleven Victory Road",
    description: "Fútbol con superpoderes. Vive emocionantes partidos con técnicas especiales y una historia épica.",
    image: "https://gaming-cdn.com/images/products/17586/orig/inazuma-eleven-victory-road-pc-steam-cover.jpg?v=1753101708",
    genre: "RPG Deportivo",
    rating: 4.6,
    players: "1 jugador",
    releaseYear: "2025"
  },
  {
    title: "League of Legends",
    description: "MOBA competitivo 5v5. Elige tu campeón y lucha por la victoria en la Grieta del Invocador.",
    image: "https://images.hdqwalls.com/wallpapers/splash-art-league-of-legends-4k-hu.jpg",
    genre: "MOBA",
    rating: 4.5,
    players: "10 jugadores",
    releaseYear: "2009"
  },
  {
    title: "Minecraft",
    description: "Construye, explora y sobrevive. Crea mundos infinitos con tu imaginación como único límite.",
    image: "https://wallpapers.com/images/featured/fondos-de-minecraft-cfljc4haleghnajo.jpg",
    genre: "Sandbox",
    rating: 4.7,
    players: "1-Ilimitado",
    releaseYear: "2011"
  }
];

export function FeaturedGames() {
  return (
    <section id="games" className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Juegos Destacados
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Descubre los títulos más populares y emocionantes del mundo gaming
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredGames.map((game, index) => (
            <GameCard key={index} {...game} />
          ))}
        </div>
      </div>
    </section>
  );
}