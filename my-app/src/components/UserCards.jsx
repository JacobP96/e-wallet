import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCard } from "../redux/ducks/UserCards";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../CSS/Homepage.css";

const ListOfCards = () => {
  const dispatch = useDispatch();

  const [number, setNumber] = useState("xxxx xxxx xxxx xxxx");
  const [vendor, setVendor] = useState("VISA");

  const [validThru, setValidThru] = useState("");
  const [cardname, setCardname] = useState("Your name");
  const [cvv, setCvv] = useState("");
  const ChangeNumber = (event) => {
    setNumber(event.target.value);
  };
  const ChangeName = (event) => {
    setCardname(event.target.value);
  };
  const ChangeVendor = (event) => {
    setVendor(event.target.value);
  };
  const ChangeCvv = (event) => {
    setCvv(event.target.value);
  };
  const ChangeValid = (event) => {
    setValidThru(event.target.value);
  };

  const handleAddCard = () => {
    let cardnumber = document.querySelector("#cardnumber").value;
    let res = [...cardnumber]
      .map((d, i) => (i % 4 == 0 ? " " + d : d))
      .join("")
      .trim();

    let name = document.querySelector("#name").value;
    let touppercase = name.toUpperCase();
    let vendor = document.querySelector("#vendor").value;
    let ccv = document.querySelector("#cvv").value;
    let validThru = document.querySelector("#validThru").value;

    let card = {
      cardnumber: res,
      name: touppercase,
      vendor: vendor,
      ccv: ccv,
      validThru: validThru,
    };

    dispatch(addCard(card));
  };

  return (
    <div className="Form">
      <div className="Card">
        <div className="card__vendor" /> {vendor}
        <div className="card__number">{number}</div>
        <div className="card__expiry-date"> valid-thru: {validThru}</div>
        <div className="card__owner">{cardname}</div>
        <div className="card__cvv">CCV:{cvv} </div>
      </div>
      <form className="row g-3">
        <div className="col-12">
          <input
            className="form-control"
            id="cardnumber"
            type="tel"
            placeholder="cardnumber"
            maxLength="16"
            onChange={ChangeNumber}
            required
          />
        </div>

        <div className="col-12">
          <input
            className="form-control"
            maxLength="20"
            type="text"
            id="name"
            placeholder="Your Name"
            onChange={ChangeName}
            required
          />
        </div>
        <div className="col-12">
          <select
            defaultValue=""
            className="form-select"
            name="chapter"
            id="vendor"
            onChange={ChangeVendor}
            required
          >
            <option value="VISA">VISA</option>
            <option value="MASTERCARD">MASTERCARD</option>
            <option value="AMERICAN EXPRESS">AMERICAN EXPRESS</option>
          </select>
        </div>
        <div className="col-12">
          <input
            className="form-control"
            type="tel"
            maxLength="3"
            id="cvv"
            placeholder="CCV"
            onChange={ChangeCvv}
            required
          />
        </div>

        <div className="col-12">
          <input
            className="form-control"
            type="month"
            id="validThru"
            onChange={ChangeValid}
            required
          />
        </div>

        <Link
          to={{
            pathname: "/",
          }}
        >
          <button className="btn btn-dark" onClick={handleAddCard}>
            Add Card
          </button>
        </Link>
      </form>
    </div>
  );
};

export default ListOfCards;
