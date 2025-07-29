"use client"

import { Mail, Phone, MapPin, Github, Linkedin, Download, ExternalLink, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"

const downloadPDF = () => {
  // Create a new window with the resume content for printing
  const printWindow = window.open("", "_blank")
  if (printWindow) {
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Hossein Pira - Resume</title>
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
            <h1>Hossein Pira</h1>
            <p><strong>Full Stack Developer</strong></p>
          </div>
          
          <div class="section">
            <h2>Contact Information</h2>
            <div class="contact-info">
              <div class="contact-item">📧 h3dev.pira@gmail.com</div>
              <div class="contact-item">📱 +98 9039484577</div>
              <div class="contact-item">📍 Omidiyeh, Iran</div>
              <div class="contact-item">🔗 github.com/code3-dev</div>
              <div class="contact-item">💼 linkedin.com/in/hossein-pira-748056278</div>
            </div>
          </div>

          <div class="section">
            <h2>About Me</h2>
            <p>Hi, I'm Hossein Pira — a full-stack developer passionate about building fast, modern applications with clean and maintainable code. I specialize in both web and cross-platform app development, using a wide range of modern technologies to create exceptional user experiences.</p>
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
              <span class="skill">Flutter</span>
              <span class="skill">Laravel</span>
              <span class="skill">NextJS</span>
              <span class="skill">React</span>
              <span class="skill">NuxtJS</span>
              <span class="skill">Vue</span>
              <span class="skill">NodeJS</span>
              <span class="skill">Expo</span>
              <span class="skill">Tauri</span>
              <span class="skill">Electron</span>
              <span class="skill">TypeScript</span>
            </div>
          </div>

          <div class="section">
            <h2>What I Build</h2>
            <ul class="build-list">
              <li>Android Applications</li>
              <li>Windows Applications</li>
              <li>Linux Applications</li>
              <li>Full-featured Web Frontends</li>
              <li>High-performance Backend APIs</li>
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

  useEffect(() => {
    setIsLoaded(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const skills = [
    "Flutter",
    "Laravel",
    "NextJS",
    "React",
    "NuxtJS",
    "Vue",
    "NodeJS",
    "Expo",
    "Tauri",
    "Electron",
    "TypeScript",
  ]

  const databases = ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Supabase"]

  const contactLinks = [
    {
      icon: Mail,
      label: "h3dev.pira@gmail.com",
      href: "mailto:h3dev.pira@gmail.com",
      color: "from-red-500 to-pink-500",
    },
    { icon: Phone, label: "+98 9039484577", href: "tel:+989039484577", color: "from-green-500 to-emerald-500" },
    { icon: MapPin, label: "Omidiyeh, Iran", href: "#", color: "from-blue-500 to-cyan-500" },
    {
      icon: Github,
      label: "github.com/code3-dev",
      href: "https://github.com/code3-dev",
      color: "from-gray-700 to-gray-900",
    },
    {
      icon: Linkedin,
      label: "linkedin.com/in/hossein-pira-748056278",
      href: "https://www.linkedin.com/in/hossein-pira-748056278",
      color: "from-blue-600 to-blue-800",
    },
  ]

  const buildItems = [
    { title: "Android Applications", icon: "📱", delay: "0ms" },
    { title: "Windows Applications", icon: "🖥️", delay: "100ms" },
    { title: "Linux Applications", icon: "🐧", delay: "200ms" },
    { title: "Web Frontends", icon: "🌐", delay: "300ms" },
    { title: "Backend APIs", icon: "⚡", delay: "400ms" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-pink-400/10 to-red-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
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

      <div className="relative z-10 p-4 md:p-8">
        <div
          className={`max-w-7xl mx-auto transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Header Actions */}
          <div className="flex justify-end mb-8">
            <button
              onClick={downloadPDF}
              className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-3 text-white hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
            >
              <Download size={18} className="group-hover:animate-bounce" />
              <span className="font-medium">Download PDF</span>
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Profile & Contact */}
            <div className="lg:col-span-1 space-y-6">
              {/* Profile Card */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500 group">
                <div className="text-center">
                  <div className="relative mb-6">
                    <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-white/30 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                      <img src="/hossein-photo.jpg" alt="Hossein Pira" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-white animate-pulse"></div>
                  </div>
                  <h1 className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Hossein Pira
                  </h1>
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-4">
                    <Sparkles size={16} className="text-yellow-400 animate-pulse" />
                    <span className="text-blue-200 font-medium">Full Stack Developer</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Passionate about building fast, modern applications with clean and maintainable code.
                  </p>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 hover:bg-white/15 transition-all duration-500">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
                  Contact
                </h3>
                <div className="space-y-4">
                  {contactLinks.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      className="group flex items-center gap-4 p-3 rounded-2xl hover:bg-white/10 transition-all duration-300 cursor-pointer"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div
                        className={`w-10 h-10 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <contact.icon size={18} className="text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-gray-300 text-sm block truncate group-hover:text-white transition-colors duration-300">
                          {contact.label}
                        </span>
                      </div>
                      <ExternalLink
                        size={14}
                        className="text-gray-500 group-hover:text-white transition-colors duration-300"
                      />
                    </a>
                  ))}
                </div>
              </div>

              {/* Skills Card */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 hover:bg-white/15 transition-all duration-500">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-red-500 rounded-full animate-pulse"></div>
                  Core Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-medium text-white hover:from-white/30 hover:to-white/20 hover:scale-105 transition-all duration-300 cursor-default"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Databases Card */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 hover:bg-white/15 transition-all duration-500">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
                  Databases
                </h3>
                <div className="flex flex-wrap gap-2">
                  {databases.map((db, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 backdrop-blur-sm border border-emerald-400/30 px-4 py-2 rounded-full text-sm font-medium text-emerald-200 hover:from-emerald-500/30 hover:to-green-500/30 hover:scale-105 transition-all duration-300 cursor-default"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {db}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Me */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500">
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="text-4xl animate-wave">👋</span>
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    About Me
                  </span>
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Hi, I'm Hossein Pira — a full-stack developer passionate about building fast, modern applications with
                  clean and maintainable code. I specialize in both web and cross-platform app development, using a wide
                  range of modern technologies to create exceptional user experiences.
                </p>
              </div>

              {/* Tech Stack */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="text-4xl">💻</span>
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Tech Stack
                  </span>
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
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
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:scale-105 transition-all duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="inline-flex items-center gap-2 font-bold text-lg mb-3">
                        <div className={`w-3 h-3 bg-gradient-to-r ${item.color} rounded-full`}></div>
                        <span className="text-white">{item.title}</span>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">{item.tech}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* What I Build */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="text-4xl">🧰</span>
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    What I Build
                  </span>
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {buildItems.map((item, index) => (
                    <div
                      key={index}
                      className="group bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:from-white/10 hover:to-white/20 hover:scale-105 transition-all duration-300 cursor-default"
                      style={{ animationDelay: item.delay }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                        <span className="text-white font-medium group-hover:text-blue-200 transition-colors duration-300">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Development Style */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-500">
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="text-4xl">⚙️</span>
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Development Style
                  </span>
                </h2>
                <div className="space-y-4">
                  {[
                    "Clean, readable, and scalable code",
                    "Modern architecture & best practices",
                    "Focus on performance and developer-friendly documentation",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mt-2 animate-pulse"></div>
                      <span className="text-gray-300 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-2">
                    <Sparkles className="animate-spin" />
                    Let's build something awesome together!
                    <Sparkles className="animate-spin" />
                  </h3>
                  <p className="text-blue-100 text-lg mb-6">Ready to bring your ideas to life with modern technology</p>
                  <button className="bg-white text-purple-600 font-bold py-3 px-8 rounded-2xl hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl">
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
