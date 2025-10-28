import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedEngine, setSelectedEngine] = useState("");
  const [selectedPower, setSelectedPower] = useState("");
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
    <div className="min-h-screen pt-24 px-6 pb-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">Наши услуги</h1>
          <p className="text-xl text-muted-foreground">Диагностика и чип-тюнинг автомобилей</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
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
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="p-8">
            <h3 className="text-2xl font-heading font-bold mb-6 text-center">Запись на диагностику</h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Марка автомобиля</label>
                <select 
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                >
                  <option value="">Выберите марку</option>
                  {carBrands.map((brand) => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Год</label>
                  <select 
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                  >
                    <option value="">Год</option>
                    {years.map((year) => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Двигатель</label>
                  <select 
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                    value={selectedEngine}
                    onChange={(e) => setSelectedEngine(e.target.value)}
                  >
                    <option value="">Тип</option>
                    <option value="petrol">Бензин</option>
                    <option value="diesel">Дизель</option>
                    <option value="hybrid">Гибрид</option>
                    <option value="electric">Электро</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Мощность</label>
                  <input
                    type="text"
                    placeholder="л.с."
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                    value={selectedPower}
                    onChange={(e) => setSelectedPower(e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2">Телефон</label>
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              
              <Button className="w-full">
                Записаться на диагностику
              </Button>
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-heading font-bold mb-6 text-center">Калькулятор чип-тюнинга</h3>
            <div className="space-y-4">
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer hover:bg-secondary/50 p-3 rounded-lg transition-colors">
                  <input 
                    type="checkbox" 
                    className="w-5 h-5" 
                    checked={tuningOptions.stage1}
                    onChange={() => handleOptionChange('stage1')}
                  />
                  <span className="font-medium">Stage 1 - увеличение мощности</span>
                </label>
                
                <label className="flex items-center gap-3 cursor-pointer hover:bg-secondary/50 p-3 rounded-lg transition-colors">
                  <input 
                    type="checkbox" 
                    className="w-5 h-5"
                    checked={tuningOptions.speedLim}
                    onChange={() => handleOptionChange('speedLim')}
                  />
                  <span className="font-medium">Снятие ограничения скорости</span>
                </label>
                
                <label className="flex items-center gap-3 cursor-pointer hover:bg-secondary/50 p-3 rounded-lg transition-colors">
                  <input 
                    type="checkbox" 
                    className="w-5 h-5"
                    checked={tuningOptions.rpm}
                    onChange={() => handleOptionChange('rpm')}
                  />
                  <span className="font-medium">Увеличение оборотов двигателя</span>
                </label>
                
                <label className="flex items-center gap-3 cursor-pointer hover:bg-secondary/50 p-3 rounded-lg transition-colors">
                  <input 
                    type="checkbox" 
                    className="w-5 h-5"
                    checked={tuningOptions.noDPF}
                    onChange={() => handleOptionChange('noDPF')}
                  />
                  <span className="font-medium">Отключение DPF</span>
                </label>
                
                <label className="flex items-center gap-3 cursor-pointer hover:bg-secondary/50 p-3 rounded-lg transition-colors">
                  <input 
                    type="checkbox" 
                    className="w-5 h-5"
                    checked={tuningOptions.noEGR}
                    onChange={() => handleOptionChange('noEGR')}
                  />
                  <span className="font-medium">Отключение EGR</span>
                </label>
                
                <label className="flex items-center gap-3 cursor-pointer hover:bg-secondary/50 p-3 rounded-lg transition-colors">
                  <input 
                    type="checkbox" 
                    className="w-5 h-5"
                    checked={tuningOptions.noAdBlue}
                    onChange={() => handleOptionChange('noAdBlue')}
                  />
                  <span className="font-medium">Отключение AdBlue</span>
                </label>
                
                <label className="flex items-center gap-3 cursor-pointer hover:bg-secondary/50 p-3 rounded-lg transition-colors">
                  <input 
                    type="checkbox" 
                    className="w-5 h-5"
                    checked={tuningOptions.noSwirl}
                    onChange={() => handleOptionChange('noSwirl')}
                  />
                  <span className="font-medium">Отключение заслонок Swirl</span>
                </label>
                
                <label className="flex items-center gap-3 cursor-pointer hover:bg-secondary/50 p-3 rounded-lg transition-colors">
                  <input 
                    type="checkbox" 
                    className="w-5 h-5"
                    checked={tuningOptions.dtc}
                    onChange={() => handleOptionChange('dtc')}
                  />
                  <span className="font-medium">Отключение ошибок DTC</span>
                </label>
              </div>
              
              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  Итоговая стоимость рассчитывается индивидуально
                </p>
                <Button className="w-full">
                  Получить расчет
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;
