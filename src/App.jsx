import { useState } from 'react'
import './App.css'

function App() {
  const [todo,setTodo]=useState("");
  const [hours,setHours]=useState(0);

  const [list,setList]=useState([]);
  const addNotes=(e)=>{
    
  }

  return (
    <>
      <div className="main">
        <form className='border-black' action="">
          <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
          <input className='' type="number" value={hours} onChange={(e)=>setHours(e.target.value)}/>
          <input type="submit" />
        </form>
      </div>
      <div className="items">
        <div className="eachitems">
            <div><h6>Ravi <span>6 hours</span><button>+</button><button>-</button><button>x</button></h6></div>         
        </div>
      </div>
    </>
  )
}

export default App
