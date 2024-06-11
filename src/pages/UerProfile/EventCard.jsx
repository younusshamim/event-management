import PrimaryBtn from "../../components/PrimaryBtn";
import getEventDateTimeData from "../../utils/getEventDateTimeData";
import EventDetailsModal from "./EventDetailsModal";

const EventCard = ({ event, handleViewDetails, handleJoin }) => {
  const { startTime, endTime, meetingTime, day, month } = getEventDateTimeData(
    event.start,
    event.end
  );

  return (
    <div className="p-5 flex gap-12 justify-between bg-white rounded-md hover:bg-primary-lighter  transition-all">
      <div className="text-center text-primary bg-primary-lighter px-5 h-20 rounded-lg">
        <p className="text-3xl font-semibold">{day}</p>
        <p>{month}</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold  mb-1">{event.title}</h2>
        <p className="text-gray-600 leading-5 mb-3">{event.description}</p>
        <div className="text-sm flex text-gray-800 gap-3">
          <p>Location: {event.location}</p>
          <span>.</span>
          <p>
            {startTime} - {endTime}
          </p>
          <span>.</span>
          <p>Duration: {meetingTime}</p>
        </div>

        {/* <hr className="my-5" />

        <p className="mb-1 uppercase text-[12px] font-semibold">
          Peoples who join the event
        </p>
        <div className="flex gap-1">
          <Avatar name="John Doe" initials="YS" size="sm" />
          <Avatar name="John Doe" initials="YS" size="sm" />
          <Avatar name="John Doe" initials="YS" size="sm" />
          <Avatar name="John Doe" initials="YS" size="sm" />
          <Avatar name="John Doe" initials="YS" size="sm" />
        </div> */}
      </div>

      <div className="w-40 flex flex-col gap-2">
        <PrimaryBtn className="btn-sm w-full" onClick={handleJoin}>
          Join Event
          {/*  {isConfirmed ? 'Confirmed' : 'RSVP'} */}
        </PrimaryBtn>

        <PrimaryBtn
          className="btn-sm btn-outline w-full"
          onClick={handleViewDetails}
        >
          View Details
        </PrimaryBtn>
      </div>
    </div>
  );
};

export default EventCard;
