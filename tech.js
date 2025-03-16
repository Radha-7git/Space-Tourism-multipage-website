const portImage = document.getElementById("port-image");
const landsImage = document.getElementById("lands-image");
const changeTech = document.querySelectorAll(".change-technology");
const capTitle = document.getElementById("cap-title");
const description = document.getElementById("description");


fetch("data.json")
.then(response => response.json())
.then(data => {
  techs = data.technology
  changeTech.forEach((btn,index) =>{
    btn.addEventListener('click',() =>{
      changeTech.forEach(change =>{
        change.classList.remove("text-blue-dark");
        change.classList.remove('bg-white')
      })
      btn.classList.add("text-blue-dark");
      btn.classList.add("bg-white");
      tech = techs[index];
      capTitle.innerText = `${tech.name}`
      description.innerText = `${tech.description}`
      portImage.setAttribute('src',`${tech.images.portrait}`)
      landsImage.setAttribute('src',`${tech.images.landscape}`)
    })
  })
})