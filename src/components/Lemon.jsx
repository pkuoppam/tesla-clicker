import tesla from '../assets/tesla-big.svg'

function Tesla(props) {
  return (
    <div className="lemon">
      <img src={tesla} alt="tesla" onClick={props.onClick} />
    </div>
  );
}
  
export default Tesla;
