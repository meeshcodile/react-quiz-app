
import REACTDOM from 'react-dom'
import React from 'react'

function App() {
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  )
}

export default App

const rootElement = document.getElementById('root')
REACTDOM.render(<App></App>, rootElement)