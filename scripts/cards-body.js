function createProjectCard(project) {
    return `
      <div class="project-card" onclick="flipCard(this)">
        <div class="card-inner">
          <div class="card-front">
            <img src="${project.image}" alt="${project.title}" />
            <div class="card-content">
              <h3>${project.title}</h3>
            </div>
          </div>
          <div class="card-back">
            <p>${project.description}</p>
            <a href="${project.link}" class="project-btn">Ver Projeto</a>
          </div>
        </div>
      </div>
    `;
}