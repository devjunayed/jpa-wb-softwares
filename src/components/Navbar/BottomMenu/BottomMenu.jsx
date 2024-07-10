/* eslint-disable react/prop-types */
import Container from "../../Shared/Container";
import Link from "./Link";
import SideLink from "./SideLink";

const BottomMenu = ({ isOpen }) => {
  const links = [
    {
      text: "Desktop",
      link: "/desktop",
      subMenu: [
        {
          text: "SubMenu Item 1",
          link: "/desktop/subitem1",
        },
        {
          text: "SubMenu Item 2",
          link: "/desktop/subitem2",
        },
      ],
    },
    {
      text: "Laptop",
      link: "/laptop",
      subMenu: [
        {
          text: "SubMenu Item 1",
          link: "/laptop/subitem1",
        },
        {
          text: "SubMenu Item 2",
          link: "/laptop/subitem2",
        },
      ],
    },
    {
      text: "Component",
      link: "/component",
      subMenu: [
        {
          text: "SubMenu Item 1",
          link: "/component/subitem1",
        },
        {
          text: "SubMenu Item 2",
          link: "/component/subitem2",
        },
      ],
    },
    {
      text: "Monitor",
      link: "/monitor",
      subMenu: [
        {
          text: "SubMenu Item 1",
          link: "/monitor/subitem1",
        },
        {
          text: "SubMenu Item 2",
          link: "/monitor/subitem2",
        },
      ],
    },
    {
      text: "UPS",
      link: "/ups",
      subMenu: [
        {
          text: "SubMenu Item 1",
          link: "/ups/subitem1",
        },
        {
          text: "SubMenu Item 2",
          link: "/ups/subitem2",
        },
      ],
    },
    {
      text: "Phone",
      link: "/phone",
      subMenu: [
        {
          text: "SubMenu Item 1",
          link: "/phone/subitem1",
        },
        {
          text: "SubMenu Item 2",
          link: "/phone/subitem2",
        },
      ],
    },
    {
      text: "Tablet",
      link: "/tablet",
      subMenu: [
        {
          text: "SubMenu Item 1",
          link: "/tablet/subitem1",
        },
        {
          text: "SubMenu Item 2",
          link: "/tablet/subitem2",
        },
      ],
    },
    {
      text: "Office Equipment",
      link: "/office-equipment",
      subMenu: [
        {
          text: "SubMenu Item 1",
          link: "/office-equipment/subitem1",
        },
        {
          text: "SubMenu Item 2",
          link: "/office-equipment/subitem2",
        },
      ],
    },
    {
      text: "Camera",
      link: "/camera",
      subMenu: [
        {
          text: "SubMenu Item 1",
          link: "/camera/subitem1",
        },
        {
          text: "SubMenu Item 2",
          link: "/camera/subitem2",
        },
      ],
    },
    {
      text: "Security",
      link: "/security",
      subMenu: [
        {
          text: "SubMenu Item 1",
          link: "/security/subitem1",
        },
        {
          text: "SubMenu Item 2",
          link: "/security/subitem2",
        },
      ],
    },
    {
      text: "Networking",
      link: "/networking",
      subMenu: [
        {
          text: "SubMenu Item 1",
          link: "/networking/subitem1",
        },
        {
          text: "SubMenu Item 2",
          link: "/networking/subitem2",
        },
      ],
    },
    {
      text: "Software",
      link: "/software",
      subMenu: [
        {
          text: "SubMenu Item 1",
          link: "/software/subitem1",
        },
        {
          text: "SubMenu Item 2",
          link: "/software/subitem2",
        },
      ],
    },
    {
      text: "Server & Storage",
      link: "/server-storage",
      subMenu: [
        {
          text: "SubMenu Item 1",
          link: "/server-storage/subitem1",
        },
        {
          text: "SubMenu Item 2",
          link: "/server-storage/subitem2",
        },
      ],
    },
    {
      text: "Accessories",
      link: "/accessories",
      subMenu: [
        {
          text: "SubMenu Item 1",
          link: "/accessories/subitem1",
        },
        {
          text: "SubMenu Item 2",
          link: "/accessories/subitem2",
        },
      ],
    },
    {
      text: "Gadget",
      link: "/gadget",
      subMenu: [
        {
          text: "SubMenu Item 1",
          link: "/gadget/subitem1",
        },
        {
          text: "SubMenu Item 2",
          link: "/gadget/subitem2",
        },
      ],
    },
    {
      text: "Gaming",
      link: "/gaming",
      subMenu: [
        {
          text: "SubMenu Item 1",
          link: "/gaming/subitem1",
        },
        {
          text: "SubMenu Item 2",
          link: "/gaming/subitem2",
        },
      ],
    },
    {
      text: "TV",
      link: "/tv",
      subMenu: [
        {
          text: "SubMenu Item 1",
          link: "/tv/subitem1",
        },
        {
          text: "SubMenu Item 2",
          link: "/tv/subitem2",
        },
      ],
    },
    {
      text: "Appliance",
      link: "/appliance",
      subMenu: [
        {
          text: "SubMenu Item 1",
          link: "/appliance/subitem1",
        },
        {
          text: "SubMenu Item 2",
          link: "/appliance/subitem2",
        },
      ],
    },
  ];

  return (
    <div className="xl:shadow-md relative xl:bg-white xl:py-4 xl:top-0 xl:left-0 xl:sticky">
      <Container className={"xl:block hidden "}>
        <div className="flex justify-between">
          {links.map((link, index, arr) => (
            <div key={index}>
              <Link {...link} index={index} arr={arr} />
            </div>
          ))}
        </div>
      </Container>

      {/* SideMenu */}
      <Container className={`overflow-y-hidden`}>
        <div
          className={`flex h-screen w-9/12 xs:w-7/12 sm:w-6/12 md:w-4/12 lg:w-3/12 overflow-y-scroll flex-col font-semibold gap-4 bg-white justify-between fixed top-[82px] pl-2 pt-4 transition-transform duration-300 ease-in-out left-0 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {links.map((link, index, arr) => (
            <div key={index}>
              <SideLink isOpen={isOpen} {...link} index={index} arr={arr} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default BottomMenu;
