const planet_image = document.getElementById("planet-image");
const planet_change = document.querySelectorAll('.planet-change');
const planet_name = document.getElementById("planet-name");
const description = document.getElementById("description");
const distance = document.getElementById("distance");
const travel = document.getElementById("travel")

fetch("data.json")
.then(response => response.json())
.then(data => {
  const planets = data.destinations
  const planet = planets[0];
  planet_name.innerText = `${planet.name}`;
  planet_image.setAttribute("src", `${planet.images.png}`);
  description.innerText = `${planet.description}`;
  distance.innerText = `${planet.distance}`;
  travel.innerText = `${planet.travel}`;
  const planetOne = planet_change[0]
  planetOne.classList.add('after:w-full')
  planet_change.forEach((btn, index) =>{
    btn.addEventListener('click',() =>{
      planet_change.forEach(plan =>{
        plan.classList.remove("after:w-full");
        plan.classList.remove("after-w-0")
      })
      btn.classList.add('after:w-full')
      const planet = planets[index]
      planet_name.innerText = `${planet.name}`
      planet_image.setAttribute('src',`${planet.images.png}`)
      description.innerText = `${planet.description}`
      distance.innerText = `${planet.distance}`
      travel.innerText = `${planet.travel}`
    })
  })
})
.catch(error => console.error("Error in fetching", error));