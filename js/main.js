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
      name: "Kartono H. Atmanto",
      image: "./assets/images/hall-of-fame/kartono-h-atmanto.png",
      popupImage:
        "./assets/images/hall-of-fame/pop-up/POP UP - KARTONO H. ATMANTO.jpg",
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
