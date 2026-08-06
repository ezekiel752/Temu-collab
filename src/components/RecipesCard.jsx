function RecipesCard({ recipe }) {
    return (
        <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200 overflow-hidden border border-gray-100 relative cursor-pointer">
            <div className="relative">
                {/* image */}
                <img 
                    src={recipe.image} 
                    alt={recipe.name} 
                    loading="lazy"
                    className="w-full h-40 object-cover"
                />

                {/* difficulty position at the top-left of the image */}
                <span className="absolute top-2 left-2 bg-[#E23722] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                    {recipe.difficulty}
                </span>
            </div>

            {/* name of food  */}
            <div className="p-2.5">
                <h2 className="text-sm font-medium text-gray-800 line-clamp-2 mb-1 leading-snug">
                    {recipe.name}
                </h2>

                {/*  rating and review count */}
                <div className="flex items-center gap-17 mb-1.5">
                    <div className="flex text-[#E23722] text-xs">
                        Reviews: {recipe.reviewCount} 
                    </div>
                    <span className="text-[10px] text-gray-400">Rating: {recipe.rating}</span>
                </div>

                {/* cooking and prep time */}
                <div className="flex items-baseline gap-8 mb-1.5">
                    <span className="text-[#E23722]  text-xs">Cook time: {recipe.cookTimeMinutes}min</span>
                    <span className="text-gray-400 text-xs  ml-1">Prep time: {recipe.prepTimeMinutes} min</span>
                </div>

                <div className="flex items-center justify-between text-[10px] text-gray-500">
                    <span>{recipe.cuisine}</span>
                    <span className="bg-gray-100 px-1.5 py-0.5 rounded font-medium">
                        Serves: {recipe.servings}
                    </span>
                </div>
            </div>
        </div>
    );
}
export default RecipesCard;