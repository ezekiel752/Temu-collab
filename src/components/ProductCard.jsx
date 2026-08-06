function ProductCard({ data, product }) {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200 overflow-hidden border border-gray-100 relative cursor-pointer">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-50 object-cover"
      />
      <div className="flex m-2 gap-9">
        <h3 className="text-xs font-bold text-[#E23722]">{product.title}</h3>
        <p className="text-xs">Price:${product.price}</p>
      </div>
      <div className="flex m-2 gap-9">
        <p className="text-xs">Quantity: {product.quantity}</p>
        <p className="text-xs">Total: ${product.total}</p>
      </div>
      <div className="flex m-2 gap-9">
        <p className="text-xs">Discount: {product.discountPercentage}%</p>
        <p className="text-xs">Discounted Total: ${product.discountedTotal}</p>
      </div>
    </div>
  );
}
export default ProductCard;
