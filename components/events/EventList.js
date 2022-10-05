import EventItem from "./EventItem";
function EventList(props) {
  const { items } = props;
  return (
    <ul>
      {items.map((events) => (
        <EventItem />
      ))}
    </ul>
  );
}

export default EventList;
