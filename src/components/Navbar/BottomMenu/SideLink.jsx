/* eslint-disable react/prop-types */

const SideLink = ({  text, link, subMenu }) => {
  return (
    <div className=" group">
      {/* subMenu */}

      <a className="relative " href={link}>
        {text} 

        <div
          className={` top-[40px]  group-hover:flex hidden  bg-white px-10 flex-col `}
        >
          {subMenu?.length !== 0 &&
            subMenu?.map((menu, index, arr) => (
              <div key={index} className="mt-4">
                <a className="" href={menu.link}>{menu.text}</a>
                <hr className={`${arr.length == (index+1) ? "opacity-0" : "opacity-20"} mt-4 bg-fc1`} />
              </div>
            ))}
        </div>
      </a>
      <hr className="mt-4 bg-fc1 opacity-20" />
    </div>
  );
};

export default SideLink;
SideLink;
