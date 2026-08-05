function ProductCard({ data, product }) {
  return (
    <div className="  rounded-lg  m-3 flex flex-col items-center hover:scale-105 transition-transform duration-300 hover:bg-gray-50">
      <img src={product.thumbnail} alt={product.title} width="350" height="350" />
      <div className="flex m-2 gap-2.5">
        <h3 className="text-sm font-bold text-[#E23722]">{product.title}</h3>
        <p className="text-xs">Price: ${product.price}</p>
      </div>
      <div className="flex m-2 gap-2.5">
        <p className="text-sm">Quantity: {product.quantity}</p>
        <p className="text-sm">Total: ${product.total}</p>
      </div>
      <div className="flex m-2 gap-2.5">
        <p className="text-sm">Discount: {product.discountPercentage}%</p>
        <p className="text-sm">Discounted Total: ${product.discountedTotal}</p>
      </div>
    </div>
  );
}
export default ProductCard;
