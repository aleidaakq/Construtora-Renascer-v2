/* =====================================================
   COUNTERS
===================================================== */

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const counter = entry.target;

    const target = Number(counter.dataset.target);

    let value = 0;

    const timer = setInterval(() => {
      value++;

      counter.textContent = value + "+";

      if (value >= target) {
        clearInterval(timer);
      }
    }, 40);

    observer.unobserve(counter);
  });
});

counters.forEach((counter) => observer.observe(counter));
