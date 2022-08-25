import React from "react";
import EventItem from "./EventItem";

const EventList = (props) => {
  return (
    <ul className="w-[90%] max-w-2xl my-20 mx-auto ">
      {props.items.map((item) => {
        return (
          <EventItem
            key={item.id}
            id={item.id}
            title={item.title}
            location={item.location}
            date={item.date}
            image={item.image}
          ></EventItem>
        );
      })}
    </ul>
  );
};

export default EventList;
