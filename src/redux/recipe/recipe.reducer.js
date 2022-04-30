// const RECIPES_DATA = [];
// const INITIAL_STATE = {
//   recipesData: RECIPES_DATA,
// };

const recipesReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_RECIPE":
      return action.payload;

    default:
      return state;
  }
};
// const recipesReducer = (state = [], action) => {
//   switch (action.type) {
//     case "SET_RECIPE":
//       return {
//         ...state,
//         recipesData: action.payload,
//       };
//     default:
//       return state;
//   }
// };
export default recipesReducer;
