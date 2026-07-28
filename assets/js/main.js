(() => {
  // ===== Header scroll =====
  const header = document.getElementById('siteHeader');
  const burger = document.getElementById('burgerBtn');
  const mobileNav = document.getElementById('mobileNav');

  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 12);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // ===== Burger menu =====
  burger.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    burger.classList.toggle('active', isOpen);
    burger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      burger.classList.remove('active');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // ===== Cart button → scroll to contacts =====
  const cartBtn = document.getElementById('cartBtn');
  if (cartBtn) {
    cartBtn.addEventListener('click', () => {
      document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // ===== Wait for GSAP =====
  function initGSAP() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      // Fallback: show all elements
      document.querySelectorAll('.gsap-fade-up, .gsap-fade-left, .gsap-fade-right, .gsap-fade-in, .gsap-scale').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // ─── Hero parallax ───
    gsap.to('#heroBgImg', {
      yPercent: 28,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1.5
      }
    });

    // ─── Hero elements stagger ───
    gsap.fromTo('.hero-badge', { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power3.out'
    });
    gsap.fromTo('.hero-title', { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, duration: 1.0, delay: 0.45, ease: 'power3.out'
    });
    gsap.fromTo('.hero-sub', { opacity: 0, y: 35 }, {
      opacity: 1, y: 0, duration: 0.9, delay: 0.7, ease: 'power3.out'
    });
    gsap.fromTo('.hero-actions', { opacity: 0, y: 25 }, {
      opacity: 1, y: 0, duration: 0.8, delay: 0.95, ease: 'power3.out'
    });
    gsap.fromTo('.hero-meta', { opacity: 0 }, {
      opacity: 1, duration: 0.8, delay: 1.2, ease: 'power2.out'
    });

    // ─── Trust bar items ───
    gsap.utils.toArray('#trust .trust-item').forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.7, delay: i * 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#trust',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // ─── About photos stagger with scale ───
    gsap.utils.toArray('.about-photo').forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, scale: 0.85, y: 30 },
        {
          opacity: 1, scale: 1, y: 0,
          duration: 0.85,
          delay: i * 0.15,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: '.about-photos',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // ─── About content fade left ───
    gsap.utils.toArray('.about-content > *').forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, x: 40 },
        {
          opacity: 1, x: 0,
          duration: 0.7,
          delay: i * 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.about-content',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // ─── Services heading ───
    gsap.utils.toArray('#services .section-label, #services .section-title, #services .section-desc').forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.6, delay: i * 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none reverse' }
        }
      );
    });

    // ─── Price cards ───
    gsap.utils.toArray('.price-card').forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, y: 60, scale: 0.92 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.75,
          delay: i * 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.price-grid',
            start: 'top 82%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // ─── Additional table ───
    gsap.fromTo('.additional-table-wrap',
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: '.additional-table-wrap', start: 'top 88%', toggleActions: 'play none none reverse' }
      }
    );

    // ─── Review cards ───
    gsap.utils.toArray('.review-col').forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.8,
          delay: i * 0.18,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: '.reviews-row',
            start: 'top 82%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // ─── Reviews heading ───
    gsap.utils.toArray('#reviews .section-head > *').forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.6, delay: i * 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none reverse' }
        }
      );
    });

    // ─── Contacts ───
    gsap.fromTo('.map-wrap',
      { opacity: 0, x: -60 },
      {
        opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.contacts-grid', start: 'top 82%', toggleActions: 'play none none reverse' }
      }
    );
    gsap.fromTo('.contacts-info',
      { opacity: 0, x: 60 },
      {
        opacity: 1, x: 0, duration: 0.9, delay: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.contacts-grid', start: 'top 82%', toggleActions: 'play none none reverse' }
      }
    );

    // ─── Social cards stagger ───
    gsap.utils.toArray('.social-card').forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, scale: 0.8, y: 20 },
        {
          opacity: 1, scale: 1, y: 0,
          duration: 0.5,
          delay: i * 0.08,
          ease: 'back.out(1.6)',
          scrollTrigger: {
            trigger: '.social-contacts',
            start: 'top 88%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // ─── Wave dividers reveal ───
    gsap.utils.toArray('.wave-wrap').forEach(el => {
      gsap.fromTo(el,
        { opacity: 0 },
        {
          opacity: 1, duration: 0.8,
          scrollTrigger: { trigger: el, start: 'top 95%', toggleActions: 'play none none none' }
        }
      );
    });

    // ─── Contacts heading ───
    gsap.utils.toArray('#contacts .section-head > *').forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.6, delay: i * 0.1, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none reverse' }
        }
      );
    });

    // ─── Cart button entrance ───
    gsap.fromTo('.cart-btn',
      { opacity: 0, scale: 0, rotate: -45 },
      { opacity: 1, scale: 1, rotate: 0, duration: 0.7, delay: 2.5, ease: 'back.out(1.7)' }
    );

    // ─── Header social squares pulse on hover ───
    document.querySelectorAll('.social-sq').forEach(sq => {
      sq.addEventListener('mouseenter', () => {
        gsap.to(sq, { scale: 1.15, duration: 0.2, ease: 'back.out(2)' });
      });
      sq.addEventListener('mouseleave', () => {
        gsap.to(sq, { scale: 1, duration: 0.3, ease: 'power2.out' });
      });
    });

    // ─── Price card hover tilt ───
    document.querySelectorAll('.price-card').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        gsap.to(card, { rotateY: x * 6, rotateX: -y * 4, duration: 0.4, ease: 'power2.out', transformPerspective: 800 });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.5, ease: 'power2.out' });
      });
    });

    // ─── Logo bounce ───
    gsap.to('.logo-avatar', {
      y: -4,
      duration: 1.8,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1
    });

  }

  // Init GSAP when page is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(initGSAP, 100));
  } else {
    setTimeout(initGSAP, 100);
  }

})();