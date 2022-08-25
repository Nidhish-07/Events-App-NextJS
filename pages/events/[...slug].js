import { useRouter } from "next/router";
import { Fragment } from "react";
import ErrorAlert from "../../components/error-alert/error-alert";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/UI/Button";
import { getFilteredEvents } from "../dummydata";

export default function FilteredEventPage() {
  const router = useRouter();

  const data = router.query.slug;
  console.log(data);

  if (!data) {
    return <p className="m-auto text-center">Loading...</p>;
  }

  const year = +data[0];
  const month = +data[1];
  console.log(year, month);

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2020 ||
    month > 12 ||
    month < 1
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid</p>
        </ErrorAlert>
        <Button link="/events">Show All Events</Button>
      </Fragment>
    );
  }

  const filteredData = getFilteredEvents({ year, month });

  if (!filteredData || filteredData.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found</p>
        </ErrorAlert>
        <Button link="/events">Show All Events</Button>
      </Fragment>
    );
  }

  const date = new Date(year, month - 1);
  return (
    <Fragment>
      <ResultsTitle date={date}></ResultsTitle>
      <EventList items={filteredData}></EventList>
    </Fragment>
  );
}
