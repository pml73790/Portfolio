import React, { useState, useEffect, memo } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Briefcase,
  GraduationCap,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

const SECTIONS = ['home', 'about', 'projects', 'experience', 'contact'];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [flowers, setFlowers] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll effect (nav bar background)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Floating flowers/leaves (decor)
  useEffect(() => {
    const newFlowers = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 30 + 20,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 4,
      rotation: Math.random() * 360,
      type: i % 2 === 0 ? 'leaf' : 'flower'
    }));
    setFlowers(newFlowers);
  }, []);

  // Optional: close mobile menu on Escape
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileMenuOpen]);

  const skills = {
    languages: ['Java', 'Python', 'HTML', 'CSS', 'JavaScript', 'TypeScript'],
    frameworks: ['React', 'Node.js', 'JavaFX'],
    tools: ['Git/GitHub', 'Docker', 'Figma', 'VS Code', 'Maven'],
    databases: ['MySQL', 'MongoDB']
  };

  const projects = [
    {
      title: 'Simply Cinema',
      period: 'September 2025 - Present',
      description:
        'Full-stack e-booking system with real-time seat selection, personalized dashboards, and secure payment workflows',
      tech: ['React.js', 'Node.js', 'Python', 'Java', 'Figma'],
      highlights: ['Real-time seat selection', 'Admin dashboards', 'Secure payments']
    },
    {
      title: 'FinChat',
      period: 'February 2025',
      description:
        'AI-powered financial tracking website with personalized advice, built during UGA Hacks X hackathon',
      tech: ['JavaScript', 'Python', 'MongoDB', 'Tailwind', 'Figma'],
      highlights: ['AI chatbot integration', 'Real-time recommendations', 'Secure data storage']
    },
    {
      title: 'Geography Quiz',
      period: 'July 2024',
      description:
        'Interactive quiz application with randomized questions, score tracking, and intuitive UI',
      tech: ['Java', 'JavaFX', 'Maven', 'Apache Commons CSV'],
      highlights: ['Score persistence', 'Dynamic question loading', 'Clean UI design']
    }
  ];

  const experience = [
    {
      role: 'Frontend Developer Intern',
      company: 'Altheros Capital',
      period: 'September 2024 - Present',
      description:
        'Developing responsive web app for Midwest Health Hospital focused on patient care and clinical workflows',
      achievements: [
        'Built user-centric features for patients with anxiety and PTSD',
        'Ensured scalability and cross-device optimization',
        'Implemented secure, HIPAA-compliant solutions'
      ]
    },
    {
      role: 'Hackathon Participant',
      company: 'UGA Hacks X',
      period: 'February 2025',
      description:
        'Collaborated on personalized financial web app with AI chatbot during 24+ hour hackathon',
      achievements: [
        'Designed wireframes and UX prototypes in Figma',
        "Won Truist Bank's Hyper-Personalization challenge",
        'Delivered working prototype in under 24 hours'
      ]
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const Flower = memo(({ size, left, top, delay, duration, rotation, type }) => {
    if (type === 'leaf') {
      return (
        <div
          className="absolute opacity-30 pointer-events-none"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            animation: `float ${duration}s ease-in-out ${delay}s infinite`,
            willChange: 'transform'
          }}
          aria-hidden="true"
        >
          <div style={{ transform: `rotate(${rotation}deg)` }}>
            <svg width={size} height={size} viewBox="0 0 100 100">
              <path
                d="M50 10 Q70 30 70 50 Q70 70 50 90 Q30 70 30 50 Q30 30 50 10 Z"
                fill="#7fb069"
                opacity="0.7"
              />
              <path
                d="M50 10 Q55 30 50 50 Q45 70 50 90"
                stroke="#5a9048"
                strokeWidth="1.5"
                fill="none"
                opacity="0.6"
              />
            </svg>
          </div>
        </div>
      );
    }

    return (
      <div
        className="absolute opacity-20 pointer-events-none"
        style={{
          left: `${left}%`,
          top: `${top}%`,
          animation: `float ${duration}s ease-in-out ${delay}s infinite`,
          willChange: 'transform'
        }}
        aria-hidden="true"
      >
        <div style={{ transform: `rotate(${rotation}deg)` }}>
          <svg width={size} height={size} viewBox="0 0 100 100">
            <circle cx="50" cy="30" r="15" fill="#ffc0cb" opacity="0.8" />
            <circle cx="70" cy="50" r="15" fill="#ffb3d9" opacity="0.8" />
            <circle cx="50" cy="70" r="15" fill="#ffc0cb" opacity="0.8" />
            <circle cx="30" cy="50" r="15" fill="#ffb3d9" opacity="0.8" />
            <circle cx="50" cy="50" r="12" fill="#ffd700" opacity="0.9" />
          </svg>
        </div>
      </div>
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 text-gray-800 relative overflow-hidden">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        .animate-slide-down {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>

      <div className="fixed inset-0 pointer-events-none z-0">
        {flowers.map((flower) => (
          <Flower key={flower.id} {...flower} />
        ))}
      </div>

      {/* NAV: scroll background ONLY on the top bar; dropdown stays transparent */}
      <nav className="fixed top-0 w-full z-50">
        {/* Header bar — ALWAYS transparent */}
        <div className="transition-all duration-300 bg-transparent">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="p-2 rounded-lg hover:bg-pink-100 transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-pink-600" />
              ) : (
                <Menu className="w-6 h-6 text-pink-600" />
              )}
            </button>
          </div>
        </div>

        {/* Dropdown menu — transparent */}
        {mobileMenuOpen && (
          <div className="max-w-6xl mx-auto px-6">
            <div className="mt-2 space-y-2 bg-transparent backdrop-blur-sm rounded-lg p-4 animate-slide-down">
              {['home', 'about', 'projects', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    scrollToSection(section);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left capitalize hover:text-pink-500 hover:bg-white/20 transition-all duration-200 font-medium py-3 px-2 rounded ${activeSection === section
                    ? 'text-pink-500 bg-white/20'
                    : 'text-gray-700'
                    }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center px-6 relative z-10">
        <div className="max-w-4xl text-center space-y-8">
          <div className="space-y-4 animate-fade-in">
            <div className="inline-block mb-6">
              <img
                src={process.env.PUBLIC_URL + "/headshot.jpg"}
                alt="My Phuong Ly"
                className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto object-cover border-4 border-pink-300 shadow-lg"
              />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                My Phuong Ly
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Computer Science student at UGA crafting intuitive web experiences with React, Python, and modern
              technologies
            </p>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/pml73790"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 bg-pink-100 hover:bg-pink-200 rounded-full transition-all hover:scale-110"
            >
              <Github className="w-6 h-6 text-pink-600" />
            </a>
            <a
              href="https://www.linkedin.com/in/my-phuong-ly"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 bg-purple-100 hover:bg-purple-200 rounded-full transition-all hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-purple-600" />
            </a>
            <a
              href="mailto:lyphuongmy03@gmail.com"
              aria-label="Email"
              className="p-3 bg-pink-100 hover:bg-pink-200 rounded-full transition-all hover:scale-110"
            >
              <Mail className="w-6 h-6 text-pink-600" />
            </a>
          </div>

          <button
            onClick={() => scrollToSection('about')}
            aria-label="Scroll to About section"
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <ChevronDown className="w-8 h-8 text-pink-500" />
          </button>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
        <div className="max-w-6xl w-full space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-pink-200 hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-8 h-8 text-pink-500" />
                <h3 className="text-2xl font-bold text-gray-800">Education</h3>
              </div>
              <p className="text-lg text-purple-600 font-medium">University of Georgia</p>
              <p className="text-gray-700">B.S. Computer Science</p>
              <p className="text-sm text-gray-500 mt-2">Expected May 2026</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-purple-200 hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-8 h-8 text-purple-500" />
                <h3 className="text-2xl font-bold text-gray-800">Focus Areas</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li>🌸 Full-Stack Web Development</li>
                <li>🌸 UI/UX Design & Implementation</li>
                <li>🌸 Healthcare Technology</li>
                <li>🌸 AI Integration</li>
              </ul>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-pink-200">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Technical Skills</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h4 className="text-pink-600 font-semibold mb-3 capitalize">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full text-sm border border-pink-300 text-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
        <div className="max-w-6xl w-full space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>

          <div className="space-y-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-pink-200 hover:shadow-xl transition-all hover:transform hover:scale-[1.02]"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-purple-600">{project.title}</h3>
                  <span className="text-sm text-gray-500">{project.period}</span>
                </div>

                <p className="text-gray-700 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-xs border border-purple-300 text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-1">
                  {project.highlights.map((highlight, i) => (
                    <p key={i} className="text-sm text-gray-600">
                      🌸 {highlight}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
        <div className="max-w-6xl w-full space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-purple-200 hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <Briefcase className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold text-purple-600">{exp.role}</h3>
                      <span className="text-sm text-gray-500">{exp.period}</span>
                    </div>
                    <p className="text-lg text-gray-700 mb-3 font-medium">{exp.company}</p>
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-gray-700">
                          🌸 {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20 relative z-10">
        <div className="max-w-4xl w-full text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>

          <p className="text-xl text-gray-600 mb-12">
            I'm always interested in hearing about new opportunities and collaborations
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="mailto:lyphuongmy03@gmail.com"
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-pink-200 hover:shadow-xl hover:transform hover:scale-105 transition-all"
            >
              <Mail className="w-8 h-8 text-pink-500 mx-auto mb-3" />
              <p className="text-sm text-gray-500">Email</p>
              <p className="text-purple-600 text-sm break-all font-medium">lyphuongmy03@gmail.com</p>
            </a>

            <a
              href="https://www.linkedin.com/in/my-phuong-ly"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-purple-200 hover:shadow-xl hover:transform hover:scale-105 transition-all"
            >
              <Linkedin className="w-8 h-8 text-purple-500 mx-auto mb-3" />
              <p className="text-sm text-gray-500">LinkedIn</p>
              <p className="text-purple-600 text-sm font-medium">my-phuong-ly</p>
            </a>

            <a
              href="https://github.com/pml73790"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-pink-200 hover:shadow-xl hover:transform hover:scale-105 transition-all"
            >
              <Github className="w-8 h-8 text-pink-500 mx-auto mb-3" />
              <p className="text-sm text-gray-500">GitHub</p>
              <p className="text-purple-600 text-sm font-medium">pml73790</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
