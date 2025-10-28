import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      icon: "Search",
      title: "Компьютерная диагностика",
      description: "Полная диагностика всех систем автомобиля с использованием профессионального оборудования"
    },
    {
      icon: "Zap",
      title: "Чип-тюнинг",
      description: "Увеличение мощности и крутящего момента двигателя, оптимизация расхода топлива"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">
                Car
                <br />
                <span className="text-primary">ADD Tuning</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Профессиональная диагностика и чип-тюнинг автомобилей. 
                Увеличение мощности, оптимизация работы двигателя.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/services">
                  <Button size="lg" className="text-lg">
                    Записаться
                  </Button>
                </Link>
                <Link to="/contacts">
                  <Button size="lg" variant="outline" className="text-lg">
                    Связаться с нами
                  </Button>
                </Link>
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

      <section className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Диагностика и чип-тюнинг автомобилей</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Link key={index} to="/services">
                <Card 
                  className="p-8 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer group h-full"
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon name={service.icon} size={32} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-heading font-semibold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground text-lg">{service.description}</p>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/services">
              <Button size="lg">
                Все услуги
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">Готовы улучшить свой автомобиль?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Запишитесь на диагностику или чип-тюнинг прямо сейчас
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/services">
              <Button size="lg" className="text-lg">
                Записаться на услугу
              </Button>
            </Link>
            <Link to="/contacts">
              <Button size="lg" variant="outline" className="text-lg">
                Связаться с нами
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
