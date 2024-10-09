import React from 'react'
import Top from "./component/Top"
import { todoContext } from './contexts/TodoContext'

const App = () => {
  const data = useContext(todocontext);
  console.log(data);
  return (
    <div>App </div>
  )
}

export default App