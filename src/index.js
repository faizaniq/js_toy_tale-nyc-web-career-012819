const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false
const url = 'http://localhost:3000/toys'
const toyContainer = document.getElementById('toy-collection')
const addToyForm = document.querySelector('.add-toy-form')
const nameSubmit = addToyForm[0]
const imageSubmit = addToyForm[1]
const createToy = addToyForm[2]

// YOUR CODE HERE
class Toy {
  constructor({name, image, id, likes}) {
    this.name = name
    this.image = image
    this.id = id
    this.likes = likes
  }
}



addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
    // submit listener here
  } else {
    toyForm.style.display = 'none'
  }
})

function postData(url = ``, data = {}){
  return fetch(url, {
    method: "POST",
    headers: {
          "Content-Type": "application/json",
          },
    body: JSON.stryinify(data)
  })
  .then(response => response.json())
}

createToy.addEventListener("click", function(){
  toy = new Toy(name = nameSubmit.value, image = imageSubmit.value, likes = 0, id = toy.id)
  postData('http://localhost:3000/toys', ({name: `${nameFild.value}`, image:
  `${imgField.value}`, likes: 0 }))
})
// OR HERE!
function fetchData(){
  fetch(url)
  .then(res => res.json())
  .then(json => {
    json.forEach(attributes => {
      let toy = new Toy(attributes)
      render(toy)
    })
  })
}

function render(toy){
  toyContainer.innerHTML +=
  `
  <div class="card">
    <h2>${toy.name}</h2>
    <img src=${toy.image} class="toy-avatar" />
    <p>${toy.likes}</p>
    <button class="like-btn">Like <3</button>
  </div>
  `
}
fetchData()
