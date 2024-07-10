/* eslint-disable react/prop-types */


const ProductCard = ({ gift, img, title, category, price, regularPrice }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm ">
      <span className="text-xs bg-[#6E2594] border  py-1 -ml-4 rounded-e-full px-4 text-white">{gift}</span>
      <div className="w-full ">
        <img src={img} alt="" className="w-full" />
      </div>
      <h3 className="text-md">{title}</h3>
      <h4 className="text-md">{category}</h4>
      <div className="flex gap-2 mt-4">
        <p className="text-lg text-primary">{price} $</p>
        {regularPrice.length !== 0 && <p className=" mt-2 line-through text-xs">{regularPrice}</p>}
      </div>
    </div>
  );
};

export default ProductCard;
