console.log('%c HI', 'color: firebrick')
//challenge 1
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

// let breedDropDown = document.getElementById('breed-dropdown')
document.addEventListener('DOMContentLoaded', getImages)
document.addEventListener('DOMContentLoaded', getDogBreeds)


function getImages() {
   return fetch(imgUrl)
    .then(resp => resp.json())
    .then(data => {
        //data[]
        addImgsToDom(data)
    })
} 

function addImgsToDom(data) {
    const imgContainer = document.querySelector('#dog-image-container')
    const imageArray = data["message"]

    imageArray.forEach(message => {
        let img = document.createElement('img')
        img.src = message
        imgContainer.append(img)
    })  
} 
//challenge 2
function getDogBreeds() {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(data => {
        // debugger
    // console.log(data)
        addDogBreedsToDom(data)
    })

} 

function addDogBreedsToDom(data) {
    const breedContainer = document.querySelector("#dog-breeds")
    const breedObject = data["message"]
    
    for(let prop in breedObject) {
        const li = document.createElement('li')
        breedContainer.append(li)
        li.innerHTML = prop
        li.className = 'breed'
        li.dataset.firstchar = prop.charAt(0)
        // filterOption = document.getElementById('breed-dropdown').value
        li.addEventListener('click', function(e) {   //challenge3
            li.style.color = 'red'
            // debugger
        })
    }
    
    document.getElementById('breed-dropdown').addEventListener('change', filterBreeds)
}

// challenge four 

function filterBreeds(e) {
    
    letter = e.target.value
    dogBreeds = Array.from(document.getElementsByClassName('breed'))
    // debugger
    dogBreeds.forEach(breed => {
        if (letter === "" || breed.innerText.charAt(0) === letter) {
            breed.style.display = ""
        } else {
            breed.style.display = "none"
        }
    })
}
