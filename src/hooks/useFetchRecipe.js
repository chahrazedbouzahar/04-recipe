import axios from 'axios';
import { useState ,useReducer } from "react";

const options = {
  method: 'GET',
  url: 'https://tasty.p.rapidapi.com/recipes/get-more-info',
  params :{id : "8138"} ,
  headers: {
    'X-RapidAPI-Key': 'f3bf76f329msh2a95141e98dfee2p10ee0djsn5bd61dcd286f',
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
  }
};
const initialState = {
  data: null,
  loading: false,
  error: null,
};

const Action = {
  FETCHING_DATA: "FETCHING_DATA",
  FETCH_SUCCESSFUL: "FETCH_SUCCESSFUL",
  FETCH_ERROR: "FETCH_ERROR",
};

const reducer = (_, action) => { 
  switch (action.type) {
     case Action.FETCHING_DATA:
      return {
        data: null,
        error: null,
        loading: true,
      };
      case Action.FETCH_SUCCESSFUL:
      return {
        error: null,
        loading: false,
        data: action.payload,
      };
      case Action.FETCH_ERROR:
      return {
        error: action.payload,
        data: null,
        loading: false,
      };
      default:
        return initialState;
}
}
const useFetchRecipe = () => {
  //const [recipe, setRecipe] = useState(null);
 // const [loading, setLoading] = useState(false);
  //const [error, setError] = useState(null);
  
  
  const [{ data, loading, error }, dispatch] =useReducer(reducer,initialState
 )


  const fetchRecipe = async (id) => {
   
    dispatch({ type: Action.FETCHING_DATA });

    try {
      const reqOptions = { ...options, params: { id } };
      const response = await axios.request(reqOptions);
      console.log("API Response:", response.data); // Log the response data
     
      dispatch({ type: Action.FETCH_SUCCESSFUL, payload: response.data });
    
    
    } catch (err) {
    
      dispatch({ type: Action.FETCH_ERROR, payload: err.message });
    }
  };

  return [fetchRecipe, { data , loading, error }];
};

export default useFetchRecipe;
