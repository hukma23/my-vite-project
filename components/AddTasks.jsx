import { useState } from 'react'
import { useDispatch } from './TasksContext';


function AddTasks() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  return (
    <>
      <input 
        placeholder='Masukan data..'
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={() => {
        dispatch({
          type: "added",
          id: nextId++,
          text: text
        })
        setText('');
      }}>Add</button>
    </>
  )
}

let nextId = 5;

export default AddTasks