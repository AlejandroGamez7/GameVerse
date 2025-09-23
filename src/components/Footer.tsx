import { GamepadIcon, Twitter, Instagram, Youtube, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/20 border-t">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GamepadIcon className="h-6 w-6 text-primary" />
              <h3>GameVerse</h3>
            </div>
            <p className="text-muted-foreground">
              Tu portal definitivo al mundo gaming. Descubre, juega y conecta con la comunidad gamer.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Games */}
          <div className="space-y-4">
            <h4>Juegos</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Valorant
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                FIFA 24
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Mario Bros
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Inazuma Eleven
              </a>
            </nav>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h4>Comunidad</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Foros
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Discord
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Torneos
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Guías
              </a>
            </nav>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4>Soporte</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Centro de Ayuda
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Contacto
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacidad
              </a>
            </nav>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 GameVerse. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}