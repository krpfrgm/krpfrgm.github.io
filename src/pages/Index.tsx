import React from "react";
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
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";

// Service Provider Data
const serviceProviders = [
  {
    id: 1,
    name: "Олена Сидорова",
    title: "Провідний спеціаліст з масажу",
    subtitle: "Сертифікований масажист-реабілітолог",
    experience: "9 років досвіду",
    specialization: "Лікувальний масаж та сколіоз",
    gradient: "from-green-50 to-blue-50",
    description:
      "Спеціалізується на лікувальному масажі та корекції сколіозу. Має вищу медичну освіту та сертифікати міжнародних організацій.",
    achievements: [
      {
        icon: <Award className="w-6 h-6" style={{ color: "#2d4640" }} />,
        title: "9+ років досвіду",
        description:
          "Багаторічний досвід роботи з різними захворюваннями опорно-рухового апарату",
      },
      {
        icon: <CheckCircle className="w-6 h-6" style={{ color: "#2d4640" }} />,
        title: "Сертифікований підхід",
        description: "Використання сучасних методик лікування та реабілітації",
      },
      {
        icon: <Heart className="w-6 h-6" style={{ color: "#2d4640" }} />,
        title: "Індивідуальний підхід",
        description:
          "Кожен клієнт отримує персональну програму лікування та реабілітації",
      },
    ],
  },
  {
    id: 2,
    name: "Андрій Коваленко",
    title: "Спеціаліст з реабілітації",
    subtitle: "Фізіотерапевт-реабілітолог",
    experience: "7 років досвіду",
    specialization: "Реабілітація та фізіотерапія",
    gradient: "from-blue-50 to-purple-50",
    description:
      "Експерт з відновлювальної медицини та спортивної реабілітації. Працює з пацієнтами після травм та операцій.",
    achievements: [
      {
        icon: <Users className="w-6 h-6" style={{ color: "#2d4640" }} />,
        title: "7+ років досвіду",
        description: "Спеціалізація на реабілітації після травм та операцій",
      },
      {
        icon: <Award className="w-6 h-6" style={{ color: "#2d4640" }} />,
        title: "Спортивна реабілітація",
        description: "Робота з професійними спортсменами та активними людьми",
      },
      {
        icon: <CheckCircle className="w-6 h-6" style={{ color: "#2d4640" }} />,
        title: "Сучасні методики",
        description: "Використання найновіших технологій відновлення",
      },
    ],
  },
  {
    id: 3,
    name: "Марія Петренко",
    title: "Дитячий спеціаліст",
    subtitle: "Педіатричний масажист",
    experience: "6 років досвіду",
    specialization: "Дитячий масаж та розвиток",
    gradient: "from-pink-50 to-orange-50",
    description:
      "Спеціалізується на роботі з дітьми від народження до 18 років. Експерт з профілактики та лікування дитячих порушень постави.",
    achievements: [
      {
        icon: <Heart className="w-6 h-6" style={{ color: "#2d4640" }} />,
        title: "6+ років досвіду",
        description: "Робота з дітьми різного віку та їх особливостями",
      },
      {
        icon: <Users className="w-6 h-6" style={{ color: "#2d4640" }} />,
        title: "Дитяча спеціалізація",
        description: "Профілактика та корекція порушень постави у дітей",
      },
      {
        icon: <Award className="w-6 h-6" style={{ color: "#2d4640" }} />,
        title: "Розвивальний масаж",
        description: "Стимуляція розвитку та зміцнення м'язової системи",
      },
    ],
  },
];

