import { useState } from 'react'
import './App.css'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)
  const [name,setName] =useState();
  function getRef(value){
    setName(value)
  }

  return (
    <>
       <div>
        <h3>App js</h3>
        <h1>user name is {name}</h1>
        <Form getRef={getRef}/>
       </div>
    </>
  )
}

export default App
