import Link from "next/link";
import React from "react";
import Image from "next/image";

const EventItem = (props) => {
  const readableDate = new Date(props.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = props.address.replace(", ", "\n");
  const link = `/events/${props.id}`;

  return (
    <li>
      <Image src={`/` + props.image} alt={title} />
      <div>
        <div>
          <h2>{props.title}</h2>
          <div>
            <time>{readableDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={link}>Know More...</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
