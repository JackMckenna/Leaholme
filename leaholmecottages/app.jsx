// Main app — router + tweaks integration

const FONT_PAIRS = {
  'editorial-classic': {
    label: 'Editorial Classic',
    serif: "'Cormorant Garamond', Georgia, serif",
    sans: "'Inter', sans-serif",
    google: 'Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Inter:wght@400;500;600',
  },
  'modern-warm': {
    label: 'Modern Warm',
    serif: "'Fraunces', Georgia, serif",
    sans: "'Manrope', sans-serif",
    google: 'Fraunces:ital,wght@0,400;0,500;1,400&family=Manrope:wght@400;500;600',
  },
  'austere': {
    label: 'Austere',
    serif: "'EB Garamond', Georgia, serif",
    sans: "'Söhne', 'Inter', sans-serif",
    google: 'EB+Garamond:ital,wght@0,400;0,500;1,400&family=Inter:wght@400;500;600',
  },
  'literary': {
    label: 'Literary',
    serif: "'Playfair Display', Georgia, serif",
    sans: "'Work Sans', sans-serif",
    google: 'Playfair+Display:ital,wght@0,400;0,500;1,400&family=Work+Sans:wght@400;500;600',
  },
};

const PALETTES = {
  sage: {
    label: 'Sage & Cream',
    bg: '#F5F1E8', bgSoft: '#ECE6D6', bgCard: '#FBF8F1',
    ink: '#2A2E25', inkSoft: '#4F5447', inkMute: '#8A8E80',
    line: '#D9D3C2', lineStrong: '#BEB7A2',
    sage: '#7A8870', sageDeep: '#4F5C48', sagePale: '#C9D2BE',
    terracotta: '#B8826A',
  },
  stone: {
    label: 'Stone & Bone',
    bg: '#EFEAE0', bgSoft: '#E2DBCC', bgCard: '#F8F4EB',
    ink: '#2C2A26', inkSoft: '#56524A', inkMute: '#8B8479',
    line: '#D5CDB9', lineStrong: '#B8AF98',
    sage: '#8A8475', sageDeep: '#4A463E', sagePale: '#CCC5B5',
    terracotta: '#A87459',
  },
  dusk: {
    label: 'Dusk & Heather',
    bg: '#EBE6DD', bgSoft: '#DCD5C7', bgCard: '#F5F0E6',
    ink: '#2A2832', inkSoft: '#4F4C58', inkMute: '#85818E',
    line: '#CFC8B9', lineStrong: '#B0A998',
    sage: '#7B7A8A', sageDeep: '#4D4C5C', sagePale: '#C8C4D0',
    terracotta: '#A66B5C',
  },
  moss: {
    label: 'Deep Moss',
    bg: '#F1EDE2', bgSoft: '#E5DECC', bgCard: '#FAF6EC',
    ink: '#1F2620', inkSoft: '#3D453E', inkMute: '#7B8278',
    line: '#D2CCBC', lineStrong: '#B5AE9C',
    sage: '#5E7058', sageDeep: '#2E3B2C', sagePale: '#B6C4AC',
    terracotta: '#B27358',
  },
};

function applyTweaks(t) {
  const root = document.documentElement;
  const p = PALETTES[t.palette] || PALETTES.sage;
  root.style.setProperty('--bg', p.bg);
  root.style.setProperty('--bg-soft', p.bgSoft);
  root.style.setProperty('--bg-card', p.bgCard);
  root.style.setProperty('--ink', p.ink);
  root.style.setProperty('--ink-soft', p.inkSoft);
  root.style.setProperty('--ink-mute', p.inkMute);
  root.style.setProperty('--line', p.line);
  root.style.setProperty('--line-strong', p.lineStrong);
  root.style.setProperty('--sage', p.sage);
  root.style.setProperty('--sage-deep', p.sageDeep);
  root.style.setProperty('--sage-pale', p.sagePale);
  root.style.setProperty('--terracotta', p.terracotta);

  const f = FONT_PAIRS[t.fontPair] || FONT_PAIRS['editorial-classic'];
  root.style.setProperty('--serif', f.serif);
  root.style.setProperty('--sans', f.sans);

  // Inject Google Fonts if not present
  const id = 'lh-fonts-' + t.fontPair;
  if (!document.getElementById(id)) {
    document.querySelectorAll('link[id^="lh-fonts-"]').forEach(el => el.remove());
    const link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    link.href = `https://fonts.googleapis.com/css2?family=${f.google}&family=JetBrains+Mono:wght@400;500&display=swap`;
    document.head.appendChild(link);
  }

  root.dataset.density = t.density || 'comfortable';
}

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "sage",
  "fontPair": "editorial-classic",
  "heroVariant": "cinematic",
  "density": "comfortable",
  "cardStyle": "editorial",
  "wordmark": "inline"
}/*EDITMODE-END*/;

