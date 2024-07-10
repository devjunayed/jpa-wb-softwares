/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";

const Link = ({ text, link, subMenu, index, arr }) => {
    const [subMenuPosition, setSubMenuPosition ] = useState("left-0")

    useEffect(() => {

        if((arr?.length / 2) < index+1){
            setSubMenuPosition(() => "right-0");
        }
    }, [index, arr.length])

  return (
    <div className=" group">
      {/* subMenu */}

      <a className="relative" href={link}>
        {text}

        <div className={`${subMenuPosition} absolute top-[40px]  border-t-primary group-hover:block hidden border-t-4 pt-2 bg-white pl-4 pr-20`}>
          {subMenu?.length !== 0 &&
            subMenu?.map((menu, index) => (
              <a key={index} href={menu.link}>
                {menu.text}
              </a>
            ))}
        </div>
      </a>
    </div>
  );
};

export default Link;
