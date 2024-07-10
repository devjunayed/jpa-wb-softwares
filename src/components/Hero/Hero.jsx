import Banner from "./Banner/Banner";
import Marquee from "./Marquee/Marquee";
import Tool from "./Tool/Tool";

const Hero = () => {
  return (
    <div>
      <Banner />
      <Tool />
      <Marquee title={"This is a test text"} />
    </div>
  );
};

export default Hero;
