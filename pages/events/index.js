import { useRouter } from "next/router";
import { getAllEvents } from "../../helper/api-util";
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";

function AllEventsPage(props) {
  const router = useRouter();
  const { events } = props;

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      events: events,
      revalidate: 60,
    },
  };
}
export default AllEventsPage;
