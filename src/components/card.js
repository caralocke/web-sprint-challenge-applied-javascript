// TASK 5
// ---------------------
// Implement this function, which should return the markup you see below.
// It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
// The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
// The text inside elements will be set using their `textContent` property (NOT `innerText`).
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// <div class="card">
//   <div class="headline">{ headline }</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={ authorPhoto }>
//     </div>
//     <span>By { authorName }</span>
//   </div>
// </div>

import axios from "axios"

//
const Card = (article) => {
  const cardElement = document.createElement('div')
  const headlineElement = document.createElement('div')
  const authorElement = document.createElement('div')
  const imgContainer = document.createElement('div')
  const imgElement = document.createElement('img')
  const authorName = document.createElement('span')

  cardElement.appendChild(headlineElement)
  cardElement.appendChild(authorElement)
  authorElement.appendChild(imgContainer)
  imgContainer.append(imgElement)
  authorElement.appendChild(authorName)

  cardElement.classList.add('card')
  headlineElement.classList.add('headline')
  authorElement.classList.add('author')
  imgContainer.classList.add('img-container')

  headlineElement.textContent = article.headline
  imgElement.src = article.authorPhoto
  authorName.textContent = `By ${article.authorName}`

  return cardElement
}

// TASK 6
// ---------------------
// Implement this function that takes a css selector as its only argument.
// It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
// However, the articles do not come organized in a single, neat array. Inspect the response closely!
// Create a card from each and every article object in the response, using the Card component.
// Append each card to the element in the DOM that matches the selector passed to the function.
//
const cardAppender = (selector) => {
  const cardsContainer = document.querySelector(selector)
  axios
  .get(`https://lambda-times-api.herokuapp.com/articles`)
  .then(res => {
    console.log('res.data.articles for card.js:', res.data.articles)
    const bootstrapArray = res.data.articles.bootstrap
    const javascriptArray = res.data.articles.javascript
    const jqueryArray = res.data.articles.jquery
    const nodeArray = res.data.articles.node
    const technologyArray = res.data.articles.technology

    bootstrapArray.forEach(article => {
      const bootstrapCard = Card(article)
      cardsContainer.appendChild(bootstrapCard)
    })
    javascriptArray.forEach(article => {
      const javascriptCard = Card(article)
      cardsContainer.appendChild(javascriptCard)
    })
    jqueryArray.forEach(article => {
      const jqueryCard = Card(article)
      cardsContainer.appendChild(jqueryCard)
    })
    nodeArray.forEach(article => {
      const nodeCard = Card(article)
      cardsContainer.appendChild(nodeCard)
    })
    technologyArray.forEach(article => {
      const tecnhologyCard = Card(article)
      cardsContainer.appendChild(tecnhologyCard)
    })
  })
  .catch(err => {
    console.log(`Here's where you messed up: \n`, err)
  })
}

export { Card, cardAppender }
