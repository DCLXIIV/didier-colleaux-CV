(() => {
  const ensureViewport = () => {
    let viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.name = 'viewport';
      document.head.prepend(viewport);
    }
    viewport.content = 'width=device-width, initial-scale=1, viewport-fit=cover';
  };

  const hardenMediaAndLinks = () => {
    document.querySelectorAll('img, picture, svg, canvas, video, iframe, embed, object')
      .forEach((el) => { el.style.maxWidth = '100%'; });

    document.querySelectorAll('video').forEach((video) => {
      video.setAttribute('playsinline', '');
      video.setAttribute('webkit-playsinline', '');
      if (!video.hasAttribute('preload')) video.setAttribute('preload', 'metadata');
    });

    document.querySelectorAll('a[target="_blank"]').forEach((link) => {
      const rel = new Set((link.getAttribute('rel') || '').split(/\s+/).filter(Boolean));
      rel.add('noopener');
      rel.add('noreferrer');
      link.setAttribute('rel', [...rel].join(' '));
    });
  };

  const run = () => {
    ensureViewport();
    hardenMediaAndLinks();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run, { once: true });
  } else {
    run();
  }

  window.addEventListener('pageshow', run);
})();
