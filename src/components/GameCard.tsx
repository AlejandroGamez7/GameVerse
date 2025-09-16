import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Star, Users, Calendar } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface GameCardProps {
  title: string;
  description: string;
  image: string;
  genre: string;
  rating: number;
  players: string;
  releaseYear: string;
  featured?: boolean;
}

export function GameCard({ 
  title, 
  description, 
  image, 
  genre, 
  rating, 
  players, 
  releaseYear, 
  featured = false 
}: GameCardProps) {
  return (
    <Card className={`group overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 ${featured ? 'border-primary' : ''}`}>
      <div className="relative overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform group-hover:scale-105"
        />
        {featured && (
          <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">
            Destacado
          </Badge>
        )}
        <Badge className="absolute top-2 right-2 bg-secondary text-secondary-foreground">
          {genre}
        </Badge>
      </div>
      
      <CardHeader>
        <CardTitle className="line-clamp-1">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm">{rating}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{players}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{releaseYear}</span>
          </div>
        </div>
        
        <Button className="w-full">
          Ver Detalles
        </Button>
      </CardContent>
    </Card>
  );
}