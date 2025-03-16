const spaceChars = document.querySelectorAll(".space-char");
const charShow = document.getElementById("char-display");
const charDescription = document.getElementById("char-description");
const charName = document.getElementById("char-name");
const charRole = document.getElementById("char-role");


fetch('data.json')
.then(response => response.json())
.then(data => {
  const crews = data.crew
  console.log(crews);
  console.log(crews[0].bio);
  console.log(crews[0].images.webp);
  console.log(crews[0].name);
  console.log(crews[0].role);
  spaceChars.forEach((spaceChar,index) => {
    const crewChar = crews[index]
    spaceChar.addEventListener("click",()=> {
      spaceChars.forEach((spaceChar) => {
        spaceChar.classList.remove("bg-white");
      });
      spaceChar.classList.add("bg-white");
      charName.innerText = `${crewChar.name}`;
      charRole.innerText = `${crewChar.role}`;
      charDescription.innerText = `${crewChar.bio}`
      charShow.setAttribute('src',`${crewChar.images.webp}`)
    });
  });
})