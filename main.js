import { projects } from './projects.js';
import animateOnScroll from './animateOnScroll.js';
import {animateBackground} from './animateBackground.js';


// Render projects
const projectsMap = (element) => {
  document.querySelector(element).innerHTML = projects.map((project, index) => {
    return `<article id="project-${index}" class="show-on-scroll hidden">
        <img src=${project.img} alt=${project.name}>
        <div class='project-links'>
          <a href=${project.pageLink} target='_blank'><i class="fas fa-rocket float-icons"></i></a>
          <a href=${project.gitLink} target='_blank'><i class="fas fa-code float-icons"></i></a>
        </div>
        <div class="project-text">  
          <h3>${project.name}</h3>
          <p>${project.description}</p>
          <p>${project.skills}</p>
        </div>
        </article>`
  }).join('');
} 
projectsMap('.grid-container')

// ANIMATE EMAIL MODAL

// const modal = document.querySelector('#modal');
// const modalContent = document.querySelector('#modal-content');

// function hideModal () {
//   setTimeout(() => {
//     modal.style.display = 'none';
//   }, 300);
// }

// function slideBack () {
//   modalContent.classList.remove('slide-up');    
//   modalContent.classList.add('slide-back');
// }

// document.querySelector('#email').addEventListener('click',() => {
//   modal.style.display = 'block';
//   modalContent.classList.remove('slide-back');    
//   modalContent.classList.add('slide-up');
// });

// document.querySelector('#modal-x').addEventListener('click', () => {
//   slideBack();
//   hideModal();
// });

// modal.addEventListener('click', () => {
//   if (event.target === modal) {
//     slideBack();
//     hideModal();
//   }
// });

animateBackground();
animateOnScroll();
// var rellax = new Rellax('.rellax');