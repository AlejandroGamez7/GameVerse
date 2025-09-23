import { useState } from "react";
import { Button } from "./ui/button";
import { GamepadIcon, Menu, Search } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

export function Header() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <GamepadIcon className="h-6 w-6 text-primary" />
          <h1 className="hidden md:block">GameVerse</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-6">
          <a href="#home" className="transition-colors hover:text-primary">
            Inicio
          </a>
          <a href="#games" className="transition-colors hover:text-primary">
            Juegos
          </a>
          <a href="#categories" className="transition-colors hover:text-primary">
            Categorías
          </a>
          <a href="#news" className="transition-colors hover:text-primary">
            Noticias
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-2 relative">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <Search className="h-4 w-4" />
          </Button>

          {/* Animated Search Panel */}
          <div
            className={`
              absolute top-0 left-0 h-full bg-white shadow-lg p-4 transition-transform duration-300
              ${searchOpen ? "translate-x-0" : "-translate-x-full"}
              md:hidden
            `}
          >
            <input
              type="text"
              placeholder="Buscar..."
              className="border rounded px-2 py-1 w-48 focus:outline-none"
            />
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Navegación</SheetTitle>
                <SheetDescription>
                  Explora todo sobre videojuegos
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-4">
                <a href="#home" className="transition-colors hover:text-primary">
                  Inicio
                </a>
                <a href="#games" className="transition-colors hover:text-primary">
                  Juegos
                </a>
                <a href="#categories" className="transition-colors hover:text-primary">
                  Categorias
                </a>
                <a href="#news" className="transition-colors hover:text-primary">
                  Noticias
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
