// Countdown Timer
const countdown = document.getElementById('countdown');
const targetDate = new Date('2024-12-20T18:00:00');

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    countdown.innerHTML = "We're Together Now!";
    clearInterval(timer);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown();

// Slideshow Logic with Zoom & Fade
let slideIndex = 0; // Starting index for the slideshow
const slides = document.querySelectorAll('.slideshow img'); // Select all images

function changeSlide() {
  // Remove the "active" class from the current slide
  slides[slideIndex].classList.remove('active');

  // Update the index (cycle back to the first slide if at the end)
  slideIndex = (slideIndex + 1) % slides.length;

  // Add the "active" class to the next slide
  slides[slideIndex].classList.add('active');
}

// Automatically change slides every 5 seconds
setInterval(changeSlide, 5000);

// Initially activate the first slide
slides[slideIndex].classList.add('active');


// Double-tap to Change Image
slides.forEach(slide => {
  let tapTimeout;
  slide.addEventListener('click', () => {
    if (tapTimeout) {
      clearTimeout(tapTimeout);
      changeSlide();
    } else {
      tapTimeout = setTimeout(() => (tapTimeout = null), 300);
    }
  });
});

// Dynamic Text Interaction
document.getElementById('dynamicText').addEventListener('mouseover', (e) => {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = `${e.pageX}px`;
  heart.style.top = `${e.pageY}px`;
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 2000);
});

// Music Playlist Logic
const songs = ['song1.mp3', 'song2.mp3', 'song3.mp3'];
const audio = document.getElementById('romanticSong');

audio.addEventListener('ended', () => {
  const nextSong = songs[Math.floor(Math.random() * songs.length)];
  audio.src = nextSong;
  audio.play();
});
