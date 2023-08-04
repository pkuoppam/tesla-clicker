import iconTesla from '../assets/tesla.svg';
import iconStore from '../assets/store.svg';
import iconSettings from '../assets/settingsnew.svg';
import { NavLink } from "react-router-dom";

function Menu(props) {

    return (
        <div className="menu">
          <div>
            <NavLink to="/"><img src={iconTesla} alt="main" /></NavLink>
          </div>
          <div>
            <NavLink to="/store">
              <img src={iconStore} alt="store" />
              { props.items ? <span className="menu_badge">{props.items}</span> : null }
            </NavLink>
          </div>
          <div>
            <NavLink to="/settings"><img src={iconSettings} alt="settings" /></NavLink>
          </div>
        </div>
      );
    
    
  
}
  
export default Menu;
