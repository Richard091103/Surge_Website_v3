function scrollToSection() {
  document.getElementById("trailer").scrollIntoView({ behavior: "smooth" });
}


// HEADER
window.addEventListener("scroll", function() {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) { 
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


  




/*FEATURE TEXT ANIMATION*/
document.addEventListener("DOMContentLoaded", () => {
  const texts = document.querySelectorAll(".marqueeText");

  texts.forEach(text => {
    const container = text.parentElement;
    const startX = container.offsetWidth;
    let position = startX; // start from container width
    const speed = 2;

    function animate() {
      position -= speed;

      // reset when fully left
      if (position <= -text.offsetWidth) {
        position = startX;
      }

      text.style.transform = `translateX(${position}px)`;

      requestAnimationFrame(animate);
    }

    animate();
  });
});


// CHARACTER SHOWCASE
    const characters = [
  {
    name: "TANGGOL",
    description: "Tanggol is a friendly guide who teaches and encourages players to stay alert, smart, and safe while preparing for and surviving a tsunami.",
    image: "character_img/tanggol-fullBody.png",      // main big image
    thumbnail: "character_img/tanggol-thumbnail.png"     // thumbnail small circle
  },
  {
    name: "BOY MAIN CHARACTER",
    description: "The boy main character represents a typical Filipino teenager living in a coastal community. He embodies the role of youth who must learn, prepare, and act during disasters, making his journey relatable to many players.",
    image: "character_img/tanggol-fullBody.png",      // main big image
    thumbnail: "character_img/tanggol-thumbnail.png"     // thumbnail small circle
  },
  {
    name: "NANAY",
    description: "Nanay wears a teal house dress with pink curlers and slippers, showing the warmth, practicality, and everyday strength of a typical Filipino mother at home. ",
     image: "character_img/nanay-full_body.png",      // main big image
    thumbnail: "character_img/nanay-thumbnail.png"     // thumbnail small circle
  },
  {
    name: "TATAY",
    description: "Tatay is depicted as a simple and hardworking Filipino father, wearing a white sando, black pants, and slippers—an everyday look familiar in many households.",
    image: "character_img/tatay-full_body.png",      // main big image
    thumbnail: "character_img/tatay-thumbnail.png"     // thumbnail small circle
  },
  {
    name: "TOTOY",
    description: "Totoy is the friendly companion of the main character, always cheerful and curious. He reflects the simple look of a Filipino kid, His playful spirit makes him a loyal friend who is ready to share both fun and challenges.",
    image: "character_img/totoy-full_Body.png",      // main big image
    thumbnail: "character_img/totoy-thumbnail.png"     // thumbnail small circle
  },
  {
    name: "EVACUATION OFFICER 1",
    description: "The Rescue Evacuation Officer wears a light blue shirt, red vest, ID badge, and dark slacks, symbolizing the professionalism and dedication of frontliners who guide families to safety in emergencies.",
    image: "character_img/officer1-full_Body.png",      // main big image
    thumbnail: "character_img/officer1-thumbnail.png"     // thumbnail small circle
  },
  {
    name: "EVACUATION OFFICER 2",
    description: "The Rescue Evacuation Officer wears a light blue shirt, red vest, ID badge, and dark slacks, symbolizing the professionalism and dedication of frontliners who guide families to safety in emergencies.",
    image: "character_img/officer2-full_Body.png",      // main big image
    thumbnail: "character_img/officer2-thumbnail.png"     // thumbnail small circle
  }
];


    let currentIndex = 0;

    function initializeApp() {
      renderThumbnails();
      updateCharacter(0);
      setupEventListeners();
    }

    function renderThumbnails() {
  const thumbnailsContainer = document.getElementById('thumbnails');
  thumbnailsContainer.innerHTML = characters.map((char, index) => `
    <div class="thumbnail ${index === currentIndex ? 'active' : ''}" data-index="${index}">
      <img src="${char.thumbnail}" alt="${char.name}">
    </div>
  `).join('');
}

    function updateCharacter(index) {
  currentIndex = index;

  const mainCharacter = document.getElementById('mainCharacter');
  const characterName = document.getElementById('characterName');
  const characterDescription = document.getElementById('characterDescription');

  mainCharacter.style.opacity = '0';
  characterName.style.opacity = '0';
  characterDescription.style.opacity = '0';

  setTimeout(() => {
    mainCharacter.src = characters[currentIndex].image;   // big full-body
    mainCharacter.alt = characters[currentIndex].name;
    characterName.textContent = characters[currentIndex].name;
    characterDescription.textContent = characters[currentIndex].description;

    mainCharacter.style.opacity = '1';
    characterName.style.opacity = '1';
    characterDescription.style.opacity = '1';
  }, 150);

  updateThumbnails();
}


    function updateThumbnails() {
      const thumbnails = document.querySelectorAll('.thumbnail');
      thumbnails.forEach((thumb, index) => {
        if (index === currentIndex) {
          thumb.classList.add('active');
        } else {
          thumb.classList.remove('active');
        }
      });
    }

    function setupEventListeners() {
      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');

      prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + characters.length) % characters.length;
        updateCharacter(currentIndex);
      });

      nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % characters.length;
        updateCharacter(currentIndex);
      });

      document.getElementById('thumbnails').addEventListener('click', (e) => {
        const thumbnail = e.target.closest('.thumbnail');
        if (thumbnail) {
          const index = parseInt(thumbnail.dataset.index);
          updateCharacter(index);
        }
      });
    }


/* Environment */
let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n >= slides.length) { slideIndex = 0 }
  if (n < 0) { slideIndex = slides.length - 1 }

  // hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  // remove active from all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  // show current slide + highlight its dot
  slides[slideIndex].classList.add("active");
  dots[slideIndex].classList.add("active");
}


