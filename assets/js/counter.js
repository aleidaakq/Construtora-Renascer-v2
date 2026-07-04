/* =====================================================
   COUNTERS
===================================================== */

function animateCounter(counter) {
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
}

function initCounter() {
  const counters = document.querySelectorAll(".counter");

  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      animateCounter(entry.target);

      observer.unobserve(entry.target);
    });
  });

  counters.forEach((counter) => observer.observe(counter));
}

document.addEventListener("DOMContentLoaded", initCounter);
