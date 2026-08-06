import axios from "axios";
import { useState, useEffect } from "react";
import RecipesCard from "./RecipesCard.jsx";

function Recipes() {

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect (() => {
        fetchRecipes();
    }, []);

    async function fetchRecipes() {
        try {
            const response = await axios.get('https://dummyjson.com/recipes')
            setRecipes(response.data.recipes);
        }catch (error) {
            console.log(error);
        }finally {
            setLoading(false);
        }
    }
    if (loading) {
        return(<div>Loading...</div>)
    }
    return(
        <div className="w-[90%] lg:w-[70%] m-auto py-4">
            <div className=" flex flex-col items-center justify-center gap-2 p-4">
                <h1 className="font-extrabold text-[#E23722] text-xl">BACK TO SCHOOL SALES</h1>
                <h1 className="font-extrabold text-black text-xl">EXPLORE YOUR INTERESTS</h1>
            </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {recipes.map((recipe) => (
                <RecipesCard key={recipe.id} recipe={recipe} />
            ))}
        </div>
        </div>
    )
}

export default Recipes;