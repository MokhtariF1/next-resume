"use client"

import { Mail, Phone, MapPin, Github, Download, ExternalLink, Sparkles, Send } from "lucide-react"
import { useState, useEffect } from "react"

const downloadPDF = () => {
  // Create a new window with the resume content for printing
  const printWindow = window.open("", "_blank")
  if (printWindow) {
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Hossein Mokhtari - Resume</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; color: #333; }
            .header { text-align: center; margin-bottom: 30px; }
            .section { margin-bottom: 25px; }
            .section h2 { color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 5px; }
            .contact-info { display: flex; flex-wrap: wrap; gap: 15px; margin-bottom: 20px; }
            .contact-item { background: #f3f4f6; padding: 8px 12px; border-radius: 6px; }
            .skills { display: flex; flex-wrap: wrap; gap: 8px; }
            .skill { background: #e5e7eb; padding: 4px 8px; border-radius: 4px; font-size: 12px; }
            .tech-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 10px; }
            .tech-item { background: #f9fafb; padding: 12px; border-radius: 8px; }
            .build-list { list-style: none; padding: 0; }
            .build-list li { padding: 5px 0; }
            .build-list li:before { content: "• "; color: #2563eb; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Hossein Mokhtari</h1>
            <p><strong>Backend Developer</strong></p>
          </div>
          
          <div class="section">
            <h2>Contact Information</h2>
            <div class="contact-info">
              <div class="contact-item">📧 ho3einmokhtariofficial@gmail.com</div>
              <div class="contact-item">📱 +98 9039484577</div>
              <div class="contact-item">📍 Omidiyeh, Iran</div>
              <div class="contact-item">🔗 github.com/code3-dev</div>
              <div class="contact-item">✉️ t.me/Ho3einMokhtari</div>
            </div>
          </div>

          <div class="section">
            <h2>About Me</h2>
            <p>Hi, I'm Hossein Mokhtari — a backend developer focused on building scalable APIs and advanced Telegram bots. I specialize in automating workflows and delivering reliable backend solutions with clean and maintainable code.</p>
          </div>

          <div class="section">
            <h2>Tech Stack</h2>
            <div class="tech-grid">
              <div class="tech-item">
                <strong>Frontend:</strong> React (Next.js), Vue (Nuxt.js), Flutter
              </div>
              <div class="tech-item">
                <strong>Backend:</strong> Laravel (PHP MVC), Node.js
              </div>
              <div class="tech-item">
                <strong>Cross-platform:</strong> Expo (React Native), Tauri, Electron
              </div>
              <div class="tech-item">
                <strong>Databases:</strong> MySQL, PostgreSQL, MongoDB, Firebase, Supabase
              </div>
            </div>
          </div>

          <div class="section">
            <h2>Core Skills</h2>
            <div class="skills">
              <span class="skill">Python</span>
              <span class="skill">FastAPI</span>
              <span class="skill">Telegram Bot</span>
              <span class="skill">Playwright</span>
              <span class="skill">Flutter</span>
              <span class="skill">Dart</span>
              <span class="skill">WordPress</span>
              <span class="skill">HTML</span>
              <span class="skill">CSS</span>
            </div>


          <div class="section">
            <h2>What I Build</h2>
            <ul class="build-list">
              <li>Android Applications</li>
              <li>Telegram Bots</li>
              <li>Web Scraping Applications</li>
              <li>Backend APIs</li>
            </ul>
          </div>

          <div class="section">
            <h2>Development Style</h2>
            <ul class="build-list">
              <li>Clean, readable, and scalable code</li>
              <li>Modern architecture & best practices</li>
              <li>Focus on performance and developer-friendly documentation</li>
            </ul>
          </div>
        </body>
      </html>
    `)
    printWindow.document.close()

    // Trigger print dialog which allows saving as PDF
    setTimeout(() => {
      printWindow.print()
      printWindow.close()
    }, 250)
  }
}

export default function Resume() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    // Only add mouse tracking on desktop
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        setMousePosition({ x: e.clientX, y: e.clientY })
      }
    }

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", checkMobile)
    }
  }, [isMobile])

  const skills = [
    "Python",
    "TelegramBot",
    "Fastapi",
    "Playwright",
    "Flutter",
    "dart",
    "Wordpress",
    "html",
    "css",
  ]

  const databases = ["MySQL", "PostgreSQL", "MongoDB", "Sqlite"]

  const contactLinks = [
    {
      icon: Mail,
      label: "ho3einmokhtariofficial@gmail.com",
      href: "mailto:ho3einmokhtariofficial@gmail.com",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Phone,
      label: "+98 9386083520",
      href: "tel:+989386083520",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      label: "Yazd, Iran",
      href: "#",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Github,
      label: "github.com/Ho3einMokhtari",
      href: "https://github.com/Ho3einMokhtari",
      color: "from-gray-700 to-gray-900",
    },
    {
      icon: Send,
      label: "t.me/Ho3einMokhtari",
      href: "https://t.me/Ho3einMokhtari",
      color: "from-blue-600 to-blue-800",
    },
  ]

  const buildItems = [
    { title: "Android Applications", icon: "📱", delay: "0ms" },
    { title: "Telegram Bots", icon: "🖥️", delay: "100ms" },
    { title: "Web Scraping", icon: "🌐", delay: "300ms" },
    { title: "Backend APIs", icon: "⚡", delay: "400ms" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background - Reduced on mobile */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        {!isMobile && (
          <div
            className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl transition-all duration-1000 ease-out"
            style={{
              left: mousePosition.x - 192,
              top: mousePosition.y - 192,
            }}
          ></div>
        )}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-72 md:h-72 bg-gradient-to-r from-pink-400/10 to-red-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 md:w-80 md:h-80 bg-gradient-to-r from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>


      {/* Floating Particles - Reduced on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(isMobile ? 5 : 20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 p-3 sm:p-4 md:p-6 lg:p-8">
        <div
          className={`max-w-7xl mx-auto transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Header Actions */}
          <div className="flex justify-end mb-4 md:mb-8">
            <button
              onClick={downloadPDF}
              className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl md:rounded-2xl px-4 py-2 md:px-6 md:py-3 text-white hover:bg-white/20 transition-all duration-300 flex items-center gap-2 text-sm md:text-base"
            >
              <Download size={16} className="md:w-[18px] md:h-[18px] group-hover:animate-bounce" />
              <span className="font-medium">Download PDF</span>
            </button>
          </div>

          {/* Mobile-First Layout */}
          <div className="space-y-6 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            {/* Profile Section - Full width on mobile, sidebar on desktop */}
            <div className="lg:col-span-1 space-y-4 md:space-y-6">
              {/* Profile Card */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 hover:bg-white/15 transition-all duration-500 group">
                <div className="text-center">
                  <div className="relative mb-4 md:mb-6">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-white/30 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                      <img src="/hossein-photo.jpg" alt="Hossein Mokhtari" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-4 h-4 md:w-6 md:h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-white animate-pulse"></div>
                  </div>
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Hossein Mokhtari
                  </h1>
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1 md:px-4 md:py-2 mb-3 md:mb-4">
                    <Sparkles size={14} className="md:w-4 md:h-4 text-yellow-400 animate-pulse" />
                    <span className="text-blue-200 font-medium text-sm md:text-base">Full Stack Developer</span>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    Passionate about building fast, modern applications with clean and maintainable code.
                  </p>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl md:rounded-3xl p-4 md:p-6 hover:bg-white/15 transition-all duration-500">
                <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
                  Contact
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {contactLinks.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      className="group flex items-center gap-3 md:gap-4 p-2 md:p-3 rounded-xl md:rounded-2xl hover:bg-white/10 transition-all duration-300 cursor-pointer touch-manipulation"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div
                        className={`w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r ${contact.color} rounded-lg md:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <contact.icon size={14} className="md:w-[18px] md:h-[18px] text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-gray-300 text-xs sm:text-sm block truncate group-hover:text-white transition-colors duration-300">
                          {contact.label}
                        </span>
                      </div>
                      <ExternalLink
                        size={12}
                        className="md:w-[14px] md:h-[14px] text-gray-500 group-hover:text-white transition-colors duration-300"
                      />
                    </a>
                  ))}
                </div>
              </div>

              {/* Skills Card */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl md:rounded-3xl p-4 md:p-6 hover:bg-white/15 transition-all duration-500">
                <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-red-500 rounded-full animate-pulse"></div>
                  Core Skills
                </h3>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm border border-white/20 px-2 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium text-white hover:from-white/30 hover:to-white/20 hover:scale-105 transition-all duration-300 cursor-default"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Databases Card */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl md:rounded-3xl p-4 md:p-6 hover:bg-white/15 transition-all duration-500">
                <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
                  Databases
                </h3>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {databases.map((db, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 backdrop-blur-sm border border-emerald-400/30 px-2 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium text-emerald-200 hover:from-emerald-500/30 hover:to-green-500/30 hover:scale-105 transition-all duration-300 cursor-default"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {db}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content - Full width on mobile, 2/3 on desktop */}
            <div className="lg:col-span-2 space-y-6 md:space-y-8">
              {/* About Me */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 hover:bg-white/15 transition-all duration-500">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
                  <span className="text-2xl md:text-4xl animate-wave">👋</span>
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    About Me
                  </span>
                </h2>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg">
                  Hi, I'm Hossein Mokhtari — a backend developer focused on building scalable APIs and advanced Telegram bots. I specialize in automating workflows and delivering reliable backend solutions with clean and maintainable code.
                </p>
              </div>

              {/* Tech Stack */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 hover:bg-white/15 transition-all duration-500">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 flex items-center gap-2 md:gap-3">
                  <span className="text-2xl md:text-4xl">💻</span>
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Tech Stack
                  </span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  {[
                    {
                      title: "Frontend",
                      tech: "React (Next.js), Vue (Nuxt.js), Flutter",
                      color: "from-blue-500 to-cyan-500",
                    },
                    { title: "Backend", tech: "Laravel (PHP MVC), Node.js", color: "from-green-500 to-emerald-500" },
                    {
                      title: "Cross-platform",
                      tech: "Expo (React Native), Tauri, Electron",
                      color: "from-purple-500 to-pink-500",
                    },
                    {
                      title: "Databases",
                      tech: "MySQL, PostgreSQL, MongoDB, Firebase, Supabase",
                      color: "from-orange-500 to-red-500",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 hover:bg-white/10 hover:scale-105 transition-all duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="inline-flex items-center gap-2 font-bold text-base md:text-lg mb-2 md:mb-3">
                        <div className={`w-2 h-2 md:w-3 md:h-3 bg-gradient-to-r ${item.color} rounded-full`}></div>
                        <span className="text-white">{item.title}</span>
                      </div>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{item.tech}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* What I Build */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 hover:bg-white/15 transition-all duration-500">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 flex items-center gap-2 md:gap-3">
                  <span className="text-2xl md:text-4xl">🧰</span>
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    What I Build
                  </span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {buildItems.map((item, index) => (
                    <div
                      key={index}
                      className="group bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 hover:from-white/10 hover:to-white/20 hover:scale-105 transition-all duration-300 cursor-default"
                      style={{ animationDelay: item.delay }}
                    >
                      <div className="flex items-center gap-3 md:gap-4">
                        <div className="text-xl md:text-3xl group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                        <span className="text-white font-medium text-sm md:text-base group-hover:text-blue-200 transition-colors duration-300">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Development Style */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 hover:bg-white/15 transition-all duration-500">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 flex items-center gap-2 md:gap-3">
                  <span className="text-2xl md:text-4xl">⚙️</span>
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Development Style
                  </span>
                </h2>
                <div className="space-y-3 md:space-y-4">
                  {[
                    "Clean, readable, and scalable code",
                    "Modern architecture & best practices",
                    "Focus on performance and developer-friendly documentation",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 md:gap-4 p-3 md:p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl hover:bg-white/10 transition-all duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mt-1.5 md:mt-2 animate-pulse flex-shrink-0"></div>
                      <span className="text-gray-300 leading-relaxed text-sm md:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl md:rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl md:rounded-3xl p-6 md:p-8 text-center">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 flex items-center justify-center gap-2 flex-wrap">
                    <Sparkles className="animate-spin w-5 h-5 md:w-6 md:h-6" />
                    <span>Let's build something awesome together!</span>
                    <Sparkles className="animate-spin w-5 h-5 md:w-6 md:h-6" />
                  </h3>
                  <p className="text-blue-100 text-sm sm:text-base md:text-lg mb-4 md:mb-6">
                    Ready to bring your ideas to life with modern technology
                  </p>
                  <button className="bg-white text-purple-600 font-bold py-2 px-6 md:py-3 md:px-8 rounded-xl md:rounded-2xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl text-sm md:text-base touch-manipulation">
                    Get In Touch
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-20deg); }
        }
        @keyframes tilt {
          0%, 50%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(1deg); }
          75% { transform: rotate(-1deg); }
        }
        .animate-wave {
          animation: wave 2s ease-in-out infinite;
        }
        .animate-tilt {
          animation: tilt 10s infinite linear;
        }
      `}</style>
    </div>
  )
}
