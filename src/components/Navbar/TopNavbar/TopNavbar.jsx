/* eslint-disable react/prop-types */
import Container from "../../Shared/Container";
import { IoMdSearch } from "react-icons/io";
import TopNavbarAction from "./TopNavbarAction";
import { MdCardGiftcard, MdPerson, MdShoppingBasket } from "react-icons/md";
import HamburgerMenu from "../../HamburgerMenu/HamburgerMenu";
import { BsFillLightningFill } from "react-icons/bs";

const TopNavBar = ({ isOpen, setIsOpen }) => {
  return (
    <div className="bg-hfbg py-[15px] z-50 sticky top-0 left-0 xl:relative">
      <Container className="flex items-center">
        <div className="ml-4 xl:hidden">
          <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <div className="w-[117px] h-[52px] m-auto xl:mr-[43px]">
          <img
            src="https://www.startech.com.bd/image/catalog/logo.png"
            alt=""
          />
        </div>
        <div className="relative xl:block hidden">
          <input
            type="text"
            placeholder="Search"
            className="w-[520px] focus:outline-none rounded-md h-[42px] pl-[20px] pr-[40px]"
          />
          <IoMdSearch className="size-6 absolute top-[9px] right-[7px]" />
        </div>

        <div className=" ml-[10px] xl:flex hidden">
          <div className="flex items-center">
            <TopNavbarAction
              icon={
                <MdCardGiftcard className="text-primary size-5" />
              }
              title={"Offers"}
              subTitle={"Latest Offers"}
            />
            <TopNavbarAction
              icon={
                <BsFillLightningFill className="text-primary animate-top-menu-blink size-5" />
              }
              title={"Offers"}
              subTitle={"Latest Offers"}
            />
            <TopNavbarAction
              icon={
                <MdPerson className="text-primary size-5" />
              }
              title={"Account"}
              subTitle={"Register or login"}
            />
          </div>
          <button className="ml-[18px] delay-1000  bg-[length:200%_200%] px-[20px] text-white font-semibold h-[42px] animate-gradient-move bg-gradient-primary">
            PC Builder
          </button>
        </div>

        {/* on small devices */}
        <div className="flex mr-6 gap-4 h-full items-center xl:hidden justify-center">
          <IoMdSearch className="size-6 text-white" />

          <span className="relative">
            <span className="size-4 absolute -top-3 -right-2 bg-primary text-white px-1 text-xs rounded-full">0</span>
            <MdShoppingBasket className="size-6 text-white" />
          </span>
        </div>
      </Container>
    </div>
  );
};

export default TopNavBar;
