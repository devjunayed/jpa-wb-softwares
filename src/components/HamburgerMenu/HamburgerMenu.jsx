/* eslint-disable react/prop-types */

const HamburgerMenu = ({isOpen, setIsOpen}) => {


  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button 
      className="relative w-8 h-8 focus:outline-none" 
      onClick={handleToggle}
    >
      <span className="sr-only">Toggle menu</span>
      <div className="absolute w-full h-0.5 bg-white transform transition duration-300 ease-in-out"
        style={{
          top: isOpen ? "50%" : "25%",
          transform: isOpen ? "rotate(45deg)" : "none"
        }}
      ></div>
      <div className={`absolute w-full h-0.5 bg-white transform transition duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"}`}
        style={{
          top: "50%",
          transform: "translateY(-50%)"
        }}
      ></div>
      <div className="absolute w-full h-0.5 bg-white transform transition duration-300 ease-in-out"
        style={{
          top: isOpen ? "50%" : "75%",
          transform: isOpen ? "rotate(-45deg)" : "none"
        }}
      ></div>
    </button>
  );
};

export default HamburgerMenu;
