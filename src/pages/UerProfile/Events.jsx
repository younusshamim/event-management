import { useState } from "react";
import eventsData from "../../data/events-data";
import EventCard from "./EventCard";
import EventDetailsModal from "./EventDetailsModal";

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState();

  const handleJoin = () => {};

  const handleViewDetails = (event) => {
    setSelectedEvent(event);
    document.getElementById("event_details_modal").showModal();
  };

  return (
    <div className="flex flex-col gap-5">
      <EventDetailsModal event={selectedEvent} />

      {eventsData.map((event, i) => {
        return (
          <EventCard
            event={event}
            key={event.title + i}
            handleViewDetails={() => handleViewDetails(event)}
            handleJoin={handleJoin}
          />
        );
      })}
    </div>
  );
};

export default Events;
