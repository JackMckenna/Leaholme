// Shared chrome: Wordmark, Nav, Footer, Placeholder, Marquee

function Wordmark({ variant = 'inline', light = false }) {
  const color = light ? '#fff' : 'var(--ink)';
  if (variant === 'stack') {
    return (
      <span className="wm-stack" style={{ color }}>
        <span>Leaholme</span>
        <small>Northumberland Cottages</small>
      </span>
    );
  }
  if (variant === 'mono') {
    return (
      <span className="wm-mono" style={{ color }}>
        LEAHOLME <span style={{ opacity: 0.5 }}>—</span> COTTAGES
      </span>
    );
  }
  if (variant === 'mark') {
    return (
      <span className="wm" style={{ color }}>
        <span className="wm-mark">L</span>
        <span>Leaholme</span>
      </span>
    );
  }
  // inline default
  return (
    <span className="wm" style={{ color, fontStyle: 'italic' }}>
      Leaholme<span style={{ fontStyle: 'normal', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', marginLeft: 10, color: light ? 'rgba(255,255,255,0.7)' : 'var(--ink-mute)' }}>Cottages</span>
    </span>
  );
}

function Placeholder({ tone = 'soft', caption, style, className = '', children }) {
  const cls = `ph ph-${tone} ${className}`;
  return (
    <div className={cls} style={style}>
      {caption && <div className="ph-caption">{caption}</div>}
      {children}
    </div>
  );
}

function Nav({ page, navigate, light = false, wordmark = 'inline' }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);
  const isLight = light && !scrolled && !open;
  const links = [
    ['home', 'Home'],
    ['cottages', 'The Cottages'],
    ['gallery', 'Gallery'],
    ['local', 'The Coast'],
    ['journal', 'Journal'],
  ];
  const go = (k) => { navigate(k); setOpen(false); };
  return (
    <React.Fragment>
      <nav className={`nav ${isLight ? 'nav-light' : 'nav-dark'}`}>
        <a href="#" onClick={(e) => { e.preventDefault(); go('home'); }}>
          <Wordmark variant={wordmark} light={isLight} />
        </a>
        <div className="nav-links" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
          {links.map(([key, label]) => (
            <a
              key={key}
              href="#"
              className={`nav-link ${page === key ? 'active' : ''}`}
              onClick={(e) => { e.preventDefault(); go(key); }}
            >
              {label}
            </a>
          ))}
        </div>
        <div className="nav-right" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button className="btn btn-ghost nav-reserve" style={{
            borderColor: isLight ? 'rgba(255,255,255,0.5)' : 'var(--ink)',
            color: isLight ? '#fff' : 'var(--ink)',
            background: isLight ? 'rgba(255,255,255,0.08)' : 'transparent',
          }}
            onClick={() => go('booking')}
          >Contact us
            <span style={{ fontFamily: 'var(--mono)', fontSize: 11 }}>→</span>
          </button>
          <button
            className="nav-burger"
            aria-label="Menu"
            onClick={() => setOpen(o => !o)}
            style={{
              display: 'none',
              width: 36, height: 36,
              border: `1px solid ${isLight ? 'rgba(255,255,255,0.5)' : 'var(--ink)'}`,
              color: isLight ? '#fff' : 'var(--ink)',
              borderRadius: 999,
              alignItems: 'center', justifyContent: 'center',
            }}
          >
            <span style={{ display: 'inline-flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ width: 14, height: 1, background: 'currentColor', transform: open ? 'translateY(2.5px) rotate(45deg)' : 'none', transition: 'transform 200ms' }}></span>
              <span style={{ width: 14, height: 1, background: 'currentColor', transform: open ? 'translateY(-2.5px) rotate(-45deg)' : 'none', transition: 'transform 200ms' }}></span>
            </span>
          </button>
        </div>
      </nav>
      {open && (
        <div className="mobile-drawer" style={{
          position: 'fixed', inset: 0, top: 60, zIndex: 70,
          background: 'var(--bg)', padding: '32px 24px',
          display: 'flex', flexDirection: 'column', gap: 4,
          animation: 'fadeUp 280ms cubic-bezier(.2,.7,.2,1) both',
        }}>
          {links.map(([key, label]) => (
            <a key={key} href="#" onClick={(e) => { e.preventDefault(); go(key); }}
              style={{
                fontFamily: 'var(--serif)', fontSize: 36, padding: '14px 0',
                borderBottom: '1px solid var(--line)',
                color: page === key ? 'var(--sage-deep)' : 'var(--ink)',
              }}>
              {label}
            </a>
          ))}
          <button className="btn btn-primary" style={{ marginTop: 32, justifyContent: 'center' }} onClick={() => go('booking')}>
            Contact us
          </button>
          <div className="small mono" style={{ marginTop: 32, color: 'var(--ink-mute)' }}>
            BAMBURGH & ALNWICK · NORTHUMBERLAND
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

function Footer({ navigate }) {
  return (
    <footer style={{ background: 'var(--ink)', color: 'var(--bg)', padding: '96px 0 40px' }}>
      <div className="container">
        <div className="grid" style={{ gridTemplateColumns: '1.6fr 1fr 1fr 1fr', gap: 48, paddingBottom: 72, borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
          <div>
            <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 40, lineHeight: 1.1, marginBottom: 24 }}>
              A quieter<br />kind of stay.
            </div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', maxWidth: 340, lineHeight: 1.6 }}>
              Four hand-tended properties on the Northumberland coast. One cottage, three apartments. Booked direct, with no middlemen.
            </div>
            <div style={{ marginTop: 32, display: 'flex', gap: 12 }}>
              <input className="input" placeholder="your@email.com" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff', maxWidth: 260 }} />
              <button className="btn" style={{ background: 'var(--bg)', color: 'var(--ink)', padding: '12px 22px' }}>Subscribe</button>
            </div>
            <div className="small" style={{ color: 'rgba(255,255,255,0.4)', marginTop: 12 }}>
              A letter, occasionally. Field notes, recipes, last-minute openings.
            </div>
          </div>
          <FootCol title="Visit" items={[
            ['The Cottages', 'cottages'],
            ['Gallery', 'gallery'],
            ['The Coast', 'local'],
            ['Contact', 'booking'],
          ]} navigate={navigate} />
          <FootCol title="House" items={[
            ['Sustainability', 'home'],
            ['Press', 'home'],
            ['Journal', 'journal'],
          ]} navigate={navigate} />
          <div>
            <div className="eyebrow-mono" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 18 }}>Find us</div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 22, lineHeight: 1.35 }}>
              Bamburgh & Alnwick<br />
              Northumberland<br />
              NE69 7BJ
            </div>
            <div className="small mono" style={{ color: 'rgba(255,255,255,0.5)', marginTop: 14 }}>
              N 55.6083°  W 1.7194°
            </div>
            <div style={{ marginTop: 24, fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>
              <div>+44 (0)1756 760 142</div>
              <div>stay@leaholme.co.uk</div>
            </div>
          </div>
        </div>
        <div className="flex between" style={{ paddingTop: 32, fontSize: 12, color: 'rgba(255,255,255,0.45)' }}>
          <div>© 2026 Leaholme Cottages.  Tended on the Northumberland coast.</div>
          <div className="flex gap-lg">
            <a href="#">Privacy</a>
            <a href="#">House Rules</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FootCol({ title, items, navigate }) {
  return (
    <div>
      <div className="eyebrow-mono" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 18 }}>{title}</div>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map(([label, key]) => (
          <li key={label}>
            <a href="#" onClick={(e) => { e.preventDefault(); navigate(key); }} style={{ fontFamily: 'var(--serif)', fontSize: 22, color: 'rgba(255,255,255,0.9)' }}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Marquee() {
  const items = ['Northumberland Coast', '◉', 'One cottage, three apartments', '◉', 'Bamburgh & Alnwick', '◉', 'Booked direct', '◉', 'Dogs welcome', '◉'];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {[...items, ...items, ...items, ...items].map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { Wordmark, Nav, Footer, Placeholder, Marquee });
