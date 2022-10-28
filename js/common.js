gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({ end: "top" });

gsap.fromTo(
  ".hero",
  { opacity: 0, y: -100 },
  { opacity: 1, y: 0, duration: 2.3, ease: "expo" }
);

const tltwo = gsap
  .timeline({ paused: true, scrollTrigger: { trigger: ".album" } })
  .fromTo(
    ".album",
    { opacity: 0, x: 1000 },
    { opacity: 1, x: 0, duration: 3, ease: "expo" }
  );
const tlthree = gsap
  .timeline({ paused: true, scrollTrigger: { trigger: ".posts" } })
  .fromTo(
    ".posts",
    { opacity: 0, x: -1000 },
    { opacity: 1, x: 0, duration: 3, ease: "expo" }
  );
const tlone = gsap
  .timeline({ paused: true, scrollTrigger: { trigger: ".featured" } })
  .fromTo(
    ".featured",
    { opacity: 0, x: 1000 },
    { opacity: 1, x: 0, duration: 3, ease: "expo" }
  );
