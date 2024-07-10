/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

import Container from "../../Shared/Container";

const Marquee = ({ title }) => {
  return <Container className={"px-2 bg-white py-2 shadow-md mt-[30px] rounded-full"}>
    <marquee behavior="scroll"  direction="rtl">{title}</marquee>
  </Container>;
};

export default Marquee;
