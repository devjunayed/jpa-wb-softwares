/* eslint-disable react/prop-types */

const CategoryCard = ({ icon, title }) => {
  return (
    <div className=" flex-col bg-white text-black flex w-[150px] h-[100px] py-[15px] px- justify-center items-center">
      <div className="text-4xl">{icon}</div>
      <h4 className="text-black text-xl">{title}</h4>
    </div>
  );
};

export default CategoryCard;
