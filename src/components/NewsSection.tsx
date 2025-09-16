import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Clock, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const news = [
  {
    title: "Nuevo Agente de Valorant Revelado",
    description: "Riot Games presenta el próximo agente que llegará con habilidades nunca antes vistas.",
    image: "https://i.pinimg.com/originals/41/18/ef/4118efe4ef45befc56ff3fab487cb4b6.jpg",
    category: "Valorant",
    time: "hace 2 horas"
  },
  {
    title: "FIFA 26 a punto de salir",
    description: "Se vienen cositas",
    image: "https://zgames.sa/media/magefan_blog/90c4ee95-075c-4e1d-800a-91e02db95282_1_.jpg",
    category: "Esports",
    time: "hace 5 horas"
  },
  {
    title: "Nintendo Direct: Nuevos Juegos Anunciados",
    description: "Mario tendrá una nueva aventura este año junto a otros títulos exclusivos de Nintendo.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMLdsbYaiRC4TC2WtawWv20Z_kPjhxqbXdeA&s",
    category: "Nintendo",
    time: "hace 1 día"
  }
];

export function NewsSection() {
  return (
    <section id="news" className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">
            Últimas Noticias
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mantente al día con las noticias más importantes del mundo gaming
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {news.map((article, index) => (
            <Card key={index} className="group overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                />
                <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">
                  {article.category}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                <CardDescription className="line-clamp-3">{article.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{article.time}</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    Leer más
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg">
            Ver Más Noticias
          </Button>
        </div>
      </div>
    </section>
  );
}