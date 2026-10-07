document.querySelectorAll('.baf-stage').forEach(stage => {
  // Size the stage to the "ruler" image's natural aspect ratio (data-baf-ruler,
  // default "after") so it renders uncropped; the other image is cropped via
  // object-fit: cover (set in CSS) to fill the same box with no gaps.
  const afterImg = stage.querySelector('.baf-after');
  const beforeImg = stage.querySelector('.baf-before');
  const rulerImg = stage.dataset.bafRuler === 'before' ? beforeImg : afterImg;
  const fallbackImg = rulerImg === afterImg ? beforeImg : afterImg;

  const ratioOf = (img) => (img.naturalWidth && img.naturalHeight)
    ? img.naturalWidth / img.naturalHeight
    : null;

  const applyRatio = () => {
    const ratio = ratioOf(rulerImg) || ratioOf(fallbackImg);
    if (ratio) stage.style.aspectRatio = ratio;
  };

  [rulerImg, fallbackImg].forEach(img => {
    if (img.complete) applyRatio();
    img.addEventListener('load', applyRatio);
  });

  const isVertical = stage.dataset.bafDirection === 'vertical';

  const initialPos = Math.max(0, Math.min(100, parseFloat(stage.dataset.bafPosition)));
  const startPos = Number.isFinite(initialPos) ? initialPos : 50;
  stage.style.setProperty('--baf-pos', startPos + '%');
  stage.setAttribute('aria-valuenow', Math.round(startPos));

  const setPos = (clientX, clientY) => {
    const rect = stage.getBoundingClientRect();
    let pct = isVertical
      ? ((clientY - rect.top) / rect.height) * 100
      : ((clientX - rect.left) / rect.width) * 100;
    pct = Math.max(0, Math.min(100, pct));
    stage.style.setProperty('--baf-pos', pct + '%');
    stage.setAttribute('aria-valuenow', Math.round(pct));
  };

  let dragging = false;

  stage.addEventListener('pointerdown', (e) => {
    dragging = true;
    stage.setPointerCapture(e.pointerId);
    setPos(e.clientX, e.clientY);
  });

  stage.addEventListener('pointermove', (e) => {
    if (dragging) setPos(e.clientX, e.clientY);
  });

  stage.addEventListener('pointerup', () => { dragging = false; });
  stage.addEventListener('pointercancel', () => { dragging = false; });

  const decKey = isVertical ? 'ArrowUp' : 'ArrowLeft';
  const incKey = isVertical ? 'ArrowDown' : 'ArrowRight';

  stage.addEventListener('keydown', (e) => {
    const current = parseFloat(stage.style.getPropertyValue('--baf-pos')) || 50;
    if (e.key === decKey) {
      stage.style.setProperty('--baf-pos', Math.max(0, current - 5) + '%');
      e.preventDefault();
    } else if (e.key === incKey) {
      stage.style.setProperty('--baf-pos', Math.min(100, current + 5) + '%');
      e.preventDefault();
    }
  });
});
