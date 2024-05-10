import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// custom plainreact object
const reactElement = {
  type : 'a',
  props:{
      href:"https://google.com",
      target:'_blank'
  },
  children:'click here'
}

function MyApp(){
  return (
    <h1>Click here</h1>
  )
}

const AnotherElement = ( // render reactElement constant in reactElement format
  <a href='https://google.com' target='_blank'>Vist Google</a>
)
//react format in reactElement object
const areactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // <App />
    // <MyApp />
    /*
    * error: use of <AnotherElement /> = type is invalid -- expected a string (for built-in components) 
     */
    // <AnotherElement /> 
    // AnotherElement
    areactElement
)
