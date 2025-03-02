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
      image: "./assets/images/hall-of-fame/Ade-Chandra.avif",
      popupImage: "./assets/images/hall-of-fame/Ade-Chandra-Pop-Up.avif",
    },
    {
      name: "Christian Hadinata",
      image: "./assets/images/hall-of-fame/Christian-Hadinata.avif",
      popupImage: "./assets/images/hall-of-fame/Christian-Hadinata-Pop-Up.avif",
    },
    {
      name: "Alan Budi Kusuma",
      image: "./assets/images/hall-of-fame/Alan-Budi-Kusuma.avif",
      popupImage: "./assets/images/hall-of-fame/Alan-Budi-Kusuma-Pop-Up.avif",
    },
    {
      name: "Susy Susanti",
      image: "./assets/images/hall-of-fame/Susy-Susanti.avif",
      popupImage: "./assets/images/hall-of-fame/Susy-Susanti-Pop-Up.avif",
    },
    {
      name: "Icuk Sugiarto",
      image: "./assets/images/hall-of-fame/Icuk-Sugiarto.avif",
      popupImage: "./assets/images/hall-of-fame/Icuk-Sugiarto-Pop-Up.avif",
    },
    {
      name: "Imelda Wiguna",
      image: "./assets/images/hall-of-fame/Imelda-Wiguna.avif",
      popupImage: "./assets/images/hall-of-fame/Imelda-Wiguna-Pop-Up.avif",
    },
    {
      name: "Liem Swie King",
      image: "./assets/images/hall-of-fame/Liem-Swie-King.avif",
      popupImage: "./assets/images/hall-of-fame/Liem-Swie-King-Pop-Up.avif",
    },
    {
      name: "Liliyana Natsir",
      image: "./assets/images/hall-of-fame/Liliyana-Natsir.avif",
      popupImage: "./assets/images/hall-of-fame/Liliyana-Natsir-Pop-Up.avif",
    },
    {
      name: "Rudy Hartono",
      image: "./assets/images/hall-of-fame/Rudy-Hartono.avif",
      popupImage: "./assets/images/hall-of-fame/Rudy-Hartono-Pop-Up.avif",
    },
    {
      name: "Heryanto Saputra",
      image: "./assets/images/hall-of-fame/Heryanto-Saputra.avif",
      popupImage: "./assets/images/hall-of-fame/Heryanto-Saputra-Pop-Up.avif",
    },
    {
      name: "Tan Joe Hok",
      image: "./assets/images/hall-of-fame/Tan-Joe-Hok.avif",
      popupImage: "./assets/images/hall-of-fame/Tan-Joe-Hok-Pop-Up.avif",
    },
    {
      name: "Tantowi Ahmad",
      image: "./assets/images/hall-of-fame/Tantowi-Ahmad.avif",
      popupImage: "./assets/images/hall-of-fame/Tantowi-Ahmad-Pop-Up.avif",
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
    "./assets/images/gallery/a557tgdgajxgc2hbsy43.avif",
    "./assets/images/gallery/ahbxsrrpy3peh5adhbzs.avif",
    "./assets/images/gallery/ahezx373khc9xozpvamj.avif",
    "./assets/images/gallery/bilw8ezpiwoefatoorja.avif",
    "./assets/images/gallery/btttoj1asjte2hsig4cr.avif",
    "./assets/images/gallery/gtcgqh3ypgc1tq4glnup.avif",
    "./assets/images/gallery/hminajnavfstopz0al8n.avif",
    "./assets/images/gallery/hqfapjw3td7zhtsdhjo3.avif",
    "./assets/images/gallery/jsdecgqcs1ragmu3rmpn.avif",
    "./assets/images/gallery/xgj4nafad3j9snksqs77.avif",
    "./assets/images/gallery/xynd89f5hxtrnjntl1wx.avif",
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
