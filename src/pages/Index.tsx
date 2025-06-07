import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Logo from "@/components/Logo";
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
      icon: <Heart className="w-8 h-8" style={{ color: "#2d4640" }} />,
    },
    {
      title: "Реабілітація",
      description: "Комплексні програми відновлення після травм та операцій",
      icon: <Users className="w-8 h-8" style={{ color: "#2d4640" }} />,
    },
    {
      title: "Лікування сколіозу",
      description: "Спеціалізована терапія для корекції викривлення хребта",
      icon: <Award className="w-8 h-8" style={{ color: "#2d4640" }} />,
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
              <Logo size="sm" showText={false} style={{ color: "#2d4640" }} />
              <span className="text-xl font-bold" style={{ color: "#161616" }}>
                tvoya.opora.te
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="transition-colors"
                style={{ color: "#9a9c97" }}
                onMouseEnter={(e) => (e.target.style.color = "#2d4640")}
                onMouseLeave={(e) => (e.target.style.color = "#9a9c97")}
              >
                Про нас
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="transition-colors"
                style={{ color: "#9a9c97" }}
                onMouseEnter={(e) => (e.target.style.color = "#2d4640")}
                onMouseLeave={(e) => (e.target.style.color = "#9a9c97")}
              >
                Послуги
              </button>
              <button
                onClick={() => scrollToSection("highlights")}
                className="transition-colors"
                style={{ color: "#9a9c97" }}
                onMouseEnter={(e) => (e.target.style.color = "#2d4640")}
                onMouseLeave={(e) => (e.target.style.color = "#9a9c97")}
              >
                Інформація
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="transition-colors"
                style={{ color: "#9a9c97" }}
                onMouseEnter={(e) => (e.target.style.color = "#2d4640")}
                onMouseLeave={(e) => (e.target.style.color = "#9a9c97")}
              >
                Контакти
              </button>
            </nav>
            <div className="flex items-center space-x-3">
              <Button
                onClick={() => scrollToSection("contact")}
                className="text-white transition-colors"
                style={{ backgroundColor: "#2d4640" }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#1f332f")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#2d4640")
                }
              >
                Записатися
              </Button>
              <a
                href="https://www.instagram.com/tvoya.opora.te/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors"
                style={{ color: "#9a9c97" }}
                onMouseEnter={(e) => (e.target.style.color = "#2d4640")}
                onMouseLeave={(e) => (e.target.style.color = "#9a9c97")}
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="pt-24 pb-12"
        style={{
          background: "linear-gradient(135deg, #f0f4f3 0%, #ffffff 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge
                className="mb-4 text-white"
                style={{ backgroundColor: "#2d4640" }}
              >
                Health/Beauty
              </Badge>
              <h1
                className="text-4xl lg:text-6xl font-bold mb-6"
                style={{ color: "#161616" }}
              >
                МАСАЖ | РЕАБІЛІТАЦІЯ | СКОЛІОЗ
              </h1>
              <p
                className="text-xl mb-8 leading-relaxed"
                style={{ color: "#9a9c97" }}
              >
                9 років досвіду в лікувальному масажі та реабілітації в
                Тернополі. Професійна допомога при сколіозі та захворюваннях
                опорно-рухового апарату.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("contact")}
                  className="text-white transition-colors"
                  style={{ backgroundColor: "#2d4640" }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#1f332f")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#2d4640")
                  }
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Записатися на прийом
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("services")}
                  className="transition-colors"
                  style={{ borderColor: "#2d4640", color: "#2d4640" }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#2d4640";
                    e.target.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = "#2d4640";
                  }}
                >
                  Дізнатися більше
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div
                      className="text-2xl font-bold"
                      style={{ color: "#2d4640" }}
                    >
                      {stat.number}
                    </div>
                    <div className="text-sm" style={{ color: "#9a9c97" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <Logo
                  size="lg"
                  showText={true}
                  className="text-center"
                  style={{ color: "#2d4640" }}
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                <Heart className="w-8 h-8 text-red-500" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg">
                <Award className="w-8 h-8" style={{ color: "#2d4640" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16"
        style={{ backgroundColor: "#f8f9f9" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: "#161616" }}
            >
              Про нас
            </h2>
            <p
              className="text-lg max-w-3xl mx-auto"
              style={{ color: "#9a9c97" }}
            >
              Ми - команда професіоналів з 9-річним досвідом у сфері
              лікувального масажу та реабілітації. Спеціалізуємося на лікуванні
              сколіозу та захворювань опорно-рухового апарату.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 border-gray-200">
              <CardContent className="space-y-4">
                <Award
                  className="w-12 h-12 mx-auto"
                  style={{ color: "#2d4640" }}
                />
                <h3 className="font-semibold" style={{ color: "#161616" }}>
                  9 років досвіду
                </h3>
                <p className="text-sm" style={{ color: "#9a9c97" }}>
                  Багаторічний досвід у лікувальному масажі
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-gray-200">
              <CardContent className="space-y-4">
                <Users
                  className="w-12 h-12 mx-auto"
                  style={{ color: "#2d4640" }}
                />
                <h3 className="font-semibold" style={{ color: "#161616" }}>
                  502+ клієнтів
                </h3>
                <p className="text-sm" style={{ color: "#9a9c97" }}>
                  Довіра сотень задоволених клієнтів
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-gray-200">
              <CardContent className="space-y-4">
                <CheckCircle
                  className="w-12 h-12 mx-auto"
                  style={{ color: "#2d4640" }}
                />
                <h3 className="font-semibold" style={{ color: "#161616" }}>
                  Професійно
                </h3>
                <p className="text-sm" style={{ color: "#9a9c97" }}>
                  Сертифіковані спеціалісти
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-gray-200">
              <CardContent className="space-y-4">
                <MapPin
                  className="w-12 h-12 mx-auto"
                  style={{ color: "#2d4640" }}
                />
                <h3 className="font-semibold" style={{ color: "#161616" }}>
                  Тернопіль
                </h3>
                <p className="text-sm" style={{ color: "#9a9c97" }}>
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
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: "#161616" }}
            >
              Наші послуги
            </h2>
            <p
              className="text-lg max-w-3xl mx-auto"
              style={{ color: "#9a9c97" }}
            >
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
                  <h3
                    className="text-xl font-semibold mb-3"
                    style={{ color: "#161616" }}
                  >
                    {service.title}
                  </h3>
                  <p className="mb-4" style={{ color: "#9a9c97" }}>
                    {service.description}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full transition-colors"
                    style={{ borderColor: "#2d4640", color: "#2d4640" }}
                    onClick={() => scrollToSection("contact")}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#2d4640";
                      e.target.style.color = "white";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "#2d4640";
                    }}
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
      <section
        id="highlights"
        className="py-16"
        style={{ backgroundColor: "#f8f9f9" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: "#161616" }}
            >
              Корисна інформація
            </h2>
            <p
              className="text-lg max-w-3xl mx-auto"
              style={{ color: "#9a9c97" }}
            >
              Дізнайтеся більше про наші послуги та корисні поради
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-2 mx-auto group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(45, 70, 64, 0.1) 0%, rgba(45, 70, 64, 0.2) 100%)",
                  }}
                >
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
                <h4
                  className="text-sm font-medium mb-1"
                  style={{ color: "#161616" }}
                >
                  {highlight.title}
                </h4>
                <p className="text-xs" style={{ color: "#9a9c97" }}>
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Stories Section - Instagram "Ви 🩶" inspired */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: "#161616" }}
            >
              Ви 🩶
            </h2>
            <p className="text-lg" style={{ color: "#9a9c97" }}>
              Історії наших клієнтів та їх успіхи в лікуванні
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Client Story 1 */}
            <Card className="overflow-hidden border-gray-200 group hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-2xl">👩‍⚕️</span>
                    </div>
                    <h3
                      className="font-bold text-lg mb-2"
                      style={{ color: "#161616" }}
                    >
                      Марія, 32 роки
                    </h3>
                    <p className="text-sm" style={{ color: "#2d4640" }}>
                      Сколіоз 2 ступеня
                    </p>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 rounded-full p-2">
                    <Heart className="w-4 h-4 text-red-500" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="mb-4" style={{ color: "#9a9c97" }}>
                  "Після 3 місяців лікувального масажу спина перестала боліти.
                  Постава значно покращилась! Дуже вдячна за професійний
                  підхід."
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <span className="text-sm ml-2" style={{ color: "#9a9c97" }}>
                      До/Після
                    </span>
                  </div>
                  <Badge
                    variant="outline"
                    style={{ borderColor: "#2d4640", color: "#2d4640" }}
                  >
                    3 місяці
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Client Story 2 */}
            <Card className="overflow-hidden border-gray-200 group hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-2xl">👨‍💼</span>
                    </div>
                    <h3
                      className="font-bold text-lg mb-2"
                      style={{ color: "#161616" }}
                    >
                      Андрій, 45 років
                    </h3>
                    <p className="text-sm" style={{ color: "#2d4640" }}>
                      Остеохондроз
                    </p>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 rounded-full p-2">
                    <CheckCircle
                      className="w-4 h-4"
                      style={{ color: "#2d4640" }}
                    />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="mb-4" style={{ color: "#9a9c97" }}>
                  "Робота за комп'ютером знищувала спину. Реабілітаційна
                  програма врятувала мене від постійного болю. Рекомендую всім
                  офісним працівникам!"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <span className="text-sm ml-2" style={{ color: "#9a9c97" }}>
                      Результат
                    </span>
                  </div>
                  <Badge
                    variant="outline"
                    style={{ borderColor: "#2d4640", color: "#2d4640" }}
                  >
                    2 місяці
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Client Story 3 */}
            <Card className="overflow-hidden border-gray-200 group hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-purple-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <span className="text-2xl">👵</span>
                    </div>
                    <h3
                      className="font-bold text-lg mb-2"
                      style={{ color: "#161616" }}
                    >
                      Людмила, 68 років
                    </h3>
                    <p className="text-sm" style={{ color: "#2d4640" }}>
                      Реабілітація після травми
                    </p>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 rounded-full p-2">
                    <Award className="w-4 h-4" style={{ color: "#2d4640" }} />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="mb-4" style={{ color: "#9a9c97" }}>
                  "Після падіння думала, що вже ніколи не буду нормально ходити.
                  Завдяки масажу та вправам повністю відновилась. Дякую за
                  турботу!"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <span className="text-sm ml-2" style={{ color: "#9a9c97" }}>
                      Відновлення
                    </span>
                  </div>
                  <Badge
                    variant="outline"
                    style={{ borderColor: "#2d4640", color: "#2d4640" }}
                  >
                    4 місяці
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Instagram-style "See More" call to action */}
          <div className="text-center mt-12">
            <p className="mb-4" style={{ color: "#9a9c97" }}>
              Більше історій успіху в наших Instagram Stories
            </p>
            <a
              href="https://www.instagram.com/tvoya.opora.te/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg border transition-colors"
              style={{ borderColor: "#2d4640", color: "#2d4640" }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#2d4640";
                e.target.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#2d4640";
              }}
            >
              <Instagram className="w-5 h-5 mr-2" />
              Переглянути "Ви 🩶" в Instagram
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 text-white"
        style={{ backgroundColor: "#2d4640" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Зв'яжіться з нами</h2>
            <p
              className="text-lg"
              style={{ color: "rgba(255, 255, 255, 0.8)" }}
            >
              Готові допомогти вам відновити здоров'я та покращити якість життя
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info and Map */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin
                    className="w-6 h-6"
                    style={{ color: "rgba(255, 255, 255, 0.6)" }}
                  />
                  <div>
                    <p className="font-medium">Адреса</p>
                    <p style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                      Тернопіль, Україна
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Clock
                    className="w-6 h-6"
                    style={{ color: "rgba(255, 255, 255, 0.6)" }}
                  />
                  <div>
                    <p className="font-medium">Режим роботи</p>
                    <p style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                      Пн-Пт: 9:00-18:00
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Instagram
                    className="w-6 h-6"
                    style={{ color: "rgba(255, 255, 255, 0.6)" }}
                  />
                  <div>
                    <p className="font-medium">Instagram</p>
                    <a
                      href="https://www.instagram.com/tvoya.opora.te/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors flex items-center"
                      style={{ color: "rgba(255, 255, 255, 0.8)" }}
                      onMouseEnter={(e) => (e.target.style.color = "white")}
                      onMouseLeave={(e) =>
                        (e.target.style.color = "rgba(255, 255, 255, 0.8)")
                      }
                    >
                      @tvoya.opora.te
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="relative">
                <h3 className="text-xl font-semibold mb-4">
                  Наше розташування
                </h3>
                <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.5!2d25.5944!3d49.5535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4730314c8b82bc43%3A0x4d94ba3d23e86c6d!2sТернопіль%2C%20Тернопільська%20область%2C%20Україна!5e0!3m2!1suk!2sus!4v1735067000000!5m2!1suk!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Твоя Опора - Розташування в Тернополі"
                  />
                  <div className="absolute top-4 right-4">
                    <a
                      href="https://maps.app.goo.gl/s73LiDStMvvvS8EC8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg text-sm font-medium hover:bg-gray-50 transition-colors flex items-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Відкрити в Google Maps
                    </a>
                  </div>
                </div>
                <p
                  className="text-sm mt-2"
                  style={{ color: "rgba(255, 255, 255, 0.6)" }}
                >
                  Натисніть на карту для детального маршруту
                </p>
              </div>
            </div>

            {/* Booking Form */}

            <div>
              <Card className="bg-white" style={{ color: "#161616" }}>
                <CardContent className="p-8">
                  <h3
                    className="text-2xl font-bold mb-6"
                    style={{ color: "#161616" }}
                  >
                    Записатися на прийом
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label
                        className="block text-sm font-medium mb-2"
                        style={{ color: "#161616" }}
                      >
                        Ім'я
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:border-transparent"
                        style={{ "--tw-ring-color": "#2d4640" } as any}
                        placeholder="Ваше ім'я"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium mb-2"
                        style={{ color: "#161616" }}
                      >
                        Телефон
                      </label>
                      <input
                        type="tel"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:border-transparent"
                        style={{ "--tw-ring-color": "#2d4640" } as any}
                        placeholder="+380 XX XXX XX XX"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium mb-2"
                        style={{ color: "#161616" }}
                      >
                        Послуга
                      </label>
                      <select
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:border-transparent"
                        style={{ "--tw-ring-color": "#2d4640" } as any}
                      >
                        <option>Лікувальний масаж</option>
                        <option>Реабілітація</option>
                        <option>Лікування сколіозу</option>
                        <option>Консультація</option>
                      </select>
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium mb-2"
                        style={{ color: "#161616" }}
                      >
                        Повідомлення
                      </label>
                      <textarea
                        rows={4}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:border-transparent"
                        style={{ "--tw-ring-color": "#2d4640" } as any}
                        placeholder="Опишіть вашу проблему (необов'язково)"
                      />
                    </div>
                    <Button
                      className="w-full text-white transition-colors"
                      style={{ backgroundColor: "#2d4640" }}
                      onMouseEnter={(e) =>
                        (e.target.style.backgroundColor = "#1f332f")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.backgroundColor = "#2d4640")
                      }
                    >
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
      <footer
        className="py-8 text-white"
        style={{ backgroundColor: "#161616" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Logo
                size="sm"
                showText={false}
                className="text-white"
                style={{ color: "#2d4640" }}
              />
              <span className="text-lg font-semibold">tvoya.opora.te</span>
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm" style={{ color: "#9a9c97" }}>
                © 2025 tvoya.opora.te. Усі права захище��і.
              </p>
              <p className="text-sm" style={{ color: "#9a9c97" }}>
                МАСАЖ | РЕАБІЛІТАЦІЯ | СКОЛІОЗ | ТЕРНОПІЛЬ
              </p>
            </div>
          </div>

          <Separator
            className="my-6"
            style={{ backgroundColor: "#9a9c97", opacity: 0.3 }}
          />

          <div className="text-center">
            <p className="text-sm" style={{ color: "#9a9c97" }}>
              Здоров'я вашої спини - наша турбота 💚
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
{
  /* Booking Form */
}
<div>
  <Card className="bg-white" style={{ color: "#161616" }}>
    <CardContent className="p-8">
      <h3 className="text-2xl font-bold mb-6" style={{ color: "#161616" }}>
        Записатися на прийом
      </h3>
      <p className="mb-6" style={{ color: "#9a9c97" }}>
        Заповніть форму і ми зв'яжемося з вами для підтвердження запису
      </p>
      <div className="space-y-4">
        <div>
          <label
            className="block text-sm font-medium mb-2"
            style={{ color: "#161616" }}
          >
            Ім'я
          </label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:border-transparent transition-colors"
            style={{ "--tw-ring-color": "#2d4640" } as any}
            placeholder="Ваше ім'я"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium mb-2"
            style={{ color: "#161616" }}
          >
            Телефон
          </label>
          <input
            type="tel"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:border-transparent transition-colors"
            style={{ "--tw-ring-color": "#2d4640" } as any}
            placeholder="+380 XX XXX XX XX"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium mb-2"
            style={{ color: "#161616" }}
          >
            Послуга
          </label>
          <select
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:border-transparent transition-colors"
            style={{ "--tw-ring-color": "#2d4640" } as any}
          >
            <option>Лікувальний масаж</option>
            <option>Реабілітація</option>
            <option>Лікування сколіозу</option>
            <option>Консультація</option>
          </select>
        </div>
        <div>
          <label
            className="block text-sm font-medium mb-2"
            style={{ color: "#161616" }}
          >
            Бажаний час
          </label>
          <div className="grid grid-cols-2 gap-3">
            <input
              type="date"
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:border-transparent transition-colors"
              style={{ "--tw-ring-color": "#2d4640" } as any}
            />
            <select
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:border-transparent transition-colors"
              style={{ "--tw-ring-color": "#2d4640" } as any}
            >
              <option>09:00</option>
              <option>10:00</option>
              <option>11:00</option>
              <option>12:00</option>
              <option>14:00</option>
              <option>15:00</option>
              <option>16:00</option>
              <option>17:00</option>
            </select>
          </div>
        </div>
        <div>
          <label
            className="block text-sm font-medium mb-2"
            style={{ color: "#161616" }}
          >
            Повідомлення
          </label>
          <textarea
            rows={4}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:border-transparent transition-colors"
            style={{ "--tw-ring-color": "#2d4640" } as any}
            placeholder="Опишіть вашу проблему (необов'язково)"
          />
        </div>
        <Button
          className="w-full text-white transition-colors"
          style={{ backgroundColor: "#2d4640" }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#1f332f")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#2d4640")}
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Надіслати заявку
        </Button>
        <p className="text-xs text-center" style={{ color: "#9a9c97" }}>
          Ми зв'яжемося з вами протягом години для п��дтвердження запису
        </p>
      </div>
    </CardContent>
  </Card>
</div>;
