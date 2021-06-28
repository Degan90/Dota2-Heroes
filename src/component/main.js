export default function Main(){
    return(
    <div className="main">
      
      <div className="video" >
        <video autoPlay loop muted playsInline preload="auto">
            <source type="video/mp4"
             src="https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/homepage/dota_montage_02.mp4"/>
        </video>
      </div>
      <div >
           <h1 className="title">"A MODERN MULTIPLAYER MASTERPIECE"</h1>
      </div>
        
    </div>
        
    )
}