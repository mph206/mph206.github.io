// Make items appears as they scroll into view
export const animateOnScroll = () => {
  let elements;
  let windowHeight;

  let checkHiddenElements = () => {
    elements = document.querySelectorAll('.show-on-scroll');
    windowHeight = window.innerHeight;
  };

  function checkPosition() {
    for (let i = 0; i < elements.length; i++) {
      let element = elements[i];
      let positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= 0) {
        element.classList.add('is-visible');
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


  export default animateOnScroll;