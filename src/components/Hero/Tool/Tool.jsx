import { MdLaptop } from "react-icons/md";
import ToolCard from "./ToolCard";
import Container from "../../Shared/Container";

const Tool = () => {
  return (
    <Container className="">
      <div className="grid grid-cols-2   xl:grid-cols-4 gap-4 mx-[15px] xl:mx-0">
      <ToolCard
        icon={<MdLaptop />}
        title={"Laptop Finder"}
        subTitle={"Find Your Laptop Easily"}
      />
      <ToolCard
        icon={<MdLaptop />}
        title={"Laptop Finder"}
        subTitle={"Find Your Laptop Easily"}
      />
      <ToolCard
        icon={<MdLaptop />}
        title={"Laptop Finder"}
        subTitle={"Find Your Laptop Easily"}
      />
      <ToolCard
        icon={<MdLaptop />}
        title={"Laptop Finder"}
        subTitle={"Find Your Laptop Easily"}
      />
      </div>
    </Container>
  );
};

export default Tool;
