import { useEffect } from 'react'

function Nav() {
  return (
    <nav>
      <a href="#" className="nav-logo">
        <img src="/masters-tech-logo.png" alt="Master's Tech" className="nav-logo-img" />
      </a>
      <ul className="nav-links">
        <li><a href="#projects">Work</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="#contact" className="nav-cta">Start a Project</a>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>
      <div className="hero-img-block">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80"
          alt="Featured project"
        />
        <span className="hero-img-label">Featured — Atlas Platform, 2024</span>
      </div>
      <div className="hero-content">
        <div className="hero-eyebrow">Software Development & Management</div>
        <h1 className="hero-headline">
          We Build<br />
          <em>Software</em><br />
          That Scales
        </h1>
        <div className="hero-sub">
          <p className="hero-desc">
            A full-stack technology studio building apps, websites, and digital platforms — from early-stage MVPs to production systems we manage long-term.
          </p>
          <div className="hero-scroll">
            <div className="hero-scroll-line"></div>
            Scroll
          </div>
        </div>
      </div>
    </section>
  )
}

function Marquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        <div className="marquee-item">
          App Development <span className="marquee-dot"></span> Web Development <span className="marquee-dot"></span> UI/UX Design <span className="marquee-dot"></span> Cloud & DevOps <span className="marquee-dot"></span> Maintenance <span className="marquee-dot"></span> Consulting <span className="marquee-dot"></span>
        </div>
        <div className="marquee-item">
          App Development <span className="marquee-dot"></span> Web Development <span className="marquee-dot"></span> UI/UX Design <span className="marquee-dot"></span> Cloud & DevOps <span className="marquee-dot"></span> Maintenance <span className="marquee-dot"></span> Consulting <span className="marquee-dot"></span>
        </div>
      </div>
    </div>
  )
}

function About() {
  return (
    <section id="about">
      <div className="about">
        <div className="about-left reveal">
          <div className="section-eyebrow">Who We Are</div>
          <h2 className="about-title">Building <span>Reliable</span> Software That Drives Growth</h2>
          <p className="about-body">
            Master's Tech is a team of developers, designers, and engineers committed to building technology with purpose. We believe great software is more than code — it is a tool that should solve real problems and grow with your business. Every project is a partnership between your goals, your users, and the systems we build to serve them.
          </p>
          <div className="about-stats">
            <div>
              <div className="stat-num">180+</div>
              <div className="stat-label">Projects Shipped</div>
            </div>
            <div>
              <div className="stat-num">50+</div>
              <div className="stat-label">Clients Served</div>
            </div>
            <div>
              <div className="stat-num">99.9%</div>
              <div className="stat-label">Uptime Delivered</div>
            </div>
          </div>
        </div>
        <div className="about-right reveal">
          <img
            className="about-img-main"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80"
            alt="Our team at work"
          />
          <img
            className="about-img-accent"
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=400&q=80"
            alt="Code on screen"
          />
          <div className="about-badge">Est.<br />2026</div>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" style={{ paddingTop: 0 }}>
      <div className="projects-header reveal">
        <h2 className="projects-title">Selected<br /><em>Work</em></h2>
        <a href="#" className="view-all">View All Projects →</a>
      </div>
      <div className="projects-grid">
        <div className="project-card">
          <img
            className="project-img"
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
            alt="Meridian Mobile App"
          />
          <div className="project-always">
            <div className="project-num">01</div>
            <div className="project-name">Meridian Pay</div>
            <div className="project-type">Mobile App · iOS & Android, 2024</div>
          </div>
          <div className="project-info">
            A cross-platform fintech app handling real-time payments and wallets for over 80,000 users, built with React Native and a cloud-native backend.
          </div>
        </div>

        <div className="project-card">
          <img
            className="project-img"
            src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80"
            alt="Corvo Commerce"
          />
          <div className="project-always">
            <div className="project-num">02</div>
            <div className="project-name">Corvo Commerce</div>
            <div className="project-type">Web Platform · E-commerce, 2023</div>
          </div>
          <div className="project-info">
            A high-performance online storefront and admin dashboard that cut page load times in half and lifted conversion through a rebuilt checkout flow.
          </div>
        </div>

        <div className="project-card">
          <img
            className="project-img"
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
            alt="Atlas Analytics"
          />
          <div className="project-always">
            <div className="project-num">03</div>
            <div className="project-name">Atlas Analytics</div>
            <div className="project-type">SaaS · Data Platform, 2023</div>
          </div>
          <div className="project-info">
            A real-time analytics dashboard processing millions of events daily, giving teams live insight into their products with sub-second query response.
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="services" id="services">
      <div className="services-inner">
        <div className="services-left reveal">
          <div className="section-eyebrow">What We Do</div>
          <h2 className="section-title">Full-Stack Technology Practice</h2>
          <p>
            From first idea to ongoing operations, we handle every layer of a product. Our integrated teams move fluidly across design, development, and infrastructure — so your vision survives all the way into production.
          </p>
        </div>
        <div className="reveal">
          <ul className="services-list">
            <li>
              <div>
                <div className="service-name">App Development</div>
                <div className="project-type">iOS, Android & Cross-Platform</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <span className="service-num">01</span>
                <span className="service-arrow">→</span>
              </div>
            </li>
            <li>
              <div>
                <div className="service-name">Web Development</div>
                <div className="project-type">Websites & Web Apps</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <span className="service-num">02</span>
                <span className="service-arrow">→</span>
              </div>
            </li>
            <li>
              <div>
                <div className="service-name">UI/UX Design</div>
                <div className="project-type">Product & Interface</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <span className="service-num">03</span>
                <span className="service-arrow">→</span>
              </div>
            </li>
            <li>
              <div>
                <div className="service-name">Cloud & DevOps</div>
                <div className="project-type">Infrastructure & Deployment</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <span className="service-num">04</span>
                <span className="service-arrow">→</span>
              </div>
            </li>
            <li>
              <div>
                <div className="service-name">Maintenance & Management</div>
                <div className="project-type">Support & Ongoing Operations</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <span className="service-num">05</span>
                <span className="service-arrow">→</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section>
      <div className="section-eyebrow reveal">How We Work</div>
      <h2 className="projects-title reveal" style={{ fontSize: 'clamp(36px,5vw,64px)' }}>Our Process</h2>
      <div className="process-grid reveal">
        <div className="process-step">
          <div className="process-step-num">01</div>
          <div className="process-step-title">Discover</div>
          <div className="process-step-desc">We listen before we build. Workshops with stakeholders, requirement gathering, and technical research shape a clear roadmap before a single line of code is written.</div>
        </div>
        <div className="process-step">
          <div className="process-step-num">02</div>
          <div className="process-step-title">Design</div>
          <div className="process-step-desc">We define the architecture and craft the user experience through wireframes, prototypes, and tech specs — validating ideas with you before development begins.</div>
        </div>
        <div className="process-step">
          <div className="process-step-num">03</div>
          <div className="process-step-title">Build</div>
          <div className="process-step-desc">Engineering with precision. We ship in agile iterations with clean, tested code and regular demos, so you see progress and steer the product as it takes shape.</div>
        </div>
        <div className="process-step">
          <div className="process-step-num">04</div>
          <div className="process-step-title">Launch & Manage</div>
          <div className="process-step-desc">We deploy, monitor, and maintain. From release to scaling and ongoing support, we stay engaged to keep your product fast, secure, and reliable.</div>
        </div>
      </div>
    </section>
  )
}

