import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Heart,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Calendar,
  Users,
  Award,
  Clock,
  CheckCircle,
  Star,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      title: "Лікувальний масаж",
      description:
        "Професійний масаж для лікування захворювань опорно-рухового апарату",
      icon: <Heart className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Реабілітація",
      description: "Комплексні програми відновлення після травм та операцій",
      icon: <Users className="w-8 h-8 text-green-600" />,
    },
    {
      title: "Лікування сколіозу",
      description: "Спеціалізована терапія для корекції викривлення хребта",
      icon: <Award className="w-8 h-8 text-green-600" />,
    },
  ];

  const highlights = [
    { title: "Ви 🩶", description: "Наші клієнти" },
    { title: "Про сколіоз", description: "Корисна інформація" },
    { title: "Gift card 🎁", description: "Подарункові сертифікати" },
    { title: "Прайс", description: "Ціни на послуги" },
    { title: "Працюємо 💪🏻", description: "Наша робота" },
    { title: "Де ми?", description: "Розташування" },
    { title: "Хто ми?", description: "Про команду" },
  ];

  const stats = [
    { number: "77", label: "Відгуків" },
    { number: "502", label: "Клієнтів" },
    { number: "9", label: "Років досвіду" },
  ];

  return (
    <div className="min-h-screen bg-white font-aaargh">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              {/* Placeholder for logo - will be replaced when logo is provided */}
              <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-black">
                tvoya.opora.te
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                Про нас
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                Послуги
              </button>
              <button
                onClick={() => scrollToSection("highlights")}
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                Інформація
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                Контакти
              </button>
            </nav>
            <div className="flex items-center space-x-3">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Записатися
              </Button>
              <a
                href="https://www.instagram.com/tvoya.opora.te/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-600 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">
                Health/Beauty
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-black mb-6">
                МАСАЖ | РЕАБІЛІТАЦІЯ | СКОЛІОЗ
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                9 років досвіду в лікувальному масажі та реабілітації в
                Тернополі. Професійна допомога при сколіозі та захворюваннях
                опорно-рухового апарату.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Записатися на прийом
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("services")}
                  className="border-green-600 text-green-600 hover:bg-green-50"
                >
                  Дізнатися більше
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
                <div className="text-6xl">💆‍♀️</div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                <Heart className="w-8 h-8 text-red-500" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg">
                <Award className="w-8 h-8 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Про нас</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ми - команда професіоналів з 9-річним досвідом у сфері
              лікувального масажу та реабілітації. Спеціалізуємося на лікуванні
              сколіозу та захворювань опорно-рухового апарату.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 border-gray-200">
              <CardContent className="space-y-4">
                <Award className="w-12 h-12 text-green-600 mx-auto" />
                <h3 className="font-semibold text-black">9 років досвіду</h3>
                <p className="text-gray-600 text-sm">
                  Багаторічний досвід у лікувальному масажі
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-gray-200">
              <CardContent className="space-y-4">
                <Users className="w-12 h-12 text-green-600 mx-auto" />
                <h3 className="font-semibold text-black">502+ клієнтів</h3>
                <p className="text-gray-600 text-sm">
                  Довіра сотень задоволених клієнтів
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-gray-200">
              <CardContent className="space-y-4">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto" />
                <h3 className="font-semibold text-black">Професійно</h3>
                <p className="text-gray-600 text-sm">
                  Сертифіковані спеціалісти
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-gray-200">
              <CardContent className="space-y-4">
                <MapPin className="w-12 h-12 text-green-600 mx-auto" />
                <h3 className="font-semibold text-black">Тернопіль</h3>
                <p className="text-gray-600 text-sm">
                  Зручне розташування у центрі міста
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">Наші послуги</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Комплексний підхід до лікування та профілактики захворювань
              опорно-рухового апарату
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-shadow duration-300 border-gray-200"
              >
                <CardContent className="p-8">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-black">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button
                    variant="outline"
                    className="w-full border-green-600 text-green-600 hover:bg-green-50"
                    onClick={() => scrollToSection("contact")}
                  >
                    Дізнатися більше
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Highlights Section */}
      <section id="highlights" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Корисна інформація
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Дізнайтеся більше про наші послуги та корисні поради
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mb-2 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">
                    {highlight.title.includes("🩶")
                      ? "🩶"
                      : highlight.title.includes("🎁")
                        ? "🎁"
                        : highlight.title.includes("💪🏻")
                          ? "💪🏻"
                          : "📋"}
                  </span>
                </div>
                <h4 className="text-sm font-medium text-black mb-1">
                  {highlight.title}
                </h4>
                <p className="text-xs text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Відгуки клієнтів
            </h2>
            <p className="text-lg text-gray-600">
              Що кажуть про нас наші клієнти
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <Card key={index} className="p-6 border-gray-200">
                <CardContent>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "Чудовий спеціаліст! Після курсу масажу почуваюся набагато
                    краще. Рекомендую всім, хто має проблеми зі спиною."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-600 font-medium">К</span>
                    </div>
                    <div>
                      <p className="font-medium text-black">Клієнт</p>
                      <p className="text-sm text-gray-600">Тернопіль</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Зв'яжіться з нами</h2>
              <p className="text-green-100 mb-8 text-lg">
                Готові допомогти вам відновити здоров'я та покращити якість
                життя. Записуйтеся на консультацію вже сьогодні!
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-green-200" />
                  <div>
                    <p className="font-medium">Адреса</p>
                    <p className="text-green-100">Тернопіль, Україна</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-green-200" />
                  <div>
                    <p className="font-medium">Режим роботи</p>
                    <p className="text-green-100">Пн-Пт: 9:00-18:00</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Instagram className="w-6 h-6 text-green-200" />
                  <div>
                    <p className="font-medium">Instagram</p>
                    <a
                      href="https://www.instagram.com/tvoya.opora.te/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-100 hover:text-white transition-colors flex items-center"
                    >
                      @tvoya.opora.te
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card className="bg-white text-gray-900">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-black">
                    Записатися на прийом
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-black">
                        Ім'я
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Ваше ім'я"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-black">
                        Телефон
                      </label>
                      <input
                        type="tel"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="+380 XX XXX XX XX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-black">
                        Послуга
                      </label>
                      <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                        <option>Лікувальний масаж</option>
                        <option>Реабілітація</option>
                        <option>Лікування сколіозу</option>
                        <option>Консультація</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-black">
                        Повідомлення
                      </label>
                      <textarea
                        rows={4}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Опишіть вашу проблему (необов'язково)"
                      />
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Надіслати заявку
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              {/* Placeholder for logo - will be replaced when logo is provided */}
              <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-semibold">tvoya.opora.te</span>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2025 tvoya.opora.te. Усі права захищені.
              </p>
              <p className="text-gray-400 text-sm">
                МАСАЖ | РЕАБІЛІТАЦІЯ | СКОЛІОЗ | ТЕРНОПІЛЬ
              </p>
            </div>
          </div>

          <Separator className="my-6 bg-gray-700" />

          <div className="text-center">
            <p className="text-gray-400 text-sm">
              Здоров'я вашої спини - наша турбота 💚
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
