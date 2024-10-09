import {useContext} from 'react'
import Top from "./component/Top"
import TodoContext from './contexts/TodoContext';
const App = () => {
  const data = useContext(TodoContext);
  console.log(data);
  return (
    <div>App </div>
  )
}

export default App