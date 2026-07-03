/* =====================================================
   COUNTERS
===================================================== */

const counters = document.querySelectorAll(".counter");

if (counters.length > 0) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const counter = entry.target;
      const target = Number(counter.dataset.target);
      const suffix = counter.dataset.suffix || "";

      let value = 0;

      const increment = Math.max(1, Math.ceil(target / 100));

      const timer = setInterval(() => {
        value += increment;

        if (value >= target) {
          value = target;
          clearInterval(timer);
        }

        counter.textContent = value + suffix;
      }, 20);

      observer.unobserve(counter);
    });
  });

  counters.forEach((counter) => observer.observe(counter));
}
