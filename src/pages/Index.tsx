import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    {
      icon: "Wrench",
      title: "Техническое обслуживание",
      description: "Полный комплекс работ по диагностике и обслуживанию автомобилей премиум-класса"
    },
    {
      icon: "Paintbrush",
      title: "Детейлинг",
      description: "Профессиональная химчистка, полировка и защита кузова керамическими покрытиями"
    },
    {
      icon: "Zap",
      title: "Тюнинг и модификация",
      description: "Увеличение мощности двигателя, доработка подвески, установка спортивных компонентов"
    },
    {
      icon: "Shield",
      title: "Защита и оклейка",
      description: "Антигравийные пленки, виниловая оклейка, бронирование оптики и фар"
    }
  ];

  const portfolio = [
    {
      title: "Porsche 911 GT3",
      category: "Тюнинг",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "BMW M5 Competition",
      category: "Детейлинг",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Mercedes-AMG GT",
      category: "Защита",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const blogPosts = [
    {
      title: "Как подготовить автомобиль к треку",
      date: "15 октября 2024",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Керамические покрытия: мифы и реальность",
      date: "10 октября 2024",
      image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Топ-5 модификаций для вашего BMW",
      date: "5 октября 2024",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Car" size={32} className="text-primary" />
              <span className="text-2xl font-heading font-bold">LAB OF SPEED</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-primary transition-colors">Главная</a>
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
              <a href="#about" className="hover:text-primary transition-colors">О нас</a>
              <a href="#blog" className="hover:text-primary transition-colors">Блог</a>
              <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <div className="flex items-center gap-4">
              <Button className="hidden md:block">
                Записаться
              </Button>
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
              <a 
                href="#home" 
                className="hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Главная
              </a>
              <a 
                href="#services" 
                className="hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Услуги
              </a>
              <a 
                href="#portfolio" 
                className="hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Портфолио
              </a>
              <a 
                href="#about" 
                className="hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                О нас
              </a>
              <a 
                href="#blog" 
                className="hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Блог
              </a>
              <a 
                href="#contacts" 
                className="hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Контакты
              </a>
              <Button 
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Записаться
              </Button>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
                Лаборатория
                <br />
                <span className="text-primary">скорости</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Профессиональный автосервис полного цикла для автомобилей премиум-класса.
                Тюнинг, детейлинг, техническое обслуживание.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg">
                  Наши услуги
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  Портфолио
                </Button>
              </div>
            </div>
            <div className="relative h-[500px] animate-fade-in">
              <img
                src="https://cdn.poehali.dev/projects/6d5dac61-2235-4c93-9ad6-0d9340e02776/files/c9df873a-1ce7-4a14-a5cc-62b840b9c3b9.jpg"
                alt="Спортивный автомобиль"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Полный спектр работ для вашего автомобиля</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer group"
              >
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Портфолио</h2>
            <p className="text-xl text-muted-foreground">Наши последние проекты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-primary text-sm font-semibold">{project.category}</span>
                    <h3 className="text-2xl font-heading font-bold mt-2">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://cdn.poehali.dev/projects/6d5dac61-2235-4c93-9ad6-0d9340e02776/files/55606695-8a41-4e05-9974-03b7bb963097.jpg"
                alt="Наша команда"
                className="w-full h-[400px] object-cover rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-heading font-bold">О компании</h2>
              <p className="text-lg text-muted-foreground">
                LAB OF SPEED — это команда профессионалов с многолетним опытом работы 
                с автомобилями премиум и спортивного класса.
              </p>
              <p className="text-lg text-muted-foreground">
                Мы используем только оригинальное оборудование и сертифицированные материалы. 
                Каждый проект — это индивидуальный подход и внимание к деталям.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div>
                  <div className="text-4xl font-heading font-bold text-primary">12+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div>
                  <div className="text-4xl font-heading font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
                <div>
                  <div className="text-4xl font-heading font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Блог</h2>
            <p className="text-xl text-muted-foreground">Полезные статьи и новости</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:border-primary transition-all duration-300 cursor-pointer group">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6">
                  <div className="text-sm text-primary mb-3">{post.date}</div>
                  <h3 className="text-xl font-heading font-semibold group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-heading font-bold">Контакты</h2>
              <p className="text-lg text-muted-foreground">
                Свяжитесь с нами для консультации или записи на обслуживание
              </p>
              <div className="space-y-4 pt-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-muted-foreground">г. Москва, ул. Автомобильная, 15</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">info@labofspeed.ru</div>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Сообщение</label>
                  <textarea 
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                    rows={4}
                    placeholder="Расскажите о вашем автомобиле и желаемых услугах"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Icon name="Car" size={28} className="text-primary" />
              <span className="text-xl font-heading font-bold">LAB OF SPEED</span>
            </div>
            <div className="text-muted-foreground text-sm">
              © 2024 LAB OF SPEED. Все права защищены.
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Youtube" size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;