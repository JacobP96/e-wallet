 // Actions

 export const addCard = (cardObj) => ({
     type: "addCard",
     payload: cardObj
   });
  

  
  // State
  
   const initialState = {
      cards: [
       {
         cardnumber: "3434 3434 3434 3434",
         name: "Jacob Persson",
         validThru: "12/25",
         ccv: "000",
         vendor: "Visa"
      }
    ]
   };
  
  // Reducer
  
   const reducer = (state = initialState, action) => {
     switch (action.type) {
       case "addCard":
           if(state.cards.length <= 3){
            return { ...state, cards: [...state.cards, action.payload] };
           }else(alert("sallad"))
           
            default:
        return state;
    }
   };
  
  export default reducer;