// Print-only app: render all pages stacked, no router, no tweaks panel
function AppPrint() {
  // Apply default tweaks once so palette/fonts resolve
  React.useEffect(() => {
    if (typeof applyTweaks === 'function') {
      applyTweaks({
        palette: 'sage',
        fontPair: 'editorial-classic',
        heroVariant: 'editorial',
        density: 'comfortable',
        cardStyle: 'editorial',
        wordmark: 'inline',
      });
    }
  }, []);

  const tweaks = {
    palette: 'sage',
    fontPair: 'editorial-classic',
    heroVariant: 'editorial',
    density: 'comfortable',
    cardStyle: 'editorial',
    wordmark: 'inline',
  };

  // No-op navigate so buttons render but don't do anything
  const navigate = () => {};

  const { COTTAGES } = window.LEAHOLME_DATA;
  const heroCottage = COTTAGES[0]; // Leaholme Cottage

  return (
    <>
      {/* Page 1: Home (editorial hero variant) */}
      <section className="print-page">
        <Home navigate={navigate} tweaks={tweaks} />
      </section>

      {/* Page 2: All cottages */}
      <section className="print-page">
        <CottagesIndex navigate={navigate} tweaks={tweaks} />
      </section>

      {/* Page 3: Hero cottage detail */}
      <section className="print-page">
        <CottageDetail navigate={navigate} cottageId={heroCottage.id} tweaks={tweaks} />
      </section>

      {/* Page 4: Local / Coast */}
      <section className="print-page">
        <Local navigate={navigate} />
      </section>

      {/* Page 5: Gallery */}
      <section className="print-page">
        <Gallery navigate={navigate} />
      </section>

      {/* Page 6: Contact */}
      <section className="print-page">
        <Booking navigate={navigate} cottageId={null} tweaks={tweaks} />
      </section>

      <Footer navigate={navigate} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<AppPrint />);
