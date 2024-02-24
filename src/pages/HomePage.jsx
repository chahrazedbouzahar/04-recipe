import { useEffect } from "react";
import CardList from "../components/CardList";
import Header from "../components/Header";
import Loading from "../components/Loading";
import useFetchRecipes from "../hooks/useFetchRecipes";
import { useSearchParams } from "react-router-dom";


export default function  HomePage(){
  
  const [fetchRecipes, {data ,loading, error} ]=useFetchRecipes();
const [SearchParams] =useSearchParams()

  useEffect(() => {
    fetchRecipes(SearchParams.get("search"));// "re-intilization
  }, []);

  const handleSearch = (searchTerm) => {
    console.log("called",searchTerm);
    if (searchTerm) {
      fetchRecipes(searchTerm);
    }
  };
return (
  
    <>
    <Header handleSearch ={handleSearch}/>
    {loading && <Loading />}
    {data && <CardList recipes = {data} />}
    {error && <p>{error}</p>}
    </>
  );
}
