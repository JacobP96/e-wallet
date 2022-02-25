import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCard } from "../redux/ducks/UserCards";
import { Link } from "react-router-dom";
import {useState} from "react";
import "../CSS/Homepage.css"

const ListOfCards = () => {
  const dispatch = useDispatch();
 const cards = useSelector((state) => state.UserCard.cards);
 const [number,setNumber] = useState("");
 const [vendor,setVendor] = useState("Choose Vendor");
 const [validThru,setValidThru] = useState("");
 const [cardname,setCardname] = useState("Your name");
 const [cvv,setCvv] = useState("");
 const ChangeNumber = (event) =>{
   setNumber(event.target.value); 
 }
 const ChangeName = (event) =>{
  setCardname(event.target.value); 
  }
const ChangeVendor = (event) =>{
  setVendor(event.target.value);
 
}
const ChangeCvv = (event) =>{
  setCvv(event.target.value);
}
const ChangeValid = (event) =>{
  setValidThru(event.target.value);
}

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
   
     <div className="panel">
  <div className="card card--front">
  <div className="card__logo"  />  {vendor} 
   <div className="card__number" >{number}</div>
   <div className="card__expiry-date"> valid-thru: {validThru}</div>
 
   <div className="card__owner">{cardname}</div>
   <div className="card__cvv">CCV:{cvv} </div>
  
   
    
             </div>
             </div>
  
 
      <label htmlFor="cardnumber">Credit Card Number:</label>
     <input id="cardnumber" type="tel" placeholder="cardnumber" 
        minlength="16" maxLength="16"  title="not enough numbers" required onChange={ChangeNumber} />
     <label htmlFor="name">Name:</label>
     <input type="text" id="name" onChange={ChangeName}/>
     <label htmlFor="vendor">Vendor:</label>
     <select name="chapter" id="vendor" onChange={ChangeVendor}>
    <option  value="VISA" >Visa</option>
    <option value="MASTERCARD" >MasterCard</option>
    <option value="AMERICAN EXPRESS" >American Express</option>
    </select>
     <label htmlFor="ccv">CVV:</label>
     <input type="tel" maxLength="3" id="cvv" placeholder="XXX" onChange={ChangeCvv}/>
     <label htmlFor="validThru">Valid-Thru:</label>
     <input type="month" id="validThru" onChange={ChangeValid} />
    
   
     
     <Link to={{
           pathname: "/"
       }}>
           
       <button onClick={handleAddCard}>Add Card</button></Link>
   
    </div>
  );
};

export default ListOfCards;