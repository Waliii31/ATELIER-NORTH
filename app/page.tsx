'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight, ChevronDown, Menu, MoveRight, X } from 'lucide-react'

const projects = [
  { title: 'House No. 08', location: 'Cotswolds, UK', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85', className: 'project-wide' },
  { title: 'Monument House', location: 'New York, USA', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85', className: 'project-tall' },
  { title: 'Villa Form', location: 'Mallorca, Spain', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85', className: 'project-square' },
  { title: 'The Glass Pavilion', location: 'Sydney, Australia', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85', className: 'project-wide' },
]

const services = [
  { number: '01', title: 'Custom Builds', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80' },
  { number: '02', title: 'Interior Architecture', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80' },
  { number: '03', title: 'Landscape Curation', image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=80' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeService, setActiveService] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    document.documentElement.classList.add('motion-ready')
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('motion-ready')
    }
  }, [])

  return (
    <main className="site-shell">
      <header className={`site-nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <a href="#top" className="wordmark" aria-label="Atelier North home">ATELIER <span>NORTH</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#philosophy">Philosophy</a><a href="#works">Works</a><a href="#contact">Contact</a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={22} strokeWidth={1.4} /> : <Menu size={22} strokeWidth={1.4} />}
        </button>
      </header>
      {menuOpen && <div className="mobile-menu"><a href="#philosophy" onClick={() => setMenuOpen(false)}>Philosophy</a><a href="#works" onClick={() => setMenuOpen(false)}>Selected Works</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></div>}

      <section className="hero" id="top">
        <div className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Architecture · Interiors · Landscape</p>
          <h1>Spaces with<br /><em>a point of view.</em></h1>
          <p className="hero-intro">Atelier North is an independent design studio shaping considered environments for modern living.</p>
          <a href="#contact" className="outline-cta">Discuss your project <ArrowUpRight size={16} /></a>
        </div>
        <a className="scroll-cue" href="#philosophy"><span>Scroll to explore</span><ChevronDown size={17} /></a>
        <div className="hero-index">01 <span>/</span> 04</div>
      </section>

      <section className="philosophy section-pad" id="philosophy">
        <div className="section-label">01 — The philosophy</div>
        <div className="philosophy-copy reveal"><h2>Quiet confidence.<br /><em>Lasting presence.</em></h2><div><p>We believe the most memorable spaces are felt before they are understood. Our work balances the rigour of architecture with the warmth of the everyday.</p><a href="#contact" className="text-link">More about the studio <MoveRight size={16} /></a></div></div>
        <div className="image-collage reveal"><div className="collage-main"><img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85" alt="Warm modern living room with sculptural furniture" /></div><div className="collage-small"><img src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=85" alt="Minimal kitchen with natural stone island" /></div><span className="image-caption">House No. 08 · Cotswolds</span></div>
      </section>

      <section className="services section-pad" id="services">
        <div className="services-bg" style={{ backgroundImage: `url(${services[activeService].image})` }} />
        <div className="services-tint" />
        <div className="section-label">02 — What we do</div>
        <div className="services-inner reveal"><div className="services-heading"><h2>Made for<br /><em>living.</em></h2><p>From first sketch to final detail, we create environments that feel inevitable.</p></div><div className="service-list">{services.map((service, i) => <button className={`service-item ${activeService === i ? 'active' : ''}`} key={service.title} onMouseEnter={() => setActiveService(i)} onFocus={() => setActiveService(i)}><span>{service.number}</span><strong>{service.title}</strong><ArrowUpRight size={20} /></button>)}</div></div>
      </section>

      <section className="works section-pad" id="works"><div className="section-label">03 — Selected works</div><div className="works-heading reveal"><h2>A collection of<br /><em>quiet gestures.</em></h2><p>Each project begins with listening. The result is a place that could belong nowhere else.</p></div><div className="project-grid">{projects.map((project, i) => <a href="#contact" className={`project-card ${project.className} reveal`} key={project.title}><div className="project-image"><img src={project.image} alt={`${project.title} interior`} /></div><div className="project-meta"><span>0{i + 1}</span><div><h3>{project.title}</h3><p>{project.location}</p></div><ArrowUpRight size={18} /></div></a>)}</div></section>

      <section className="quote-section section-pad"><div className="section-label">04 — In their words</div><div className="quote-mark reveal">“</div><blockquote className="reveal">They understood that luxury is not about more. It is about the exact right thing.</blockquote><div className="quote-footer reveal"><span>— Private client, House No. 08</span><div className="press-list"><span>ARCHITECTURAL DIGEST</span><span>THE WORLD OF INTERIORS</span><span>MONOCLE</span></div></div></section>

      <section className="contact section-pad" id="contact"><div className="section-label">05 — Start a conversation</div><div className="contact-grid reveal"><div><h2>Let&apos;s make<br /><em>something lasting.</em></h2><p>Tell us a little about your project, your ambitions, and the place you want to create.</p><div className="contact-details"><span>STUDIO</span><p>15 Clerkenwell Road<br />London EC1M 5PQ</p><a href="mailto:studio@ateliernorth.com">studio@ateliernorth.com</a></div></div><form onSubmit={(e) => e.preventDefault()}><label><span>Name</span><input type="text" name="name" required /></label><label><span>Email</span><input type="email" name="email" required /></label><label><span>Tell us about your project</span><textarea name="details" rows={3} required /></label><button type="submit" className="solid-cta">Send enquiry <ArrowUpRight size={17} /></button></form></div></section>

      <footer className="site-footer"><div className="footer-top"><span>ATELIER NORTH</span><span>© 2024 — 2025</span><span>London · New York · Everywhere</span></div><div className="footer-brand reveal">ATELIER<br /><em>NORTH</em></div><div className="footer-bottom"><div className="footer-links"><a href="#works">Instagram</a><a href="#works">Houzz</a><a href="mailto:studio@ateliernorth.com">Email</a></div><form className="newsletter" onSubmit={(e) => e.preventDefault()}><label>Receive occasional notes<input type="email" placeholder="Your email address" aria-label="Your email address" /></label><button type="submit" aria-label="Subscribe"><ArrowUpRight size={18} /></button></form></div></footer>
    </main>
  )
}
