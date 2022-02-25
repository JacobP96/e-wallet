import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import '../CSS/Homepage.css'
const HomePage = (props) =>{
    const dispatch = useDispatch();
    const cards = useSelector((state) => state.UserCard.cards);
    
    return(<div>
        
        <header className="header">
  <h1 className="header__title">Active creditcard</h1>
  
</header>


  {cards.map((card, i) => {
          return (
             <div
               key={i}
             >
               
   <div className="panel">
  <div className="card card--front">
  <div className="card__logo" class="fa fa-cc-visa" aria-hidden="true" />   {card.vendor} 
   <div className="card__number">{card.cardnumber}</div>
   <div className="card__expiry-date"> valid-thru: {card.validThru}</div>
 
   <div className="card__owner">{card.name}</div>
   <div className="card__cvv">CCV: {card.ccv}</div>
  
   
    
             </div>
             </div>
  
  </div>
           );
         })}
   


<Link to={{
            pathname: "/AddCard"
        }}>
        <button>Add new Card</button></Link>
        
    </div>)
}
export default HomePage;