import { useState } from "react";
import EventCard from "./EventCard";
import EventDetailsModal from "./EventDetailsModal";
import { useCreateBookingMutation } from "../../services/bookingApi";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

const Events = ({ events, refetch }) => {
  const [selectedEvent, setSelectedEvent] = useState();
  // hooks
  const [createBooking, { isLoading }] = useCreateBookingMutation();
  const user = useSelector((state) => state.auth.user);

  const handleJoin = async (event) => {
    try {
      const payload = {
        userId: user._id,
        eventId: event._id,
      };
      await createBooking(payload).unwrap();
      refetch();
      toast.success("Join Successfully");
    } catch (err) {
      console.error(err);
      toast.error("Failed to Join");
    }
  };

  const handleViewDetails = (event) => {
    setSelectedEvent(event);
    document.getElementById("event_details_modal").showModal();
  };

  return (
    <div className="flex flex-col gap-5">
      <EventDetailsModal event={selectedEvent} />

      {events.map((event, i) => {
        return (
          <EventCard
            event={event}
            key={event.title + i}
            handleViewDetails={() => handleViewDetails(event)}
            handleJoin={() => handleJoin(event)}
          />
        );
      })}
    </div>
  );
};

export default Events;
