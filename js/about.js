// Hall of Fame rendering
const founderList = document.getElementById("founder-list");
// Check if the hall of fame list exists
if (founderList) {
  const founderData = [
    {
      name: "TAN JOE HOK",
      image: "./assets/images/founder/tan-joe-hok.png",
    },
    {
      name: "GANDI SULIS",
      image: "./assets/images/founder/gandi-sulis.png",
    },
    {
      name: "TAN THIAM BENG",
      image: "./assets/images/founder/tan-thiam-beng.png",
    },
    {
      name: "IVANA LIE",
      image: "./assets/images/founder/ivana-lie.png",
    },
    {
      name: "RUDY HERYANTO",
      image: "./assets/images/founder/rudy-heryanto.png",
    },
    {
      name: "HADIWIBOWO SUSANTO",
      image: "./assets/images/founder/hadiwibowo-susanto.png",
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
