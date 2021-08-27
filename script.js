"use strict";

const allSections = document.querySelectorAll(".section");
console.log(allSections);

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("hidden");
  observer.unobserve(entry.target);
};

const sectonObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
});

allSections.forEach((section) => {
  sectonObserver.observe(section);
  section.classList.add("hidden");
});
