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
       let vendor = document.querySelector("#vendor").value;
       let ccv = document.querySelector("#cvv").value;
       let validThru = document.querySelector("#validThru").value;
      
       let card = {
          cardnumber: cardnumber,
          name: name,
          vendor: vendor,
          ccv: ccv,
          validThru: validThru
      };
      dispatch(addCard(card));
  
   };
 

  return (
    <div>
     
      <label htmlFor="cardnumber">Credit Card Number:</label>
     <input id="cardnumber" type="tel"   maxlength="16" placeholder="cardnumber"/>
     <label htmlFor="name">Name:</label>
     <input type="text" id="name" />
     <label htmlFor="vendor">Vendor:</label>
     <select name="chapter" id="vendor">
    <option value="VISA" selected="selected">Visa</option>
    <option value="MASTERCARD" selected="selected">MasterCard</option>
    <option value="AMERICAN EXPRESS" selected="selected">American Express</option>
    </select>
     <label htmlFor="ccv">CVV:</label>
     <input type="tel" maxlength="3" id="cvv" placeholder="XXX"/>
     <label htmlFor="validThru">Valid-Thru:</label>
     <input type="month" id="validThru" />
    
   
     
     <Link to={{
           pathname: "/"
       }}>
           
       <button onClick={handleAddCard}>Add Card</button></Link>
   
    </div>
  );
};

export default ListOfCards;