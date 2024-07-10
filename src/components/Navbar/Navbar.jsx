import { useState } from "react";
import TopNavBar from "./TopNavbar/TopNavbar";
import BottomMenu from "./BottomMenu/BottomMenu";
import BottomNavBar from "./BottomNavBar/BottomNavBar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <TopNavBar isOpen={isOpen} setIsOpen={setIsOpen} />

      <BottomMenu isOpen={isOpen} />

      <BottomNavBar />
    </>
  );
};

export default Navbar;
