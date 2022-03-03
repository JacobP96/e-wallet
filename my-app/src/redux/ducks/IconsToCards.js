import { FaCcMastercard, FaCcVisa } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";

// Actions

export const addIcon = (iconObj) => ({
  type: "addIcon",
  payload: iconObj,
});

// State

const initialState = {
  icons: [
    {
      visa: <FaCcVisa />,
      mastercard: <FaCcMastercard />,
      AmericanExpress: <SiAmericanexpress />,
    },
  ],
};

// Reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "addIcon":
      return { ...state, icons: [...state.icons, action.payload] };

    default:
      return state;
  }
};

export default reducer;
