// document.querySelectorAll('a').forEach(link => {
//   link.addEventListener('click', e => {
//     if (link.hash !== "") {
//       e.preventDefault();
//       document.querySelector(link.hash)
//         .scrollIntoView({ behavior: "smooth" });
//     }
//   });
// });
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
