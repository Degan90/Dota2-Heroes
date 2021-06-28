
import { useEffect, useState } from 'react';
import { Route } from 'react-router';
import './App.css';
import Header from "./component/header"
import Heroes from "./component/heroes"
import Main from "./component/main"
import Details from "./component/details"





function App() {
const [heroes,setHeroes]=useState([])


  const getHeroes= async ()=>{
    try{
      const response = await fetch("https://api.opendota.com/api/heroStats");
      const data = await response.json()
      
      data.forEach(hero=>{
        
         hero.image =`https://cdn.cloudflare.steamstatic.com/${hero.img}`
         hero.icons =`https://cdn.cloudflare.steamstatic.com/${hero.icon}`
         let pngName = hero.localized_name.toLowerCase().replace("-", "").replace(" ", "_");
         hero.fullImage= `https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${pngName}.png`

      
      });
      setHeroes(data)
      
      

    }catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
    getHeroes()

  },[])
  

  return (
    <div className="App">
      
      <Header/>
      <Route exact  path="/" render={()=><Main/> }/>
      <Route exact path="/heroes" render={()=><Heroes heroes={heroes}/>} />
      <Route exact path  ="/details/:id" render={()=><Details heroes= {heroes}/>} />
      
      
    </div>
  );
}

export default App;
