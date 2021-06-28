import { Link } from "react-router-dom";


export default function Hero({hero}){
    return(
        
        <div >
            <Link to={`/details/${hero.id}`} key={hero.id} className="heroBtns"><img src={hero.image} /></Link>
            
            <h3 className="h3">{hero.localized_name}</h3>
        </div>
    )
}