// Service Provider Carousel Component
const ServiceProviderCarousel = () => {
  const [currentIndex, setCurrentIndex] = React.useState(() =>
    Math.floor(Math.random() * serviceProviders.length),
  );
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [touchStart, setTouchStart] = React.useState(null);
  const [touchEnd, setTouchEnd] = React.useState(null);

  const nextProvider = () => {
    setCurrentIndex((prev) => (prev + 1) % serviceProviders.length);
  };

  const prevProvider = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + serviceProviders.length) % serviceProviders.length,
    );
  };

  const goToProvider = (index) => {
    setCurrentIndex(index);
  };

  // Auto-rotation
  React.useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      nextProvider();
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isPlaying, currentIndex]);

  // Touch handlers
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextProvider();
    }
    if (isRightSwipe) {
      prevProvider();
    }
  };

  const currentProvider = serviceProviders[currentIndex];

  return (
    <div className="relative">
      {/* Header */}
      <div className="text-center mb-12">
        <Badge
          className="mb-4"
          style={{ backgroundColor: "#2d4640", color: "white" }}
        >
          Наша команда
        </Badge>
        <h2 className="text-3xl font-bold mb-4" style={{ color: "#161616" }}>
          Професійні спеціалісти
        </h2>
        <p className="text-lg max-w-3xl mx-auto" style={{ color: "#9a9c97" }}>
          Наша команда досвідчених спеціалістів готова допомогти вам на шляху до
          здоров'я
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <div
          className="transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex">
            {serviceProviders.map((provider, index) => (
              <div key={provider.id} className="w-full flex-shrink-0">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Photo Section */}
                  <div className="relative">
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      <div
                        className={`aspect-[4/5] bg-gradient-to-br ${provider.gradient} flex items-center justify-center relative`}
                        style={{ minHeight: "400px" }}
                      >
                        {/* Placeholder illustration */}
                        <div className="text-center">
                          <div
                            className="w-32 h-32 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg"
                            style={{ backgroundColor: "#2d4640" }}
                          >
                            <Users className="w-16 h-16 text-white" />
                          </div>
                          <p className="text-sm" style={{ color: "#9a9c97" }}>
                            {provider.name}
                          </p>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <Heart className="w-6 h-6 text-red-400" />
                        </div>
                        <div className="absolute bottom-6 left-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <Award
                            className="w-6 h-6"
                            style={{ color: "#2d4640" }}
                          />
                        </div>
                      </div>

                      {/* Professional overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                        <div className="text-white">
                          <h3 className="text-xl font-bold mb-2">
                            {provider.title}
                          </h3>
                          <p className="text-sm opacity-90">
                            {provider.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description Section */}
                  <div className="space-y-6">
                    <div>
                      <h2
                        className="text-3xl font-bold mb-2"
                        style={{ color: "#161616" }}
                      >
                        {provider.name}
                      </h2>
                      <div className="flex items-center gap-4 mb-4">
                        <Badge
                          variant="outline"
                          style={{ borderColor: "#2d4640", color: "#2d4640" }}
                        >
                          {provider.experience}
                        </Badge>
                        <Badge
                          variant="outline"
                          style={{ borderColor: "#2d4640", color: "#2d4640" }}
                        >
                          {provider.specialization}
                        </Badge>
                      </div>
                      <p className="text-lg mb-6" style={{ color: "#9a9c97" }}>
                        {provider.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      {provider.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start space-x-4">
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: "rgba(45, 70, 64, 0.1)" }}
                          >
                            {achievement.icon}
                          </div>
                          <div>
                            <h3
                              className="font-semibold mb-2"
                              style={{ color: "#161616" }}
                            >
                              {achievement.title}
                            </h3>
                            <p style={{ color: "#9a9c97" }}>
                              {achievement.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
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
                        Дізнатися більше про спеціаліста
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevProvider}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl z-10"
          style={{ color: "#2d4640" }}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextProvider}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl z-10"
          style={{ color: "#2d4640" }}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center mt-8 space-x-6">
        {/* Indicators */}
        <div className="flex space-x-2">
          {serviceProviders.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProvider(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "scale-125 shadow-lg"
                  : "hover:scale-110"
              }`}
              style={{
                backgroundColor: index === currentIndex ? "#2d4640" : "#9a9c97",
              }}
            />
          ))}
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-md"
          style={{ color: "#2d4640" }}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5 ml-0.5" />
          )}
        </button>
      </div>

      {/* Provider Counter */}
      <div className="text-center mt-4">
        <p className="text-sm" style={{ color: "#9a9c97" }}>
          {currentIndex + 1} з {serviceProviders.length} спеціалістів
        </p>
      </div>
    </div>
  );
};

const Index = () => {
  // Add floating animation styles
  const floatingAnimation = `
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
  `;

  // Inject animation styles
  React.useEffect(() => {
    const style = document.createElement("style");
    style.textContent = floatingAnimation;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);
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
      description: "Комплексні програми відновлення піс��я травм та операцій",
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
              <a
                href="https://www.instagram.com/tvoya.opora.te/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-md text-white transition-colors font-medium"
                style={{ backgroundColor: "#2d4640" }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#1f332f")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#2d4640")
                }
              >
                <Instagram className="w-4 h-4 mr-2" />
                Записатися
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
                <a
                  href="https://www.instagram.com/tvoya.opora.te/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium rounded-md text-white transition-colors"
                  style={{ backgroundColor: "#2d4640" }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#1f332f")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#2d4640")
                  }
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  Записатися через Instagram
                </a>
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

              {/* Professional Badge */}
              <div className="flex items-center justify-center lg:justify-start space-x-4">
                <div className="flex items-center bg-gray-50 rounded-full px-4 py-2">
                  <Award
                    className="w-5 h-5 mr-2"
                    style={{ color: "#2d4640" }}
                  />
                  <span
                    className="text-sm font-medium"
                    style={{ color: "#161616" }}
                  >
                    9 років досвіду
                  </span>
                </div>
                <div className="flex items-center bg-gray-50 rounded-full px-4 py-2">
                  <CheckCircle
                    className="w-5 h-5 mr-2"
                    style={{ color: "#2d4640" }}
                  />
                  <span
                    className="text-sm font-medium"
                    style={{ color: "#161616" }}
                  >
                    Сертифіковані спеціалісти
                  </span>
                </div>
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
              {/* Animated floating heart */}
              <div
                className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-xl group"
                style={{
                  animation: "float 3s ease-in-out infinite",
                  animationDelay: "0s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.2) translateY(-5px)";
                  e.target.style.boxShadow =
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow =
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
                }}
              >
                <Heart className="w-8 h-8 text-red-500 group-hover:text-red-600 transition-colors duration-300" />
              </div>
              {/* Animated floating award */}
              <div
                className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-xl group"
                style={{
                  animation: "float 3s ease-in-out infinite",
                  animationDelay: "1.5s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.2) translateY(-5px)";
                  e.target.style.boxShadow =
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow =
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
                }}
              >
                <Award
                  className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                  style={{ color: "#2d4640" }}
                />
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
                  Дові��а сотень задоволених клієнтів
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

      {/* Service Provider Carousel Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceProviderCarousel />
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
              Дізнайтеся більше про наші послуги т�� корисні поради
            </p>
          </div>

          {/* Instagram Story Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Story 1 - Who, Where, What */}
            <Card className="overflow-hidden border-gray-200 group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="aspect-[9/16] bg-gradient-to-br from-green-50 to-green-100 relative overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="mb-6">
                    <Logo
                      size="md"
                      showText={false}
                      style={{ color: "#2d4640" }}
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-sm">
                      <p
                        className="text-sm font-medium"
                        style={{ color: "#2d4640" }}
                      >
                        Хто це?
                      </p>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-sm">
                      <p
                        className="text-sm font-medium"
                        style={{ color: "#2d4640" }}
                      >
                        Де це?
                      </p>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-sm">
                      <p
                        className="text-sm font-medium"
                        style={{ color: "#2d4640" }}
                      >
                        Що це?
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-sm">📋</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Story 2 - Support and Foundation */}
            <Card className="overflow-hidden border-gray-200 group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="aspect-[9/16] bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-24 h-32 bg-white/20 rounded-lg mb-4 flex items-center justify-center border-2 border-white/30">
                    <div className="text-center">
                      <div className="w-8 h-12 bg-white/40 rounded mx-auto mb-2"></div>
                      <div className="space-y-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className="w-6 h-1 bg-white/50 rounded mx-auto"
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p
                    className="text-sm font-medium text-center leading-relaxed"
                    style={{ color: "#2d4640" }}
                  >
                    Ваша підтримка та
                    <br />
                    міцний фундамент
                    <br />
                    здоров'я
                  </p>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-sm">🏗️</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Story 3 - Spine X-ray */}
            <Card className="overflow-hidden border-gray-200 group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="aspect-[9/16] bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-16 h-32 bg-white/10 rounded-lg mb-4 flex items-center justify-center border border-white/20">
                    <div className="text-center">
                      <div className="w-4 h-16 bg-white/30 rounded mx-auto relative">
                        {[...Array(7)].map((_, i) => (
                          <div
                            key={i}
                            className="absolute w-6 h-2 bg-white/50 rounded left-1/2 transform -translate-x-1/2"
                            style={{ top: `${i * 12 + 8}%` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-white text-sm font-bold mb-2">
                    ТВОЯ ОПОРА - ЦЕ ВІН ХРЕБЕТ
                  </p>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
                    <p className="text-white text-xs font-medium">ХРЕБЕТ</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-sm">🦴</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Story 4 - Neon Sign */}
            <Card className="overflow-hidden border-gray-200 group hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="aspect-[9/16] bg-gradient-to-br from-green-800 to-green-900 relative overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <div className="mb-6 relative">
                    <div
                      className="text-lg font-bold px-4 py-2 rounded-lg border-2 relative overflow-hidden"
                      style={{
                        color: "#00ff88",
                        borderColor: "#00ff88",
                        textShadow:
                          "0 0 10px #00ff88, 0 0 20px #00ff88, 0 0 30px #00ff88",
                        boxShadow:
                          "0 0 10px rgba(0, 255, 136, 0.3), inset 0 0 10px rgba(0, 255, 136, 0.1)",
                      }}
                    >
                      tvoya.opora.te
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-pulse"
                        style={{ animation: "shimmer 2s infinite" }}
                      ></div>
                    </div>
                  </div>
                  <p className="text-white text-sm text-center leading-relaxed">
                    Ми - клініка здорового
                    <br />
                    хребта у Тернополі
                  </p>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-sm">💚</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Call to action for Instagram */}
          <div className="text-center mt-12">
            <p className="mb-4" style={{ color: "#9a9c97" }}>
              Більше корисної інформації в наших Instagram Stories
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
              Переглянути всі Stories
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: "#161616" }}
            >
              Відгуки наших клієнтів
            </h2>
            <p className="text-lg" style={{ color: "#9a9c97" }}>
              Довіра та задоволення наших пацієнтів - найкраща оцінка нашої
              роботи
            </p>
          </div>

          {/* Google Rating Summary */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gray-50 rounded-2xl p-6 shadow-sm">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <span
                    className="text-4xl font-bold mr-3"
                    style={{ color: "#2d4640" }}
                  >
                    4.8
                  </span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 ${i < 4 ? "text-yellow-400 fill-current" : i === 4 ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>
                <p style={{ color: "#9a9c97" }}>
                  На основі <strong>23 відгуків</strong> у Google
                </p>
                <a
                  href="https://maps.app.goo.gl/s73LiDStMvvvS8EC8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-3 px-4 py-2 rounded-lg border transition-colors text-sm"
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
                  Переглянути всі відгуки
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Recent Reviews Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                      О
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold" style={{ color: "#161616" }}>
                        Оксана Петренко
                      </p>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-xs" style={{ color: "#9a9c97" }}>
                    2 тижні тому
                  </p>
                </div>
                <p style={{ color: "#9a9c97" }}>
                  "Дуже кваліфіковані спеціалісти! Після курсу масажу для спини
                  відчуваю себе набагато краще. Індивідуальний підхід до кожного
                  пацієнта. Рекомендую!"
                </p>
              </CardContent>
            </Card>

            {/* Review 2 */}
            <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                      А
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold" style={{ color: "#161616" }}>
                        Андрій Коваленко
                      </p>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-xs" style={{ color: "#9a9c97" }}>
                    1 місяць тому
                  </p>
                </div>
                <p style={{ color: "#9a9c97" }}>
                  "Професійний підхід до лікування сколіозу. Вже після кількох
                  сеансів помітні покращення. Зручне розташування в центрі
                  Тернополя. Дякую команді!"
                </p>
              </CardContent>
            </Card>

            {/* Review 3 */}
            <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                      М
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold" style={{ color: "#161616" }}>
                        Марина Іванова
                      </p>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-xs" style={{ color: "#9a9c97" }}>
                    3 тижні тому
                  </p>
                </div>
                <p style={{ color: "#9a9c97" }}>
                  "Відмінна реабілітаційна програма після травми хребта. Уважні
                  спеціалісти, сучасне обладнання. Результат перевищив
                  очікування. 100% рекомендую!"
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Google Reviews Widget Alternative */}
          <div className="mt-12 text-center">
            <div className="bg-gray-50 rounded-xl p-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">G</span>
                </div>
                <div className="text-left">
                  <h3
                    className="font-bold text-lg"
                    style={{ color: "#161616" }}
                  >
                    Google Reviews
                  </h3>
                  <p style={{ color: "#9a9c97" }}>
                    Оцініть нашу роботу та поділіться своїм досвідом
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <a
                  href="https://maps.app.goo.gl/s73LiDStMvvvS8EC8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-6 py-3 rounded-lg border transition-colors"
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
                  <Star className="w-5 h-5 mr-2" />
                  Переглянути всі відгуки
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>

                <a
                  href="https://maps.app.goo.gl/s73LiDStMvvvS8EC8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-6 py-3 rounded-lg transition-colors text-white"
                  style={{ backgroundColor: "#2d4640" }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = "#1f332f")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor = "#2d4640")
                  }
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Залишити відгук
                </a>
              </div>
            </div>
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
                    src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=uk&amp;q=49.553516,25.596625+(Твоя%20Опора%20-%20Реабілітаційно-масажний%20центр)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
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

            {/* Instagram Booking Call-to-Action */}
            <div>
              <Card className="bg-white" style={{ color: "#161616" }}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Instagram className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ color: "#161616" }}
                  >
                    Записатися на прийом
                  </h3>
                  <p className="mb-6" style={{ color: "#9a9c97" }}>
                    Для запису на масаж або реабілітацію напишіть нам у Direct
                    Instagram. Ми швидко відповімо та допоможемо обрати зручний
                    час.
                  </p>
                  <div className="space-y-4">
                    <a
                      href="https://www.instagram.com/tvoya.opora.te/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full px-6 py-3 rounded-lg text-white transition-colors font-medium"
                      style={{ backgroundColor: "#2d4640" }}
                      onMouseEnter={(e) =>
                        (e.target.style.backgroundColor = "#1f332f")
                      }
                      onMouseLeave={(e) =>
                        (e.target.style.backgroundColor = "#2d4640")
                      }
                    >
                      <Instagram className="w-5 h-5 mr-2" />
                      Написати в Instagram
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                    <p className="text-xs" style={{ color: "#9a9c97" }}>
                      @tvoya.opora.te • Відповідаємо протягом години
                    </p>
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
                © 2025 tvoya.opora.te. Усі права захищені.
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
          Ми зв'яжемося з вами протягом години для підтвердження запису
        </p>
      </div>
    </CardContent>
  </Card>
</div>;
