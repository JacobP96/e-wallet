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
            <div class="col-12">
             <div  className="Card" 
               key={i}
             >
               
  
  
  <div className="card__logo"  />   {card.vendor} 
   <div className="card__number" >{card.cardnumber}</div>
   <div className="card__expiry-date" > valid-thru: {card.validThru}</div>
 
   <div className="card__owner" >{card.name}</div>
   <div className="card__cvv">CCV: {card.ccv}</div>
   </div>
   </div>
           );
         })}
   

<div class="col-12">
<Link to={{
            pathname: "/AddCard"
        }}>
        <button className="btn btn-dark">Add New Card</button></Link>
        </div>
    </div>)
}
export default HomePage;