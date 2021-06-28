import {Link} from "react-router-dom"
import logo from "../img/logo.png"
import hero from "../img/hero.png"

export default function Header(){
    return (
        
        <header>
          <nav className="nav" >
              <Link to="/" >
                  
                  <img className="homeBtn" src={logo} />
              </Link>

              <Link to="/heroes" >
                  
                  <div><img className="heroBtn" src={hero} /></div>
                  
                  
              </Link>
             
           </nav>
        </header>
        
        

    )
}