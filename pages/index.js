import { useRouter } from "next/router";
import Link from "next/link";
import { getFeaturedEvents } from "./dummydata";
import EventList from "../components/events/EventList";

export default function Home() {
  const router = useRouter();
  console.log(router.query);

  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <ul>
        <EventList items={featuredEvents} />
      </ul>
    </div>
  );
}
