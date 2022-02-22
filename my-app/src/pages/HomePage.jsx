import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
const HomePage = (props) =>{
    const dispatch = useDispatch();
    const cards = useSelector((state) => state.UserCard.cards);
    
    return(<div>
        
        <h1>Home Page</h1>
        <ul>
         {cards.map((card, i) => {
          return (
             <div
               key={i}
              
               style={{ border: "1px solid black" }}
             >
               <p>{card.cardnumber}</p>
              <p>{card.name}</p>
              <p>{card.validThru}</p>
              <p>{card.ccv}</p>
              <p>{card.vendor}</p>
             </div>
           );
         })}
       </ul>
    
        <Link to={{
            pathname: "/AddCard"
        }}>
        <button>Add new Card</button></Link>
        
    </div>)
}
export default HomePage;