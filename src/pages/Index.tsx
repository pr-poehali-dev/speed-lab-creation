import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedEngine, setSelectedEngine] = useState("");
  const [selectedPower, setSelectedPower] = useState("");
  const [showCallbackForm, setShowCallbackForm] = useState(false);
  const [tuningOptions, setTuningOptions] = useState({
    stage1: false,
    speedLim: false,
    rpm: false,
    noDPF: false,
    noEGR: false,
    noAdBlue: false,
    noSwirl: false,
    dtc: false
  });

  const handleOptionChange = (option: string) => {
    setTuningOptions(prev => ({...prev, [option]: !prev[option]}));
  };

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

  const carBrands = [
    "Audi", "BMW", "Mercedes-Benz", "Volkswagen", "Porsche", "Toyota", "Honda", 
    "Nissan", "Mazda", "Subaru", "Ford", "Chevrolet", "Hyundai", "Kia", "Lexus",
    "Volvo", "Skoda", "Renault", "Peugeot", "Citroen", "Opel", "Mitsubishi", 
    "Land Rover", "Jaguar", "Infiniti", "Acura", "Jeep", "Dodge", "Chrysler"
  ];

  const years = Array.from({length: 30}, (_, i) => 2024 - i);

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Car" size={32} className="text-primary" />
              <span className="text-2xl font-heading font-bold">CAR DIALOG</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-primary transition-colors">Главная</a>
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="hover:text-primary transition-colors">О нас</a>
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
                href="#about" 
                className="hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                О нас
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
                Car
                <br />
                <span className="text-primary">Dialog</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Профессиональная диагностика и чип-тюнинг автомобилей. 
                Увеличение мощности, оптимизация работы двигателя.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg" onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})}>
                  Записаться
                </Button>
                <Button size="lg" variant="outline" className="text-lg" onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}>
                  О нас
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
            <p className="text-xl text-muted-foreground">Диагностика и чип-тюнинг автомобилей</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-8 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 cursor-pointer group"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-heading font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground text-lg">{service.description}</p>
              </Card>
            ))}
          </div>
          
          <div className="mt-20 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-8">
              <h3 className="text-2xl font-heading font-bold mb-6 text-center">Запись на диагностику</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Марка автомобиля</label>
                  <select 
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Выберите марку</option>
                    {carBrands.map((brand) => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </select>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Год выпуска</label>
                    <select 
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="">Год</option>
                      {years.map((year) => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2">Объем (л)</label>
                    <input 
                      type="text"
                      placeholder="2.0"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2">Мощность</label>
                    <input 
                      type="text"
                      placeholder="150"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="Иван Иванов"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Описание проблемы (опционально)</label>
                  <textarea 
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                    rows={3}
                    placeholder="Опишите симптомы или проблему с автомобилем"
                  ></textarea>
                </div>
                
                <Button className="w-full" size="lg">
                  Записаться на диагностику
                </Button>
              </div>
            </Card>
            
            <Card className="p-8">
              <h3 className="text-2xl font-heading font-bold mb-6 text-center">Запись на чип-тюнинг</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Марка автомобиля</label>
                  <select 
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Выберите марку</option>
                    {carBrands.map((brand) => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </select>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Год выпуска</label>
                    <select 
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                    >
                      <option value="">Год</option>
                      {years.map((year) => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2">Объем двигателя (л)</label>
                    <input 
                      type="text"
                      value={selectedEngine}
                      onChange={(e) => setSelectedEngine(e.target.value)}
                      placeholder="1.6, 2.0, 3.0..."
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-2">Мощность (л.с.)</label>
                    <input 
                      type="text"
                      value={selectedPower}
                      onChange={(e) => setSelectedPower(e.target.value)}
                      placeholder="150, 200..."
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-3">Пожалуйста, выберите программные опции:</label>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        checked={tuningOptions.stage1}
                        onChange={() => handleOptionChange('stage1')}
                        className="w-5 h-5 rounded border-border text-primary focus:ring-primary focus:ring-offset-0"
                      />
                      <span className="text-sm group-hover:text-primary transition-colors">Тюнинг Stage-1</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        checked={tuningOptions.speedLim}
                        onChange={() => handleOptionChange('speedLim')}
                        className="w-5 h-5 rounded border-border text-primary focus:ring-primary focus:ring-offset-0"
                      />
                      <span className="text-sm group-hover:text-primary transition-colors">SpeedLim (изменение ограничения скорости)</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        checked={tuningOptions.rpm}
                        onChange={() => handleOptionChange('rpm')}
                        className="w-5 h-5 rounded border-border text-primary focus:ring-primary focus:ring-offset-0"
                      />
                      <span className="text-sm group-hover:text-primary transition-colors">RPM (изменение отсечки по оборотам)</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        checked={tuningOptions.noDPF}
                        onChange={() => handleOptionChange('noDPF')}
                        className="w-5 h-5 rounded border-border text-primary focus:ring-primary focus:ring-offset-0"
                      />
                      <span className="text-sm group-hover:text-primary transition-colors">noDPF (отключение сажевого фильтра)</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        checked={tuningOptions.noEGR}
                        onChange={() => handleOptionChange('noEGR')}
                        className="w-5 h-5 rounded border-border text-primary focus:ring-primary focus:ring-offset-0"
                      />
                      <span className="text-sm group-hover:text-primary transition-colors">noEGR (отключение системы рециркуляции отработанных газов)</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        checked={tuningOptions.noAdBlue}
                        onChange={() => handleOptionChange('noAdBlue')}
                        className="w-5 h-5 rounded border-border text-primary focus:ring-primary focus:ring-offset-0"
                      />
                      <span className="text-sm group-hover:text-primary transition-colors">noAdBlue (отключение системы впрыска мочевины)</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        checked={tuningOptions.noSwirl}
                        onChange={() => handleOptionChange('noSwirl')}
                        className="w-5 h-5 rounded border-border text-primary focus:ring-primary focus:ring-offset-0"
                      />
                      <span className="text-sm group-hover:text-primary transition-colors">noSwirl (отключение вихревых заслонок)</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer group">
                      <input 
                        type="checkbox" 
                        checked={tuningOptions.dtc}
                        onChange={() => handleOptionChange('dtc')}
                        className="w-5 h-5 rounded border-border text-primary focus:ring-primary focus:ring-offset-0"
                      />
                      <span className="text-sm group-hover:text-primary transition-colors">DTC (селективное отключение ошибок)</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="Иван Иванов"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                
                <Button className="w-full" size="lg">
                  Записаться на чип-тюнинг
                </Button>
              </div>
            </Card>
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
                CAR DIALOG — это команда профессионалов с многолетним опытом работы 
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
            
            <Card className="p-8">
              <h3 className="text-2xl font-heading font-bold mb-6 text-center">Оставьте свой номер</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Ваше имя</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="Иван Иванов"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Комментарий (опционально)</label>
                  <textarea 
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                    rows={3}
                    placeholder="Чем мы можем вам помочь?"
                  ></textarea>
                </div>
                
                <Button className="w-full" size="lg">
                  Отправить заявку
                </Button>
              </div>
            </Card>
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-heading font-bold mb-6 text-center">Как нас найти</h3>
            <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-xl">
              <iframe 
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A64d15b8e3b8a8f4ec5f0c3e6d5b6c5e5c5e5c5e5&amp;source=constructor" 
                width="100%" 
                height="450" 
                frameBorder="0"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">СВЯЖИТЕСЬ С НАМИ</h2>
            <p className="text-xl text-muted-foreground mb-2"></p>
            <p className="text-lg text-muted-foreground">Мы подберем актуальные услуги для вашего автомобиля и рассчитаем цену</p>
            <p className="text-lg font-semibold text-primary mt-2"></p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-bold">Контакты</h3>
              <p className="text-lg text-muted-foreground">
                Свяжитесь с нами для консультации по диагностике и чип-тюнингу
              </p>
              <div className="space-y-4 pt-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-muted-foreground">г. Тольятти пр-кт Степана Разина 50</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-muted-foreground">+7 (937) 213-45-47</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">serereme@yandex.ru</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Icon name="Car" size={28} className="text-primary" />
              <span className="text-xl font-heading font-bold">CAR DIALOG</span>
            </div>
            <div className="text-muted-foreground text-sm">
              © 2024 CAR DIALOG. Все права защищены.
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