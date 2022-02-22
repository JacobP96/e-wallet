 import React from "react";
 import { useSelector, useDispatch } from "react-redux";
 import { addCard } from "../redux/ducks/UserCards";
 import { Link } from "react-router-dom";

 const ListOfCards = () => {
   const dispatch = useDispatch();
  const cards = useSelector((state) => state.UserCard.cards);

   const handleAddCard = () => {
       
        let cardnumber = document.querySelector("#cardnumber").value;
        let name = document.querySelector("#name").value;
        let card = {
           cardnumber: cardnumber,
           name: name
       };
       dispatch(addCard(card));
   
    };
  
      

 
 

  

   return (
     <div>
       
      <label htmlFor="cardnumber">Cardnumber:</label>
      <input type="text" id="cardnumber" />
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" />
      <Link to={{
            pathname: "/"
        }}>
            
        <button onClick={handleAddCard}>Add Card</button></Link>
    
     </div>
   );
 };

 export default ListOfCards;