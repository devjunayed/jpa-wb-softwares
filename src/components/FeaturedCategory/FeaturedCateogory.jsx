import { TbAirConditioning } from "react-icons/tb";
import Container from "../Shared/Container";
import CategoryCard from "./CategoryCard/CategoryCard";

const FeaturedCateogory = () => {
  return (
    <Container>
      <div className="text-center mb-[30px] mt-[30px]">
        <h1 className="font-bold text-xl ">Featured Category</h1>
        <p>Get Your Desired Product from Featured Category!</p>
      </div>
      <div className="xl:grid-cols-8 grid gap-4 lg:grid-cols-6 md:grid-cols-4 grid-cols-2">
        <CategoryCard icon={<TbAirConditioning />} title="AC" />
        <CategoryCard icon={<TbAirConditioning />} title="AC" />
        <CategoryCard icon={<TbAirConditioning />} title="AC" />
        <CategoryCard icon={<TbAirConditioning />} title="AC" />
        <CategoryCard icon={<TbAirConditioning />} title="AC" />
        <CategoryCard icon={<TbAirConditioning />} title="AC" />
        <CategoryCard icon={<TbAirConditioning />} title="AC" />
        <CategoryCard icon={<TbAirConditioning />} title="AC" />
        <CategoryCard icon={<TbAirConditioning />} title="AC" />
        <CategoryCard icon={<TbAirConditioning />} title="AC" />
        <CategoryCard icon={<TbAirConditioning />} title="AC" />
        <CategoryCard icon={<TbAirConditioning />} title="AC" />
        <CategoryCard icon={<TbAirConditioning />} title="AC" />
        <CategoryCard icon={<TbAirConditioning />} title="AC" />
        <CategoryCard icon={<TbAirConditioning />} title="AC" />
        <CategoryCard icon={<TbAirConditioning />} title="AC" />
      </div>
    </Container>
  );
};

export default FeaturedCateogory;
