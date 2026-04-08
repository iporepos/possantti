document.querySelectorAll('.carousel-wrapper').forEach(wrapper => {
  const carousel = wrapper.querySelector('.carousel');
  const nextBtn = wrapper.querySelector('.next');
  const prevBtn = wrapper.querySelector('.prev');

  const scrollStep = () => {
    // dynamic step based on container width (better UX)
    return carousel.clientWidth * 0.8;
  };

  nextBtn.addEventListener('click', () => {
    carousel.scrollBy({
      left: scrollStep(),
      behavior: 'smooth'
    });
  });

  prevBtn.addEventListener('click', () => {
    carousel.scrollBy({
      left: -scrollStep(),
      behavior: 'smooth'
    });
  });
});