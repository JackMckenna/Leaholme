// Contact page + Gallery + Local + Cottages list pages

/* ---------- CONTACT ---------- */
function Booking({ navigate, cottageId, tweaks }) {
  const { CONTACT, COTTAGES } = window.LEAHOLME_DATA;
  const cottage = cottageId ? COTTAGES.find(c => c.id === cottageId) : null;
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    phone: '',
    cottage: cottageId || '',
    arrival: '',
    departure: '',
    guests: '2 adults',
    message: cottage ? `Hello — we'd like to enquire about a stay at ${cottage.name}.` : '',
  });
  const [sent, setSent] = React.useState(false);
  const set = (k, v) => setForm({ ...form, [k]: v });

  return (
    <div className="page-enter" style={{ minHeight: '100vh', paddingTop: 100, background: 'var(--bg)' }}>
      {/* Hero strip */}
      <section style={{ padding: '80px 0 40px' }}>
        <div className="container">
          <div className="eyebrow-mono" style={{ marginBottom: 16 }}>§ CONTACT</div>
          <h1 className="display-lg serif" style={{ marginBottom: 24, maxWidth: 1000 }}>
            Speak to us directly.
          </h1>
          <p className="body-lg" style={{ maxWidth: 640 }}>
            We don't list on Airbnb or Booking.com. Every enquiry comes straight to {CONTACT.name} — by phone, email, or the form below. We'll reply within a day, often within an hour.
          </p>
        </div>
      </section>

      {/* Contact details + form */}
      <section style={{ paddingBottom: 120 }}>
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'start' }}>

            {/* LEFT — direct contact panel */}
            <aside style={{ position: 'sticky', top: 120 }}>
              <div style={{ background: 'var(--bg-card)', border: '1px solid var(--line)', padding: 40 }}>
                <div className="eyebrow-mono" style={{ marginBottom: 24 }}>DIRECT</div>

                <div style={{ paddingBottom: 24, marginBottom: 24, borderBottom: '1px solid var(--line)' }}>
                  <div className="small mono" style={{ marginBottom: 8, color: 'var(--ink-mute)' }}>TELEPHONE</div>
                  <a href={`tel:${CONTACT.telIntl.replace(/\s/g, '')}`} className="serif" style={{ fontSize: 32, lineHeight: 1.1, display: 'block', color: 'var(--ink)' }}>
                    {CONTACT.tel}
                  </a>
                </div>

                <div style={{ paddingBottom: 24, marginBottom: 24, borderBottom: '1px solid var(--line)' }}>
                  <div className="small mono" style={{ marginBottom: 8, color: 'var(--ink-mute)' }}>MOBILE</div>
                  <a href={`tel:${CONTACT.mobileIntl.replace(/\s/g, '')}`} className="serif" style={{ fontSize: 28, lineHeight: 1.1, display: 'block', color: 'var(--ink)' }}>
                    {CONTACT.mobile}
                  </a>
                </div>

                <div style={{ paddingBottom: 24, marginBottom: 24, borderBottom: '1px solid var(--line)' }}>
                  <div className="small mono" style={{ marginBottom: 8, color: 'var(--ink-mute)' }}>EMAIL</div>
                  <a href={`mailto:${CONTACT.email}`} className="serif" style={{ fontSize: 22, lineHeight: 1.2, display: 'block', color: 'var(--ink)', wordBreak: 'break-word' }}>
                    {CONTACT.email}
                  </a>
                </div>

                <div>
                  <div className="small mono" style={{ marginBottom: 12, color: 'var(--ink-mute)' }}>POST</div>
                  <div className="serif" style={{ fontSize: 18, lineHeight: 1.5 }}>
                    {CONTACT.name}<br />
                    {CONTACT.business}<br />
                    {CONTACT.address1}<br />
                    {CONTACT.address2}<br />
                    {CONTACT.postcode}
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 24, padding: '20px 24px', background: 'var(--sage-deep)', color: 'var(--bg)' }}>
                <div className="small mono" style={{ marginBottom: 6, opacity: 0.7 }}>HOURS</div>
                <div className="serif" style={{ fontSize: 18, lineHeight: 1.4 }}>
                  Mon–Sat · 9am – 6pm<br />
                  Sun · by appointment
                </div>
              </div>
            </aside>

            {/* RIGHT — enquiry form */}
            <div>
              {!sent ? (
                <div>
                  <h2 className="display-md serif" style={{ marginBottom: 16 }}>Send an enquiry.</h2>
                  <p className="body" style={{ marginBottom: 40, color: 'var(--ink-soft)' }}>
                    Tell us a little about your trip and we'll come back to you with availability and a few suggestions.
                  </p>

                  <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                    <Field label="Your name">
                      <input value={form.name} onChange={e => set('name', e.target.value)} required className="input" />
                    </Field>

                    <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                      <Field label="Email">
                        <input type="email" value={form.email} onChange={e => set('email', e.target.value)} required className="input" />
                      </Field>
                      <Field label="Phone (optional)">
                        <input type="tel" value={form.phone} onChange={e => set('phone', e.target.value)} className="input" />
                      </Field>
                    </div>

                    <Field label="Which property">
                      <select value={form.cottage} onChange={e => set('cottage', e.target.value)} className="input">
                        <option value="">No preference yet</option>
                        {COTTAGES.map(c => (
                          <option key={c.id} value={c.id}>{c.name} — {c.location}</option>
                        ))}
                      </select>
                    </Field>

                    <div className="grid" style={{ gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
                      <Field label="Arrival">
                        <input type="date" value={form.arrival} onChange={e => set('arrival', e.target.value)} className="input" />
                      </Field>
                      <Field label="Departure">
                        <input type="date" value={form.departure} onChange={e => set('departure', e.target.value)} className="input" />
                      </Field>
                      <Field label="Guests">
                        <input value={form.guests} onChange={e => set('guests', e.target.value)} className="input" placeholder="2 adults, 1 dog" />
                      </Field>
                    </div>

                    <Field label="Anything we should know?">
                      <textarea value={form.message} onChange={e => set('message', e.target.value)} rows={5} className="input" />
                    </Field>

                    <div className="flex between" style={{ paddingTop: 16, borderTop: '1px solid var(--line)', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
                      <p className="small" style={{ color: 'var(--ink-mute)', maxWidth: 360 }}>
                        We reply within a day. For an immediate answer, please call {CONTACT.tel}.
                      </p>
                      <button type="submit" className="btn btn-primary">
                        Send enquiry <span style={{ fontFamily: 'var(--mono)' }}>→</span>
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div style={{ padding: '60px 0' }}>
                  <div className="eyebrow-mono" style={{ marginBottom: 24, color: 'var(--sage-deep)' }}>✓ ENQUIRY SENT</div>
                  <h2 className="display-md serif" style={{ marginBottom: 24 }}>Thank you, {form.name || 'we'}'ll be in touch.</h2>
                  <p className="body-lg" style={{ marginBottom: 32, maxWidth: 560 }}>
                    We've received your enquiry and will reply to <strong style={{ color: 'var(--ink)' }}>{form.email}</strong> within the day. If it's urgent, you can reach Lynn directly on {CONTACT.tel}.
                  </p>
                  <div className="flex gap-md">
                    <button onClick={() => navigate('home')} className="btn btn-primary">Back to home</button>
                    <button onClick={() => { setSent(false); setForm({ ...form, name: '', email: '', phone: '', message: '' }); }} className="btn btn-ghost">Send another</button>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Map / location strip */}
      <section style={{ paddingBottom: 120 }}>
        <div className="container">
          <hr className="divider" style={{ marginBottom: 56 }} />
          <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <div className="eyebrow-mono" style={{ marginBottom: 16 }}>§ FIND US</div>
              <h2 className="display-md serif" style={{ marginBottom: 24 }}>Two corners of Northumberland.</h2>
              <p className="body-lg" style={{ marginBottom: 16 }}>
                Our office is in <strong style={{ color: 'var(--ink)' }}>Wylam</strong>, a small Tyne-side village west of Newcastle. Our properties are an hour up the coast, between Alnwick and Bamburgh.
              </p>
              <p className="body" style={{ color: 'var(--ink-soft)' }}>
                Nearest stations: Alnmouth (12 min from Alnwick · East Coast Main Line) and Chathill (5 min from High Newton).
              </p>
            </div>
            <Placeholder tone="sage" caption="NORTHUMBERLAND COAST · MAP · 4:3" style={{ aspectRatio: '4/3' }} />
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <span className="small mono" style={{ letterSpacing: '0.1em', color: 'var(--ink-mute)' }}>{label.toUpperCase()}</span>
      {children}
    </label>
  );
}


/* ---------- COTTAGES INDEX ---------- */
function CottagesIndex({ navigate, tweaks }) {
  const { COTTAGES } = window.LEAHOLME_DATA;
  return (
    <div className="page-enter" style={{ paddingTop: 100 }}>
      <section style={{ padding: '80px 0 60px' }}>
        <div className="container">
          <div className="eyebrow-mono" style={{ marginBottom: 16 }}>§ THE COTTAGES</div>
          <h1 className="display-lg serif" style={{ marginBottom: 24, maxWidth: 1000 }}>
            One cottage, three apartments, one coastline. Each restored slowly, each different in temperament.
          </h1>
          <p className="body-lg" style={{ maxWidth: 600 }}>
            Choose by mood, by size, by view. Three apartments sit within Alnwick's old walls; one cottage looks out across the bay to Dunstanburgh from the green at Low Newton.
          </p>
        </div>
      </section>
      <section style={{ paddingBottom: 120 }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 96 }}>
            {COTTAGES.map((c, i) => (
              <CottageRow key={c.id} cottage={c} index={i} navigate={navigate} variant={tweaks.cardStyle || 'editorial'} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- GALLERY ---------- */
function Gallery({ navigate }) {
  const [filter, setFilter] = React.useState('all');
  const filters = ['all', 'exteriors', 'interiors', 'detail', 'landscape'];
  const tones = ['stone', 'soft', 'dark', 'sage'];
  const captions = [
    'WHITEWASHED FAÇADE · DAWN', 'LINEN BED · NORTH LIGHT', 'COPPER TUB DETAIL', 'CRAB POTS & NETS',
    'AGA · MORNING SUN', 'WALLED COURTYARD', 'SASH WINDOW & SEA', 'BOOT ROOM',
    'DUNSTANBURGH ON THE HORIZON', 'READING NOOK', 'HAND-THROWN CERAMICS', 'FIREPIT AT DUSK',
    'STONE FLOOR DETAIL', 'WINDOW & DUNES', 'ENTRY STAIR', 'KITCHEN HERBS',
    'BATH WITH VIEW', 'WOOL THROW DETAIL', 'FRONT DOOR', 'BREAKFAST TRAY',
  ];
  return (
    <div className="page-enter" style={{ paddingTop: 100 }}>
      <section style={{ padding: '80px 0 40px' }}>
        <div className="container">
          <div className="eyebrow-mono" style={{ marginBottom: 16 }}>§ GALLERY · 287 IMAGES</div>
          <h1 className="display-lg serif" style={{ maxWidth: 900 }}>The houses, in pictures.</h1>
          <div className="flex gap-md" style={{ marginTop: 40, flexWrap: 'wrap' }}>
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="chip"
                style={{
                  background: filter === f ? 'var(--ink)' : 'transparent',
                  color: filter === f ? 'var(--bg)' : 'var(--ink-soft)',
                  borderColor: filter === f ? 'var(--ink)' : 'var(--line-strong)',
                }}
              >
                {f.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section style={{ paddingBottom: 120 }}>
        <div className="container-wide">
          <div className="grid" style={{ gridTemplateColumns: 'repeat(12, 1fr)', gap: 12, gridAutoRows: 200 }}>
            {captions.map((cap, i) => {
              const layouts = [
                { col: 'span 5', row: 'span 2' }, { col: 'span 4', row: 'span 1' }, { col: 'span 3', row: 'span 2' },
                { col: 'span 4', row: 'span 1' }, { col: 'span 4', row: 'span 1' }, { col: 'span 4', row: 'span 1' }, { col: 'span 5', row: 'span 1' },
                { col: 'span 3', row: 'span 1' }, { col: 'span 3', row: 'span 2' }, { col: 'span 6', row: 'span 1' }, { col: 'span 3', row: 'span 1' },
                { col: 'span 4', row: 'span 1' }, { col: 'span 4', row: 'span 1' }, { col: 'span 4', row: 'span 1' },
                { col: 'span 5', row: 'span 2' }, { col: 'span 4', row: 'span 1' }, { col: 'span 3', row: 'span 1' },
                { col: 'span 4', row: 'span 1' }, { col: 'span 3', row: 'span 1' }, { col: 'span 5', row: 'span 1' },
              ];
              const l = layouts[i] || { col: 'span 4', row: 'span 1' };
              return (
                <Placeholder key={i} tone={tones[i % 4]} caption={cap} style={{ gridColumn: l.col, gridRow: l.row, cursor: 'pointer' }} />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- LOCAL ---------- */
function Local({ navigate }) {
  const { LOCAL } = window.LEAHOLME_DATA;
  return (
    <div className="page-enter" style={{ paddingTop: 100 }}>
      <section style={{ padding: '80px 0 60px' }}>
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'end' }}>
            <div>
              <div className="eyebrow-mono" style={{ marginBottom: 16 }}>§ THE COAST</div>
              <h1 className="display-lg serif">Walks, pubs, swims, suppers.</h1>
            </div>
            <p className="body-lg">
              We've spent decades tracing the lanes and shorelines around Leaholme. These are the spots we send guests to — handpicked, walking-distance to driving-distance, and not a single tourist trap among them.
            </p>
          </div>
        </div>
      </section>

      <section style={{ paddingBottom: 80 }}>
        <div className="container-wide">
          <Placeholder tone="sage" caption="BAMBURGH BEACH & CASTLE · WIDE · 21:9" style={{ aspectRatio: '21/9' }} />
        </div>
      </section>

      <section style={{ paddingBottom: 120 }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {LOCAL.map((l, i) => (
              <article key={i} className="grid" style={{
                gridTemplateColumns: '120px 200px 1fr 200px auto',
                gap: 32,
                padding: '40px 0',
                borderTop: '1px solid var(--line)',
                alignItems: 'center',
              }}>
                <div className="mono" style={{ fontSize: 11, letterSpacing: '0.18em', color: 'var(--sage-deep)' }}>{l.kind.toUpperCase()}</div>
                <Placeholder tone={['sage', 'stone', 'dark', 'soft'][i % 4]} caption={l.kind.toUpperCase()} style={{ height: 140 }} />
                <div>
                  <h3 className="serif" style={{ fontSize: 32, lineHeight: 1.1, marginBottom: 8 }}>{l.name}</h3>
                  <p className="body" style={{ fontStyle: 'italic', fontFamily: 'var(--serif)' }}>{l.detail}</p>
                </div>
                <div className="mono small" style={{ letterSpacing: '0.08em' }}>{l.dist.toUpperCase()}</div>
                <button className="link-underline">More <span>→</span></button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="container">
          <div className="tac" style={{ maxWidth: 720, margin: '0 auto' }}>
            <div className="eyebrow-mono" style={{ marginBottom: 16 }}>WE'LL HELP YOU PLAN</div>
            <h2 className="display-md serif" style={{ marginBottom: 24 }}>A bespoke itinerary, on the house.</h2>
            <p className="body-lg" style={{ marginBottom: 32 }}>
              Every guest gets a hand-drawn map and a few suggestions tailored to your stay — rain or shine, with or without children, with or without dogs.
            </p>
            <button className="btn btn-primary" onClick={() => navigate('booking')}>Contact us</button>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- JOURNAL ---------- */
function JournalPage({ navigate }) {
  const { JOURNAL } = window.LEAHOLME_DATA;
  return (
    <div className="page-enter" style={{ paddingTop: 100 }}>
      <section style={{ padding: '80px 0 60px' }}>
        <div className="container">
          <div className="eyebrow-mono" style={{ marginBottom: 16 }}>§ JOURNAL</div>
          <h1 className="display-lg serif" style={{ maxWidth: 900 }}>Field notes from the coast.</h1>
        </div>
      </section>
      <section style={{ paddingBottom: 120 }}>
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: '1fr 1fr 1fr', gap: 48 }}>
            {[...JOURNAL, ...JOURNAL].map((j, i) => (
              <article key={i} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <Placeholder tone={['sage', 'stone', 'dark'][i % 3]} caption={j.kind.toUpperCase()} style={{ aspectRatio: '4/3' }} />
                <div className="eyebrow-mono">{j.kind} · {j.read}</div>
                <h3 className="serif" style={{ fontSize: 26, lineHeight: 1.2 }}>{j.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { Booking, CottagesIndex, Gallery, Local, JournalPage });
