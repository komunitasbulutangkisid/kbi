// Hall of Fame rendering
const hofList = document.getElementById("hof-list");
const hofData = [
  {
    name: "Ade Chandra",
    image: "./assets/images/hall-of-fame/ade-chandra.png",
  },
  {
    name: "Christian Hadinata",
    image: "./assets/images/hall-of-fame/christian-hadinata.png",
  },
  {
    name: "Eddy Kurniawan",
    image: "./assets/images/hall-of-fame/eddy-kurniawan.png",
  },
  {
    name: "Icuk Sugiarto",
    image: "./assets/images/hall-of-fame/icuk-sugiarto.png",
  },
  {
    name: "Imelda Wiguna",
    image: "./assets/images/hall-of-fame/imelda-wiguna.png",
  },
  {
    name: "Kartono H. Atmanto",
    image: "./assets/images/hall-of-fame/kartono-h-atmanto.png",
  },
  {
    name: "Liem Swie King",
    image: "./assets/images/hall-of-fame/liem-swie-king.png",
  },
  {
    name: "Liliyana Natsir",
    image: "./assets/images/hall-of-fame/liliyana-natsir.png",
  },
  {
    name: "Rudy Hartono",
    image: "./assets/images/hall-of-fame/rudy-hartono.png",
  },
  {
    name: "Rudy Heryanto",
    image: "./assets/images/hall-of-fame/rudy-heryanto.png",
  },
  {
    name: "Tan Joe Hok",
    image: "./assets/images/hall-of-fame/tan-joe-hok.png",
  },
  {
    name: "Tantowi Ahmad",
    image: "./assets/images/hall-of-fame/tantowi-ahmad.png",
  },
];

hofData.forEach((data) => {
  const hofItem = document.createElement("div");
  hofItem.classList.add("col");
  const hofItemFrame = document.createElement("div");
  hofItemFrame.classList.add("ratio");
  hofItemFrame.classList.add("ratio-1x1");
  hofItem.appendChild(hofItemFrame);
  hofItemFrame.innerHTML = `
        <img class="object-fit-cover" src="${data.image}" alt="${data.name}">
    `;
  hofList.appendChild(hofItem);
});

// Navbar sticky behavior
const navbar = document.querySelector(".navbar");
const aboutSection = document.querySelector("#about");

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
