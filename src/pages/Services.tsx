import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState, useMemo } from "react";

const Services = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
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
    dtc: false,
    euro2: false,
    noImmobilizer: false
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

  const carData = {
    "Audi": ["A1", "A3", "A4", "A5", "A6", "A7", "A8", "Q3", "Q5", "Q7", "Q8", "TT", "R8"],
    "BMW": ["1 Series", "2 Series", "3 Series", "4 Series", "5 Series", "6 Series", "7 Series", "8 Series", "X1", "X2", "X3", "X4", "X5", "X6", "X7", "Z4", "M2", "M3", "M4", "M5"],
    "Mercedes-Benz": ["A-Class", "B-Class", "C-Class", "E-Class", "S-Class", "CLA", "CLS", "GLA", "GLB", "GLC", "GLE", "GLS", "G-Class", "AMG GT"],
    "Volkswagen": ["Polo", "Golf", "Jetta", "Passat", "Tiguan", "Touareg", "Arteon", "T-Roc", "T-Cross"],
    "Toyota": ["Corolla", "Camry", "RAV4", "Land Cruiser", "Highlander", "C-HR", "Yaris", "Avalon", "4Runner"],
    "Honda": ["Civic", "Accord", "CR-V", "HR-V", "Pilot", "Fit", "Odyssey"],
    "Nissan": ["Qashqai", "X-Trail", "Juke", "Leaf", "Navara", "Patrol", "GT-R"],
    "Mazda": ["Mazda3", "Mazda6", "CX-3", "CX-5", "CX-9", "MX-5"],
    "Ford": ["Focus", "Fiesta", "Mondeo", "Mustang", "Kuga", "Explorer", "Ranger", "F-150"],
    "Chevrolet": ["Cruze", "Malibu", "Camaro", "Corvette", "Tahoe", "Suburban"],
    "Hyundai": ["Solaris", "Elantra", "Sonata", "Tucson", "Santa Fe", "Creta", "Kona"],
    "Kia": ["Rio", "Cerato", "Optima", "Sportage", "Sorento", "Seltos", "Stinger"],
    "Lexus": ["IS", "ES", "GS", "LS", "NX", "RX", "GX", "LX", "UX"],
    "Volvo": ["S60", "S90", "V60", "V90", "XC40", "XC60", "XC90"],
    "Skoda": ["Fabia", "Rapid", "Octavia", "Superb", "Kodiaq", "Karoq"],
    "Renault": ["Logan", "Sandero", "Duster", "Kaptur", "Arkana", "Megane"],
    "Peugeot": ["208", "308", "408", "508", "2008", "3008", "5008"],
    "Citroen": ["C3", "C4", "C5", "C3 Aircross", "C5 Aircross"],
    "Opel": ["Corsa", "Astra", "Insignia", "Crossland", "Grandland"],
    "Mitsubishi": ["Lancer", "Outlander", "Pajero", "ASX", "Eclipse Cross"],
    "Subaru": ["Impreza", "Legacy", "Outback", "Forester", "XV", "WRX"],
    "Porsche": ["911", "Cayenne", "Macan", "Panamera", "Taycan"],
    "Land Rover": ["Defender", "Discovery", "Range Rover", "Range Rover Sport", "Range Rover Evoque"],
    "Jaguar": ["XE", "XF", "XJ", "F-Pace", "E-Pace", "I-Pace"],
    "Infiniti": ["Q50", "Q60", "Q70", "QX50", "QX60", "QX80"],
    "Acura": ["ILX", "TLX", "RLX", "MDX", "RDX"],
    "Jeep": ["Compass", "Cherokee", "Grand Cherokee", "Wrangler", "Gladiator"],
    "Dodge": ["Charger", "Challenger", "Durango", "Ram"],
    "Chrysler": ["300", "Pacifica"]
  };

  const carBrands = Object.keys(carData).sort();
  const years = Array.from({length: 30}, (_, i) => 2024 - i);

  const availableModels = useMemo(() => {
    if (!selectedBrand) return [];
    return carData[selectedBrand as keyof typeof carData] || [];
  }, [selectedBrand]);

  const getCarImage = () => {
    if (!selectedBrand && !selectedModel) {
      return "https://cdn.poehali.dev/projects/6d5dac61-2235-4c93-9ad6-0d9340e02776/files/c9df873a-1ce7-4a14-a5cc-62b840b9c3b9.jpg";
    }
    
    const suvModels = ["Q3", "Q5", "Q7", "Q8", "X1", "X2", "X3", "X4", "X5", "X6", "X7", "GLA", "GLB", "GLC", "GLE", "GLS", "G-Class", "Tiguan", "Touareg", "T-Roc", "T-Cross", "RAV4", "Land Cruiser", "Highlander", "C-HR", "4Runner", "CR-V", "HR-V", "Pilot", "Qashqai", "X-Trail", "Juke", "CX-3", "CX-5", "CX-9", "Kuga", "Explorer", "Tahoe", "Suburban", "Tucson", "Santa Fe", "Creta", "Kona", "Sportage", "Sorento", "Seltos", "NX", "RX", "GX", "LX", "UX", "XC40", "XC60", "XC90", "Kodiaq", "Karoq", "Duster", "Kaptur", "2008", "3008", "5008", "C3 Aircross", "C5 Aircross", "Crossland", "Grandland", "Outlander", "Pajero", "ASX", "Eclipse Cross", "Forester", "XV", "Outback", "Cayenne", "Macan", "Defender", "Discovery", "Range Rover", "Range Rover Sport", "Range Rover Evoque", "F-Pace", "E-Pace", "I-Pace", "QX50", "QX60", "QX80", "MDX", "RDX", "Compass", "Cherokee", "Grand Cherokee", "Wrangler", "Durango", "Pacifica"];
    
    const sportsModels = ["TT", "R8", "M2", "M3", "M4", "M5", "Z4", "AMG GT", "911", "Taycan", "Mustang", "Camaro", "Corvette", "Stinger", "GT-R", "MX-5", "WRX", "Charger", "Challenger"];
    
    if (selectedModel && sportsModels.includes(selectedModel)) {
      return "https://cdn.poehali.dev/projects/6d5dac61-2235-4c93-9ad6-0d9340e02776/files/ff2765d8-718c-483c-93bf-04f4b55c8ae1.jpg";
    }
    
    if (selectedModel && suvModels.includes(selectedModel)) {
      return "https://cdn.poehali.dev/projects/6d5dac61-2235-4c93-9ad6-0d9340e02776/files/84be35c5-3a7f-4bbe-8843-04680fa1b8ef.jpg";
    }
    
    return "https://cdn.poehali.dev/projects/6d5dac61-2235-4c93-9ad6-0d9340e02776/files/9dd5bfda-05fc-4d6e-8f8d-f5e8e0fa7264.jpg";
  };

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
              {(selectedBrand || selectedModel) && (
                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                  <img
                    src={getCarImage()}
                    alt={`${selectedBrand} ${selectedModel}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  {selectedBrand && (
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-xl font-heading font-bold text-white">
                        {selectedBrand} {selectedModel}
                      </p>
                    </div>
                  )}
                </div>
              )}
              
              <div className="space-y-4 pb-4 border-b border-border">
                <div>
                  <label className="block text-sm font-semibold mb-2">Марка</label>
                  <select 
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                    value={selectedBrand}
                    onChange={(e) => {
                      setSelectedBrand(e.target.value);
                      setSelectedModel("");
                    }}
                  >
                    <option value="">Выберите марку</option>
                    {carBrands.map((brand) => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Модель</label>
                  <select 
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    disabled={!selectedBrand}
                  >
                    <option value="">Выберите модель</option>
                    {availableModels.map((model) => (
                      <option key={model} value={model}>{model}</option>
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
                    <label className="block text-sm font-semibold mb-2">Объем (л)</label>
                    <input
                      type="text"
                      placeholder="1.6"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                      value={selectedEngine}
                      onChange={(e) => setSelectedEngine(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">л.с.</label>
                    <input
                      type="text"
                      placeholder="150"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                      value={selectedPower}
                      onChange={(e) => setSelectedPower(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2 max-h-[400px] overflow-y-auto">
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

                <label className="flex items-center gap-3 cursor-pointer hover:bg-secondary/50 p-3 rounded-lg transition-colors">
                  <input 
                    type="checkbox" 
                    className="w-5 h-5"
                    checked={tuningOptions.euro2}
                    onChange={() => handleOptionChange('euro2')}
                  />
                  <span className="font-medium">Перевод на Евро-2</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer hover:bg-secondary/50 p-3 rounded-lg transition-colors">
                  <input 
                    type="checkbox" 
                    className="w-5 h-5"
                    checked={tuningOptions.noImmobilizer}
                    onChange={() => handleOptionChange('noImmobilizer')}
                  />
                  <span className="font-medium">Отключение иммобилайзера</span>
                </label>
              </div>
              
              <div className="pt-4 border-t border-border">
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