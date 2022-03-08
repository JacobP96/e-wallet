// Actions

export const addCard = (cardObj) => ({
  type: "addCard",
  payload: cardObj,
});

export const moveCard = (cards) => ({
  type: "moveCard",
  payload: cards,
});

// State

const initialState = {
  cards: [
    {
      cardnumber: "3434 3434 3434 3434",
      name: "JACOB PERSSON",
      validThru: "2025-12",
      ccv: "000",
      vendor: "VISA",
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
    case "moveCard":
      const newArray = [...state.cards].filter(
        (card) => card !== action.payload
      );

      newArray.splice(0, 0, action.payload);

      return {
        ...state,
        cards: newArray,
      };

    default:
      return state;
  }
};

export default reducer;