function CTABanner() {
  return (
    <div className="cta-banner" id="contact">
      <h2 className="cta-title">Have a Project<br />in Mind?</h2>
      <div className="cta-right">
        <p className="cta-desc">Tell us what you want to build. We take on a focused set of projects so each one gets the attention it deserves — from idea to launch and beyond.</p>
        <a href="mailto:kenmonwork@gmail.com" className="cta-btn">Start Your Project</a>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <div className="footer-logo">
            <img src="/masters-tech-logo.png" alt="Master's Tech" className="footer-logo-img" />
          </div>
          <div className="footer-tagline">Software Development & Management.<br />Ipuli · Tabora · Tanzania</div>
        </div>
        <div className="footer-col">
          <h4>Navigate</h4>
          <ul>
            <li><a href="#projects">Work</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="#">App Development</a></li>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">UI/UX Design</a></li>
            <li><a href="#">Cloud & DevOps</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:kenmonwork@gmail.com">kenmonwork@gmail.com</a></li>
            <li><a href="tel:+4712345678">+255 742 974 802</a></li>
            <li><a href="#">Kenneth Monyo</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">© 2024 Master's Tech. All rights reserved.</div>
        <div className="footer-socials">
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">Whatsapp</a>
        </div>
      </div>
    </footer>
  )
}

export default function HomePage() {
  useEffect(() => {
    // Custom cursor
    const cursor = document.getElementById('cursor')
    const cursorRing = document.getElementById('cursorRing')

    const onMove = (e) => {
      if (!cursor || !cursorRing) return
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
      setTimeout(() => {
        cursorRing.style.left = e.clientX + 'px'
        cursorRing.style.top = e.clientY + 'px'
      }, 60)
    }
    document.addEventListener('mousemove', onMove)

    // Scroll reveal
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    reveals.forEach((el) => observer.observe(el))

    // Nav transparency on scroll
    const nav = document.querySelector('nav')
    const onScroll = () => {
      if (!nav) return
      if (window.scrollY > 80) {
        nav.style.background = 'rgba(10,10,10,0.92)'
        nav.style.backdropFilter = 'blur(12px)'
        nav.style.borderBottom = '1px solid rgba(154,149,144,0.12)'
      } else {
        nav.style.background = 'transparent'
        nav.style.backdropFilter = 'none'
        nav.style.borderBottom = 'none'
      }
    }
    window.addEventListener('scroll', onScroll)

    return () => {
      document.removeEventListener('mousemove', onMove)
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <>
      <div className="cursor" id="cursor"></div>
      <div className="cursor-ring" id="cursorRing"></div>
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Services />
      <Process />
      <CTABanner />
      <Footer />
    </>
  )
}

