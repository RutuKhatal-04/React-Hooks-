//UseState with array

import React,{useState}from 'react'

function StateHook4() {
    const [items, setItems] = useState([])
   const addItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10 + 1)
        }])
    
}
  return (
      <div>
          <button onClick={addItem}>Add a number</button>
          <ul>{
              items.map(item => (
                  <li key={item.id}>{item.value}</li>
              ))
          }</ul>
    </div>
  )
}

export default StateHook4