function App() {
  const [tweaks, setTweak] = window.useTweaks(TWEAK_DEFAULTS);
  const [page, setPage] = React.useState('home');
  const [cottageId, setCottageId] = React.useState(null);

  const navigate = (p, id = null) => {
    setPage(p);
    if (id !== null) setCottageId(id);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  React.useEffect(() => { applyTweaks(tweaks); }, [tweaks]);

  const isHomeWithCinematic = page === 'home' && tweaks.heroVariant === 'cinematic';

  return (
    <>
      <Nav page={page} navigate={navigate} light={isHomeWithCinematic} wordmark={tweaks.wordmark} />
      {page === 'home' && <Home navigate={navigate} tweaks={tweaks} />}
      {page === 'cottage' && <CottageDetail navigate={navigate} cottageId={cottageId} tweaks={tweaks} />}
      {page === 'cottages' && <CottagesIndex navigate={navigate} tweaks={tweaks} />}
      {page === 'booking' && <Booking navigate={navigate} cottageId={cottageId} tweaks={tweaks} />}
      {page === 'gallery' && <Gallery navigate={navigate} />}
      {page === 'local' && <Local navigate={navigate} />}
      {page === 'journal' && <JournalPage navigate={navigate} />}
      {page !== 'booking' && <Footer navigate={navigate} />}

      <window.TweaksPanel title="Tweaks">
        <window.TweakSection title="Brand">
          <window.TweakSelect
            label="Wordmark style"
            value={tweaks.wordmark}
            onChange={v => setTweak('wordmark', v)}
            options={[
              { value: 'inline', label: 'Inline italic' },
              { value: 'stack', label: 'Stacked w/ tagline' },
              { value: 'mono', label: 'Monospace' },
              { value: 'mark', label: 'With circular mark' },
            ]}
          />
          <window.TweakSelect
            label="Type pairing"
            value={tweaks.fontPair}
            onChange={v => setTweak('fontPair', v)}
            options={Object.entries(FONT_PAIRS).map(([k, v]) => ({ value: k, label: v.label }))}
          />
        </window.TweakSection>

        <window.TweakSection title="Palette">
          <window.TweakRadio
            label="Color palette"
            value={tweaks.palette}
            onChange={v => setTweak('palette', v)}
            options={Object.entries(PALETTES).map(([k, v]) => ({ value: k, label: v.label }))}
          />
        </window.TweakSection>

        <window.TweakSection title="Layout">
          <window.TweakRadio
            label="Hero layout (homepage)"
            value={tweaks.heroVariant}
            onChange={v => setTweak('heroVariant', v)}
            options={[
              { value: 'cinematic', label: 'Cinematic full-bleed' },
              { value: 'split', label: 'Split image / text' },
              { value: 'editorial', label: 'Editorial masthead' },
            ]}
          />
          <window.TweakRadio
            label="Cottage card style"
            value={tweaks.cardStyle}
            onChange={v => setTweak('cardStyle', v)}
            options={[
              { value: 'editorial', label: 'Editorial' },
              { value: 'card', label: 'Bordered card' },
              { value: 'minimal', label: 'Minimal list' },
            ]}
          />
          <window.TweakRadio
            label="Density"
            value={tweaks.density}
            onChange={v => setTweak('density', v)}
            options={[
              { value: 'compact', label: 'Compact' },
              { value: 'comfortable', label: 'Comfortable' },
              { value: 'airy', label: 'Airy' },
            ]}
          />
        </window.TweakSection>

        <window.TweakSection title="Quick links">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {[['home', 'Home'], ['cottage', 'Cottage detail'], ['booking', 'Contact'], ['gallery', 'Gallery'], ['local', 'The Coast']].map(([p, l]) => (
              <button key={p} onClick={() => navigate(p, p === 'cottage' ? 'leaholme' : null)} style={{ padding: '8px 12px', textAlign: 'left', border: '1px solid var(--line)', background: page === p ? 'var(--bg-soft)' : 'transparent', fontSize: 13, fontFamily: 'var(--mono)' }}>
                → {l}
              </button>
            ))}
          </div>
        </window.TweakSection>
      </window.TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
