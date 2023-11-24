const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
})
document.addEventListener('DOMContentLoaded', function () {
    animateIconsOnLoad();
  });
  
  function animateIconsOnLoad() {
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach((link, index) => {
      setTimeout(() => {
        link.classList.add('animate-icon', 'active');
      }, index * 100);
    });
  }
  document.addEventListener('DOMContentLoaded', function () {
    // Get all tab links
    var tabLinks = document.querySelectorAll('.nav-link');
  
    // Add click event listeners to each tab link
    tabLinks.forEach(function (tabLink) {
      tabLink.addEventListener('click', function (event) {
        event.preventDefault();
  
        // Hide all tab content
        var tabContents = document.querySelectorAll('.tab-pane');
        tabContents.forEach(function (tabContent) {
          tabContent.classList.remove('show', 'active');
        });
  
        // Show the selected tab content
        var targetTabId = tabLink.getAttribute('data-bs-target').substring(1);
        var targetTab = document.getElementById(targetTabId);
        if (targetTab) {
          targetTab.classList.add('show', 'active');
        }
  
        // Deactivate all tab links
        tabLinks.forEach(function (link) {
          link.classList.remove('active');
        });
  
        // Activate the clicked tab link
        tabLink.classList.add('active');
      });
    });
  });
  //------------------------------
  function submitQuiz() {
    var score = 0;
    var totalQuestions = 10;
  
// Question 1
if (document.querySelector('input[name="q1"]:checked')?.value === "b") {
  score++;
}

// Question 2
if (document.querySelector('input[name="q2"]:checked')?.value === "c") {
  score++;
}

// Question 3
if (document.querySelector('input[name="q3"]:checked')?.value === "b") {
  score++;
}

// Question 4
if (document.querySelector('input[name="q4"]:checked')?.value === "B") {
  score++;
}

// Question 5
if (document.querySelector('input[name="q5"]:checked')?.value === "A") {
  score++;
}

// Question 6
if (document.querySelector('input[name="q6"]:checked')?.value === "C") {
  score++;
}

// Question 7
if (document.querySelector('input[name="q7"]:checked')?.value === "B") {
  score++;
}

// Question 8
if (document.querySelector('input[name="q8"]:checked')?.value === "D") {
  score++;
}

// Question 9
// No specific correct answer since it's a free-form text entry.

if (document.querySelector('input[name="q9"]:checked')?.value === "D") {
  score++;
}

// Question 10
if (document.querySelector('input[name="q10"]:checked')?.value === "D") {
  score++;
}

  
    var result = document.getElementById("result");
    result.innerHTML = "<h2>Your score: " + score + "/" + totalQuestions + "</h2>";
  }
  let isPlaying = false;
  const audio = document.getElementById('audioPlayer');
  const audioIcon = document.getElementById('audio-icon');

  function toggleAudio() {
    if (isPlaying) {
      audio.pause();
      audioIcon.innerHTML = '🔇';
    } else {
      audio.play();
      audioIcon.innerHTML = '🔊';
    }
    isPlaying = !isPlaying;
  }

  function audioHover() {
    // Добавим анимацию при наведении
    audioIcon.style.animation = 'none';
    setTimeout(() => {
      audioIcon.style.animation = '';
    }, 10);
  }

  function audioKeyPress() {
    // Пример: обработка события keypress
    console.log('Keypress event detected!');
  }
  function animateButtonClick() {
    var aboutBtn = document.getElementById('about-btn');
    aboutBtn.classList.add('fade-in');
    setTimeout(function () {
      alert('Button clicked!');
      window.location.href = 'https://www.caravan.kz/news/kak-prazdnuyut-175letie-abaya-po-vsemu-miru-662951/';
    }, 1000);}