
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';

import strength from "../img/strength.png"
import agility from "../img/agility.png"
import intelligence from "../img/intelligence.png"
 

export default function Details(props){
  
console.log(props)
    

    


    let{id}=useParams();
    console.log(id)

    const [detail, setDetail] = useState(null)
    

    const getDetail=async() =>{
        try{
            const response = await fetch( `https://api.opendota.com/api/heroStats`)
            const data = await response.json();
             console.log(data)
             const filterData= data.filter(x=>x.id.toString()===id)
             console.log(filterData)
             const attribute = {
                "agi": "Agility",
                "int": "Intelligence",
                "str":"Strength"
             };

             filterData.forEach(hero=>{
        
              hero.image =`https://cdn.cloudflare.steamstatic.com/${hero.img}`
              hero.icons =`https://cdn.cloudflare.steamstatic.com/${hero.icon}`
              let pngName = hero.localized_name.toLowerCase().replace("-", "").replace(" ", "_");
               hero.fullImage= `https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${pngName}.png`
               hero.loopImage = `https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${pngName}.webm`
               hero.primary_attr = attribute[hero.primary_attr];
            
                
        
     
     });
       
     
			
        setDetail(filterData[0])

        }catch(err){
            console.log(err)
        }
    }
	useEffect(()=>{
		getDetail()
        
	},[])

    console.log(detail)

     if(!detail){
         return null
     }
     

    
    return (
        
        <div className="wholeDetails">



            <div >
                <video autoPlay loop muted  preload="auto" className="loopImage">
                       <source type="video/webm" src={detail.loopImage} />
               </video>

            </div> 

            <div className="des">
                <img src={detail.icons}/>
                <div className="attr">
                <h1 className="at"><img src={strength} />{detail.base_str}</h1>
                <h1 className="at"><img src={agility} />{detail.base_agi}</h1>
                <h1 className="at"><img src={intelligence} />{detail.base_int}</h1>
                </div>
                
                <h1 className="h2" id="names">{detail.localized_name}</h1>
                
                <h1 className="h2">Attack Type: {detail.attack_type}</h1>
                
                <h1 className="h2">Primary Attribute: {detail.primary_attr}</h1>
                <h1 className="h2">Roles: {detail.roles[0]} {detail.roles[1]} {detail.roles[2]} {detail.roles[3]}</h1>
                

            </div> 
             

         

        
        
        </div>
    )
}