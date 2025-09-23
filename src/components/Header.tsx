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
          {/* Search Bar inside Nav */}
          <Sheet open={isSearchOpen} onOpenChange={setIsSearchOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Search className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <AnimatePresence>
              {isSearchOpen && (
                <SheetContent
                  side="right"
                  className="w-1/4 max-w-[400px] p-4 bg-background/95 backdrop-blur"
                >
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <div className="flex items-center justify-center">
                      <div className="relative w-full">
                        <input
                          type="text"
                          placeholder="Buscar juegos..."
                          className="w-full pl-8 pr-4 py-2 rounded-full border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <Search
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"
                        />
                      </div>
                    </div>
                  </motion.div>
                </SheetContent>
              )}
            </AnimatePresence>
          </Sheet>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-2">
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
                {/* Mobile Search */}
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Buscar juegos..."
                    className="w-full pl-8 pr-4 py-2 rounded-full border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Search
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"
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