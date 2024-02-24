import { useState}from "react"
import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/list',
    params: {
      from: '0',
      size: '20',
        

  
    },
    headers: {
      'X-RapidAPI-Key': 'f3bf76f329msh2a95141e98dfee2p10ee0djsn5bd61dcd286f',
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
  };
  
    const useFetchRecipes = () => {
    const [recipes, setRecipes] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error ,setError ]= useState(null) ;

    
  
    const fetchRecipes = async (searchTerm) => {
      console.log(searchTerm,"in the recipes  ")
      setLoading(true);
      setRecipes (null);
      setError(null);
      
      try {
        const reqOptions={... options};
        if(searchTerm){
          reqOptions.params.q =searchTerm;
        }
        const response = await axios.request(reqOptions);
        setRecipes(response.data.results);
        setLoading(false);
      } catch (err) {
        
        setError(err.message );
        setLoading(false);
      }
    };
  
    return [ fetchRecipes, { data :recipes, loading, error}];
  };
  
  export default useFetchRecipes;