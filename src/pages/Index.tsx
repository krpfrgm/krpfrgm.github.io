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
    name: "Сергій Калмазан",
    title: "Лікар ортопед-травматолог | вертебролог",
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
{/* 
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
                        {/* <Instagram className="w-5 h-5 mr-2" />
                        Дізнатися більше про спеціаліста
                        <ExternalLink className="w-4 h-4 ml-2" /> 
                      </a>
                    </div> 
                    */}

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

  // Bookmark functionality
  const addToBookmarks = () => {
    if (window.sidebar && window.sidebar.addPanel) {
      // Firefox
      window.sidebar.addPanel(
        "tvoya.opora.te - Масаж та Реабілітація",
        window.location.href,
        "",
      );
    } else if (window.external && window.external.AddFavorite) {
      // Internet Explorer
      window.external.AddFavorite(
        window.location.href,
        "tvoya.opora.te - Масаж та Реабілітація",
      );
    } 
    // else {
    //   // Modern browsers - show instruction
    //   const shortcut =
    //     navigator.userAgent.indexOf("Mac") !== -1 ? "Cmd+D" : "Ctrl+D";
    //   alert(
    //     `Щоб додати в закладки, натисніть ${shortcut} або використайте меню браузера`,
    //   );
    // }
  };

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
                onClick={() => scrollToSection("pricing")}
                className="transition-colors"
                style={{ color: "#9a9c97" }}
                onMouseEnter={(e) => (e.target.style.color = "#2d4640")}
                onMouseLeave={(e) => (e.target.style.color = "#9a9c97")}
              >
                Ціни
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
              {/* <Badge
                className="mb-4 text-white"
                style={{ backgroundColor: "#2d4640" }}
              >
                Health/Beauty
              </Badge> */}
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
              {/* Animated floating heart - Bookmark button */}
              <div
                className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-xl group"
                style={{
                  animation: "float 3s ease-in-out infinite",
                  animationDelay: "0s",
                }}
                onClick={addToBookmarks}
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
                title="Додати в закладки"
              >
                <Heart className="w-8 h-8 text-red-500 group-hover:text-red-600 transition-colors duration-300" />
              </div>
              {/* Animated floating award - Bookmark button */}
              <div
                className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-xl group"
                style={{
                  animation: "float 3s ease-in-out infinite",
                  animationDelay: "1.5s",
                }}
                onClick={addToBookmarks}
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
                title="Додати в закладки"
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  Більше тисячі вилікуваних пацієнтів
                </h3>
                <p className="text-sm" style={{ color: "#9a9c97" }}>
                  Декілька сотень скоригованих постав
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
          </div>
        </div>
      </section>

      {/* Service Provider Carousel Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceProviderCarousel />
        </div>
      </section>
      {/* Enhanced Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
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
              опорно-рухового апарату з використанням сучасних методик
            </p>
          </div>

          <div className="space-y-16">
            {/* Service 1 - Лікувальний масаж */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "rgba(45, 70, 64, 0.1)" }}
                    >
                      <Heart className="w-8 h-8" style={{ color: "#2d4640" }} />
                    </div>
                    <div>
                      <h3
                        className="text-2xl font-bold"
                        style={{ color: "#161616" }}
                      >
                        Лікувальний масаж
                      </h3>
                      <p style={{ color: "#9a9c97" }}>
                        Професійний підхід до відновлення здоров'я
                      </p>
                    </div>
                  </div>

                  <p className="text-lg" style={{ color: "#9a9c97" }}>
                    Спеціалізований лікувальний масаж для лікування захворювань
                    опорно-рухового апарату. Використовуємо класичні та сучасні
                    методики для максимального ефекту.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle
                        className="w-5 h-5"
                        style={{ color: "#2d4640" }}
                      />
                      <span style={{ color: "#161616" }}>
                        Класичний лікувальний масаж
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle
                        className="w-5 h-5"
                        style={{ color: "#2d4640" }}
                      />
                      <span style={{ color: "#161616" }}>
                        Сегментарний масаж
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle
                        className="w-5 h-5"
                        style={{ color: "#2d4640" }}
                      />
                      <span style={{ color: "#161616" }}>Точковий масаж</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle
                        className="w-5 h-5"
                        style={{ color: "#2d4640" }}
                      />
                      <span style={{ color: "#161616" }}>
                        Масаж при остеохондрозі
                      </span>
                    </div>
                  </div>

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
                    Записатися на масаж
                  </a>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <div
                    className="aspect-[4/3] bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center"
                    style={{ minHeight: "300px" }}
                  >
                    <div className="text-center">
                      <div
                        className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg"
                        style={{ backgroundColor: "#2d4640" }}
                      >
                        <Heart className="w-12 h-12 text-white" />
                      </div>
                      <p className="text-sm" style={{ color: "#9a9c97" }}>
                        Фото лікувального масажу
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2 - Реабілітація */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <div
                  className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center"
                  style={{ minHeight: "300px" }}
                >
                  <div className="text-center">
                    <div
                      className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: "#2d4640" }}
                    >
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    <p className="text-sm" style={{ color: "#9a9c97" }}>
                      Фото реабілітаційних процедур
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(45, 70, 64, 0.1)" }}
                  >
                    <Users className="w-8 h-8" style={{ color: "#2d4640" }} />
                  </div>
                  <div>
                    <h3
                      className="text-2xl font-bold"
                      style={{ color: "#161616" }}
                    >
                      Реабілітація
                    </h3>
                    <p style={{ color: "#9a9c97" }}>
                      Відновлення після травм та операцій
                    </p>
                  </div>
                </div>

                <p className="text-lg" style={{ color: "#9a9c97" }}>
                  Комплексні програми відновлення після травм, операцій та
                  захворювань. Індивідуальний підхід до кожного пацієнта з
                  урахуванням особливостей організму.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle
                      className="w-5 h-5"
                      style={{ color: "#2d4640" }}
                    />
                    <span style={{ color: "#161616" }}>
                      Реабілітація після травм
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle
                      className="w-5 h-5"
                      style={{ color: "#2d4640" }}
                    />
                    <span style={{ color: "#161616" }}>
                      Відновлення після операцій
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle
                      className="w-5 h-5"
                      style={{ color: "#2d4640" }}
                    />
                    <span style={{ color: "#161616" }}>
                      Лікувальна фізкультура
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle
                      className="w-5 h-5"
                      style={{ color: "#2d4640" }}
                    />
                    <span style={{ color: "#161616" }}>Кінезіотерапія</span>
                  </div>
                </div>

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
                  Записатися на реабілітацію
                </a>
              </div>
            </div>

            {/* Service 3 - Лікування сколіозу */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "rgba(45, 70, 64, 0.1)" }}
                    >
                      <Award className="w-8 h-8" style={{ color: "#2d4640" }} />
                    </div>
                    <div>
                      <h3
                        className="text-2xl font-bold"
                        style={{ color: "#161616" }}
                      >
                        Лікування сколіозу
                      </h3>
                      <p style={{ color: "#9a9c97" }}>
                        Спеціалізована терапія для корекції хребта
                      </p>
                    </div>
                  </div>

                  <p className="text-lg" style={{ color: "#9a9c97" }}>
                    Професійне лікування сколіозу з використанням авторських
                    методик. Працюємо з пацієнтами різного віку - від дітей до
                    дорослих.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle
                        className="w-5 h-5"
                        style={{ color: "#2d4640" }}
                      />
                      <span style={{ color: "#161616" }}>Корекція постави</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle
                        className="w-5 h-5"
                        style={{ color: "#2d4640" }}
                      />
                      <span style={{ color: "#161616" }}>
                        Лікування сколіозу 1-3 ступеня
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle
                        className="w-5 h-5"
                        style={{ color: "#2d4640" }}
                      />
                      <span style={{ color: "#161616" }}>
                        Профілактика у дітей
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle
                        className="w-5 h-5"
                        style={{ color: "#2d4640" }}
                      />
                      <span style={{ color: "#161616" }}>
                        Комплексна терапія
                      </span>
                    </div>
                  </div>

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
                    Записатися на лікування
                  </a>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <div
                    className="aspect-[4/3] bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center"
                    style={{ minHeight: "300px" }}
                  >
                    <div className="text-center">
                      <div
                        className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg"
                        style={{ backgroundColor: "#2d4640" }}
                      >
                        <Award className="w-12 h-12 text-white" />
                      </div>
                      <p className="text-sm" style={{ color: "#9a9c97" }}>
                        Фото корекції сколіозу
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-16"
        style={{ backgroundColor: "#f8f9f9" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: "#161616" }}
            >
              Ціни на послуги
            </h2>
            <p
              className="text-lg max-w-3xl mx-auto"
              style={{ color: "#9a9c97" }}
            >
              Доступні ціни на професійні послуги масажу та реабілітації
            </p>
          </div>


          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-xl p-8 shadow-sm max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-left space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle
                      className="w-5 h-5"
                      style={{ color: "#2d4640" }}
                    />
                    <span style={{ color: "#161616" }}>
                      Огляд у спеціаліста - 550 ₴
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle
                      className="w-5 h-5"
                      style={{ color: "#2d4640" }}
                    />
                    <span style={{ color: "#161616" }}>
                      Масаж спини - 550 ₴ | 30 хв
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle
                      className="w-5 h-5"
                      style={{ color: "#2d4640" }}
                    />
                    <span style={{ color: "#161616" }}>
                      Масаж всього тіла (ніжки та спинка) - 1 050 ₴ | 90 хв
                    </span>
                  </div>
                    <div className="flex items-center space-x-2">
                    <CheckCircle
                      className="w-5 h-5"
                      style={{ color: "#2d4640" }}
                    />
                    <span style={{ color: "#161616" }}>
                      Масаж всього тіла (ніжки, руки, спинка, голова) - 1250 ₴ | 2 год
                    </span>
                  </div>
                </div>
                <div className="text-left space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle
                      className="w-5 h-5"
                      style={{ color: "#2d4640" }}
                    />
                    <span style={{ color: "#161616" }}>
                      Масаж обличчя і зони декольте -  850 ₴ | 60 хв
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle
                      className="w-5 h-5"
                      style={{ color: "#2d4640" }}
                    />
                    <span style={{ color: "#161616" }}>
                      Антицелюлітний масаж -  800 ₴ | 60 хв
                    </span>
                  </div>
                                    <div className="flex items-center space-x-2">
                    <CheckCircle
                      className="w-5 h-5"
                      style={{ color: "#2d4640" }}
                    />
                    <span style={{ color: "#161616" }}>
                      Заняття з інструктором - 550 ₴ | 60 хв
                    </span>
                  </div>
                                    <div className="flex items-center space-x-2">
                    <CheckCircle
                      className="w-5 h-5"
                      style={{ color: "#2d4640" }}
                    />
                    <span style={{ color: "#161616" }}>
                      Тейпування однієї зони - 200 ₴
                    </span>
                  </div>
                                    <div className="flex items-center space-x-2">
                    <CheckCircle
                      className="w-5 h-5"
                      style={{ color: "#2d4640" }}
                    />
                    <span style={{ color: "#161616" }}>
                      Параартикулярна блокада (без вартості медикаментів) - 350 ₴
                    </span>
                  </div>
                </div>
              </div>
            </div>
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
                      А
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold" style={{ color: "#161616" }}>
                        Анастасія
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
                  "Дуже довго обирала клініку, адже з обережністю ставлюся до вибору лікарів/масажистів. І рада, що не прогадала. Дуже круте відношення до клієнтів, а головне - результат. Після 3 процедури антицелюлітного масажу вже були перші зміни: шкіра стала більш гладкою і підтягнутою. Окрім антицелюлітного масажу, тут пропонують багато інших видів процедур — як лікувальних, так і розслабляючих. Дуже вдячна за професіоналізм і чудовий результат! Тепер я почуваюся більш впевненою в собі. Тому любі хлопці і дівчата, моя щира рекомендація👍"
                </p>
              </CardContent>
            </Card>

            {/* Review 2 */}
            <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                      І
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold" style={{ color: "#161616" }}>
                        Ілона Щепна
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
                    4 тижні тому
                  </p>
                </div>
                <p style={{ color: "#9a9c97" }}>
                  "Після кількох сеансів масажу в «Твоїй опорі» нарешті відчула полегшення у спині. Дуже вдячна за такий комплексний підхід, рекомендую цю клініку всім, хто шукає якісний масаж, реабілітацію та позитивні відчуття."
                </p>
              </CardContent>
            </Card>

            {/* Review 3 */}
            <Card className="border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                      О
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold" style={{ color: "#161616" }}>
                        Ольга Борак
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
                  "Дуже вдячна за масаж спини - після двох сеансів перестав тягнути поперек. Приємна атмосфера і професійний підхід. Рекомндую 'Твою опору'!!"
                </p>
              </CardContent>
            </Card>
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
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d192.41261927508788!2d25.5904309538405!3d49.545206004260955!3m2!1i1024!2i768!4f60!3m3!1m2!1s0x473036b0923af08d%3A0x4bb815779bcaba59!2z0KLQstC-0Y8g0L7Qv9C-0YDQsCDigJQg0YbQtdC90YLRgCDRhNGW0LfQuNGH0L3QvtGXINGA0LXQsNCx0ZbQu9GW0YLQsNGG0ZbRlw!5e0!3m2!1sen!2sua!4v1749328166397!5m2!1sen!2sua"
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
