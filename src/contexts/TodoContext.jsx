import {createContext} from 'react'
export const todoContext = createContext(null);

const TodoContext = (props) => {
    console.log(props)
  return (
    <TodoContext.Provider>{props.children}

    </TodoContext.Provider>
    
  )
}

export default TodoContext