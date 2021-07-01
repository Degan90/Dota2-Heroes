import Hero from "./hero"
import Search from "./search"
import strength from "../img/strength.png"
import agility from "../img/agility.png"
import intelligence from "../img/intelligence.png"
 

import {useState } from "react"

export default function Heroes({heroes}){
   


    const[search,setSearch] = useState("")
    const[filteredHero,setFilteredHero]=useState(heroes)
    const [showFilter, setShowFilter] = useState(false);
    
    
  
   

    const handleChange = (e)=>{
        setSearch(e.target.value)
        setShowFilter(true);
        setFilteredHero(heroes.filter(x=>{
            return x.name.toLowerCase().includes(search.toLowerCase())
         }))
    }

    const handleSearch = (e)=>{
        e.preventDefault();
        setShowFilter(true);
        setFilteredHero(heroes.filter(x=>{
            return x.name.toLowerCase().includes(search.toLowerCase())
         }))
         setSearch("")

    }

    const handleStr = (e)=>{
        const strHeroes = heroes.filter(y=>y.primary_attr==="str")
        setShowFilter(true);
        setFilteredHero(strHeroes);
    }
    const handleAgi = (e)=>{
        const agiHeroes = heroes.filter(y=>y.primary_attr==="agi")
        setShowFilter(true);
        setFilteredHero(agiHeroes);
    }
    const handleInt= (e)=>{
        const intHeroes = heroes.filter(y=>y.primary_attr==="int")
        setShowFilter(true);
        setFilteredHero(intHeroes);
    }
    const showAll= (e)=>{
        setShowFilter(false);
        
    }

    
    

    return(

   <div>
        <div>
             <h1 className="herosTitle">CHOOSE YOUR HERO</h1>
             <p>From magical tacticians to fierce brutes and cunning rogues,
              Dota 2's hero pool is massive and limitlessly diverse.
             Unleash incredible abilities and devastating ultimates on your way to victory.</p>
         </div> 
         
         <Search handleChange={handleChange} searchString={search} handleSearch={handleSearch}/> 
         <div className="filterBtn">
         <button onClick={handleStr} onDoubleClick={showAll}><img src={strength} /></button>  
         <button onClick={handleAgi} onDoubleClick={showAll}><img src={agility} /></button> 
         <button onClick={handleInt} onDoubleClick={showAll}><img src={intelligence} /></button> 
         </div>
         
         <div className="heroList">
         {!showFilter
         
          ? heroes.map((hero)=>{
            return(
                
                
                <Hero hero={hero} key={hero.id}/>
    
                    );
           
                  })


             : filteredHero.map((hero)=>{
                return(
                    
                    
                    <Hero hero={hero} key={hero.id}/>
        
                        )
               
                      })} 

          </div>                  

    </div>
     
    )
}