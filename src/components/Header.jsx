import iconTesla from '../assets/tesla.svg';
import shortenNumber from '../utils/shortenNumber';


function Header(props) {
    if (props.hasOwnProperty("balance")) {
        return (
          <div className="header header_sub">
            <h1>{props.children}</h1>
            <div>{shortenNumber(props.balance)} <img src={iconTesla}/></div>
          </div>
        );
      } else {
        return (
          <div className="header">
            <h1>{props.children}</h1>
          </div>
        );
      }
    }    
  
  export default Header;
  