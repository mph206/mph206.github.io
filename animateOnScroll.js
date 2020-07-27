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

  // Other website
  // const callback = function(entries) {
  //   entries.forEach(entry => {
  //     entry.target.classList.toggle("is-visible");
  //   });
  // }

  // const observer = new IntersectionObserver(callback);
  
  // const targets = document.querySelectorAll(".show-on-scroll");
  // targets.forEach(function(target) {
  //   observer.observe(target);
  // });


  // MDN notes
  // const numSteps = 20.0;

  // let boxElement;
  // let prevRatio = 0.0;
  // let increasingColor = "rgba(40, 40, 190, ratio)";
  // let decreasingColor = "rgba(190, 40, 40, ratio)";

  // // Set things up
  // window.addEventListener("load", (event) => {
  //   boxElement = document.querySelector(".show-on-scroll");

  //   createObserver();
  // }, false);

  // const createObserver = () => {
  //   let observer;
  
  //   let options = {
  //     root: null,
  //     rootMargin: "0px", // distance from edge of page that we listen for 
  //     threshold: buildThresholdList()
  //   };
  
  //   observer = new IntersectionObserver(handleIntersect, options);
  //   observer.observe(boxElement);
  // }

  // const buildThresholdList = () => {
  //   let thresholds = [];
  //   let numSteps = 20;
  
  //   for (let i=1.0; i<=numSteps; i++) {
  //     let ratio = i/numSteps;
  //     thresholds.push(ratio);
  //   }
  
  //   thresholds.push(0);
  //   return thresholds;
  // }

  // function handleIntersect(entries, observer) {
  //   entries.forEach((entry) => {
  //     if (entry.intersectionRatio > prevRatio) {
  //         entry.target.classList.toggle("is-visible");

  //       entry.target.style.backgroundColor = increasingColor.replace("ratio", entry.intersectionRatio);
  //     } else {
  //       entry.target.style.backgroundColor = decreasingColor.replace("ratio", entry.intersectionRatio);
  //     }
  
  //     prevRatio = entry.intersectionRatio;
  //   });
  // }
  



  export default animateOnScroll;