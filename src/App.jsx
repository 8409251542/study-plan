import { useState } from 'react'
import './App.css'

function App() {
  const addNotes=()=>{

  }

  return (
    <>
      <div className="main">
        <form className='border-black' action="">
          <input type="text" />
          <input className='' type="number" />
          <input onClick={()=>addNotes()} type="submit" />
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
