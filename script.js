const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

const hiddenElements1 = document.querySelectorAll(".hidden-extra");
hiddenElements1.forEach((el) => observer.observe(el));
const hiddenElements2 = document.querySelectorAll(".hidden-extra-2");
hiddenElements2.forEach((el) => observer.observe(el));
