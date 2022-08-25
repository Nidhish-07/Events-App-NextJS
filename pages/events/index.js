import { Fragment } from "react";
import EventSearch from "../../components/event-detail/event-search";
import EventList from "../../components/events/EventList";
import { getAllEvents } from "../dummydata";
import {useRouter} from 'next/router'

export default function Events() {
  const events = getAllEvents();
  const router = useRouter();
  const searchEventHandler = (year, month) => {
    const path = `events/${year}/${month}`;

    router.push(path);
  };
  return (
    <Fragment>
      <EventSearch onSearch={searchEventHandler}></EventSearch>
      <EventList items={events}></EventList>
    </Fragment>
  );
}
