// Cottage Detail page

function CottageDetail({ navigate, cottageId, tweaks }) {
  const { COTTAGES } = window.LEAHOLME_DATA;
  const cottage = COTTAGES.find(c => c.id === cottageId) || COTTAGES[0];
  const tones = { leaholme: 'sage', 'barbican-view': 'stone', 'castle-retreat': 'soft', 'lionsgate-view': 'dark' };
  const tone = tones[cottage.id] || 'stone';

  return (
    <div className="page-enter">
      {/* Hero gallery */}
      <section style={{ paddingTop: 100 }}>
        <div className="container-wide" style={{ paddingTop: 24 }}>
          <div className="flex" style={{ alignItems: 'center', gap: 14, marginBottom: 24 }}>
            <button onClick={() => navigate('cottages')} className="small mono" style={{ letterSpacing: '0.1em' }}>← ALL PROPERTIES</button>
            <span style={{ color: 'var(--line-strong)' }}>/</span>
            <span className="small mono" style={{ letterSpacing: '0.1em', color: 'var(--ink-mute)' }}>{cottage.name.toUpperCase()}</span>
          </div>
          <div className="grid" style={{ gridTemplateColumns: '2fr 1fr 1fr', gridAutoRows: 280, gap: 12 }}>
            <Placeholder tone={tone} caption={`${cottage.name.toUpperCase()} · HERO`} style={{ gridRow: 'span 2' }} />
            <Placeholder tone="soft" caption="LIVING ROOM" />
            <Placeholder tone="dark" caption="BEDROOM" />
            <Placeholder tone="sage" caption="GARDEN" />
            <Placeholder tone="stone" caption="DETAIL" />
          </div>
          <div className="flex between" style={{ marginTop: 16 }}>
            <span className="small mono" style={{ color: 'var(--ink-mute)' }}>1 / 48 IMAGES</span>
            <button className="link-underline" onClick={() => navigate('gallery')}>View all photographs <span>→</span></button>
          </div>
        </div>
      </section>

      {/* Title block */}
      <section className="section-sm">
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: '2fr 1fr', gap: 80, alignItems: 'start' }}>
            <div>
              <div className="eyebrow-mono" style={{ marginBottom: 20 }}>
                {cottage.location.toUpperCase()} · {cottage.coords}
              </div>
              <h1 className="display-lg serif" style={{ marginBottom: 24 }}>{cottage.name}</h1>
              <p className="serif" style={{ fontStyle: 'italic', fontSize: 28, lineHeight: 1.4, color: 'var(--ink-soft)', maxWidth: 720, marginBottom: 32 }}>
                "{cottage.tagline}"
              </p>
              <p className="body-lg" style={{ maxWidth: 720 }}>{cottage.summary}</p>
            </div>
            <aside style={{ position: 'sticky', top: 120, background: 'var(--bg-card)', border: '1px solid var(--line)', padding: 32 }}>
              <div className="small mono" style={{ marginBottom: 8 }}>FROM</div>
              <div className="flex" style={{ alignItems: 'baseline', gap: 8, marginBottom: 28 }}>
                <span className="serif" style={{ fontSize: 56, lineHeight: 1 }}>£{cottage.pricePerNight}</span>
                <span className="small">/ night</span>
              </div>
              <div style={{ paddingBottom: 20, marginBottom: 20, borderBottom: '1px solid var(--line)' }}>
                <div className="field-label" style={{ marginBottom: 6 }}>Telephone</div>
                <a href={`tel:${(window.LEAHOLME_DATA.CONTACT.telIntl).replace(/\s/g, '')}`} className="serif" style={{ fontSize: 26, lineHeight: 1.1, color: 'var(--ink)', display: 'block' }}>
                  {window.LEAHOLME_DATA.CONTACT.tel}
                </a>
              </div>
              <div style={{ paddingBottom: 24, marginBottom: 24, borderBottom: '1px solid var(--line)' }}>
                <div className="field-label" style={{ marginBottom: 6 }}>Email</div>
                <a href={`mailto:${window.LEAHOLME_DATA.CONTACT.email}`} className="serif" style={{ fontSize: 16, lineHeight: 1.2, color: 'var(--ink)', display: 'block', wordBreak: 'break-word' }}>
                  {window.LEAHOLME_DATA.CONTACT.email}
                </a>
              </div>
              <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '18px' }} onClick={() => navigate('booking', cottage.id)}>
                Enquire about {cottage.name}
              </button>
              <div className="small" style={{ marginTop: 16, textAlign: 'center', color: 'var(--ink-mute)' }}>
                We reply within a day · No middlemen
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Specs strip */}
      <section style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: '40px 0' }}>
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: 'repeat(6, 1fr)', gap: 32 }}>
            <BigSpec label="Sleeps" v={cottage.sleeps} sub="people" />
            <BigSpec label="Bedrooms" v={cottage.bedrooms} sub={cottage.bedrooms === 1 ? 'room' : 'rooms'} />
            <BigSpec label="Bathrooms" v={cottage.bathrooms} sub={cottage.bathrooms === 1 ? 'room' : 'rooms'} />
            <BigSpec label="Footprint" v={cottage.sqft} sub="sq ft" />
            <BigSpec label="Min stay" v={cottage.minNights} sub="nights" />
            <BigSpec label="Dogs" v={cottage.dogs ? '✓' : '—'} sub={cottage.dogs ? 'welcome' : 'not here'} />
          </div>
        </div>
      </section>

      {/* The house */}
      <section className="section">
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: '1fr 2fr', gap: 80 }}>
            <div>
              <div className="eyebrow-mono">§ THE HOUSE</div>
            </div>
            <div>
              <h2 className="display-md serif" style={{ marginBottom: 40 }}>What you'll find inside.</h2>
              <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                {cottage.features.map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: 16, padding: '20px 0', borderTop: '1px solid var(--line)' }}>
                    <span className="mono" style={{ fontSize: 11, color: 'var(--ink-mute)', minWidth: 30 }}>0{i + 1}</span>
                    <span className="serif" style={{ fontSize: 22, lineHeight: 1.4 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floor plan */}
      <section className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <div className="flex between" style={{ marginBottom: 56, alignItems: 'flex-end' }}>
            <div>
              <div className="eyebrow-mono" style={{ marginBottom: 16 }}>§ THE PLAN</div>
              <h2 className="display-md serif">Layout & spaces.</h2>
            </div>
            <div className="flex gap-md">
              <button className="chip" style={{ background: 'var(--ink)', color: 'var(--bg)', borderColor: 'var(--ink)' }}>Ground floor</button>
              <button className="chip">First floor</button>
              <button className="chip">Outside</button>
            </div>
          </div>
          <div className="grid" style={{ gridTemplateColumns: '1.4fr 1fr', gap: 48, alignItems: 'start' }}>
            <Placeholder tone="stone" caption="FLOOR PLAN · GROUND · TECHNICAL" style={{ aspectRatio: '4/3', background: 'var(--bg-card)' }} />
            <div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {[
                  ['Entry / Boot Room', '8 m²'],
                  ['Living', '34 m² · woodburner'],
                  ['Kitchen / Dining', '28 m² · Aga'],
                  ['Snug', '18 m² · library'],
                  ['Pantry', '6 m²'],
                  ['Cloakroom', '4 m²'],
                ].map(([n, d], i) => (
                  <div key={i} className="flex between" style={{ padding: '20px 0', borderTop: '1px solid var(--line)', alignItems: 'baseline' }}>
                    <span className="serif" style={{ fontSize: 24 }}>{n}</span>
                    <span className="small mono">{d.toUpperCase()}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="section">
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: '1fr 2fr', gap: 80 }}>
            <div>
              <div className="eyebrow-mono">§ AMENITIES</div>
              <h2 className="display-sm serif" style={{ marginTop: 16 }}>Considered, not curated.</h2>
              <p className="body" style={{ marginTop: 16, maxWidth: 320 }}>
                Everything you need. Nothing you don't. The full list, plus what's not here.
              </p>
            </div>
            <div className="grid" style={{ gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
              {cottage.amenities.map(a => (
                <div key={a} style={{ padding: '16px 0', borderTop: '1px solid var(--line)', display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span className="mono" style={{ fontSize: 11, color: 'var(--sage-deep)' }}>✓</span>
                  <span className="serif" style={{ fontSize: 18 }}>{a}</span>
                </div>
              ))}
              <div style={{ padding: '16px 0', borderTop: '1px solid var(--line)', display: 'flex', alignItems: 'center', gap: 12, color: 'var(--ink-mute)' }}>
                <span className="mono" style={{ fontSize: 11 }}>—</span>
                <span className="serif" style={{ fontSize: 18 }}>No television</span>
              </div>
              <div style={{ padding: '16px 0', borderTop: '1px solid var(--line)', display: 'flex', alignItems: 'center', gap: 12, color: 'var(--ink-mute)' }}>
                <span className="mono" style={{ fontSize: 11 }}>—</span>
                <span className="serif" style={{ fontSize: 18 }}>No pool</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map / location */}
      <section className="section" style={{ background: 'var(--ink)', color: 'var(--bg)' }}>
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
            <div>
              <div className="eyebrow-mono" style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>§ LOCATION</div>
              <h2 className="display-md serif" style={{ marginBottom: 24 }}>By the castle,<br/>by the sea.</h2>
              <p className="body-lg" style={{ color: 'rgba(255,255,255,0.75)', marginBottom: 32 }}>
                Walking distance to Bamburgh's beach, Alnwick's bookshops, and Low Newton's harbour. A 25-minute drive from the train at Alnmouth. Helicopter pad on request for international guests.
              </p>
              <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 16, fontSize: 14 }}>
                <DistRow place="London Kings Cross" t="2h 35m" mode="train" />
                <DistRow place="Manchester airport" t="1h 50m" mode="drive" />
                <DistRow place="Alnmouth station" t="25 min" mode="drive" />
                <DistRow place="Bamburgh beach" t="6 min" mode="walk" />
                <DistRow place="Holy Island (Lindisfarne)" t="35 min" mode="drive" />
                <DistRow place="Farne Islands boat" t="20 min" mode="drive" />
              </div>
            </div>
            <Placeholder tone="dark" caption="MAP · NORTHUMBERLAND COAST · TOPOGRAPHIC" style={{ aspectRatio: '1', background: 'rgba(255,255,255,0.04)' }} />
          </div>
        </div>
      </section>

      {/* Other cottages */}
      <section className="section">
        <div className="container">
          <h2 className="display-md serif" style={{ marginBottom: 48 }}>The other three.</h2>
          <div className="grid" style={{ gridTemplateColumns: '1fr 1fr 1fr', gap: 32 }}>
            {COTTAGES.filter(c => c.id !== cottage.id).map((c, i) => (
              <a key={c.id} href="#" onClick={e => { e.preventDefault(); navigate('cottage', c.id); }} style={{ display: 'block' }}>
                <Placeholder tone={i === 0 ? 'sage' : 'stone'} caption={c.name.toUpperCase()} style={{ aspectRatio: '4/3', marginBottom: 20 }} />
                <div className="eyebrow-mono">{c.location.toUpperCase()} · SLEEPS {c.sleeps}</div>
                <h3 className="serif" style={{ fontSize: 36, lineHeight: 1.1, marginTop: 12 }}>{c.name}</h3>
                <p className="body" style={{ marginTop: 12 }}>{c.tagline}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function BigSpec({ label, v, sub }) {
  return (
    <div>
      <div className="small mono" style={{ marginBottom: 8 }}>{label.toUpperCase()}</div>
      <div className="flex" style={{ alignItems: 'baseline', gap: 6 }}>
        <span className="serif" style={{ fontSize: 40, lineHeight: 1 }}>{v}</span>
        <span className="small" style={{ color: 'var(--ink-mute)' }}>{sub}</span>
      </div>
    </div>
  );
}

function DistRow({ place, t, mode }) {
  const symbols = { train: '⌧', drive: '⊙', walk: '↳' };
  return (
    <div className="flex between" style={{ padding: '12px 0', borderTop: '1px solid rgba(255,255,255,0.12)', alignItems: 'baseline' }}>
      <div>
        <span className="mono" style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginRight: 10 }}>{symbols[mode]}</span>
        <span className="serif" style={{ fontSize: 18 }}>{place}</span>
      </div>
      <span className="small mono" style={{ color: 'rgba(255,255,255,0.6)' }}>{t}</span>
    </div>
  );
}

Object.assign(window, { CottageDetail });
