// import React, { createContext, useReducer, useContext } from "react";

// const SearchContext = createContext({
//     id: "",
//     name: "",
//     priority: false
// });
// const { Provider } = SearchContext;

// function reducer(state, action) = useReducer((state, action) => {
//       switch (action.type) {
//         case "add":
//           return [
//             ...state,
//             {
//               id: state.length * Math.random(),
//               name: action.name,
//             },
//           ];
//         // Bonus: Remove a todo from the list.
//         case "remove":
//           return state.filter((_, index) => {
//             return index !== action.index;
//           });
//         case "prioritize":
//         return state.map
//         default:
//           return state;
//       }
//     }, []);
  


//     const SearchProvider = ({ value = [], ...props }) => {
//         const [state, dispatch] = useReducer(reducer, value: []);
//         return <Provider value={[state, dispatch]} {...props} />;
//     };
// const useSearcgContext = () => {
//   return useContext(SearchContext);
// };

// export { SearchProvider, useSearchContext };
