import { useEffect, useRef } from 'react'

function App() {
  const leafFieldRef = useRef(null)

  useEffect(() => {
    // reveal-on-scroll for each section
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    els.forEach((el) => io.observe(el))

    // falling leaves + flowers
    const leafShapes = [
      '<svg width="{s}" height="{s}" viewBox="0 0 24 24"><path d="M12 2C6 6 3 10 3 14a9 9 0 0 0 9 9 9 9 0 0 0 9-9c0-4-3-8-9-12Z" fill="{c}"/><path d="M12 5v16" stroke="rgba(0,0,0,0.15)" stroke-width="1"/></svg>',
      '<svg width="{s}" height="{s}" viewBox="0 0 24 24"><ellipse cx="12" cy="12" rx="6" ry="10" fill="{c}"/><path d="M12 2v20" stroke="rgba(0,0,0,0.12)" stroke-width="1"/></svg>',
    ]
    const flowerShapes = [
      '<svg width="{s}" height="{s}" viewBox="0 0 24 24"><g transform="translate(12,12)"><ellipse rx="4.6" ry="7" fill="{c}" transform="rotate(0)"/><ellipse rx="4.6" ry="7" fill="{c}" transform="rotate(72)"/><ellipse rx="4.6" ry="7" fill="{c}" transform="rotate(144)"/><ellipse rx="4.6" ry="7" fill="{c}" transform="rotate(216)"/><ellipse rx="4.6" ry="7" fill="{c}" transform="rotate(288)"/><circle r="3.4" fill="#D9A441"/></g></svg>',
      '<svg width="{s}" height="{s}" viewBox="0 0 24 24"><g transform="translate(12,12)"><ellipse rx="4" ry="6" fill="{c}" transform="rotate(45)"/><ellipse rx="4" ry="6" fill="{c}" transform="rotate(135)"/><ellipse rx="4" ry="6" fill="{c}" transform="rotate(225)"/><ellipse rx="4" ry="6" fill="{c}" transform="rotate(315)"/><circle r="3" fill="#E8AE4D"/></g></svg>',
    ]
    const colors = ['#7BA582', '#A9713C', '#4F7A5B', '#C99A57', '#5E8A63']
    const flowerColors = ['#EADFF0', '#F3D9E4', '#FBEBC6', '#E4D6F7']
    const field = leafFieldRef.current
    if (field) {
      const total = window.innerWidth < 700 ? 12 : 22
      for (let i = 0; i < total; i++) {
        const size = 14 + Math.random() * 14
        const isFlower = Math.random() < 0.4
        const shape = isFlower
          ? flowerShapes[Math.floor(Math.random() * flowerShapes.length)]
              .replaceAll('{s}', size)
              .replaceAll('{c}', flowerColors[Math.floor(Math.random() * flowerColors.length)])
          : leafShapes[Math.floor(Math.random() * leafShapes.length)]
              .replaceAll('{s}', size)
              .replaceAll('{c}', colors[Math.floor(Math.random() * colors.length)])
        const wrap = document.createElement('div')
        wrap.className = 'leaf'
        wrap.style.left = Math.random() * 100 + 'vw'
        wrap.style.animationDuration = 14 + Math.random() * 12 + 's'
        wrap.style.animationDelay = Math.random() * -20 + 's'
        wrap.innerHTML = shape
        field.appendChild(wrap)
      }
    }

    return () => io.disconnect()
  }, [])

  return (
    <>
<div id="leaf-field" ref={leafFieldRef}></div>

<aside className="sidenav">
  <div className="navlinks">
    <a href="#experience">Experience</a>
    <a href="#projects">Projects</a>
    <a href="#skills">Skills</a>
    <a href="#education">Education</a>
    <a href="#contact">Contact</a>
  </div>
</aside>

<div className="content">

<header className="hero">
  <div className="wrap hero-flex">
    <div className="hero-copy">
      <p className="eyebrow">Software Engineer</p>
      <h1>My Ly</h1>
      <p className="bio">Software engineer who enjoys building scalable solutions and working across teams to bring ideas to life 👷‍♀️🌱
I’m especially interested in combining development with project delivery for efficient, high-quality results</p>
      <div className="cta-row">
        <a className="btn primary" href="mailto:lyphuongmy03@gmail.com">Email me</a>
        <a className="btn" href="https://github.com/pml73790" target="_blank" rel="noopener">GitHub</a>
        <a className="btn" href="https://www.linkedin.com/in/my-phuong-ly" target="_blank" rel="noopener">LinkedIn</a>
      </div>
    </div>
    <div className="hero-bloom">
      <svg id="bloom-svg" width="200" height="200" viewBox="0 0 200 200" fill="none">
        <g id="petals" transform="translate(100,100)">
          <ellipse className="petal" cx="0" cy="-42" rx="20" ry="34" fill="#EADFF0" transform="rotate(0)"/>
          <ellipse className="petal" cx="0" cy="-42" rx="20" ry="34" fill="#EADFF0" transform="rotate(72)"/>
          <ellipse className="petal" cx="0" cy="-42" rx="20" ry="34" fill="#EADFF0" transform="rotate(144)"/>
          <ellipse className="petal" cx="0" cy="-42" rx="20" ry="34" fill="#EADFF0" transform="rotate(216)"/>
          <ellipse className="petal" cx="0" cy="-42" rx="20" ry="34" fill="#EADFF0" transform="rotate(288)"/>
          <circle r="16" fill="#D9A441"/>
        </g>
        <path d="M100 150 Q90 175 100 198" stroke="#3D7A50" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <ellipse cx="82" cy="172" rx="14" ry="7" fill="#3D7A50" transform="rotate(-25 82 172)"/>

        <g transform="translate(50,150) scale(0.55)">
          <g transform="translate(0,0)">
            <ellipse cx="0" cy="-42" rx="20" ry="34" fill="#F3D9E4" transform="rotate(0)"/>
            <ellipse cx="0" cy="-42" rx="20" ry="34" fill="#F3D9E4" transform="rotate(72)"/>
            <ellipse cx="0" cy="-42" rx="20" ry="34" fill="#F3D9E4" transform="rotate(144)"/>
            <ellipse cx="0" cy="-42" rx="20" ry="34" fill="#F3D9E4" transform="rotate(216)"/>
            <ellipse cx="0" cy="-42" rx="20" ry="34" fill="#F3D9E4" transform="rotate(288)"/>
            <circle r="16" fill="#E8AE4D"/>
          </g>
        </g>
        <path d="M50 168 Q42 185 50 200" stroke="#3D7A50" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

        <g transform="translate(158,168) scale(0.4)">
          <ellipse cx="0" cy="-42" rx="20" ry="34" fill="#FBEBC6" transform="rotate(0)"/>
          <ellipse cx="0" cy="-42" rx="20" ry="34" fill="#FBEBC6" transform="rotate(72)"/>
          <ellipse cx="0" cy="-42" rx="20" ry="34" fill="#FBEBC6" transform="rotate(144)"/>
          <ellipse cx="0" cy="-42" rx="20" ry="34" fill="#FBEBC6" transform="rotate(216)"/>
          <ellipse cx="0" cy="-42" rx="20" ry="34" fill="#FBEBC6" transform="rotate(288)"/>
          <circle r="16" fill="#D9A441"/>
        </g>
        <path d="M158 178 Q150 190 158 200" stroke="#3D7A50" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </svg>
    </div>
  </div>
</header>

<section id="experience">
  <div className="wrap reveal">
    <div className="divider"><h2>Experience</h2><div className="line"></div><span className="mini-flower"><svg width="16" height="16" viewBox="0 0 24 24"><g transform="translate(12,12)"><ellipse rx="4" ry="6" fill="#EADFF0"/><ellipse rx="4" ry="6" fill="#EADFF0" transform="rotate(72)"/><ellipse rx="4" ry="6" fill="#EADFF0" transform="rotate(144)"/><ellipse rx="4" ry="6" fill="#EADFF0" transform="rotate(216)"/><ellipse rx="4" ry="6" fill="#EADFF0" transform="rotate(288)"/><circle r="3" fill="#D9A441"/></g></svg></span></div>

    <div className="vine">

      <div className="stem">
        <span className="marker">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 3C12 3 5 6 5 13C5 17 8 19 12 19C16 19 19 17 19 13C19 6 12 3 12 3Z" fill="#F6FAF5" stroke="#A9713C" strokeWidth="1.6"/></svg>
        </span>
        <div className="stem-head">
          <span className="date">Aug 2026</span>
          <span className="tag">Upcoming</span>
        </div>
        <p className="stem-msg">Software Engineer</p>
        <p className="stem-org">Tata Consultancy Services — Duluth, GA</p>
      </div>

      <div className="stem">
        <span className="marker">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 3C12 3 5 6 5 13C5 17 8 19 12 19C16 19 19 17 19 13C19 6 12 3 12 3Z" fill="#3D7A50"/></svg>
        </span>
        <div className="stem-head">
          <span className="date">Sep – Dec 2025</span>
        </div>
        <p className="stem-msg">Frontend Developer Intern</p>
        <p className="stem-org">Altheros Capital — Remote</p>
        <ul className="leaflist">
          <li>Built responsive front-end components with React, TypeScript, and Tailwind CSS for production web/mobile apps</li>
          <li>Converted Figma wireframes into accessible, mobile-friendly interfaces with the UI/UX team</li>
          <li>Integrated APIs powering authentication, dashboards, and real-time data displays</li>
          <li>Shipped features for a healthcare app covering patient profiles, prescription refills, and appointment scheduling</li>
        </ul>
      </div>

      <div className="stem">
        <span className="marker">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 3C12 3 5 6 5 13C5 17 8 19 12 19C16 19 19 17 19 13C19 6 12 3 12 3Z" fill="#3D7A50"/></svg>
        </span>
        <div className="stem-head">
          <span className="date">Feb 2025</span>
        </div>
        <p className="stem-msg">Hackathon Participant — UGA Hacks X</p>
        <p className="stem-org">Athens, GA · 24-hour build</p>
        <ul className="leaflist">
          <li>Built a personalized financial web app with an AI chatbot for real-time, tailored advice</li>
          <li>Took on Truist Bank's hyper-personalization challenge, designing wireframes and UX prototypes in Figma</li>
        </ul>
      </div>

    </div>
  </div>
</section>

<section id="projects" className="tint">
  <div className="wrap reveal">
    <div className="divider"><h2>Projects</h2><div className="line"></div><span className="mini-flower"><svg width="16" height="16" viewBox="0 0 24 24"><g transform="translate(12,12)"><ellipse rx="4" ry="6" fill="#F3D9E4"/><ellipse rx="4" ry="6" fill="#F3D9E4" transform="rotate(72)"/><ellipse rx="4" ry="6" fill="#F3D9E4" transform="rotate(144)"/><ellipse rx="4" ry="6" fill="#F3D9E4" transform="rotate(216)"/><ellipse rx="4" ry="6" fill="#F3D9E4" transform="rotate(288)"/><circle r="3" fill="#D9A441"/></g></svg></span></div>

    <div className="repos">
      <div className="repo wide">
        <p className="repo-name">Simply Cinema</p>
        <p className="repo-desc full">Full-stack movie e-booking platform — browse films, reserve seats, and pay online. Real-time seat selection plus separate user and admin dashboards, built to streamline the booking flow.</p>
        <div className="pill-row">
          <span className="pill">Python</span><span className="pill">Node.js</span><span className="pill">React</span><span className="pill">Java</span><span className="pill">Figma</span>
        </div>
      </div>

      <div className="repo">
        <p className="repo-name">Athens Coffeehouse Finder</p>
        <p className="repo-desc">Helps students discover, review, and rate local Athens coffee shops and study spots. Auth, protected routes, full CRUD on reviews and locations, and Yelp API integration.</p>
        <div className="pill-row">
          <span className="pill">Next.js</span><span className="pill">MongoDB</span>
        </div>
      </div>

      <div className="repo">
        <p className="repo-name">Dawg Dollars</p>
        <p className="repo-desc">Budgeting and expense tracker for managing transactions, categories, and monthly budgets, with interactive dashboards for spending trends.</p>
        <div className="pill-row">
          <span className="pill">Java</span><span className="pill">Spring Boot</span><span className="pill">SQL</span><span className="pill">Docker</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="skills">
  <div className="wrap reveal">
    <div className="divider"><h2>Skills</h2><div className="line"></div><span className="mini-flower"><svg width="16" height="16" viewBox="0 0 24 24"><g transform="translate(12,12)"><ellipse rx="4" ry="6" fill="#FBEBC6"/><ellipse rx="4" ry="6" fill="#FBEBC6" transform="rotate(72)"/><ellipse rx="4" ry="6" fill="#FBEBC6" transform="rotate(144)"/><ellipse rx="4" ry="6" fill="#FBEBC6" transform="rotate(216)"/><ellipse rx="4" ry="6" fill="#FBEBC6" transform="rotate(288)"/><circle r="3" fill="#D9A441"/></g></svg></span></div>
    <div className="skill-groups">
      <div className="skill-group">
        <h3>Languages</h3>
        <div className="skill-pills">
          <span className="skill-pill">Java</span><span className="skill-pill">Python</span><span className="skill-pill">JavaScript</span><span className="skill-pill">TypeScript</span><span className="skill-pill">HTML</span><span className="skill-pill">CSS</span>
        </div>
      </div>
      <div className="skill-group">
        <h3>Frameworks</h3>
        <div className="skill-pills">
          <span className="skill-pill">React</span><span className="skill-pill">Next.js</span><span className="skill-pill">Tailwind CSS</span>
        </div>
      </div>
      <div className="skill-group">
        <h3>Databases</h3>
        <div className="skill-pills">
          <span className="skill-pill">MySQL</span><span className="skill-pill">MongoDB</span>
        </div>
      </div>
      <div className="skill-group">
        <h3>Tooling</h3>
        <div className="skill-pills">
          <span className="skill-pill">Docker</span><span className="skill-pill">Git</span><span className="skill-pill">Figma</span><span className="skill-pill">Maven</span><span className="skill-pill">VS Code</span><span className="skill-pill">Eclipse</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="education" className="tint">
  <div className="wrap reveal">
    <div className="divider"><h2>Education</h2><div className="line"></div><span className="mini-flower"><svg width="16" height="16" viewBox="0 0 24 24"><g transform="translate(12,12)"><ellipse rx="4" ry="6" fill="#E4D6F7"/><ellipse rx="4" ry="6" fill="#E4D6F7" transform="rotate(72)"/><ellipse rx="4" ry="6" fill="#E4D6F7" transform="rotate(144)"/><ellipse rx="4" ry="6" fill="#E4D6F7" transform="rotate(216)"/><ellipse rx="4" ry="6" fill="#E4D6F7" transform="rotate(288)"/><circle r="3" fill="#D9A441"/></g></svg></span></div>
    <div className="edu-card">
      <div>
        <p className="edu-school">University of Georgia</p>
        <p className="edu-deg">B.S. in Computer Science</p>
      </div>
      <p className="edu-date">May 2026</p>
    </div>
  </div>
</section>

<section id="contact">
  <div className="wrap reveal">
    <div className="divider"><h2>Contact</h2><div className="line"></div><span className="mini-flower"><svg width="16" height="16" viewBox="0 0 24 24"><g transform="translate(12,12)"><ellipse rx="4" ry="6" fill="#EADFF0"/><ellipse rx="4" ry="6" fill="#EADFF0" transform="rotate(72)"/><ellipse rx="4" ry="6" fill="#EADFF0" transform="rotate(144)"/><ellipse rx="4" ry="6" fill="#EADFF0" transform="rotate(216)"/><ellipse rx="4" ry="6" fill="#EADFF0" transform="rotate(288)"/><circle r="3" fill="#D9A441"/></g></svg></span></div>
    <div className="contact-grid">
      <a className="contact-card" href="mailto:lyphuongmy03@gmail.com">
        <span className="ico-wrap">
          <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
        </span>
        <p className="label">Email</p>
        <p className="value">lyphuongmy03@gmail.com</p>
      </a>
      <a className="contact-card" href="https://www.linkedin.com/in/my-phuong-ly" target="_blank" rel="noopener">
        <span className="ico-wrap">
          <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 10v7M7 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 13v4"/></svg>
        </span>
        <p className="label">LinkedIn</p>
        <p className="value">my-phuong-ly</p>
      </a>
      <a className="contact-card" href="https://github.com/pml73790" target="_blank" rel="noopener">
        <span className="ico-wrap">
          <svg className="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2-.2 4.5-1 4.5-4.5 0-1-.4-2-1-2.7.1-.3.4-1.4-.1-2.8 0 0-1-.3-3.5 1a12 12 0 0 0-6.5 0C5.5 5.2 4.5 5.5 4.5 5.5c-.5 1.4-.2 2.5-.1 2.8-.6.7-1 1.7-1 2.7 0 3.5 2.5 4.3 4.5 4.5-.4.4-.5.8-.5 1.5v3"/></svg>
        </span>
        <p className="label">GitHub</p>
        <p className="value">pml73790</p>
      </a>
    </div>
  </div>
</section>

</div>
    </>
  )
}

export default App
