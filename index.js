
document.addEventListener("DOMContentLoaded", (e) => {
//1
const buttonTitanic = document.getElementById('Titanic')
const buttonTerm = document.getElementById('Terminator 2')

//2 
const changeMovie = (movie) => {
  const title = document.getElementById('title')
  title.innerHTML = movies[movie].title
  const genre = document.getElementById('genre')
  genre.innerHTML = movies[movie].genre
  const director = document.getElementById('director')
  director.innerHTML = movies[movie].director
  const filmRating = document.getElementById('filmRating')
  filmRating.innerHTML = movies[movie].filmRating
  const posterImg = document.getElementById('poster')
  posterImg.src = movies[movie].poster
  const description = document.getElementById('description')
  description.innerHTML = movies[movie].description
  const audienceScore = document.getElementById('audienceScore')
  audienceScore.innerHTML = movies[movie].audienceScore
  
 const castUl = document.createElement('ul')
 for (let person of movies[movie].cast) {
   const li = document.createElement('li')
   li.innerHTML = person.role + ": " + person.actor
   castUl.appendChild(li)
 }
 const castDiv = document.getElementById('cast')
 castDiv.appendChild(castUl)

 const reviewUl = document.createElement('ul')
 for (let review of movies[movie].reviews) {
   const li = document.createElement('li')
   li.innerHTML = review.username + ": " + review.content
   reviewUl.appendChild(li)
 }
 const reviewDiv = document.getElementById('reviews')
 reviewDiv.appendChild(reviewUl)
}
//3 
buttonTitanic.addEventListener('click', () => changeMovie('Titanic'))
buttonTerm.addEventListener('click', () => changeMovie('Terminator 2'))

});
