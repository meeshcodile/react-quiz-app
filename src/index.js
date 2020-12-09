
import REACTDOM from 'react-dom'
import React from 'react'
import Quiz from './components/Quiz'

function App() {
  return (
    <div>
      <Quiz></Quiz>
    </div>
  )
}

export default App

const rootElement = document.getElementById('root')
REACTDOM.render(<App></App>, rootElement)