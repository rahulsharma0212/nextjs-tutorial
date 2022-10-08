import { getEventById, getAllEvents } from "../../helper/api-util";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
function EventDetailPage(props) {
  const event = props.event;

  if (!event) {
    return (
      <div>
        <p>Loading ... </p>
      </div>
    );
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

export async function getStaticProps(context) {
  const eventId = context.params.eventid;
  const eventData = await getEventById(eventId);
  if (!eventData) return { notFound: true };
  return {
    props: {
      event: eventData,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await getAllEvents();

  const paths = events.map((el) => ({ params: { eventid: el.id } }));
  return {
    paths: paths,
    fallback: "blocking",
  };
}
export default EventDetailPage;
