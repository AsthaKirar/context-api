import {createContext} from 'react'
export const Context = createContext(null);
const TodoContext = (props) => {
    console.log(props)
  return (
    <Context.Provider value="heloow">
      {props.children}

    </Context.Provider>
    
  )
}

export default TodoContext