import React from "react";
import IconTextName from "../elements/IconTextName";
import axios from "axios";

const TopNavbar = (props) => {
  console.log(props);
  return (
    <div className="bg-blue-remax h-10 flex items-center  ">
      <div className="container mx-auto max-sm:justify-center sm:px-8 flex divide-x-2 max-w-[1250px]">
        <IconTextName icon={"icon-call.svg"} text={"+62 123 456 789"} />
        <IconTextName icon={"icon-email.svg"} text={"remax@gmail.com"} />
        <p>{props.responseData}</p>
      </div>
    </div>
  );
};

export default TopNavbar;

export async function getStaticProps() {
  const res = await axios.get("http://localhost:3000/api/hello");
  const response = await res.json();

  return {
    props: {
      responseData: response,
    },
  };
}
