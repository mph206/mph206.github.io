import { projects } from './projects.js'

// Render projects
const projectsMap = (element) => {
  document.querySelector(element).innerHTML = projects.map((project, index) => {
    return `<article id="project-${index}" class="hidden">
        <img src=${project.img} alt=${project.name}>
          <span class="skills">
            ${project.icons.map(icon => `<i class="${icon} float-icons"></i>`)}
          </span>
          <a href=${project.pageLink} target='_blank'><i class="fas fa-rocket float-icons"></i></a>
          <a href=${project.gitLink} target='_blank'><i class="fas fa-code float-icons"></i></a>
        <div class="project-text">  
          <h3>${project.name}</h3>
          <p>${project.description}</p>
        </div>
        </article>`
  }).join('');
} 
projectsMap('.grid-container')

// Make items appears as they scroll into view
const animateOnScroll = () => {
  let elements;
  let windowHeight;

  let checkHiddenElements = () => {
    elements = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;
  };

  function checkPosition() {
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      let positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('fade-in');
        element.classList.remove('hidden');
      } 
      if (positionFromTop - windowHeight >= 0) {
        element.classList.remove('fade-in');
        element.classList.add('hidden');
      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', checkHiddenElements);

  checkHiddenElements();
  checkPosition();
};
animateOnScroll();

// ANIMATE EMAIL MODAL

const modal = document.querySelector('#modal');
const modalContent = document.querySelector('#modal-content');

function hideModal () {
  setTimeout(() => {
    modal.style.display = 'none';
  }, 300);
}

function slideBack () {
  modalContent.classList.remove('slide-up');    
  modalContent.classList.add('slide-back');
}

document.querySelector('#email').addEventListener('click',() => {
  modal.style.display = 'block';
  modalContent.classList.remove('slide-back');    
  modalContent.classList.add('slide-up');
});

document.querySelector('#modal-x').addEventListener('click', () => {
  slideBack();
  hideModal();
});

modal.addEventListener('click', () => {
  if (event.target === modal) {
    slideBack();
    hideModal();
  }
});

