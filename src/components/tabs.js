
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
  const headerContainer = document.querySelector('.header-container')
  const Tabs = (topics) => {
    const topicsStart = document.createElement('div')
    const tabOne = document.createElement('div')
    const tabTwo = document.createElement('div')
    const tabThree = document.createElement('div')

    topicsStart.appendChild(tabOne)
    topicsStart.appendChild(tabTwo)
    topicsStart.appendChild(tabThree)

    topicsStart.classList.add('topics')
    tabOne.classList.add('tab')
    tabTwo.classList.add('tab')
    tabThree.classList.add('tab')

    tabOne.textContent = topics[1]
    tabTwo.textContent = topics[2]
    tabThree.textContent = topics[3]

}

console.log(Tabs('javascript', 'bootstrap', 'technology'))
const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
