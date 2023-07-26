import React from 'react'
import  Users  from './Users'
import { useState } from 'react'
const Searchbar = () => {
    const [query,setQuery] = useState("")
  return (
    <div>
        <input type="search" 
        placeholder='search bar'
        onChange={(e)=>setQuery(e.target.value.toLowerCase())}/>
        
        <ul>
        Search List
        
        {Users.filter((element)=>
            element.name.toLowerCase().includes(query))
        .map((data)=>(
            <li>
                {data.name}
                
            </li>
        ))
        
        }
        </ul>
    </div>
  )
}

export default Searchbar