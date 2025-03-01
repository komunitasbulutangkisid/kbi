// Navbar sticky behavior
const navbar = document.querySelector(".navbar");
const aboutSection = document.querySelector("#about");

if (navbar && aboutSection) {
  // Debounce function to limit the rate of scroll event handling
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  const handleScroll = debounce(() => {
    const aboutTop = aboutSection.offsetTop;
    const scrollPosition = window.scrollY;
    const offset = 112; // Add offset for smoother transition

    if (scrollPosition >= aboutTop - offset) {
      navbar.classList.remove("sticky-top");
    } else {
      navbar.classList.add("sticky-top");
    }
  }, 10);

  window.addEventListener("scroll", handleScroll);
}

// Hall of Fame rendering
const hofList = document.getElementById("hof-list");
// Check if the hall of fame list exists
if (hofList) {
  const hofData = [
    {
      name: "Ade Chandra",
      image: "./assets/images/hall-of-fame/ade-chandra.png",
      popupImage:
        "./assets/images/hall-of-fame/pop-up/POP UP - ADE CHANDRA.jpg",
    },
    {
      name: "Christian Hadinata",
      image: "./assets/images/hall-of-fame/christian-hadinata.png",
      popupImage:
        "./assets/images/hall-of-fame/pop-up/POP UP - CHRISTIAN HADINATA.jpg",
    },
    {
      name: "Alan Budi Kusuma",
      image: "./assets/images/hall-of-fame/alan-budi-kusuma.jpg",
      popupImage:
        "./assets/images/hall-of-fame/pop-up/POP UP - ALAN BUDI KUSUMA.jpg",
    },
    {
      name: "Susy Susanti",
      image: "./assets/images/hall-of-fame/susy-susanti.jpg",
      popupImage:
        "./assets/images/hall-of-fame/pop-up/POP UP - SUSY SUSANTI.jpg",
    },
    {
      name: "Icuk Sugiarto",
      image: "./assets/images/hall-of-fame/icuk-sugiarto.png",
      popupImage:
        "./assets/images/hall-of-fame/pop-up/POP UP - ICUK SUGIARTO.jpg",
    },
    {
      name: "Imelda Wiguna",
      image: "./assets/images/hall-of-fame/imelda-wiguna.png",
      popupImage:
        "./assets/images/hall-of-fame/pop-up/POP UP - IMELDA WIGUNA.jpg",
    },
    {
      name: "Liem Swie King",
      image: "./assets/images/hall-of-fame/liem-swie-king.png",
      popupImage:
        "./assets/images/hall-of-fame/pop-up/POP UP - LIEM SWIE KING.jpg",
    },
    {
      name: "Liliyana Natsir",
      image: "./assets/images/hall-of-fame/liliyana-natsir.png",
      popupImage:
        "./assets/images/hall-of-fame/pop-up/POP UP - LILIYANA NATSIR.jpg",
    },
    {
      name: "Rudy Hartono",
      image: "./assets/images/hall-of-fame/rudy-hartono.png",
      popupImage:
        "./assets/images/hall-of-fame/pop-up/POP UP - RUDY HARTONO.jpg",
    },
    {
      name: "Rudy Heryanto",
      image: "./assets/images/hall-of-fame/rudy-heryanto.png",
      popupImage:
        "./assets/images/hall-of-fame/pop-up/POP UP - RUDY HERYANTO.jpg",
    },
    {
      name: "Tan Joe Hok",
      image: "./assets/images/hall-of-fame/tan-joe-hok.png",
      popupImage:
        "./assets/images/hall-of-fame/pop-up/POP UP - TAN JOE HOK.jpg",
    },
    {
      name: "Tantowi Ahmad",
      image: "./assets/images/hall-of-fame/tantowi-ahmad.png",
      popupImage:
        "./assets/images/hall-of-fame/pop-up/POP UP - TANTOWI AHMAD.jpg",
    },
  ];

  // Create modal container
  const modalContainer = document.createElement("div");
  modalContainer.innerHTML = `
    <div class="modal fade" id="hofModal" tabindex="-1" aria-labelledby="hofModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-body text-center position-relative p-0">
            <button type="button" class="btn btn-link p-4 text-white position-absolute top-0 end-0" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-circle-xmark fa-xl"></i></button>
            <img src="" alt="" class="img-fluid rounded-2" id="hofModalImage">
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modalContainer);

  // Render the hall of fame list
  hofData.forEach((data) => {
    const hofItem = document.createElement("div");
    hofItem.classList.add("col");
    const hofItemFrame = document.createElement("div");
    hofItemFrame.classList.add("hof-frame", "ratio", "ratio-1x1");
    hofItemFrame.style.cursor = "pointer";

    // Add click event listener
    hofItemFrame.addEventListener("click", () => {
      const modal = new bootstrap.Modal(document.getElementById("hofModal"));
      // const modalTitle = document.getElementById("hofModalLabel");
      const modalImage = document.getElementById("hofModalImage");

      // modalTitle.textContent = data.name;
      modalImage.src = data.popupImage;
      modalImage.alt = data.name;

      modal.show();
    });

    hofItem.appendChild(hofItemFrame);
    hofItemFrame.innerHTML = `
      <img class="object-fit-cover" src="${data.image}" alt="${data.name}">
    `;
    hofList.appendChild(hofItem);
  });
}

// Gallery rendering
const galleryImageContainer = document.getElementById(
  "gallery-image-container"
);
// Check if the gallery container exists
if (galleryImageContainer) {
  const galleryData = [
    "./assets/images/gallery/104C37E1-1F34-4677-A209-DD755A9CC321.jpg",
    "./assets/images/gallery/WhatsApp Image 2023-12-27 at 20.12.03 (2).jpg",
    "./assets/images/gallery/WhatsApp Image 2023-12-27 at 20.19.20 (2).jpg",
    "./assets/images/gallery/WhatsApp Image 2023-12-27 at 20.19.32.jpg",
    "./assets/images/gallery/WhatsApp Image 2023-12-27 at 20.19.33 (1).jpg",
    "./assets/images/gallery/WhatsApp Image 2023-12-27 at 20.19.34 (1).jpg",
    "./assets/images/gallery/WhatsApp Image 2023-12-27 at 20.19.35.jpg",
    "./assets/images/gallery/WhatsApp Image 2023-12-27 at 20.19.36 (1).jpg",
    "./assets/images/gallery/WhatsApp Image 2023-12-27 at 20.19.36.jpg",
    "./assets/images/gallery/WhatsApp Image 2024-01-06 at 10.15.31 (1).jpg",
    "./assets/images/gallery/WhatsApp Image 2024-02-01 at 14.07.06 (1).jpg",
  ];

  // Create modal container
  const modalContainer = document.createElement("div");
  modalContainer.innerHTML = `
    <div class="modal fade" id="galleryModal" tabindex="-1" aria-labelledby="galleryModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content">
          <div class="modal-body text-center position-relative p-0">
            <button type="button" class="btn btn-link p-4 text-white position-absolute top-0 end-0" data-bs-dismiss="modal" aria-label="Close">
              <i class="fa-solid fa-circle-xmark fa-xl"></i>
            </button>
            <img src="" alt="Gallery Image" class="img-fluid w-100 rounded-2" id="galleryModalImage">
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modalContainer);

  // Render gallery images
  galleryData.forEach((imagePath) => {
    const galleryFrame = document.createElement("div");
    galleryFrame.classList.add("gallery-image-frame");
    galleryFrame.style.cursor = "pointer";

    galleryFrame.innerHTML = `
      <div class="ratio ratio-16x9 rounded-2">
        <img src="${imagePath}" class="object-fit-cover" alt="Gallery Image">
      </div>
    `;

    // Add click event listener
    galleryFrame.addEventListener("click", () => {
      const modal = new bootstrap.Modal(
        document.getElementById("galleryModal")
      );
      const modalImage = document.getElementById("galleryModalImage");
      modalImage.src = imagePath;
      modal.show();
    });

    galleryImageContainer.appendChild(galleryFrame);
  });
}
