import { Card, CardContent } from "./ui/card";
import { 
  Sword, 
  Trophy, 
  Gamepad2, 
  Zap, 
  Crown, 
  Target 
} from "lucide-react";

const categories = [
  {
    name: "Acción",
    icon: Sword,
    description: "Juegos llenos de adrenalina y combate",
    color: "text-red-500",
    bgColor: "bg-red-500/10"
  },
  {
    name: "Deportes",
    icon: Trophy,
    description: "Simuladores deportivos realistas",
    color: "text-green-500",
    bgColor: "bg-green-500/10"
  },
  {
    name: "Aventura",
    icon: Gamepad2,
    description: "Historias épicas y mundos por explorar",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10"
  },
  {
    name: "Estrategia",
    icon: Crown,
    description: "Juegos que requieren táctica y planificación",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10"
  },
  {
    name: "FPS",
    icon: Target,
    description: "Shooters en primera persona",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10"
  },
  {
    name: "Esports",
    icon: Zap,
    description: "Competiciones profesionales",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10"
  }
];

export function GameCategories() {
  return (
    <section id="categories" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">
            Categorías de Juegos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explora diferentes géneros y encuentra tu estilo de juego favorito
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="group cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${category.bgColor}`}>
                    <IconComponent className={`h-8 w-8 ${category.color}`} />
                  </div>
                  <h3 className="text-xl mb-2">{category.name}</h3>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}