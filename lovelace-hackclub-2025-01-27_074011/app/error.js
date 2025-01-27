function login() {
    var valentineName = document.getElementById('valentineName').value;

    // Check if the valentineName is valid
    if (valentineName === 'john') {
        window.location.href = 'john.html';
    } else if (valentineName === 'mike') {
        window.location.href = 'mike.html';
    } else if (valentineName === 'yaroslav') {
        window.location.href = 'yaroslavvv.html';
    } else if (valentineName === 'bob') {
        window.location.href = 'bob.html';
    } else {
        window.location.href = 'error.html';
    }
}

document.addEventListener('DOMContentLoaded', function () {
  let letters = document.querySelectorAll('.falling-letter');

  letters.forEach(letter => {
    letter.addEventListener('mouseover', function () {
      
      var spinAnimationName = (Math.random() < 0.5) ? 'rotateClockwise' : 'rotateCounterclockwise';

      
      letter.style.transition = 'transform 1s ease-in-out';
      letter.style.transform = 'translateY(100vh) rotate(720deg)';

     
    });
  });
});

$(document).ready(function () {
  $(".title").click(function () {
    $(".container").addClass("open");
  });

  $(".close").click(function () {
    $(".container").removeClass("open");
  });
});
