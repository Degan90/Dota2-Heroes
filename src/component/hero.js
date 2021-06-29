import { Link } from "react-router-dom";


export default function Hero({hero}){
    return(
        
        <div className="s" >
            <Link to={`/details/${hero.id}`} key={hero.id} ><img src={hero.image} className="heroBtns"/></Link>
            
            <h3 className="h3">{hero.localized_name}</h3>
        </div>
    )
}