import { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

function App() {

const APP_ID ='737d09fd';
const APP_KEY ='8300d0719f94bcc8d653773229295204';

 const [recipes, setRecipes] = useState([]);
 const [search, setSearch] = useState('');
 const [query, setQuery] = useState('chcken');
 const exampleReq = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

useEffect( ()=>{
  getRecipes();
  },[query]);


  const getRecipes = async ()=>{
    const response = await fetch(exampleReq);
    const data = await response.json();
    setRecipes(data.hits);
    // console.log(data.hits);
  }


  const updateSearch = e =>{
    setSearch(e.target.value);
    // console.log(search);
  }


  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }



  return (
    <div className="App">
      <form  onSubmit={getSearch} className='search-form'>
        <input className='search-bar' type="text"  value={search}  onChange={updateSearch} />
        <button  className='search-button' type="submit"> Search </button>
      </form>
      {recipes.map( recipe =>(
          <Recipe 
          key={recipe.recipe.label} 
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image} 
          ingredients={recipe.recipe.ingredients} 
          />
      ))}
    </div>
  );
}

export default App;
