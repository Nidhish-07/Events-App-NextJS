import { useRouter } from "next/router";
import { Fragment } from "react";
import { getEventById } from "../dummydata";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import ErrorAlert from "../../components/error-alert/error-alert";
import Button from "../../components/UI/Button";

export default function Event() {
  const router = useRouter();
  const eventId = router.query.id;
  const event = getEventById(eventId);
  if (!event) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Event not found</p>
        </ErrorAlert>
        <Button link="/events">Show All Events</Button>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <EventSummary title={event.title}></EventSummary>
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      ></EventLogistics>
      <EventContent>{event.description}</EventContent>
    </Fragment>
  );
}
