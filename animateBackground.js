export const animateBackground = () => {
  const containers = document.querySelectorAll('.container, .inverse-container');

  containers.forEach((container) => {
      container.classList.add('background-middle')
  })

  let elements;
  let windowHeight;

  let checkHiddenElements = () => {
    elements = document.querySelectorAll('#bio');
    windowHeight = window.innerHeight;
  }

  const checkPosition = () => {
    for (let i = 0; i < elements.length; i++) {
      let positionFromTop = elements[i].getBoundingClientRect().top;
      // console.log(positionFromTop - windowHeight)

      if (positionFromTop - windowHeight < -2) {
        containers[0].classList.add('background-left');
        containers[1].classList.add('background-left');

      } 
      if (positionFromTop - windowHeight >= 0) {
          containers[0].classList.remove('background-left');
          containers[1].classList.remove('background-left');
      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', checkHiddenElements);

  checkHiddenElements();
  checkPosition();
};
