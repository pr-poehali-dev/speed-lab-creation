import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Contacts = () => {
  const [showCallbackForm, setShowCallbackForm] = useState(false);

  return (
    <div className="min-h-screen pt-24 px-6 pb-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">Контакты</h1>
          <p className="text-xl text-muted-foreground">Свяжитесь с нами любым удобным способом</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-8">
            <h3 className="text-2xl font-heading font-bold mb-6">Наши контакты</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Адрес</h4>
                  <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Телефон</h4>
                  <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-muted-foreground">info@add-tuning.ru</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Режим работы</h4>
                  <p className="text-muted-foreground">Пн-Пт: 9:00 - 20:00</p>
                  <p className="text-muted-foreground">Сб-Вс: 10:00 - 18:00</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-heading font-bold mb-6">Обратная связь</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Имя</label>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Телефон</label>
                <input
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Сообщение</label>
                <textarea
                  rows={4}
                  placeholder="Ваше сообщение"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                />
              </div>

              <Button className="w-full">
                Отправить сообщение
              </Button>
            </div>
          </Card>
        </div>

        <Card className="mt-12 p-8 max-w-5xl mx-auto">
          <h3 className="text-2xl font-heading font-bold mb-6 text-center">Как нас найти</h3>
          <div className="aspect-video bg-secondary/30 rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Здесь будет карта</p>
          </div>
        </Card>

        <div className="mt-12 text-center">
          <Button 
            size="lg"
            onClick={() => setShowCallbackForm(!showCallbackForm)}
          >
            Заказать обратный звонок
          </Button>
        </div>

        {showCallbackForm && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
            <Card className="p-8 max-w-md w-full relative">
              <button 
                className="absolute top-4 right-4 p-2 hover:bg-secondary rounded-lg transition-colors"
                onClick={() => setShowCallbackForm(false)}
              >
                <Icon name="X" size={24} />
              </button>
              <h3 className="text-2xl font-heading font-bold mb-6">Обратный звонок</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Имя</label>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                  />
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
                  Заказать звонок
                </Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contacts;
