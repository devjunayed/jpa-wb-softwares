import { MdCardGiftcard, MdDifference } from "react-icons/md";
import Container from "../../Shared/Container";
import { BsFillLightningFill } from "react-icons/bs";
import { PiDesktopTowerLight } from "react-icons/pi";
import { IoMdPerson } from "react-icons/io";

const BottomNavBar = () => {
  return (
    <div className="bg-hfbg py-[15px]  w-full fixed bottom-0 xl:hidden">
      <Container className={"text-white"}>
        <div className="flex justify-evenly text-center">
          <div className="flex flex-col items-center justify-center">
            <MdCardGiftcard className="size-6" /> <span> Offers</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <BsFillLightningFill className="size-6 animate-menu-blink" />{" "}
            <span> Happy Hours</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <PiDesktopTowerLight className="size-6" /> <span> PC Builder</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <MdDifference className="size-6" /> <span>Compare (0)</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <IoMdPerson className="size-6" /> <span>Account</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BottomNavBar;
