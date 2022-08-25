import React from "react";
import Image from "next/image";

import styles from "./EventItem.module.css";
import Button from "../UI/Button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

const EventItem = (props) => {
  const readableDate = new Date(props.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = props.location.replace(", ", "\n");
  const link = `/events/${props.id}`;

  return (
    <li className="shadow rounded-lg overflow-hidden bg-white m-4 flex flex-col gap-4 md:flex-col">
      <img
        src={`/` + props.image}
        alt={props.title}
        className="w-full object-cover h-40 md:w-[40%] md:h-64"
      />
      <div className="w-full py-0 px-4 text-center md:w-[40%] md:p-0 md:text-center">
        <div className={styles.summary}>
          <h2 className="my-2 mx-0 md:my-4 md:mx-0">{props.title}</h2>
          <div className="flex gap-2 items-center">
            <div className="w-5 h-5 text-[#666666]">
              <DateIcon></DateIcon>
            </div>
            <time className="text-[#666666] font-bold">{readableDate}</time>
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-5 h-5 text-[#666666]">
              <AddressIcon />
            </div>
            <address className="my-2 mx-0 text-[#666666] whitespace-pre">
              {formattedAddress}
            </address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={link}>
            <span>Know More...</span>
            <span className="ml-2 inline-flex justify-center items-center">
              <div className="w-5 h-5">
                <ArrowRightIcon />
              </div>
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
