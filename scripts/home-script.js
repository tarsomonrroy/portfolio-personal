experience.addEventListener("click", toggleMenu);
about.addEventListener("click", toggleMenu);

window.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".project-section");
  projects.forEach(project => {
    const cardHTML = createProjectCard(project);
    section.insertAdjacentHTML("beforeend", cardHTML);
  });
}
);

window.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".hero");
  const presentation = createPresentation();
  section.insertAdjacentHTML("beforeend", presentation);
}
);