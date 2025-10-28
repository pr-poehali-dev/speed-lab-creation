import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Главная" },
    { path: "/services", label: "Услуги" },
    { path: "/contacts", label: "Контакты" }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Icon name="Car" size={32} className="text-primary" />
              <span className="text-2xl font-heading font-bold">Автотюнинг ADD</span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path}
                  className={`hover:text-primary transition-colors ${
                    isActive(link.path) ? 'text-primary font-semibold' : ''
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <Link to="/services">
                <Button className="hidden md:block">
                  Записаться
                </Button>
              </Link>
              <button 
                className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Icon name={mobileMenuOpen ? "X" : "Menu"} size={28} />
              </button>
            </div>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path}
                  className={`hover:text-primary transition-colors py-2 ${
                    isActive(link.path) ? 'text-primary font-semibold' : ''
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/services" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full">
                  Записаться
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main>{children}</main>

      <footer className="bg-secondary/30 border-t border-border py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Car" size={28} className="text-primary" />
                <span className="text-xl font-heading font-bold">Автотюнинг ADD</span>
              </div>
              <p className="text-muted-foreground">
                Профессиональная диагностика и чип-тюнинг автомобилей
              </p>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Навигация</h4>
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link 
                    key={link.path}
                    to={link.path}
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>+7 (999) 123-45-67</p>
                <p>info@add-tuning.ru</p>
                <p>Пн-Пт: 9:00 - 20:00</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>© 2024 Автотюнинг ADD. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
