// Homepage with three hero variants

function Home({ navigate, tweaks }) {
  const { COTTAGES, REVIEWS, JOURNAL } = window.LEAHOLME_DATA;
  const heroVariant = tweaks.heroVariant || 'cinematic';
  const cardStyle = tweaks.cardStyle || 'editorial';

  return (
    <div className="page-enter">
      {heroVariant === 'cinematic' && <HeroCinematic navigate={navigate} />}
      {heroVariant === 'split' && <HeroSplit navigate={navigate} />}
      {heroVariant === 'editorial' && <HeroEditorial navigate={navigate} />}

      {/* Cottages */}
      <section className="section">
        <div className="container">
          <div className="flex between" style={{ alignItems: 'flex-end', marginBottom: 64 }}>
            <div>
              <div className="eyebrow-mono" style={{ marginBottom: 16 }}>§ 01 — The Properties</div>
              <h2 className="display-lg serif" style={{ maxWidth: 720 }}>
                One cottage,<br />
                <em style={{ color: 'var(--sage-deep)' }}>three apartments.</em>
              </h2>
            </div>
            <button className="link-underline" onClick={() => navigate('cottages')}>View all <span>→</span></button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 96 }}>
            {COTTAGES.map((c, i) => (
              <CottageRow key={c.id} cottage={c} index={i} navigate={navigate} variant={cardStyle} />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
            <div style={{ position: 'sticky', top: 100 }}>
              <div className="eyebrow-mono" style={{ marginBottom: 16 }}>§ 03 — Guests</div>
              <h2 className="display-md serif" style={{ marginBottom: 24 }}>
                What people<br />
                say afterwards.
              </h2>
              <p className="body-lg" style={{ maxWidth: 420 }}>
                We don't list on Airbnb or Booking.com. Every review here is from a guest who booked direct and came back to write to us.
              </p>
              <div style={{ marginTop: 40, display: 'flex', gap: 32, alignItems: 'center' }}>
                <div>
                  <div className="serif" style={{ fontSize: 64, lineHeight: 1 }}>4.96</div>
                  <div className="small mono">FROM 284 STAYS</div>
                </div>
                <div style={{ width: 1, height: 60, background: 'var(--line-strong)' }}></div>
                <div>
                  <div className="serif" style={{ fontSize: 64, lineHeight: 1 }}>92%</div>
                  <div className="small mono">RETURN TO STAY AGAIN</div>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              {REVIEWS.map((r, i) => (
                <figure key={i} style={{ margin: 0, padding: '32px 0', borderTop: '1px solid var(--line)' }}>
                  <blockquote className="serif" style={{ margin: 0, fontSize: 28, lineHeight: 1.35, marginBottom: 24 }}>
                    "{r.quote}"
                  </blockquote>
                  <figcaption className="small">
                    <strong style={{ color: 'var(--ink)', fontFamily: 'var(--sans)', fontWeight: 500, letterSpacing: '0.04em' }}>{r.name}</strong>
                    <span style={{ marginLeft: 12, fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.06em', color: 'var(--ink-mute)' }}>{r.detail.toUpperCase()}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="section">
        <div className="container-wide">
          <div className="flex between" style={{ alignItems: 'flex-end', marginBottom: 56 }}>
            <div>
              <div className="eyebrow-mono" style={{ marginBottom: 16 }}>§ 04 — Look</div>
              <h2 className="display-md serif">A house tour, in stills.</h2>
            </div>
            <button className="link-underline" onClick={() => navigate('gallery')}>Full gallery <span>→</span></button>
          </div>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(12, 1fr)', gap: 16, gridAutoRows: 180 }}>
            <Placeholder tone="stone" caption="STONE FAÇADE · DAWN" style={{ gridColumn: 'span 5', gridRow: 'span 2' }} />
            <Placeholder tone="soft" caption="LINEN BED · NORTH LIGHT" style={{ gridColumn: 'span 4', gridRow: 'span 1' }} />
            <Placeholder tone="dark" caption="COPPER TUB" style={{ gridColumn: 'span 3', gridRow: 'span 2' }} />
            <Placeholder tone="sage" caption="WOOD PILE" style={{ gridColumn: 'span 2', gridRow: 'span 1' }} />
            <Placeholder tone="soft" caption="AGA · MORNING" style={{ gridColumn: 'span 2', gridRow: 'span 1' }} />
            <Placeholder tone="stone" caption="WALLED GARDEN" style={{ gridColumn: 'span 4', gridRow: 'span 1' }} />
            <Placeholder tone="dark" caption="BEAMS" style={{ gridColumn: 'span 3', gridRow: 'span 1' }} />
            <Placeholder tone="sage" caption="DUNSTANBURGH ON THE HORIZON" style={{ gridColumn: 'span 5', gridRow: 'span 1' }} />
          </div>
        </div>
      </section>

      {/* Journal */}
      <section className="section" style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: '1fr 1fr 1fr', gap: 48 }}>
            <div>
              <div className="eyebrow-mono" style={{ marginBottom: 16 }}>§ 05 — Journal</div>
              <h2 className="display-md serif" style={{ marginBottom: 24 }}>Field notes from the coast.</h2>
              <p className="body" style={{ maxWidth: 360, marginBottom: 40 }}>
                Walks, recipes, the people we work with. Sent occasionally to those who care to know.
              </p>
              <button className="btn btn-ghost">Read the journal <span style={{ fontFamily: 'var(--mono)' }}>→</span></button>
            </div>
            {JOURNAL.map((j, i) => (
              <article key={i} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                <Placeholder tone={['sage', 'stone', 'dark'][i % 3]} caption={j.kind.toUpperCase()} style={{ height: 280 }} />
                <div className="eyebrow-mono">{j.kind} · {j.read}</div>
                <h3 className="serif" style={{ fontSize: 26, lineHeight: 1.2 }}>{j.title}</h3>
                <a href="#" className="small mono" style={{ color: 'var(--sage-deep)', letterSpacing: '0.1em' }}>READ →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ position: 'relative', height: '70vh', minHeight: 540, overflow: 'hidden' }}>
        <Placeholder tone="dark" caption="BAMBURGH BEACH · GOLDEN HOUR · WIDE" className="hero-img" style={{ height: '100%' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
          <div className="tac" style={{ color: '#fff', maxWidth: 720, padding: 40 }}>
            <div className="eyebrow-mono" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 20 }}>BOOK DIRECT</div>
            <h2 className="display-lg serif" style={{ marginBottom: 24 }}>
              The coast<br />
              <em>is waiting.</em>
            </h2>
            <p className="body-lg" style={{ color: 'rgba(255,255,255,0.85)', marginBottom: 40, maxWidth: 480, margin: '0 auto 40px' }}>
              Three cottages, available now from late spring through the long winter evenings.
            </p>
            <button className="btn btn-light" onClick={() => navigate('booking')}>
              Contact us <span style={{ fontFamily: 'var(--mono)' }}>→</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ----- HERO VARIANTS ----- */

function HeroCinematic({ navigate }) {
  return (
    <section style={{ position: 'relative', height: '100vh', minHeight: 720, overflow: 'hidden' }}>
      <Placeholder tone="dark" caption="HERO · STONE COTTAGE AT DUSK · WIDE 21:9" className="hero-img" style={{ height: '100%' }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 2, padding: '0 40px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', paddingBottom: 100 }}>
        <div className="container" style={{ color: '#fff' }}>
          <div className="eyebrow-mono" style={{ color: 'rgba(255,255,255,0.75)', marginBottom: 32 }}>
            BAMBURGH · NORTHUMBERLAND · N 55.6083°
          </div>
          <h1 className="display-xl serif" style={{ marginBottom: 32, maxWidth: 1200 }}>
            The North Sea<br />
            <em style={{ color: 'var(--sage-pale)' }}>is calling.</em>
          </h1>
          <div className="flex" style={{ alignItems: 'flex-end', justifyContent: 'space-between', gap: 40, flexWrap: 'wrap' }}>
            <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 22, color: 'rgba(255,255,255,0.85)', maxWidth: 480 }}>
              Four hand-tended houses on the Northumberland coast — booked direct.
            </p>
            <div className="flex gap-md">
              <button className="btn btn-light" onClick={() => navigate('booking')}>Contact us <span style={{ fontFamily: 'var(--mono)' }}>→</span></button>
              <button className="btn btn-light" onClick={() => navigate('cottages')}>The cottages</button>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom search bar */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 3, background: 'var(--bg-card)', borderTop: '1px solid var(--line)' }}>
        <SearchStrip navigate={navigate} />
      </div>
    </section>
  );
}

function HeroSplit({ navigate }) {
  return (
    <section style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '1.1fr 1fr', paddingTop: 100 }}>
      <div style={{ padding: '80px 80px 80px 80px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="eyebrow-mono" style={{ marginBottom: 32 }}>NORTHUMBERLAND COAST</div>
        <h1 className="display-xl serif" style={{ marginBottom: 40 }}>
          The North Sea<br />
          <em style={{ color: 'var(--sage-deep)' }}>is calling.</em>
        </h1>
        <p className="body-lg" style={{ maxWidth: 480, marginBottom: 48 }}>
          Four hand-tended properties — one cottage at Low Newton-by-the-Sea and three apartments in Alnwick. Stone, linen, woodsmoke, and the long quiet of the Northumberland coast.
        </p>
        <div className="flex gap-md" style={{ marginBottom: 64 }}>
          <button className="btn btn-primary" onClick={() => navigate('booking')}>Contact us</button>
          <button className="btn btn-ghost" onClick={() => navigate('cottages')}>The cottages</button>
        </div>
        <div className="flex gap-lg" style={{ borderTop: '1px solid var(--line)', paddingTop: 32 }}>
          <Stat n="4" label="Properties" />
          <Stat n="2–8" label="Sleeps" />
          <Stat n="4.96" label="Guest rating" />
          <Stat n="284" label="Stays" />
        </div>
      </div>
      <Placeholder tone="stone" caption="HERO · DETAIL · COTTAGE DOOR · 4:5" style={{ minHeight: 720 }} />
    </section>
  );
}

function HeroEditorial({ navigate }) {
  return (
    <section style={{ paddingTop: 120, paddingBottom: 60 }}>
      <div className="container-wide">
        <div className="flex between" style={{ marginBottom: 40, alignItems: 'flex-end' }}>
          <div>
            <div className="eyebrow-mono">VOL. CLXIV · SPRING 2026</div>
          </div>
          <div className="small mono" style={{ letterSpacing: '0.18em', textTransform: 'uppercase' }}>Bamburgh & Alnwick</div>
        </div>
        <hr className="divider" style={{ marginBottom: 48 }} />
        <h1 className="serif" style={{ fontSize: 'clamp(72px, 11vw, 200px)', lineHeight: 0.92, letterSpacing: '-0.04em', marginBottom: 56 }}>
          The North Sea<br />
          <em style={{ color: 'var(--sage-deep)' }}>is calling</em>.
        </h1>
        <div className="grid" style={{ gridTemplateColumns: '1.5fr 1fr', gap: 56, marginBottom: 64 }}>
          <Placeholder tone="stone" caption="HERO · COTTAGE & SHORE · 16:9" style={{ aspectRatio: '16/9' }} />
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <p className="body-lg" style={{ fontFamily: 'var(--serif)', fontSize: 24, lineHeight: 1.4, color: 'var(--ink)' }}>
              Four hand-tended properties on the Northumberland coast — one cottage at Low Newton-by-the-Sea and three apartments in Alnwick. Restored slowly, by people who live within ten miles of the front door.
            </p>
            <div>
              <button className="btn btn-primary" onClick={() => navigate('booking')} style={{ marginRight: 12 }}>Contact us</button>
              <button className="btn btn-ghost" onClick={() => navigate('cottages')}>The cottages</button>
            </div>
          </div>
        </div>
        <SearchStrip navigate={navigate} bordered />
      </div>
    </section>
  );
}

function Stat({ n, label }) {
  return (
    <div>
      <div className="serif" style={{ fontSize: 40, lineHeight: 1 }}>{n}</div>
      <div className="small mono" style={{ marginTop: 6, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{label}</div>
    </div>
  );
}

function SearchStrip({ navigate, bordered }) {
  return (
    <div className="container" style={{ padding: bordered ? 0 : '24px 40px' }}>
      <div className="grid" style={{
        gridTemplateColumns: '1fr 1fr 1fr 1fr auto',
        alignItems: 'end',
        gap: 32,
        padding: '24px 0',
        border: bordered ? '1px solid var(--line-strong)' : 0,
        paddingLeft: bordered ? 32 : 0,
        paddingRight: bordered ? 16 : 0,
        borderRadius: bordered ? 4 : 0,
      }}>
        <div>
          <span className="field-label">Arrival</span>
          <div className="serif" style={{ fontSize: 22 }}>Fri, 8 May</div>
        </div>
        <div>
          <span className="field-label">Departure</span>
          <div className="serif" style={{ fontSize: 22 }}>Mon, 11 May</div>
        </div>
        <div>
          <span className="field-label">Guests</span>
          <div className="serif" style={{ fontSize: 22 }}>2 adults</div>
        </div>
        <div>
          <span className="field-label">Cottage</span>
          <div className="serif" style={{ fontSize: 22 }}>Any · 4 available</div>
        </div>
        <button className="btn btn-primary" onClick={() => navigate('booking')} style={{ padding: '20px 36px' }}>
          Enquire <span style={{ fontFamily: 'var(--mono)' }}>→</span>
        </button>
      </div>
    </div>
  );
}

/* ----- COTTAGE ROW ----- */

function CottageRow({ cottage, index, navigate, variant = 'editorial' }) {
  const reverse = index % 2 === 1;
  const tones = ['stone', 'sage', 'dark'];
  const tone = tones[index % tones.length];

  if (variant === 'minimal') {
    return (
      <article style={{ borderTop: '1px solid var(--line-strong)', paddingTop: 48 }}>
        <div className="grid" style={{ gridTemplateColumns: '1fr 2fr 1fr', gap: 40, alignItems: 'start' }}>
          <div>
            <div className="eyebrow-mono">№ {String(index + 1).padStart(2, '0')}</div>
            <h3 className="serif" style={{ fontSize: 48, lineHeight: 1, marginTop: 16 }}>{cottage.name}</h3>
            <p className="small mono" style={{ marginTop: 12 }}>{cottage.location.toUpperCase()}</p>
          </div>
          <div>
            <Placeholder tone={tone} caption={`${cottage.name.toUpperCase()} · EXTERIOR`} style={{ aspectRatio: '16/9', marginBottom: 24 }} />
            <p className="body-lg">{cottage.summary}</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Spec label="Sleeps" v={cottage.sleeps} />
            <Spec label="Bedrooms" v={cottage.bedrooms} />
            <Spec label="Min nights" v={cottage.minNights} />
            <Spec label="From" v={`£${cottage.pricePerNight}`} />
            <button className="btn btn-ghost" style={{ marginTop: 16 }} onClick={() => navigate('cottage', cottage.id)}>
              View cottage <span style={{ fontFamily: 'var(--mono)' }}>→</span>
            </button>
          </div>
        </div>
      </article>
    );
  }

  if (variant === 'card') {
    return (
      <article className="card" style={{ display: 'grid', gridTemplateColumns: reverse ? '1fr 1fr' : '1fr 1fr', alignItems: 'stretch' }}>
        {!reverse && <Placeholder tone={tone} caption={`${cottage.name.toUpperCase()} · EXTERIOR`} style={{ minHeight: 520 }} />}
        <div style={{ padding: 56, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'var(--bg-card)' }}>
          <div>
            <div className="eyebrow-mono" style={{ marginBottom: 12 }}>№ {String(index + 1).padStart(2, '0')} · {cottage.location}</div>
            <h3 className="serif" style={{ fontSize: 52, lineHeight: 1, marginBottom: 16 }}>{cottage.name}</h3>
            <p className="serif" style={{ fontStyle: 'italic', fontSize: 22, color: 'var(--ink-soft)', marginBottom: 28 }}>{cottage.tagline}</p>
            <p className="body" style={{ marginBottom: 28 }}>{cottage.summary}</p>
            <div className="flex gap-md" style={{ flexWrap: 'wrap' }}>
              {cottage.amenities.slice(0, 5).map(a => <span className="chip" key={a}>{a}</span>)}
            </div>
          </div>
          <div className="flex between" style={{ marginTop: 40, alignItems: 'flex-end' }}>
            <div>
              <span className="small mono">FROM</span>
              <div className="serif" style={{ fontSize: 36, lineHeight: 1 }}>£{cottage.pricePerNight}<span className="small" style={{ marginLeft: 6, color: 'var(--ink-mute)' }}>/ night</span></div>
            </div>
            <button className="btn btn-primary" onClick={() => navigate('cottage', cottage.id)}>View cottage <span style={{ fontFamily: 'var(--mono)' }}>→</span></button>
          </div>
        </div>
        {reverse && <Placeholder tone={tone} caption={`${cottage.name.toUpperCase()} · EXTERIOR`} style={{ minHeight: 520 }} />}
      </article>
    );
  }

  // editorial (default)
  return (
    <article className="grid" style={{ gridTemplateColumns: reverse ? '1fr 1.3fr' : '1.3fr 1fr', gap: 64, alignItems: 'center' }}>
      <div style={{ order: reverse ? 2 : 1, position: 'relative' }}>
        <Placeholder tone={tone} caption={`${cottage.name.toUpperCase()} · EXTERIOR`} style={{ aspectRatio: reverse ? '4/5' : '16/10' }} />
        <div className="mono" style={{ position: 'absolute', top: -12, left: -12, background: 'var(--bg)', padding: '6px 12px', fontSize: 11, letterSpacing: '0.18em' }}>
          № {String(index + 1).padStart(2, '0')} / 04
        </div>
      </div>
      <div style={{ order: reverse ? 1 : 2 }}>
        <div className="eyebrow-mono" style={{ marginBottom: 16 }}>{cottage.location.toUpperCase()} · SLEEPS {cottage.sleeps}</div>
        <h3 className="serif" style={{ fontSize: 'clamp(40px, 4.6vw, 72px)', lineHeight: 1.0, marginBottom: 24 }}>{cottage.name}</h3>
        <p className="serif" style={{ fontStyle: 'italic', fontSize: 24, color: 'var(--ink-soft)', marginBottom: 28, lineHeight: 1.4 }}>
          "{cottage.tagline}"
        </p>
        <p className="body-lg" style={{ marginBottom: 36 }}>{cottage.summary}</p>
        <div className="grid" style={{ gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 24, marginBottom: 40, paddingTop: 24, paddingBottom: 24, borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
          <Spec label="Sleeps" v={cottage.sleeps} />
          <Spec label="Bedrooms" v={cottage.bedrooms} />
          <Spec label="Bathrooms" v={cottage.bathrooms} />
          <Spec label="Dogs" v={cottage.dogs ? 'Welcome' : '—'} />
        </div>
        <div className="flex between" style={{ alignItems: 'flex-end' }}>
          <div>
            <span className="small mono">FROM</span>
            <div className="serif" style={{ fontSize: 40, lineHeight: 1 }}>£{cottage.pricePerNight}<span className="small" style={{ marginLeft: 6, color: 'var(--ink-mute)' }}>/ night</span></div>
          </div>
          <button className="btn btn-primary" onClick={() => navigate('cottage', cottage.id)}>View cottage <span style={{ fontFamily: 'var(--mono)' }}>→</span></button>
        </div>
      </div>
    </article>
  );
}

function Spec({ label, v }) {
  return (
    <div>
      <div className="small mono" style={{ letterSpacing: '0.1em', textTransform: 'uppercase' }}>{label}</div>
      <div className="serif" style={{ fontSize: 24, marginTop: 4 }}>{v}</div>
    </div>
  );
}

Object.assign(window, { Home, CottageRow, Spec, SearchStrip });
