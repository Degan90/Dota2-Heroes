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
       <h1 className="herosTitle">CHOOSE YOUR HERO</h1>
       <p>From magical tacticians to fierce brutes and cunning rogues,
            Dota 2's hero pool is massive and limitlessly diverse.
             Unleash incredible abilities and devastating ultimates on your way to victory.</p>
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