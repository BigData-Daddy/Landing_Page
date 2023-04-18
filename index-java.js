document.addEventListener('DOMContentLoaded', function() {
    const SquareContainers = document.querySelectorAll('.content-box-square-container');
  
    SquareContainers.forEach(SquareContainer => {
      SquareContainer.addEventListener('click', function() {
        this.classList.toggle('is-flipped');
      });
    });
  });