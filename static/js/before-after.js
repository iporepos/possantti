document.querySelectorAll('.baf-stage').forEach(stage => {
  const setPos = (clientX) => {
    const rect = stage.getBoundingClientRect();
    let pct = ((clientX - rect.left) / rect.width) * 100;
    pct = Math.max(0, Math.min(100, pct));
    stage.style.setProperty('--baf-pos', pct + '%');
    stage.setAttribute('aria-valuenow', Math.round(pct));
  };

  let dragging = false;

  stage.addEventListener('pointerdown', (e) => {
    dragging = true;
    stage.setPointerCapture(e.pointerId);
    setPos(e.clientX);
  });

  stage.addEventListener('pointermove', (e) => {
    if (dragging) setPos(e.clientX);
  });

  stage.addEventListener('pointerup', () => { dragging = false; });
  stage.addEventListener('pointercancel', () => { dragging = false; });

  stage.addEventListener('keydown', (e) => {
    const current = parseFloat(stage.style.getPropertyValue('--baf-pos')) || 50;
    if (e.key === 'ArrowLeft') {
      stage.style.setProperty('--baf-pos', Math.max(0, current - 5) + '%');
      e.preventDefault();
    } else if (e.key === 'ArrowRight') {
      stage.style.setProperty('--baf-pos', Math.min(100, current + 5) + '%');
      e.preventDefault();
    }
  });
});
