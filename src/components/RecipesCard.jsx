function RecipesCard({ recipe }) {
    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col items-center ">
            <img src={recipe.image} alt={recipe.name} width="150" />
            <h2 className="text-xl font-bold mb-2 text-[#E23722]">{recipe.name}</h2>
            {/* <p className="text-gray-700 mb-2">Ingredients: {recipe.ingredients.join(', ')}</p> */}
            {/* <p className="text-gray-700 mb-2">Instructions: {recipe.instructions}</p> */}
            <div className="flex mx-2">
            <p className="text-gray-700 mb-2  text-xs">Preparation Time: {recipe.preparationTime} minutes</p>
            <p className="text-gray-700 mb-2 text-xs">Cooking Time: {recipe.cookingTime} minutes</p>
            </div>
            <p className="text-gray-700 mb-2 text-xs">Servings: {recipe.servings}</p>
        </div>
    );
}
export default RecipesCard;