import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import '../CSS/Homepage.css'
const HomePage = (props) =>{
    const dispatch = useDispatch();
    const cards = useSelector((state) => state.UserCard.cards);
    
    return(<div>
        
        <header class="header">
  <h1 class="header__title">Active creditcard</h1>
  
</header>


  {cards.map((card, i) => {
          return (
             <div
               key={i}
             >
   <div class="panel">
  <div class="card card--front">
  <div class="card__logo"  />   {card.vendor} 
   <div class="card__number">{card.cardnumber}</div>
   <div class="card__expiry-date"> valid-thru: {card.validThru}</div>
 
   <div class="card__owner">{card.name}</div>
   <div class="card__cvv">CCV: {card.ccv}</div>
  
   
    
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