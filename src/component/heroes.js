import Hero from "./hero"

export default function Heroes({heroes}){
    
    return(
        <div className="heroList">
            {heroes.map((hero)=>{
        return(
            <Hero hero={hero}/>

        )
    })}

        </div>
        
        
   
    )
}