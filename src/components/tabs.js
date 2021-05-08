
  
  import axios from 'axios' //importing axios.
  const topics = axios
  .get('https://lambda-times-api.herokuapp.com/topics')
  .then(res => {
    console.log('here is my future data', res)
  })
  .catch(error => {
    console.log('here is the error', error)
  })

  console.log('topics:', topics)
  // console.log(lambdaTopics) testing to make sure axios imported properly and is working as needed
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  
  const Tabs = (topics) => {
    const topicsStart = document.createElement('div')
    const tabOne = document.createElement('div')
    const tabTwo = document.createElement('div')
    const tabThree = document.createElement('div')
    const tabFour = document.createElement('div')
    const tabFive = document.createElement('div')

    topicsStart.appendChild(tabOne)
    topicsStart.appendChild(tabTwo)
    topicsStart.appendChild(tabThree)
    topicsStart.appendChild(tabFour)
    topicsStart.appendChild(tabFive)

    topicsStart.classList.add('topics')
    tabOne.classList.add('tab')
    tabTwo.classList.add('tab')
    tabThree.classList.add('tab')
    tabFour.classList.add('tab')
    tabFive.classList.add('tab')

    tabOne.textContent = topics[0]
    tabTwo.textContent = topics[1]
    tabThree.textContent = topics[2]
    tabFour.textContent = topics[3]
    tabFive.textContent = topics [4]
    

    return topicsStart
}

console.log('Tabs \n',Tabs(topics))

  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  const tabsAppender = (selector) => {
    axios
  .get(`https://lambda-times-api.herokuapp.com/topics`)
  .then(res => {
    const tabsContainer = document.querySelector(selector)
    console.log('res.data.articles \n\n', res.data.articles)
    const tab = res.data.articles
    topics.forEach((obj))
    
    tabsContainer.appendChild(topics)
    console.log('here is my future data', res)
    

  })
  .catch(error => {
    console.log(`here is the error: ${error}`)
  })
  console.log('topics:', topics)   
} 

export { Tabs, tabsAppender }
