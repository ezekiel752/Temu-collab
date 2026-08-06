import { useState, useEffect } from 'react'
import axios from 'axios';
import { FaBoltLightning } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import { ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard.jsx';


function Products() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fecthProducts();
    }, []);

    async function fecthProducts() {
        try {
            const response = await axios.get('https://dummyjson.com/carts');
            const data = await response.data;

            const allProducts = data.carts.slice(2, 3);
            console.log(allProducts);


            setProducts(allProducts);
        }
        catch (error){
            console.log(error);
        }finally {
            setLoading(false);
        }

    }

    if (loading) {
         return(
       <div className="flex justify-center align-middle p-8">
         <div className="flex justify-center flex-col align-middle p-8">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-orange-700 border-t-transparent ml-20"></div>
            <h2 className="text-lg font-semibold text-gray-700 text-center py-4">Loading Products, please wait...</h2>
        </div>
       </div>
    )
    }


    return (
      <div className="w-[90%] lg:w-[70%] m-auto py-4">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-xl sm:text-2xl font-bold flex items-center gap-2 text-[#FB7701]">
            <FaBoltLightning />
            LIGHTNING DEALS
            <FaBoltLightning />
            <FaBoltLightning />
            <FaBoltLightning />

          </h1>
          <h1 className="text-base sm:text-2xl font-bold flex items-center gap-1 text-[#FB7701]">
            Limited-time offers <ChevronRight />
          </h1>
        </div>
        {products.map((cart) => (
          <div
            key={cart.id}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4"
          >
            {cart.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ))}
      </div>
    );
}
export default Products