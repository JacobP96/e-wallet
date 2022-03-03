import { FaCcVisa } from "react-icons/fa";

// Actions

export const addCard = (cardObj) => ({
  type: "addCard",
  payload: cardObj,
});

export const removeCard = (cards) => ({
  type: "removeCard",
  payload: cards,
});

// State

const initialState = {
  cards: [
    {
      cardnumber: "3434 3434 3434 3434",
      name: "Jacob Persson",
      validThru: "2025-12",
      ccv: "000",
      vendor: <FaCcVisa style={{ color: "white", fontSize: "50px" }} />,
      visa: <FaCcVisa style={{ color: "white", fontSize: "50px" }} />,
    },
  ],
};

// Reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "addCard":
      if (state.cards.length <= 3) {
        return { ...state, cards: [...state.cards, action.payload] };
      } else alert("You can't have more then 4 cards in your wallet");
    case "removeCard":
      return {
        ...state,
        cards: state.cards.filter((card) => card !== action.payload),
      };

    default:
      return state;
  }
};

export default reducer;
