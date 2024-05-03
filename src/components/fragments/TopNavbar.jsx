import React from "react";
import IconText from "../elements/IconText";

const TopNavbar = () => {
  return (
    <div className="bg-blue-remax h-10 flex items-center ">
      <div className="container mx-auto max-sm:justify-center sm:px-8 flex divide-x-2">
        <IconText icon={"icon-call.svg"} text={"+62 123 456 789"} />
        <IconText icon={"icon-email.svg"} text={"remax@gmail.com"} />
      </div>
    </div>
  );
};

export default TopNavbar;
