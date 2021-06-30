import Hero from "./hero"

import { useEffect, useState } from "react"

export default function Heroes({heroes}){

    const[search,setSearch] = useState("")
    const[filteredHero,setFilteredHero]=useState([])
    
    console.log(filteredHero)


    const handleChange = (e)=>{
        setSearch(e.target.value)
    }
    
    
    useEffect(()=>{
        setFilteredHero(heroes.filter(x=>{
            return x.name.toLowerCase().includes(search.toLowerCase())
         }))
    },[search,heroes])


    return(
   <div>
        <div className="allSearch">
          <form  action="/heroes">
             <input type="text"  id="seach" placeholder="Search" className="search" onChange={handleChange}/>
          </form>
    
        </div>

        <div className="heroList">
            {filteredHero.map((hero)=>{
        return(
            <Hero hero={hero}/>

                )
       
              })}
        </div>

    </div>
        
        
        
   
    )
}