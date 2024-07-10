import { IoMdSearch } from "react-icons/io";
import Container from "../../Shared/Container";

function Banner() {
  return (
    <Container className="lg:py-8 py-4 z-10 flex flex-col lg:flex-row">
      <div className="xl:pl-[0px] mb-[15px]  px-[15px]">
        <img
          src="https://www.startech.com.bd/image/cache/catalog/home/banner/eid-mobile-fest.ai-banner-982x500.webp"
          alt=""
        />
      </div>
      <div className="px-[15px] flex flex-col pt-[15px] lg:pt-[0px]">
        <div className="px-[30px] mb-[15px] py-5 bg-[#ffe8a1] text-center">
          <h3 className="font-bold">Compare Products</h3>
          <p className="text-sm mb-4 text-black text-opacity-55">Choose Two Products to Compare</p>
          <div className="relative xl:block  mb-4">
            <input
              type="text"
              placeholder="Search and Selecte Product"
              className="w-full z-10 focus:outline-none rounded-md h-[42px] pl-[20px] pr-[40px]"
            />
            <IoMdSearch className="size-6 z-10 absolute top-[9px] right-[7px]" />
          </div>
          <div className="relative xl:block  mb-4">
            <input
              type="text"
              placeholder="Search and Selecte Product"
              className="w-full z-10 focus:outline-none rounded-md h-[42px] pl-[20px] pr-[40px]"
            />
            <IoMdSearch className="size-6 z-10 absolute top-[9px] right-[7px]" />
          </div>
          <button className="w-full border-2 font-bold py-2  border-secondary text-secondary">View Comparison</button>
        </div>
        <div className="pt-[12px] lg:w-[300px] w-full h-full lg:h-[190px]">
            <img className="w-full" src="https://www.startech.com.bd/image/catalog/ads/sunbscriobe-to-star-tech-youtube-channel.webp" alt="" />
        </div>
      </div>
    </Container>
  );
}

export default Banner;
