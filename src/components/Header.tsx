import { Button } from "./ui/button";
import { GamepadIcon, Menu, Search, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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

          {/* Search Bar */}
          <div className="relative flex items-center">
            <AnimatePresence>
              {isSearchOpen && (
                <motion.div
                  className="relative overflow-hidden rounded-full border border-input bg-background flex items-center"
                  initial={{ width: 0 }}
                  animate={{ width: "250px" }}
                  exit={{ width: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Buscar juegos..."
                    className="w-full pl-10 pr-4 py-2 bg-transparent border-none text-foreground focus:outline-none focus:ring-2 focus:ring-primary rounded-full"
                    autoFocus
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsSearchOpen((prev) => !prev)}
              className="ml-2 rounded-full transition-all duration-300 ease-out"
            >
              {isSearchOpen ? <X className="h-4 w-4" /> : <Search className="h-4 w-4" />}
            </Button>
          </div>
        </nav>

        {/* Actions / Mobile Menu */}
        <div className="flex items-center space-x-2">
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Navegación</SheetTitle>
                <SheetDescription>Explora todo sobre videojuegos</SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col space-y-4 mt-4">
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

                {/* Mobile Search */}
                <div className="relative w-full mt-4">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Buscar juegos..."
                    className="w-full pl-10 pr-4 py-2 rounded-full border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
