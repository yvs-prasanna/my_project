import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


const getString = async() => {
  let res = null;
  await fetch("http://localhost:3000/")
  .then((response) => {
      return response.json();
  })
  .then((data) => {
    console.log(data)
      res = data
  })
  return res;
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>{getString()}</h1>
      </div>
    </>
  )
}

export default App
