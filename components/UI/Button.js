import Link from "next/link";
import React from "react";

const Button = (props) => {
  if (props.link)
    return (
      <Link href={props.link}>
        <a>{props.children}</a>
      </Link>
    );

  return (
    <button
      onClick={props.onClick}
      className="no-underline cursor-pointer bg-[#03be9f] border-solid border-2 border-[#03be9f] rounded-[6px] text-[#dafff7] py-2 px-6 drop-shadow-md hover:active:bg-[#02afa1] hover:active:border-[#02afa1]"
    >
      {props.children}
    </button>
  );
};

export default Button;
