function slider({
  wrapperSelector,
  itemSelector,
  paginationSelector,
  dotsSelector,
}) {
  const wrapper = document.querySelector(wrapperSelector),
    item = document.querySelector(itemSelector),
    width = item.offsetWidth,
    pagination = document.querySelector(paginationSelector),
    dots = document.querySelectorAll(dotsSelector);
  let id = 0,
    offset = width;

  pagination.addEventListener("click", (e) => {
    if (e.target.classList.contains(dotsSelector.slice(1))) {
      dots.forEach((item, index) => {
        item.classList.remove(dotsSelector.slice(1) + "-active");
        if (e.target === item) {
          offset = width * index;
          id = index;
          currentSlide(item);
        }
      });
    }
  });

  setInterval(() => {
    dots[id].classList.remove(dotsSelector.slice(1) + "-active");
    id = ++id % dots.length;
    offset = width * id;
    currentSlide(dots[id]);
  }, 5000);

  function currentSlide(item) {
    item.classList.add(dotsSelector.slice(1) + "-active");
    wrapper.style.transform = `translateX(-${offset}px)`;
  }
}

export default slider;
