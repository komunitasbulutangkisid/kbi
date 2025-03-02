// Hall of Fame rendering
const founderList = document.getElementById("founder-list");
// Check if the hall of fame list exists
if (founderList) {
  const founderData = [
    {
      name: "TAN JOE HOK",
      image: "./assets/images/founder/Tan-Joe-Hok.avif",
    },
    {
      name: "GANDI SULIS",
      image: "./assets/images/founder/Gandi-Sulis.avif",
    },
    {
      name: "TAN THIAM BENG",
      image: "./assets/images/founder/Tan-Thiam-Beng.avif",
    },
    {
      name: "IVANA LIE",
      image: "./assets/images/founder/Ivana-Lie.avif",
    },
    {
      name: "RUDY HERYANTO",
      image: "./assets/images/founder/Rudy-Heryanto.avif",
    },
    {
      name: "HADIWIBOWO SUSANTO",
      image: "./assets/images/founder/Hadiwibowo-Susanto.avif",
    },
  ];
  // Render the hall of fame list
  founderData.forEach((data) => {
    const founderItem = document.createElement("div");
    founderItem.classList.add("col");

    const founderItemFrame = document.createElement("div");
    founderItemFrame.classList.add("ratio");
    founderItemFrame.classList.add("ratio-1x1");
    founderItemFrame.classList.add("mb-3");
    founderItemFrame.innerHTML = `
          <img class="object-fit-cover" src="${data.image}" alt="${data.name}">
      `;
    founderItem.appendChild(founderItemFrame);
    const founderItemName = document.createElement("h6");
    founderItemName.classList.add("text-center");
    founderItemName.innerHTML = data.name;
    founderItem.appendChild(founderItemName);
    founderList.appendChild(founderItem);
  });
}
