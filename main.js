import { projects } from './projects.js';
import animateOnScroll from './animateOnScroll.js';
import {animateBackground} from './animateBackground.js';


const renderProjects = (element) => {
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

renderProjects('.grid-container')
animateBackground();
animateOnScroll();