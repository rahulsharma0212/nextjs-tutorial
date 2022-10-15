import { useRouter } from "next/router";
import { getAllEvents } from "../../helper/api-util";
import Head from "next/head";
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
      <Head>
        <title>All Events </title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve.."
        />
      </Head>
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
